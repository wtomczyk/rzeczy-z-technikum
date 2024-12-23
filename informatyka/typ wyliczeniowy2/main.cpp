#include <iostream>

using namespace std;

enum kierunkiswiata{
polnoc,
poludnie,
wschod,
zachod
};
int main()
{
    cout << "wyswietlanie kierunkow i ich wartosc" << endl;
    cout << "polnoc: " << polnoc << endl;
    cout << "poludnie: " << poludnie << endl;
    cout << "wschod: " << wschod << endl;
    cout << "zachod: " << zachod << endl;

    kierunkiswiata kierunkiwiatru = poludnie;
    cout << "zmienna kierunkiwiatru = " << kierunkiwiatru << endl;


    return 0;
}
