#include <iostream>

using namespace std;

int main()
{
    const int tabsize =5;

    int numbertab[tabsize] = {0};

    cout << "podaj indeks elementu, ktory ma byc zmieniony: ";
    int index=0;
    cin >> index;

    cout << "podaj nowa wartosc: ";
    cin >> numbertab[index];
    cout << "1 element tablicy o indeksie 0: " << numbertab[0] << endl;
    cout << "2 element tablicy o indeksie 0: " << numbertab[1] << endl;
    cout << "3 element tablicy o indeksie 0: " << numbertab[2] << endl;
    cout << "4 element tablicy o indeksie 0: " << numbertab[3] << endl;
    cout << "5 element tablicy o indeksie 0: " << numbertab[4] << endl;
    return 0;
}
