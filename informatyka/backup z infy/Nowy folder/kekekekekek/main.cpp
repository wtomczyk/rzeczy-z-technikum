#include <iostream>

using namespace std;

int main()
{
    int n=0,x=0,a=0,b=0,c=0,d=0,e=0,f=0;
    cout << "podaj ilosc cyfr" << endl;
    cin >> n;
    cout << "podaj stopien" << endl;
    cin >> x;
    d=x;
    int A[n];
    a=n;
    while(a!=1)
    {
        cout << "podaj wartosc cyfry " << a << endl;
        cin >> b;
        c=a;
        while(c!=1)
        {
            cout << "while c, pierwsze" << c << endl;
            d=d*x;
            cout << "while c, d: " << d << endl;
            c=c-1;
            cout << "while c, drugie" <<  c << endl;
        }
        a--;
        A[a]=b*d;
        cout << "A[a]: " << A[a] << endl;
        cout << "a: " << a << endl;
        d=x;
        cout << "d: " << d << endl;
    }
    while(n!=0)
    {
        e=e+A[n];
        cout << "n: " << n << endl;
        cout << "A[n]: " << A[n] << endl;
        cout << "e: " << e << endl;
        n=n-1;
    }
    cout << "podaj wartosc cyfry 1" << endl;
    cin >> f;
    cout << e+f << endl;
    return 0;
}
