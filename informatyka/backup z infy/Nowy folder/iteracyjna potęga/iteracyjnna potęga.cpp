#include <iostream>

using namespace std;

int main()
{
    int a=0,b=0,c=0,d=0,e=0;
    cout << "podaj podstawe potegi w postaci liczby calkowitej" << endl;
    cin >> a;
    cout << "podaj wykladnik potegi w postaci liczby calkowitej" << endl;
    cin >> b;
    d=b;
    e=a;
        if(b==0){
            c=1;
            cout << c << endl;}
        else{
            while(d!=1){
                a=a*e;
                d=d-1;}
                cout << a << endl;}

    return 0;
}
