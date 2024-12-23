#include <iostream>

using namespace std;

int main()
{

    int pierwszatablica[5];
    int licznik;

    for(licznik =0;licznik < 5;licznik++){
        cout << "wartosc elementu pierwszatablica [" << licznik << "]: ";
        cin >> pierwszatablica[licznik];
    }

    for (licznik = 0; licznik <5;licznik++){
        cout << licznik << ": " << pierwszatablica[licznik] << "\n";

    }

    return 0;
}
