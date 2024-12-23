#include <iostream>
#include <cstdlib>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    int wiersz, licznik1, licznik2, wyznacznik;
    cout << "Podaj liczbe wierszy i kolumn macierzy z przedzialu 1 do 3:" << endl;
    cin >> wiersz;
    if(wiersz==1||wiersz==2||wiersz==3){

    int **tablica;
    try {
        tablica = new int *[wiersz];
    }
    catch(bad_alloc) {
        cout << "Brak miejsca do utworzenia tablicy. Koñczymy program";
        return -1;
    }
    for(licznik1 = 0; licznik1 < wiersz; licznik1++)
        try {
            tablica[licznik1] = new int [wiersz];
        }
    catch(bad_alloc) {
        cout << "Brak miejsca do utworzenia tablicy. Koñczymy program";
        return -1;
    }
    for(licznik1 = 0; licznik1 < wiersz; licznik1++) {
        for(licznik2 = 0; licznik2 < wiersz; licznik2++) {
                cout << "podaj wartosc macierzy " << licznik1 + 1 << licznik2 + 1 << endl;
            cin >>   tablica[licznik1][licznik2] ;
        }
    cout << endl;
    }
    if(wiersz==1){
        wyznacznik=tablica[0][0];
        cout << "wyznacznik to " << wyznacznik << endl;
    }
    else if(wiersz==2){
        wyznacznik=tablica[0][0]*tablica[1][1]-tablica[0][1]*tablica[1][0];
        cout << "wyznacznik to " << wyznacznik << endl;
    }
    else if(wiersz==3){
        wyznacznik=
        tablica[0][0]*tablica[1][1]*tablica[2][2]+
        tablica[0][1]*tablica[1][2]*tablica[2][0]+
        tablica[0][2]*tablica[1][0]*tablica[2][1]-
        tablica[0][2]*tablica[1][1]*tablica[2][0]-
        tablica[0][0]*tablica[1][2]*tablica[2][1]-
        tablica[0][1]*tablica[1][0]*tablica[2][2];
        cout << "wyznacznik to " << wyznacznik << endl;
    }
    cout << "macierz to " << endl;
    for(int q=0;q<wiersz;q++){
        for(int w=0;w<wiersz;w++){
            cout << tablica[q][w] << " ";
        }
        cout << endl;
    }
    }
    else{
        cout << "podano niewlasciwa liczbe "<< endl;
    }
return 0;
}
