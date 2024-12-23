#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n=0, i=2, b=0;
    cout << "podaj liczbe" << endl;
    cin >> n;
    b=floor(sqrt(n));
    cout << "wartosci to" << endl;
        while(i<=b){
            while(n%i==0){
                cout << i << endl;
                n=n/i;
                b=floor(sqrt(n));}
                i=i+1;}
        if (n>1)
            cout << n << endl;
    return 0;
}
