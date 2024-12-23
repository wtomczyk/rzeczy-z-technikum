#include <iostream>

using namespace std;

int main()
{
    cout << "podaj dwie liczby calkowite: " << endl;
    int liczba1 = 0, liczba2 = 0;
    cin >> liczba1;
    cin >> liczba2;

    cout << "nacisnij \'m\' , aby wykonac mnozenie, inny klawisz oznacza dodawanie: ";
    char decyzja = '\0' ;
    cin >> decyzja;

    int wynik = 0;
    if (decyzja == 'm')
        wynik = liczba1 * liczba2;
    else
        wynik = liczba1 + liczba2;
    cout << "wynik operacji: " << wynik << endl;

    return 0;
}
