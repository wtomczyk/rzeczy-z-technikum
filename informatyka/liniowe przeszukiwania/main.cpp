#include <iostream>

using namespace std;

int main()
{
    int tab[6]{2,4,9,0,7,87};
    int n=6;
    int i=0;
    int x=0;
    cout << "podaj szukana liczbe" << endl;
    cin >> x;
    while (tab[i]!=x){
    if (i>n){
        cout << "nie odnaleziono elementu o wartosci " << x << endl;
         return 0;
    }
    else
    i=i+1;
    }
    cout << "odnaleziono element " << x << " pod indeksem " << i+1 << endl;
    return 0;
}
