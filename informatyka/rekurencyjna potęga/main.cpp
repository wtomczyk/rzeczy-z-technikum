#include <iostream>

using namespace std;

int potega(int a, int b){
    if (b==0){
        return 1;}
    else{
        int d=0,e=0;
        d=b;
        e=a;
        while(d!=1){
                a=a*e;
                d=d-1;}
        return a;}
}
int main()
{
    int a=0,b=0;
    cin >> a;
    cin >> b;
    cout << potega(a, b);
    return 0;
}
