#include <iostream>
using namespace std;

int main()
{
    enum dniTygodna
    {
       niedziela = 0,
       poniedzialek,
       wtorek,
       sroda,
       czwartek,
       piatek,
       sobota,
    };

    cout << "Podaj numer dnia tygodnia (niedziela = 0): ";

    int dzien = niedziela;   // Inicjalizacja zmiennej dzien z warto�ci� niedziela.
    cin >> dzien;

    switch(dzien) {
        case niedziela:
            cout << "Nazwa niedziela oznacza dzie� wolny" << endl;
            break;

        case poniedzialek:
            cout << "Nazwa poniedzia�ek oznacza pierwszy dzien tygodnia" << endl;
            break;
        case wtorek:
            cout << "Nazwa wtorek oznacza drugi dzien po niedzieli" << endl;
            break;
        case sroda:
            cout << "Nazwa sroda oznacza srodek tygodnia" << endl;
            break;
        case czwartek:
            cout << "Nazwa czwartek oznacza czwarty dzien tygodnia" << endl;
            break;
        case piatek:
            cout << "Nazwa piatek oznacza ostatni dzien pracy" << endl;
            break;
        case sobota:
            cout << "Nazwa sobota to pierwszy dzien weekendu :)" << endl;
            break;
        default:
            cout << "B��dne dane wejsciowe, wprowadz dane ponownie" << endl;

return 0;
}}
