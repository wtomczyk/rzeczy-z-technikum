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
    public partial class Form1 : Form
    {
        public Form1()
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
            lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("polaczenie"); }));
        }
        private void Close_Click(object sender, EventArgs e)
        {
            bwConnection.CancelAsync();
            BackgroundWorker2.CancelAsync();
            writing.Write("END");

            lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("przerwano połączenie"); }));
        }

        private void bwConnection_DoWork(object sender, DoWorkEventArgs e)
        {
                string host = tbHostAddress.Text;
                int port = Convert.ToInt16(nUDPort.Value);
                try
                {
                client = new TcpClient(tbHostAddress.Text, (int)nUDPort.Value);
                NetworkStream ns = client.GetStream();
                reading = new BinaryReader(ns);
                writing = new BinaryWriter(ns);
                writing.Write("password");
                activeCall = true;
                BackgroundWorker2.RunWorkerAsync();

            }
                catch (Exception ex)
                {
                    lbMessage.Invoke(new MethodInvoker(delegate { lbMessage.Items.Add("błąd: nie udało nawiązać połączenia"); }));
                    MessageBox.Show(ex.ToString());
                }
        }
        private void BackgroundWorker2_DoWork(object sender, DoWorkEventArgs e)
            {
               string messageRecived;
               while((messageRecived = reading.ReadString()) != "END")
               {
                    if (BackgroundWorker2.CancellationPending)
                        {
                            break;
                    }
                    lbChat.Invoke(new MethodInvoker(delegate { lbChat.Items.Add(messageRecived); }));
               }
               client.Close();
               lbMessage.Invoke(new MethodInvoker(delegate {lbMessage.Items.Add("przerwanie");}));
            }

        private void bSend_Click(object sender, EventArgs e)
        {
            string messageSent = tMessage.Text;
            lbChat.Items.Add(messageSent);
            writing.Write(messageSent);
        }
    }
}
