#include <iostream>

using namespace std;

int main()
{
    cout << "ile chcesz liczb ";\
    int liczby = 0;
    cin >>liczby;

    int* wliczba = new int [liczby];
    int* wkopia = wliczba;

    cout << "zaalokowano pamiec dla " << liczby << " liczb calkowitych" << endl;
    for (int licznik=0; licznik < liczby; licznik++){
        cout << "podaj liczbe " << licznik << " ";
        cin >> *(wliczba + licznik);
    }

    cout << "wyswietlenie liczb" << endl;
    for (int licznik=0; licznik < liczby; licznik++)
        cout << *(wkopia++) << licznik << " ";


    delete[] wliczba;
    return 0;
}
