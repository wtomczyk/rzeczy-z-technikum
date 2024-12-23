#include <iostream>

using namespace std;

const double Pi = 3.14159;

double polewalca(double promien,double wysokosc);

int main()
{
    cout << "podaj promien walca: ";
    double promienwejsciowy = 0;
    cin >> promienwejsciowy;
    cout << "podaj wysokosc walca: ";
    double wysokoscwejsciowa;
    cin >> wysokoscwejsciowa;

    cout << "pole walca to: " << polewalca(promienwejsciowy,wysokoscwejsciowa) << endl;

    return 0;
}

double polewalca(double promien,double wysokosc){
    double pole = 2 * Pi * promien * promien + 2 * Pi * promien * wysokosc;
    return pole;
}
