using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TCPClientConnection
{
    public partial class fWindow : Form
    {
        public fWindow()
        {
            InitializeComponent();
        }

        private TcpClient client = null;
        private BinaryReader reading = null;
        private BinaryWriter writing = null;
        private bool activeCall = false;

        private void Connect_Click(object sender, EventArgs e)
        {
            bwConnection.RunWorkerAsync();
            //bwConnection.WorkerSupportsCancellation = true;
            lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("Łączenie..."); }));
            lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.SelectedIndex = lbMessage.Items.Count - 1; }));
            Console.WriteLine(bwConnection.IsBusy);
        }
        private void Close_Click(object sender, EventArgs e)
        {
            try
            {
                bwConnection.CancelAsync();
                BackgroundWorker2.CancelAsync();
                writing.Write("END");

                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("Rozłączono z serwerem"); }));
                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.SelectedIndex = lbMessage.Items.Count - 1; }));
                Close.Enabled = false;
                Connect.Enabled = true;
                bSend.Enabled = false;
                client.Close();
                Console.WriteLine(bwConnection.IsBusy);
            }
            catch
            {

            }
        }

        private void bwConnection_DoWork(object sender, DoWorkEventArgs e)
        {
                string host = tbHostAddress.Text;
                int port = Convert.ToInt16(nUDPort.Value);
                try
                {
                client = new TcpClient(tbHostAddress.Text, (int)nUDPort.Value);
                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("Nawiązano połączenie z serwerem"); }));
                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.SelectedIndex = lbMessage.Items.Count - 1; }));
                NetworkStream ns = client.GetStream();
                reading = new BinaryReader(ns);
                writing = new BinaryWriter(ns);
                writing.Write("password");
                activeCall = true;
                BackgroundWorker2.RunWorkerAsync();

                Close.Invoke(new MethodInvoker(delegate { Close.Enabled = true; }));
                Connect.Invoke(new MethodInvoker(delegate { Connect.Enabled = false; }));
                bSend.Invoke(new MethodInvoker(delegate { bSend.Enabled = true; }));


                }
                catch (FormatException ex)
                {

                    MessageBox.Show(ex.ToString());
                }
                catch (SocketException ex)
                {
                    lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("Błąd: Nie udało nawiązać połączenia"); }));
                    lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.SelectedIndex = lbMessage.Items.Count - 1; }));
                    MessageBox.Show("Nie można nawiązać połączenia z serwerem o tym adresie");
                }
        }
        private void BackgroundWorker2_DoWork(object sender, DoWorkEventArgs e)
            {
               string messageRecived;
            try
            {
                while ((messageRecived = reading.ReadString()) != "END")
                {
                    if (BackgroundWorker2.CancellationPending)
                    {
                        break;
                    }
                    lbChat.Invoke(new MethodInvoker(delegate { lbChat.Items.Add("SERWER: " + messageRecived); }));
                }
                client.Close();
                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("Serwer rozłączył połączenie"); }));
                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.SelectedIndex = lbMessage.Items.Count - 1; }));
                Close.Invoke(new MethodInvoker(delegate { Close.Enabled = false; }));
                Connect.Invoke(new MethodInvoker(delegate { Connect.Enabled = true; }));
                bSend.Invoke(new MethodInvoker(delegate { bSend.Enabled = false; }));

            }
            catch
            {

            }
            }

        private void bSend_Click(object sender, EventArgs e)
        {
            try
            {
                
                string messageSent = tMessage.Text;
                lbChat.Items.Add("KLIENT: " + messageSent);
                writing.Write(messageSent);
                tMessage.Text = "";
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
            colorDialog.Color = lbChat.ForeColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
                lbChat.ForeColor = colorDialog.Color;
                tMessage.ForeColor = colorDialog.Color;
                tbHostAddress.ForeColor = colorDialog.Color;
                nUDPort.ForeColor = colorDialog.Color;
                lbMessage.ForeColor = colorDialog.Color;
                bSend.ForeColor = colorDialog.Color;
                bBgColor.ForeColor = colorDialog.Color;
                bColor.ForeColor = colorDialog.Color;
                wColor.ForeColor = colorDialog.Color;
                buttonColor.ForeColor = colorDialog.Color;
                Connect.ForeColor = colorDialog.Color;
                Close.ForeColor = colorDialog.Color;
                Font.ForeColor = colorDialog.Color;
                Address.ForeColor = colorDialog.Color;
                Port.ForeColor = colorDialog.Color;
                gbSettings.ForeColor = colorDialog.Color;
        }

        private void bBgColor_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog2 = new ColorDialog();
            colorDialog2.AllowFullOpen = true;
            colorDialog2.ShowHelp = true;
            colorDialog2.Color = lbChat.BackColor;
            if (colorDialog2.ShowDialog() == DialogResult.OK)
                lbChat.BackColor = colorDialog2.Color;
                tMessage.BackColor = colorDialog2.Color;
                tbHostAddress.BackColor = colorDialog2.Color;
                nUDPort.BackColor = colorDialog2.Color;
                lbMessage.BackColor = colorDialog2.Color;
        }

        private void wColor_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog3 = new ColorDialog();
            colorDialog3.AllowFullOpen = true;
            colorDialog3.ShowHelp = true;
            if (colorDialog3.ShowDialog() == DialogResult.OK)
                this.BackColor = colorDialog3.Color;
        }

        private void buttonColor_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog4 = new ColorDialog();
            colorDialog4.AllowFullOpen = true;
            colorDialog4.ShowHelp = true;
            if (colorDialog4.ShowDialog() == DialogResult.OK)
                bSend.BackColor = colorDialog4.Color;
                bBgColor.BackColor = colorDialog4.Color;
                bColor.BackColor = colorDialog4.Color;
                wColor.BackColor = colorDialog4.Color;
                buttonColor.BackColor = colorDialog4.Color;
                Connect.BackColor = colorDialog4.Color;
                Close.BackColor = colorDialog4.Color;
                Font.BackColor = colorDialog4.Color;
        }

        private void fWindow_Load(object sender, EventArgs e)
        {
            this.BackColor = Properties.Settings.Default.window;
            lbMessage.ForeColor = Properties.Settings.Default.text;
            tbHostAddress.ForeColor = Properties.Settings.Default.text;
            nUDPort.ForeColor = Properties.Settings.Default.text;
            lbChat.ForeColor = Properties.Settings.Default.text;
            tMessage.ForeColor = Properties.Settings.Default.text;
            bSend.ForeColor = Properties.Settings.Default.text;
            bBgColor.ForeColor = Properties.Settings.Default.text;
            bColor.ForeColor = Properties.Settings.Default.text;
            wColor.ForeColor = Properties.Settings.Default.text;
            buttonColor.ForeColor = Properties.Settings.Default.text;
            Connect.ForeColor = Properties.Settings.Default.text;
            Close.ForeColor = Properties.Settings.Default.text;
            Font.ForeColor = Properties.Settings.Default.text;
            Address.ForeColor = Properties.Settings.Default.text;
            Port.ForeColor = Properties.Settings.Default.text;
            gbSettings.ForeColor = Properties.Settings.Default.text;
            lbMessage.BackColor = Properties.Settings.Default.background;
            tbHostAddress.BackColor = Properties.Settings.Default.background;
            nUDPort.BackColor = Properties.Settings.Default.background;
            lbChat.BackColor = Properties.Settings.Default.background;
            tMessage.BackColor = Properties.Settings.Default.background;
            bSend.BackColor = Properties.Settings.Default.buttons;
            bBgColor.BackColor = Properties.Settings.Default.buttons;
            bColor.BackColor = Properties.Settings.Default.buttons;
            wColor.BackColor = Properties.Settings.Default.buttons;
            buttonColor.BackColor = Properties.Settings.Default.buttons;
            Connect.BackColor = Properties.Settings.Default.buttons;
            Close.BackColor = Properties.Settings.Default.buttons;
            Font.BackColor = Properties.Settings.Default.buttons;
            lbChat.Font = Properties.Settings.Default.font;
            tMessage.Font = Properties.Settings.Default.font;
            lbMessage.Font = Properties.Settings.Default.font;
            tbHostAddress.Font = Properties.Settings.Default.font;
            nUDPort.Font = Properties.Settings.Default.font;
            bSend.Font = Properties.Settings.Default.font;
            bBgColor.Font = Properties.Settings.Default.font;
            bColor.Font = Properties.Settings.Default.font;
            wColor.Font = Properties.Settings.Default.font;
            buttonColor.Font = Properties.Settings.Default.font;
            Connect.Font = Properties.Settings.Default.font;
            Close.Font = Properties.Settings.Default.font;
            Font.Font = Properties.Settings.Default.font;
            Address.Font = Properties.Settings.Default.font;
            Port.Font = Properties.Settings.Default.font;
            gbSettings.Font = Properties.Settings.Default.font;
        }

        private void fWindow_close(object sender, FormClosingEventArgs e)
        {
            Properties.Settings.Default.window = this.BackColor;
            Properties.Settings.Default.background = tMessage.BackColor;
            Properties.Settings.Default.text = tMessage.ForeColor;
            Properties.Settings.Default.buttons = buttonColor.BackColor;
            Properties.Settings.Default.font = lbChat.Font;
            Properties.Settings.Default.Save();
            
        }

        private void Font_Click(object sender, EventArgs e)
        {
            fontDialog.Font = lbChat.Font;
            if (fontDialog.ShowDialog() != DialogResult.Cancel)
            {
                lbChat.Font = fontDialog.Font;
                tMessage.Font = fontDialog.Font;
                lbMessage.Font = fontDialog.Font;
                tbHostAddress.Font = fontDialog.Font;
                nUDPort.Font = fontDialog.Font;
                bSend.Font = fontDialog.Font;
                bBgColor.Font = fontDialog.Font;
                bColor.Font = fontDialog.Font;
                wColor.Font = fontDialog.Font;
                buttonColor.Font = fontDialog.Font;
                Connect.Font = fontDialog.Font;
                Close.Font = fontDialog.Font;
                Font.Font = fontDialog.Font;
                Address.Font = fontDialog.Font;
                Port.Font = fontDialog.Font;
                gbSettings.Font = fontDialog.Font;
            }
        }
    }
}
