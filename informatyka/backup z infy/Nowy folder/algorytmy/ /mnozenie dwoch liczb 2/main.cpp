#include <iostream>

using namespace std;

int main()
{
    cout << "Program do mnozenia dwoch liczb" << endl;
    cout << "podaj pierwsza liczbê: ";
    int pierwszaliczba = 0, drugaliczba = 0;
    cin >> pierwszaliczba;

    cout << "Podaj druga liczbe: ";
    //int drugaliczba = 0;
    cin >> drugaliczba;

    //mno¿enie dwoch liczb i zapis wyniku w zmiennej
    int wynikmnozenia= pierwszaliczba * drugaliczba;

    //wyswietlenie wyniku
    cout << pierwszaliczba << " x " << drugaliczba;
    cout << " = " << wynikmnozenia << endl;

    return 0;
}
