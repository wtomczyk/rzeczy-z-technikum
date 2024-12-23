#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int tablica[6] = {200, 500, 1000, 1410, 2000, 2017};
    int a=0;
    while (a!=6){
    cout << "wartosci dla " << tablica[a] << " to" <<endl;
    int z=0, i=2, b=0;
    b=floor(sqrt(tablica[a]));
        while(i<=b){
            while(tablica[a]%i==0){
                cout << i << endl;
                tablica[a]=tablica[a]/i;
                b=floor(sqrt(tablica[a]));
                z=z+i;}
                i=i+1;}
        if (tablica[a]>1){
            cout << tablica[a] << endl;
            z=z+tablica[a];}
            cout << "suma czynnikow to " << z <<endl;
            a=a+1;}
    return 0;
}
