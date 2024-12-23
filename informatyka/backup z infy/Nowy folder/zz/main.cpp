#include <iostream>

using namespace std;

int main()
{
    int a=0,b=0,c=0,d=0,e=0,f=0;
    cin >> a;
    cin >> b;
    d=a;
    e=b;
    while(b != 0)
    {
        c = a % b;
        a = b;
        b = c;
    }
    f=d*e/a;
    cout << f;

    return 0;
}
