#include <iostream>

using namespace std;

int main()
{
    char wyboruzytkownika = 'm'; //wartosc poczatkowa
    while (wyboruzytkownika != 'x'){

    cout << "Podaj dwie liczby: " << endl;
    int liczba1 = 0, liczba2 = 0;
    cin >> liczba1;
    cin >> liczba2;

    cout << liczba1 << " x " << liczba2 << " = " << liczba1 * liczba2 << endl;
    cout << liczba1 << " + " << liczba2 << " = " << liczba1 + liczba2 << endl;

    cout << "nacisnij x, aby skonczyc, inny przycisk ponawia proces" << endl;
    cin >> wyboruzytkownika;
}
return 0;
}
