#include <iostream>

using namespace std;

int main()
{
    int a=0,c=0;
    int tab[c];
    cin >> a;
    if (a<0){
        cout << "blad" <<endl;
        return 0;}
    else
        if (a==0){
            cout << "0" <<endl;
            return 0;}
        else
            while(a!=0){
                tab[c]=a%8;
                a=a/8;
                c++;
                }
                c--;
            while (c>=0){
                cout<<tab[c];
                c--;}
    return 0;
}
