#include <iostream>

using namespace std;

int main()
{
    int wiek1 = 10;
    int wiek2 = 20;

    cout << "liczba calkowita wiek1 = " << wiek1 << endl;
    cout << "liczba calkowita wiek2 = " << wiek2 << endl;

    int *pwiek = &wiek1;
    cout << "pwiek = " << hex << pwiek << endl;
    cout << "pwiek = " << dec << *pwiek << endl;
    cout << endl;
    pwiek = &wiek2;
    cout << "pwiek = " << hex << pwiek << endl;
    cout << "pwiek = " << dec << *pwiek << endl;
    return 0;
}
