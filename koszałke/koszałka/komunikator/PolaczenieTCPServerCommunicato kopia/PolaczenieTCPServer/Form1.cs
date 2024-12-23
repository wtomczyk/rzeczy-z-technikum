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

        public fWindow()
        {
            InitializeComponent();
        }

        private void bStart_Click(object sender, EventArgs e)
        {
            if (bwConnection.IsBusy)
            {
                lbLog.Items.Add("Zajęty");
            }
            else
            {

                lbLog.Items.Add("Oczekiwanie na połączenie...");
                bwConnection.RunWorkerAsync();
                bStart.Enabled = false;
                bStop.Enabled = true;
            }
            

        }

        private void bStop_Click(object sender, EventArgs e)
        {
           
            server.Stop();
            bwConnection.CancelAsync();
            bwMessage.CancelAsync();
            lbLog.Items.Add("Zakończono pracę serwera...");
            bStart.Enabled = true;
            bStop.Enabled = false;
        }

        private void bSend_Click(object sender, EventArgs e)
        {
            string messageSent = tbMessage.Text;
            lbMessage.Items.Add(messageSent);
            writing.Write(messageSent);
        }

        private void bwConnection_DoWork(object sender, DoWorkEventArgs e)
        {
            if(bwConnection.CancellationPending)
            {
                client.Close();
                server.Stop();
                e.Cancel = true;
            }
            else{
                IPAddress adresIP = null;

                try
                {
                    adresIP = IPAddress.Parse(tbAddress.Text);
                }
                catch
                {
                    MessageBox.Show("Błędny format adresu IP!", "Błąd");
                    tbAddress.Invoke(new MethodInvoker(delegate { tbAddress.Text = String.Empty; }));
                    return;
                }

                int port = System.Convert.ToInt16(nudPort.Value);

                try
                {
                    server = new TcpListener(adresIP, port);
                    try
                    {
                        server.Start();
                        
                        client = server.AcceptTcpClient();
                        NetworkStream ns = client.GetStream();
                        reading = new BinaryReader(ns);
                        writing = new BinaryWriter(ns);
                        bSend.Invoke(new MethodInvoker(delegate { bSend.Enabled = true; }));
                        if (reading.ReadString() == "password")
                        {
                            bwMessage.RunWorkerAsync();
                            activeCall = true;
                        }
                        else
                        {
                            client.Close();
                            server.Stop();
                            activeCall = false;
                        }
                    }
                    catch
                    {
                        activeCall = false;
                    }
                    
                    IPEndPoint IP = (IPEndPoint)client.Client.RemoteEndPoint;
                
                    lbLog.Invoke(new MethodInvoker(delegate { lbLog.Items.Add("[" + IP.ToString() + "] : Nawiązano połączenie"); }));
                    bStart.Invoke(new MethodInvoker(delegate { bStart.Enabled = false; }));
                    bStop.Invoke(new MethodInvoker(delegate { bStop.Enabled = true; }));
                    bwConnection.CancelAsync();
                    client.Close();
                    server.Stop();
                }
                catch (Exception ex)
                {
                    
                    lbLog.Invoke(new MethodInvoker(delegate { lbLog.Items.Add("Błąd inicjacji serwera!"); }));
                    MessageBox.Show(ex.ToString(), "Błąd");
                }
            }
            
        }
        private void bwMessage_doWork(object sender, DoWorkEventArgs e)
        {
            string messageRecieved;
            while ((messageRecieved = reading.ReadString()) != "END")
            {
                lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add(messageRecieved); }));
                if (bwMessage.CancellationPending)
                {
                    break;
                }
                
            }
            
            client.Close();
            server.Stop();

            string messageSent = tbMessage.Text;
            writing.Write(messageSent);
        }

        
    }
}
