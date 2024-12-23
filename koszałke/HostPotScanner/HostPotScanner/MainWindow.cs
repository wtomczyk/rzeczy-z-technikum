using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace HostPotScanner
{
    public partial class MainWindow : Form
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        TcpListener server;

        private void bStart_Click(object sender, EventArgs e)
        {
            if (nudFrom.Value > nudTo.Value)
            {
                MessageBox.Show("invalid port range.");
                return;
            }
            lbHosts.Items.Add("start a scan ...");

            for (int i = (int)nudFrom.Value; i <= (int)nudTo.Value; i++)
            {
                this.Refresh();
                lHost.Text = "Currently, the port scan: " + i;
                try
                {
                    server = new TcpListener(IPAddress.Loopback, i);
                    server.Start();
                    server.Stop();
                }
                catch
                {
                    lbHosts.Items.Add("port: " + i + " is busy");
                }
                
            }
            lbHosts.Items.Add("scan completed");
        }
    }
}
