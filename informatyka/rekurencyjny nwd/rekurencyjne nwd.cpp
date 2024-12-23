#include <iostream>

using namespace std;

int nwd(int a,int b){
    int c=0;
    while(b != 0)
    {
        c = a % b;
        a = b;
        b = c;
    }
    return a;
}
int main()
{
    int a=0,b=0;
    cout << "podaj pierwsza liczbe" << endl;
    cin >> a;
    cout << "podaj druga liczbe" << endl;
    cin >> b;
    cout << "najwiekszy wspolny dzielnik to " << nwd(a ,b);
    return 0;
}
