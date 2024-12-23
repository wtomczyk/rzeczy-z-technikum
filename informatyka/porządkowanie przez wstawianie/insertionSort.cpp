#include <iostream>

using namespace std;

int main()
{
    int n=0,a=0,b=0,c=0,d=0,e=0,pom=0,k=0;
    cout << "podaj wielkosc tablicy" << endl;
    cin >> n;
    int tab[n-1];
    while(a!=n){
        cout << "podaj wartosc " << a+1 << endl;
        cin >> b;
        tab[a]=b;
        a=a+1;
    }
    int i=1;
    while(i!=n){
       pom=tab[i];
       k=i-1;
       while(k>=0&&tab[k]>pom){
        tab[k+1]=tab[k];
        k=k-1;
       }
        tab[k+1]=pom;
        i=i+1;
    }
    cout << endl;
    while(d!=n){
    cout << tab[d] << endl;
    d=d+1;
    }
    return 0;
}
