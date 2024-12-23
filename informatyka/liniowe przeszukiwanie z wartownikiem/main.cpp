#include <iostream>

using namespace std;

int main()
{
    int n=6;
    int tab[n]{2,4,9,0,7,87};
    int i=0;
    int x=0;
    cout << "podaj szukana liczbe" << endl;
    cin >> x;
    tab[n+1]=x;
    while (tab[i]!=x){
        i=i+1;
    }
    if(i!=n+1){
        cout << "odnaleziono element " << x << " pod indeksem " << i+1;}
    else{
        cout << "nie odnaleziono elementu o wartosci " << x << endl;}
    return 0;
}
