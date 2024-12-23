#include <iostream>

using namespace std;

int main()
{
    int n=0,x=0,a=0,b=0,c=0,d=0,e=0,f=0;
    cout << "podaj stopien wielomianu" << endl;
    cin >> n;
    cout << "podaj x" << endl;
    cin >> x;
    d=x;
    int A[n];
    a=n;
    while(a!=0)
    {
        cout << "podaj wspolczynnik wielomianu " << a << endl;
        cin >> b;
        c=a;
        while(c!=1)
        {
            d=d*x;
            c=c-1;
        }
        A[a]=b*d;
        a=a-1;
        d=x;
    }
    while(n!=0)
    {
        e=e+A[n];
        n=n-1;
    }
    cout << "podaj wspolczynnik wielomianu 0" << endl;
    cin >> f;
    cout << e+f << endl;
    return 0;
}
