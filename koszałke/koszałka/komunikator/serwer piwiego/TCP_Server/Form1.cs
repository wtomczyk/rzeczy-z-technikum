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

namespace serverTcp
{
    public partial class fWindow : Form
    {
        private TcpListener server;
        private TcpClient client;
        private BinaryReader reading;
        private BinaryWriter writing;
        private bool activeCall = false;

        public fWindow()
        {
            InitializeComponent();
            tbIP.Text = GetLocalIPAddress();
        }

        private void btStart_Click(object sender, EventArgs e)
        {
            bwConnection.RunWorkerAsync();
            btStart.Enabled = false;
            btStop.Enabled = true;
            btCancelClient.Enabled = true;
        }


        private void btStop_Click(object sender, EventArgs e)
        {
            if (!chatConnection.CancellationPending)
            {
                writing.Write("END");
                chatConnection.CancelAsync();
                client.Close();
            }
            bwConnection.CancelAsync();
            lbServer.Items.Add("Zakończono pracę servera ...");

            btStart.Enabled = true;
            btStop.Enabled = false;
            btCancelClient.Enabled = false;
        }


        private void bwConnection_DoWork(object sender, DoWorkEventArgs e)
        {

            IPAddress adresIP = null;

            try
            {
                adresIP = IPAddress.Parse(tbIP.Text);
            }
            catch
            {
                MessageBox.Show("Błędny format adresu IP", "Błąd");
                tbIP.Invoke(new MethodInvoker(delegate { tbIP.Text = String.Empty; }));
                return;
            }

            int port = System.Convert.ToInt16(numUDPort.Value);

            try
            {
                if (bwConnection.CancellationPending)
                {
                    btStart.Invoke(new MethodInvoker(delegate { btStart.Enabled = true; }));
                    btStart.Invoke(new MethodInvoker(delegate { btStop.Enabled = false; }));
                    chatInput.Invoke(new MethodInvoker(delegate { btCancelClient.Enabled = false; }));
                    return;
                }
                server = new TcpListener(adresIP, port);
                server.Start();
                client = server.AcceptTcpClient();
                IPEndPoint IP = (IPEndPoint)client.Client.RemoteEndPoint;
                lbServer.Invoke(new MethodInvoker(delegate { lbServer.Items.Add("[" + IP.ToString() + "] :Nawiązano połączenie"); }));
                NetworkStream ns = client.GetStream();
                reading = new BinaryReader(ns);
                writing = new BinaryWriter(ns);
                if (reading.ReadString() == "password")
                {
                    chatConnection.RunWorkerAsync();
                    chatEnter.Invoke(new MethodInvoker(delegate { chatEnter.Enabled = true; }));
                    chatInput.Invoke(new MethodInvoker(delegate { chatInput.Enabled = true; }));
                    activeCall = true;
                }
                else
                {
                    btStart.Invoke(new MethodInvoker(delegate { btStart.Enabled = true; }));
                    btStart.Invoke(new MethodInvoker(delegate { btStop.Enabled = false; }));
                    client.Close();
                    server.Stop();
                    activeCall = false;
                }
            }
            catch (Exception ex)
            {
                lbServer.Invoke(new MethodInvoker(delegate { lbServer.Items.Add("Błąd inicjacji servera!"); }));
                MessageBox.Show(ex.ToString(), "Błąd");
                activeCall = false;
            }

        }

        private void chatConnection_DoWork(object sender, DoWorkEventArgs e)
        {

            {
                //if (client.GetStream().DataAvailable)
                {
                    string messageRecived;
                    while ((messageRecived = reading.ReadString()) != "END")
                    {
                        chatBox.Invoke(new MethodInvoker(delegate { chatBox.Items.Add("Klient: " + messageRecived); }));
                        if (chatConnection.CancellationPending)
                        {
                            btStart.Invoke(new MethodInvoker(delegate { btCancelClient.Enabled = false; }));
                            return;
                        }
                        if (bwConnection.CancellationPending)
                        {
                            btStart.Invoke(new MethodInvoker(delegate { btStart.Enabled = true; }));
                            btStart.Invoke(new MethodInvoker(delegate { btStop.Enabled = false; }));
                            chatInput.Invoke(new MethodInvoker(delegate { btCancelClient.Enabled = false; }));
                            return;
                        }
                    }

                    client.Close();
                    server.Stop();
                }
            }

        }

        private void chatEnter_Click(object sender, EventArgs e)
        {
            string messageSend = chatInput.Text;

            writing.Write(messageSend);
            chatBox.Items.Add("JA: " + chatInput.Text);
            chatInput.Text = "";
        }

        private void btCancelClient_Click(object sender, EventArgs e)
        {
            writing.Write("END");
            client.Close();
            chatConnection.CancelAsync();
            lbServer.Items.Add("Rozłączono z klientem...");
        }

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
    }
}
//192.168.0.14
//2137
