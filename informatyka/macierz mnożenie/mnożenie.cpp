#include <iostream>
#include <cstdlib>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    int wiersz, licznik1, licznik2, wyznacznik;
    cout << "Podaj wielkosc macierzy" << endl;
    cin >> wiersz;


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
    for(int q=0;q<wiersz;q++){
        for(int w=0;w<wiersz;w++){
            cout << tablica[q][w] << " ";
        }
        cout << endl;
    }
    int tablica2[wiersz][wiersz];
    int r=0;
    cout << "przez ile chcesz pomnozyc macierz? " << endl;
    cin >> r;
    for(int a=0;a<wiersz;a++){
        for(int b=0;b<wiersz;b++){
            tablica2[a][b]=tablica[a][b]*r;
            cout << tablica2[a][b] << " ";
        }
        cout << endl;

    }
return 0;
}
