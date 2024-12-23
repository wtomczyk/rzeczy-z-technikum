using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace Threads
{
    class Program
    {
        private static void Method1()
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine(Thread.CurrentThread.ManagedThreadId);
            }
        }
        private static void Method2(object o)
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine(o.ToString());
            }
        }
        static void Main(string[] args)
        {
            Thread t1 = new Thread(Method1);
            Thread t2 = new Thread(Method2);
            t1.Start();
            t2.Start("Dane dla wątku");

            Console.ReadKey();
        }
    }
}
