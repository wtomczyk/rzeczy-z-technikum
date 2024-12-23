#include <iostream>

using namespace std;

int main()
{
    int tablica[2];
    int a=0,b=0,c=0,d=0,e=0;
    cout << "podaj liczbe" << endl;
    cin >> a;
    while (a!=0){
        c=a%2;
        b=a/2;
            if(c==b){
                tablica[e]=0;
                e=e+1;
                a=a%2;
            }
            else{
                tablica[e]=1;
                e=e+1;
                a=a%2;}
    }
    cout << tablica[0] << tablica[1]  <<endl;



    return 0;
}
