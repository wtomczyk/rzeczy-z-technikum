using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System.Net;
using System.Net.Sockets;

namespace PortScannerConsole
{
    class Program
    {
        private static void Method1()
        {
            TcpListener server;
            for (int i=0; i < 100; i++)
            {
                Console.WriteLine("Currently, the port scan: " + i);
                try
                {
                    server = new TcpListener(IPAddress.Loopback, i);
                    server.Start();
                    server.Stop();
                }
                catch
                {
                    Console.WriteLine("port: " + i + " is busy");
                }
            }
        }
        static void Main(string[] args)
        {
            Thread t1 = new Thread(Method1);
            t1.Start();

            Console.ReadKey();
        }
    }
}
