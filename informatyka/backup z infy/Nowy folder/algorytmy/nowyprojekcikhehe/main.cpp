#include <iostream>

using namespace std;

int main()
{
    int tablica[2][5];
    int a=0,b=0;
    while(a!=2){
        while(b!=5){
            cout << "podaj liczbe"<< endl;
            cin >> tablica[a][b];
            b=b+1;}
        a=a+1;
        b=0;}
    for (int licznik =0;licznik < 2; licznik++){
        for (int licznik1 = 0;licznik1 <5; licznik1++){
            cout << "tablica[" <<licznik <<"][" << licznik1 << "]: ";
            cout << tablica[licznik][licznik1] <<endl;
        }
    }
    return 0;
}
