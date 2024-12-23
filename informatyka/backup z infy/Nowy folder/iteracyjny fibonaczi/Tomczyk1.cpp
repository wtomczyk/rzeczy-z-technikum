#include <iostream>

using namespace std;

int main()
{
    int a=1,b=1,c=1,d=0;
    cout << "ciag wynosi " << 0 << " dla elementu " << a << endl;
    a=a+1;
    cout << "ciag wynosi " << 1 << " dla elementu " << a << endl;
    a=a+1;
    cout << "ciag wynosi " << 1 << " dla elementu " << a << endl;
    while (a<20){
        d=b+c;
        cout << "ciag wynosi " << d << " dla elementu " << a+1 << endl;
        b=c;
        c=d;
        a=a+1;}
    return 0;
}
