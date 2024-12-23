#include <iostream>
#include <cstdlib>
#include <time.h>

using namespace std;

int main()
{
    int n=0,b=0,a=0,z=0,w=0;
    cout << "podaj wielkosc tablicy" << endl;
    cin >> n;
    srand( time( NULL ) );

    int tab1[n];
    while(a!=n){
    int liczbaLosowa = (std::rand()%100)+0;
    tab1[a]=liczbaLosowa;
    a=a+1;
    }
    while(b!=n){
        cout << tab1[b] << endl;
        b=b+1;
    }
    int maks=tab1[0];
    int d=1;
    while(d!=n){
        if (tab1[d]>maks){
            maks=tab1[d];
        }
        d=d+1;
    }
    cout << "max to " << maks << endl;
    while (z!=0){
        if(tab1[z]==maks){
            w=w+1;
        }
        z=z+1;
    }
    cout << "wystapil " << w+1 << " razy" << endl;
    return 0;
}
