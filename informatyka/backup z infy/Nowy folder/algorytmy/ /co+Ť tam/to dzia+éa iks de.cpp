#include <iostream>

using namespace std;

int main()
{
    cout << "podaj trzy liczby: " << endl;
    float a = 0, b = 0, c = 0, delta = 0;
    cout << "podaj a: " << endl;
    cin >> a;
    cout << "podaj b: " << endl;
    cin >> b;
    cout << "podaj c: " << endl;
    cin >> c;
    delta = b*b - 4*a*c;
    cout << "delta to: " << endl;
    cout << delta << endl;

    if (delta == 0)
        cout << "jest jedno rozwiazanie: " << endl;
    else
        if (delta < 0)
        cout << "delta nie ma rozwiazan: " << endl;
    else
        cout << "delta ma 2 rozwiazania: " <<endl;
    return 0;
}


