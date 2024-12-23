using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PolaczenieTCPServer
{
    public partial class fWindow : Form
    {
        private TcpListener server = null;
        private TcpClient client = null;
        private BinaryReader reading = null;
        private BinaryWriter writing = null;
        private bool activeCall = false;

        public static string GetLocalIPAddress()
        {
            var host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (var ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return ip.ToString();
                }
            }
            throw new Exception("No network adapters with an IPv4 address in the system!");
        }

        public fWindow()
        {
            InitializeComponent();
            tbAddress.Text = GetLocalIPAddress();
        }

        private void bStart_Click(object sender, EventArgs e)
        {
            
                lbLog.Items.Add("Oczekiwanie na połączenie...");
                lbLog.SelectedIndex = lbLog.Items.Count - 1;
                bwConnection.RunWorkerAsync();
                Console.WriteLine(bwMessage.IsBusy);

        }

        private void bStop_Click(object sender, EventArgs e)
        {
            if (!bwMessage.CancellationPending)
            {
                try
                {
                    
                }
                catch(Exception ex)
                {
                    MessageBox.Show(ex.ToString(), "Błąd");
                }
            }
            if (client != null)
            {
                writing.Write("END");
                bwMessage.CancelAsync();
                client.Close();
            }
            
            server.Stop();
            bwConnection.CancelAsync();
            
            lbLog.Items.Add("Zakończono pracę serwera...");
            lbLog.SelectedIndex = lbLog.Items.Count - 1;
            bStart.Enabled = true;
            bStop.Enabled = false;
            bSend.Enabled = false;
            Console.WriteLine(bwMessage.IsBusy);
        }

        private void bwConnection_DoWork(object sender, DoWorkEventArgs e)
        {
            
            
                IPAddress adresIP = null;

                try
                {
                    adresIP = IPAddress.Parse(tbAddress.Text);
                }
                catch
                {
                    MessageBox.Show("Błędny format adresu IP!", "Błąd");
                    tbAddress.Invoke(new MethodInvoker(delegate { tbAddress.Text = String.Empty; }));
                    bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = true; }));
                    bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = false; }));
                    bSend.Invoke(new MethodInvoker(delegate { bSend.Enabled = false; }));
                    return;
                }

                int port = System.Convert.ToInt16(nudPort.Value);

                try
                {
                    if (bwConnection.CancellationPending)
                    {
                        bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = true; }));
                        bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = false; }));
                        tbMessage.Invoke(new MethodInvoker(delegate { tbMessage.Enabled = false; }));
                        return;
                    }
                    bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = false; }));
                    bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = true; }));
                    server = new TcpListener(adresIP, port);
                    server.Start();
                    client = server.AcceptTcpClient();
                    IPEndPoint IP = (IPEndPoint)client.Client.RemoteEndPoint;
                    lbLog.Invoke(new MethodInvoker(delegate { lbLog.Items.Add("[" + IP.ToString() + "] : Nawiązano połączenie"); }));
                    lbLog.Invoke(new MethodInvoker(delegate { lbLog.SelectedIndex = lbLog.Items.Count - 1; }));
                    NetworkStream ns = client.GetStream();
                    reading = new BinaryReader(ns);
                    writing = new BinaryWriter(ns);
                    //bSend.Invoke(new MethodInvoker(delegate { bSend.Enabled = true; }));
                    if (reading.ReadString() == "password")
                    {
                        bwMessage.RunWorkerAsync();
                        bSend.Invoke(new MethodInvoker(delegate { bSend.Enabled = true; }));
                        tbMessage.Invoke(new MethodInvoker(delegate { tbMessage.Enabled = true; }));
                        activeCall = true;
                    }
                    else
                    {
                        bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = true; }));
                        bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = false; }));
                        client.Close();
                        server.Stop();
                        activeCall = false;
                    }  
                    //bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = false; }));
                    //bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = true; }));
              
                }
                catch (Exception ex)
                {
                    
                    //lbLog.Invoke(new MethodInvoker(delegate { lbLog.Items.Add("Błąd inicjacji serwera!"); }));
                    //MessageBox.Show(ex.ToString(), "Błąd");
                    activeCall = false;
                }
            
            
        }
        private void bwMessage_DoWork(object sender, DoWorkEventArgs e)
        {
            
            string messageRecieved;
            try
            {
                while ((messageRecieved = reading.ReadString()) != "END")
                {
                    lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("KLIENT: " + messageRecieved); }));
                    /* (bwMessage.CancellationPending)
                    {
                        return;
                    }
                    if (bwConnection.CancellationPending)
                    {
                        bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = true; }));
                        bStart.Invoke(new MethodInvoker(delegate { bStop.Enabled = false; }));
                        return;
                    }*/
                }
                /*if ((messageRecieved = reading.ReadString()) == "END")
                {*/
                    //nie działa szwastu
                //bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = true; }));
                //bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = false; }));
                client.Close();
                server.Stop();
                client = null;
                lbLog.Invoke(new MethodInvoker(delegate { lbLog.Items.Add("Klient rozłączył się"); }));
                lbLog.Invoke(new MethodInvoker(delegate { lbLog.SelectedIndex = lbLog.Items.Count - 1; }));
                bwConnection.RunWorkerAsync();
                //}
            }
            catch(Exception ex)
            {
                //MessageBox.Show(ex.ToString(), "Błąd");
                bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = true; }));
                bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = false; }));
                client.Close();
                server.Stop();
                client = null;
                /*if((messageRecieved = reading.ReadString()) == "END")
                {
                    MessageBox.Show("aaaaaaaaaaaa");
                }
                bwMessage.CancelAsync();*/
            }
            
        }
        private void bSend_Click(object sender, EventArgs e)
        {
            try
            {
                string messageSent = tbMessage.Text;
                lbMessage.Items.Add("SERWER: " + tbMessage.Text);
                writing.Write(messageSent);
                tbMessage.Text = "";
            }
            catch
            {

            }
        }

        private void bColor_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.AllowFullOpen = true;
            colorDialog.ShowHelp = true;
            colorDialog.Color = lbMessage.ForeColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
                lbMessage.ForeColor = colorDialog.Color;
                tbAddress.ForeColor = colorDialog.Color;
                nudPort.ForeColor = colorDialog.Color;
                lbLog.ForeColor = colorDialog.Color;
                tbMessage.ForeColor = colorDialog.Color;
                bSend.ForeColor = colorDialog.Color;
                btBgColor.ForeColor = colorDialog.Color;
                btColor.ForeColor = colorDialog.Color;
                btFormBackground.ForeColor = colorDialog.Color;
                btBtColor.ForeColor = colorDialog.Color;
                bStart.ForeColor = colorDialog.Color;
                bStop.ForeColor = colorDialog.Color;
                Font.ForeColor = colorDialog.Color;
                lAddress.ForeColor = colorDialog.Color;
                lPort.ForeColor = colorDialog.Color;
                gbSettings.ForeColor = colorDialog.Color;

        }

        private void bBgColor_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog2 = new ColorDialog();
            colorDialog2.AllowFullOpen = true;
            colorDialog2.ShowHelp = true;
            colorDialog2.Color = lbMessage.BackColor;
            if (colorDialog2.ShowDialog() == DialogResult.OK)
                lbMessage.BackColor = colorDialog2.Color;
                tbAddress.BackColor = colorDialog2.Color;
                nudPort.BackColor = colorDialog2.Color;
                lbLog.BackColor = colorDialog2.Color;
                tbMessage.BackColor = colorDialog2.Color;
        }

        private void btFormBackground_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog3 = new ColorDialog();
            colorDialog3.AllowFullOpen = true;
            colorDialog3.ShowHelp = true;
            if (colorDialog3.ShowDialog() == DialogResult.OK)
                this.BackColor = colorDialog3.Color;
        }

        private void btBtColor_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog4 = new ColorDialog();
            colorDialog4.AllowFullOpen = true;
            colorDialog4.ShowHelp = true;
            if (colorDialog4.ShowDialog() == DialogResult.OK)
                bSend.BackColor = colorDialog4.Color;
                btBgColor.BackColor = colorDialog4.Color;
                btColor.BackColor = colorDialog4.Color;
                btFormBackground.BackColor = colorDialog4.Color;
                btBtColor.BackColor = colorDialog4.Color;
                bStart.BackColor = colorDialog4.Color;
                bStop.BackColor = colorDialog4.Color;
                Font.BackColor = colorDialog4.Color;
        }

        private void fWindow_Load(object sender, EventArgs e)
        {
            this.BackColor = Properties.Settings.Default.window;
            lbMessage.ForeColor = Properties.Settings.Default.text;
            tbAddress.ForeColor = Properties.Settings.Default.text;
            nudPort.ForeColor = Properties.Settings.Default.text;
            lbLog.ForeColor = Properties.Settings.Default.text;
            tbMessage.ForeColor = Properties.Settings.Default.text;
            bSend.ForeColor = Properties.Settings.Default.text;
            btBgColor.ForeColor = Properties.Settings.Default.text;
            btColor.ForeColor = Properties.Settings.Default.text;
            btFormBackground.ForeColor = Properties.Settings.Default.text;
            btBtColor.ForeColor = Properties.Settings.Default.text;
            bStart.ForeColor = Properties.Settings.Default.text;
            bStop.ForeColor = Properties.Settings.Default.text;
            Font.ForeColor = Properties.Settings.Default.text;
            lAddress.ForeColor = Properties.Settings.Default.text;
            lPort.ForeColor = Properties.Settings.Default.text;
            gbSettings.ForeColor = Properties.Settings.Default.text;
            lbMessage.BackColor = Properties.Settings.Default.background;
            tbAddress.BackColor = Properties.Settings.Default.background;
            nudPort.BackColor = Properties.Settings.Default.background;
            lbLog.BackColor = Properties.Settings.Default.background;
            tbMessage.BackColor = Properties.Settings.Default.background;
            bSend.BackColor = Properties.Settings.Default.buttons;
            btBgColor.BackColor = Properties.Settings.Default.buttons;
            btColor.BackColor = Properties.Settings.Default.buttons;
            btFormBackground.BackColor = Properties.Settings.Default.buttons;
            btBtColor.BackColor = Properties.Settings.Default.buttons;
            bStart.BackColor = Properties.Settings.Default.buttons;
            bStop.BackColor = Properties.Settings.Default.buttons;
            Font.BackColor = Properties.Settings.Default.buttons;
            lbMessage.Font = Properties.Settings.Default.font;
            tbMessage.Font = Properties.Settings.Default.font;
            tbAddress.Font = Properties.Settings.Default.font;
            nudPort.Font = Properties.Settings.Default.font;
            lbLog.Font = Properties.Settings.Default.font;
            bSend.Font = Properties.Settings.Default.font;
            btBgColor.Font = Properties.Settings.Default.font;
            btColor.Font = Properties.Settings.Default.font;
            btFormBackground.Font = Properties.Settings.Default.font;
            btBtColor.Font = Properties.Settings.Default.font;
            bStart.Font = Properties.Settings.Default.font;
            bStop.Font = Properties.Settings.Default.font;
            Font.Font = Properties.Settings.Default.font;
            lAddress.Font = Properties.Settings.Default.font;
            lPort.Font = Properties.Settings.Default.font;
            gbSettings.Font = Properties.Settings.Default.font;

        }

        private void fWindow_close(object sender, FormClosingEventArgs e)
        {
            Properties.Settings.Default.window = this.BackColor;
            Properties.Settings.Default.background = tbMessage.BackColor;
            Properties.Settings.Default.text = tbMessage.ForeColor;
            Properties.Settings.Default.buttons = btBtColor.BackColor;
            Properties.Settings.Default.font = lbMessage.Font;
            Properties.Settings.Default.Save();
        }

        private void Font_Click(object sender, EventArgs e)
        {
            fontDialog.Font = lbMessage.Font;
            if (fontDialog.ShowDialog() != DialogResult.Cancel)
            {
                lbMessage.Font = fontDialog.Font;
                tbMessage.Font = fontDialog.Font;
                tbAddress.Font = fontDialog.Font;
                nudPort.Font = fontDialog.Font;
                lbLog.Font = fontDialog.Font;
                bSend.Font = fontDialog.Font;
                btBgColor.Font = fontDialog.Font;
                btColor.Font = fontDialog.Font;
                btFormBackground.Font = fontDialog.Font;
                btBtColor.Font = fontDialog.Font;
                bStart.Font = fontDialog.Font;
                bStop.Font = fontDialog.Font;
                Font.Font = fontDialog.Font;
                lAddress.Font = fontDialog.Font;
                lPort.Font = fontDialog.Font;
                gbSettings.Font = fontDialog.Font;
            }
        }
    }
}
