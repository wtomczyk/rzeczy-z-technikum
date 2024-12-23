#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    srand(time(NULL));
    int b=0,c=0,n=0,najmniejszy=0,najwiekszy=0,q=0,d=0,e=0,f=0,g=0,i=0,j=0;
    cout << "podaj wielkosc tablicy" << endl;
    cin >> n;
    cout << endl;
    int tab[n];
    while(b!=n){
        c=(std::rand()% 31);
        tab[b]=c;
        b=b+1;
        cout << c << endl;
    }
    cout << endl;
    najmniejszy=tab[d];
    najwiekszy=tab[d];
    while(d!=n-1){
        if (tab[d+1]>najwiekszy){
            najwiekszy=tab[d+1];
        }
        else{
            if(tab[d+1]<najmniejszy){
                najmniejszy=tab[d+1];
            }
        }
        d=d+1;
    }
    q=najwiekszy-najmniejszy;
    f=najmniejszy;
    int tab1[q];
    while(e!=q+1){
        tab1[e]=f;
        e=e+1;
        f=f+1;
    }
    int tab2[n];

    return 0;
}
