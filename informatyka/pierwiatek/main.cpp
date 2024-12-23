#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    cout << "podaj liczbe pierwiastkowana" << endl;
    double x=0;
    cin >> x;
    cout << "podaj dokladnosc wyznaczenia " << endl;
    double d=0;
    cin >> d;
    double a=0;
    a=x;
    while(abs(a-x/a)>=d){
        a=(a+(x/a))/2  ;
    }
    cout << a << endl;
    return 0;
}
