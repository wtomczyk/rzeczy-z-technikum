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

namespace ApkaWinForm
{
    public partial class mainWindow : Form
    {
        public mainWindow()
        {
            InitializeComponent();
        }

        TcpListener server;

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void btStart_Click(object sender, EventArgs e)
        {
            if (numudPort1.Value > numudPort2.Value)
            {
                MessageBox.Show("Zły zakres portów!");
                return;
            }
            lbHosts.Items.Add("Zaczynam skanowanie...");

            for (int i = (int)numudPort1.Value; i <= (int)numudPort2.Value; i++)
            {
                this.Refresh();
                lbStan.Text = "Skanowany port: " + i;
                try
                {
                    server = new TcpListener(IPAddress.Loopback, i);
                    server.Start();
                    server.Stop();
                }
                catch
                {
                    lbHosts.Items.Add("Port: " + i + " jest zajęty");
                }
            }
            lbHosts.Items.Add("Skan zakończony");

        }

        private void numudPort1_ValueChanged(object sender, EventArgs e)
        {

        }
    }
}
