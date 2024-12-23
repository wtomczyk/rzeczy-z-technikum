#include <iostream>
#include <cmath>
#include <conio.h>

using namespace std;

int main()
{
    double a;
    double b;
    double c;
    double d;

    cout << "a " << endl;
    double *aa = &a;
    cin >> a;
    cout << "b " << endl;
    double *bb = &b;
    cin >> b;
    cout << "c " << endl;
    double *cc = &c;
    cin >> c;
    double *delta=&d;
    *delta = *bb * *bb - 4 * *aa * *cc;
    cout <<  dec << *delta << endl;

    if(*delta==0){
        cout << dec << -*bb/2 * *aa;
    }
    else if(*delta<0){
        cout << "dupa" << endl;
    }
    else{
      cout << "miejsca zerowe to " << dec << (-*bb-sqrt(*delta))/2* *aa << " i " << (-*bb+sqrt(*delta))/2* *aa << endl;
    }





    return 0;
}
