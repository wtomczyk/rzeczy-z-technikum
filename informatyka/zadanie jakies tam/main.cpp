#include <iostream>

using namespace std;

double obliczpolekola(double promien, double Pi = 3.14);

int main()
{
    cout << "podaj promien: ";
    double promienwejsciowy = 0;
    cin >> promienwejsciowy;
    cout << "Pi wynosi 3,14, czy chcesz zmienic wartosc (t/n)? ";
    char zmienpi = 'n';
    cin >> zmienpi;

    double polekola = 0;
        if (zmienpi == 't'){
            cout << "podaj nowa wartosc Pi: ";
            double nowepi = 3.14;
            cin >> nowepi;
            polekola = obliczpolekola(promienwejsciowy, nowepi);
        }
        else
            polekola = obliczpolekola(promienwejsciowy);
    cout << "pole kola to: " << polekola << endl;
    return 0;
}
double obliczpolekola(double promien, double pi){
    return pi * promien * promien;
}
