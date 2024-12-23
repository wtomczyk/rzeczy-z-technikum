#include <iostream>

using namespace std;

int main()
{
    int a=0,b=0,c=0;

    cin >> a;
    cin >> b;
    while(b != 0)
    {
        c = a % b;
        a = b;
        b = c;
    }
    cout << a;

    return 0;
}
