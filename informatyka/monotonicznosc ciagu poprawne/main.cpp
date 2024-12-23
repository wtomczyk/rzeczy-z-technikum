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
    bool aaa = true;
    bool bbb = true;
    bool ccc = true;
    bool ddd = true;
    while (a<n-1)
    {
        if(tab[a]>=tab[a+1])
        {
            aaa=false;
        }

        if(tab[a]<=tab[a+1])
        {
            bbb=false;
        }

        if(tab[a]<tab[a+1])
        {
            ccc=false;
        }

        if(tab[a]>tab[a+1])
        {
            ddd=false;
        }
        a=a+1;
    }
    if(aaa)
        cout << "Ciag jest rosnacy" << endl;
    if(bbb)
        cout << "Ciag jest malejacy" << endl;
    if(ccc)
        cout << "Ciag jest nierosnacy" << endl;
    if(ddd)
        cout << "Ciag jest niemalejacy" << endl;
    if( !(aaa || bbb || ccc || ddd))
        cout << "Ciag jest niemonotoniczy" << endl;

    return 0;
}
