#include <iostream>

using namespace std;
int tab[32];
int main(){
int a=0,c=0,d=0,e=0;
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
        tab[c]=a%2;
        a=a/2;
        c++;
        d=d+1;
        }
        c--;
    while (c>=0){
        cout<<tab[c];
        c--;}
    return 0;}
