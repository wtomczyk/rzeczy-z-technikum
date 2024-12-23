#include <iostream>

using namespace std;

const double Pi = 3.14159;

void poleobwod(){
    cout << "podaj promien: ";
    double promien = 0;
    cin >> promien;

    cout << "pole wynosi: " << Pi * promien * promien << endl;

    cout << "czy chcesz obliczyc obwod (t/n)? ";
    char obliczobwod = 'n';
    cin >> obliczobwod;

    if(obliczobwod == 'n')
        return;
    cout << "obwod wynosi: " << 2* Pi * promien << endl;
}
int main()
{
    poleobwod();
    return 0;
}
