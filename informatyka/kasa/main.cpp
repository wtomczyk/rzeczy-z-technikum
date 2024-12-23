#include <iostream>

using namespace std;

int main()
{
    int a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0;
    int T[14] = {20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
    cout << "podaj ile produktow wybrano" << endl;
    cin >> a ;
    while (b!=a)
    {
        cout << "podaj cene produktu (w groszach) " << b+1 << endl;
        cin >> c ;
        d=d+c;
        b=b+1;
    }
        cout << "podaj kwote zaplaty(w groszach)" << endl;
        cin >> e ;
        f=e-d;
        cout << "reszta to " << f << endl;

        while(f>0)
        {
            if(f>=T[g])
            {
                h=f/T[g];
                f=f-(T[g]*h);
                cout << h << " * ";
                cout << " po " << T[g]<< " groszy" << endl;

                g=g+1;
            }
            else
            {
                g=g+1;
            }

        }
    return 0;
}
