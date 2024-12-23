#include <iostream>

using namespace std;

int main()
{
    int n=6;
    int tab[n]{2,4,2,2,2,4};
    int a=0,b=0,i=0,c=0,d=0;
    while(i!=n){
        while(b!=n){
            if(tab[i]=tab[b]){
                c=c+1;
            }
            b=b+1;
        }
    if(c>n%2){
        cout << "lider to " << tab[i] << endl;
        return 0;}
            i=i+1;
            c=0;
            b=0;
    }
    cout << "nibba" << endl;
    return 0;
}
