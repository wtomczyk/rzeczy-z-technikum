#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector <int> tablicadynamiczna (3); //poczatkowa wielkosc tablicy

    tablicadynamiczna[0]=123;
    tablicadynamiczna[1]=456;
    tablicadynamiczna[2]=789;

    cout << "ilosc elementow tablicy: " << tablicadynamiczna.size() << endl; //rozmiar tablicy

    cout << "podaj liczbe do umieszczenia w tablicy: ";
    int kolejnaliczba=0;
    cin >> kolejnaliczba;
    tablicadynamiczna.push_back(kolejnaliczba); //wstawianie elementu do tablicy

    cout << "ilosc elementow tablicy: " << tablicadynamiczna.size() << endl; //rozmiar tablicy
    cout << "ostatni element tablicy: ";
    cout << tablicadynamiczna[tablicadynamiczna.size() - 1] << endl; //ostatni element tablicy
    return 0;
}
