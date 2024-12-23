#include <iostream>

using namespace std;

const double Pi =3.14159;

//deklaracja funkcji nazwana prototypem
double polekola(double promienwejsciowy);
double obwodkola(double promienwejsciowy);

int main()
{
    cout << "podaj wartosc promienia: ";
    double promien = 0;
    cin >> promien;

    //wywolanie funkcji o nazwie polekola
    cout << "pole kola wynosi: " << polekola(promien) << endl;

    //wywolanie funkcji o nazwie obwodkola
    cout << "obwod kola wynosi: " << obwodkola(promien) << endl;

    return 0;
}
//definicja funkcji(inplementacja)
double polekola(double promienwejsciowy){
    return Pi * promienwejsciowy * promienwejsciowy;

}

double obwodkola(double promienwejsciowy){
    return 2 * Pi * promienwejsciowy;
}
