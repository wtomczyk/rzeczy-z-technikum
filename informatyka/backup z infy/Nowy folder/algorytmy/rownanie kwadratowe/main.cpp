#include <iostream>
#include <cmath>

using namespace std;

void miejscazerowe(){
    cout << "podaj a: ";
    double a = 0;
    cin >> a;
    cout << "podaj b: ";
    double b = 0;
    cin >> b;
    cout << "podaj c: ";
    double c = 0;
    cin >> c;
    double delta=0;
    delta=b*b-4*a*c;
        if (delta>0){
            cout << "miejsca zerowe to: " << ((-b)-sqrt(delta))/(2*a) << " i " << ((-b)+sqrt(delta)) << endl;
            }
            else
                if (delta==0){
                        cout << "miejsce zerowe to: " << (-b) / (2*a) << endl;
                    }
                    else
                        cout << "brak miejsc zerowych" << endl;
    }
int main()
{
    miejscazerowe();
    return 0;
}
