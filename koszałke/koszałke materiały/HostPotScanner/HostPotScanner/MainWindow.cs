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
using System.Threading;

namespace HostPotScanner
{
    public partial class MainWindow : Form
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        TcpListener server;

        public void Scan()
        {


            lbHosts.Invoke(new MethodInvoker(delegate { lbHosts.Items.Clear(); }));

            if (nudFrom.Value > nudTo.Value)
            {
                MessageBox.Show("invalid port range.");
                return;
            }
            lbHosts.Invoke(new MethodInvoker(delegate { lbHosts.Items.Add("Start a scan ..."); }));
            for (int i = (int)nudFrom.Value; i <= (int)nudTo.Value; i++)
            {
                //lbHosts.Invoke(new MethodInvoker(delegate { this.Refresh; }));

                lbHosts.Invoke(new MethodInvoker(delegate { lHost.Text = "Currently, the port scan: " + i; }));
                try
                {
                    server = new TcpListener(IPAddress.Loopback, i);
                    server.Start();
                    server.Stop();
                }
                catch
                {
                    lbHosts.Invoke(new MethodInvoker(delegate { lbHosts.Items.Add("port: " + i + " is busy"); }));
                    
                }
            }
            
            lbHosts.Invoke(new MethodInvoker(delegate { lbHosts.Items.Add("scan completed"); }));
            licznik = 0;
            bStart.Invoke(new MethodInvoker(delegate { bStart.Text = "Start"; }));
            bPause.Invoke(new MethodInvoker(delegate { bPause.Enabled = false; }));
        }

        Thread a1;
        int licznik = 0;
        private void bStart_Click(object sender, EventArgs e)
        {
            if (licznik == 0)
            {
                if (nudFrom.Value > nudTo.Value)
                {
                    MessageBox.Show("invalid port range.");
                    return;
                }
                bStart.Text = "Pause";
                a1 = new Thread(Scan);
                a1.Start();
                licznik = 1;
                bPause.Enabled = true;
                a1.IsBackground = true;
            }
            else if (licznik == 1)
            {
                bStart.Text = "Resume";
                licznik = 2;
                a1.Suspend();
                bPause.Enabled = false;
            }
            else if (licznik == 2)
            {
                licznik = 3;
                bStart.Text = "Pause";
                bPause.Enabled = true;
                a1.Resume();
            }
            else if (licznik == 3)
            {
                licznik = 2;
                bStart.Text = "Resume";
                a1.Suspend();
                bPause.Enabled = false;
            }
        }
        private void bPause_Click(object sender, EventArgs e)
        {
            if (licznik == 3 || licznik == 1)
            {
                a1.Abort();
                bStart.Text = "Start";
                licznik = 0;
                bPause.Enabled = false;
            }
        } 
    }
}
