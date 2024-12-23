#include <iostream>

using namespace std;

int main()
{
    int a=0,b=0,c=0;
    int tab1[25][2] = {{27,125},{27,125},{27,125},{27,125},{47,150},{47,150},{47,150},{52,160},{52,160},{52,158},{64,170},{64,170},{64,160},{64,160},{64,160},{78,172},{78,172},{78,172},{78,172},{92,179},{92,179},{92,179},{92,179},{102,180},{102,180}};
    while(a+tab1[c+1][0]<900){
        a=a+tab1[c][0];
        b=b+tab1[c][1];
        cout << "waga " << tab1[c][0] << " wysokosc " << tab1[c][1] << endl;
        c=c+1;
    }
    cout << "laczna wysokosc to " << b << " cm" << endl;
    cout << "laczna waga to " << a << " kg" << endl;
    cout << "laczna ilosc ludzi to " << c << endl;

    return 0;
}
