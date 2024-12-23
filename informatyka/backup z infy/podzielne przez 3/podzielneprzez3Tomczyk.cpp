#include <iostream>
#include <cstdlib>
#include <time.h>

using namespace std;

int main()
{
    srand( time( NULL ) );

    int tab1[10];
    int a=0,b=0,c=0,d=0,e=0;
    int tab2[10];

    while(a!=10){
    int liczbaLosowa = (std::rand()%35)+6;
    tab1[a]=liczbaLosowa;
    a=a+1;
    }
    while(b!=10){
        cout << tab1[b] << endl;
        b=b+1;
    }
    while(c!=10){
        if(tab1[c]%3 == 0){
            cout << "podzielne przez 3 to " << tab1[c] << endl;
        }
        c=c+1;
    }

    return 0;
}
