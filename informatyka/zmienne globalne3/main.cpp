#include <iostream>
//zakres zmiennej

using namespace std;
//zmienne globalne
int pierwszaliczba;
int drugaliczba;
int wynikmnozenia;

void mnozenieliczb() {
    cout << "Program do mnozenia dwoch liczb" << endl;
    cout << "podaj pierwsza liczbe: ";
    int pierwszaliczba = 0, drugaliczba = 0;
    cin >> pierwszaliczba;

    cout << "Podaj druga liczbe: ";
    //int drugaliczba = 0;
    cin >> drugaliczba;

    //mno¿enie dwoch liczb i zapis wyniku w zmiennej
    wynikmnozenia= pierwszaliczba * drugaliczba;

    //wyswietlenie wyniku
    cout << pierwszaliczba << " x " << drugaliczba;
    cout << " = " << wynikmnozenia << endl;


}
int main()
{
    cout << "program mnozacy dwie liczby" << endl;
    //wywo;amoe funkcji, ktora przemnozy liczby podane przez uzytkownika
    mnozenieliczb();
cout << pierwszaliczba << " x " << drugaliczba;
cout << " = " << wynikmnozenia << endl;
    return 0;
}
