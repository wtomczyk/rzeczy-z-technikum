#include <iostream>

using namespace std;

int main()
{
    skoczdopunktu:
    int liczba1 = 0, liczba2 = 0;

    cout << "Podaj dwie liczby: " << endl;
    cin >> liczba1;
    cin >> liczba2;

    cout << liczba1 << " x " << liczba2 << " = " << liczba1 * liczba2 << endl;
    cout << liczba1 << " + " << liczba2 << " = " << liczba1 + liczba2 << endl;

    cout << "czy jeszcze raz chcesz wykonac operacje (t/n)?" << endl;

    char powtorz = '\0';
    cin >> powtorz;
    if (powtorz== 't')
        goto skoczdopunktu;

    cout << "koniec programu" << endl;

    return 0;
}
