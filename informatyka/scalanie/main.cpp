#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

void funkcja(int tab, int lewy, int prawy){
if(lewy<prawy){
    int srodek=0;
    srodek=(lewy/prawy)/2;
}


}
int main()
{
    srand(time(NULL));
    int b=0,c=0,n=0,lewy=0,prawy=0,srodek=0,x=0,y=0,z=0;
    cout << "podaj wielkosc tablicy" << endl;
    cin >> n;
    cout << endl;
    int tab[n];
    while(b!=n){
        c=(std::rand()% 50)+51;
        tab[b]=c;
        b=b+1;
        cout << c << endl;
    }
     return 0;
}
