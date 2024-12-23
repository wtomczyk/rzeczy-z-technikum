#include <iostream>

using namespace std;

int main()
{
    cout << "podaj ilosc wartosci w ciagu" << endl;
    int n=0,a=0,b=0;
    cin >> n;
    int tab[n];
    while(a!=n){
        cout << "podaj wartosc " << a+1 << endl;
        cin >> b;
        tab[a]=b;
        a=a+1;
    }
    a=0;
    while(a!=n-1){
        if(tab[a]>tab[a+1]){
            cout << "od wartosci " << tab[a] << " do " << tab[a+1] << " funkcja malejaca" << endl;
        }
        else{
            if(tab[a]<tab[a+1]){
            cout << "od wartosci " << tab[a] << " do " << tab[a+1] << " funkcja rosnaca" << endl;
        }
        else
        {
        cout << "od wartosci " << tab[a] << " do " << tab[a+1] << " funkcja stala" << endl;
        }
        }
        a=a+1;
    }
    return 0;
}
