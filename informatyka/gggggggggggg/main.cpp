#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float *tablica = NULL;
    cout << "ile liczb wypisujemy do tablicy: ";
    int iloscLiczb;
    float liczba;
    cin >> iloscLiczb;

    try{
    tablica = new float[iloscLiczb];

    }
    catch(bad_alloc){
    cout << "brak miejsca";
    cin.ignore();
    return -1;
    }
    for (int licznik = 0;licznik<iloscLiczb;licznik++){
        cout << "podaj liczbe: ";
        cin >> liczba;
        *(tablica + licznik)=liczba;

    }
    cout << "wypisuje zawartosc tablicy:" << endl;
    for(int licznik=0;licznik < iloscLiczb; licznik++){
        cout << setw(6) << *(tablica+licznik);
    }
    cout << endl;
    delete [] tablica;
    return 0;
}
