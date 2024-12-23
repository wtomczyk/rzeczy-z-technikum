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

namespace Remote_Host_Port_Scanner
{
    public partial class Scanner : Form
    {
        public Scanner()
        {
            InitializeComponent();
        }

        
        

        private void bScan_Click(object sender, EventArgs e)
        {

            short[] PortList = { 20, 21, 22, 23, 26, 53, 70, 80, 109, 110, 119, 143, 161, 162, 443, 3389 };
            string host = tbHostAddress.Text;
            lbMessage.Items.Add("skanowanie portów dla " + host);
            lbMessage.Items.Add("to może chwile potrwać ...");
            foreach (short port in PortList)
            {
                this.Refresh();
                try
                {
                    TcpClient client = new TcpClient(host, port);
                    lbMessage.Items.Add("port " + port.ToString() + " jest otwarty");
                }
                catch
                {
                    lbMessage.Items.Add("port " + port.ToString() + " jest zamknięty");
                }
            }
        }
    }
}
