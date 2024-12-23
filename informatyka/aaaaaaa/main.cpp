#include <iostream>

using namespace std;

int main()
{
    int wiek = 30;
    const double pi = 3.1416;
    int *a = NULL;

    //uzycie operatora &

    cout << "liczba calkowita wiek jest pod adresem: " << hex << &wiek << endl;
    cout << "liczba pi jest pod adresem: " << hex << &pi << endl;
    int *pWiek = &wiek;
        cout << "liczba calkowita wiek jest pod adresem: " << hex << pWiek << endl;

    int wiek1= 20;
    pWiek = &wiek1;
            cout << "liczba calkowita wiek jest pod adresem: " << hex << pWiek << endl;










    return 0;
}
