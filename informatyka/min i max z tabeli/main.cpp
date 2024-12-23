#include <iostream>

using namespace std;

int main()
{
    int minimalna=0,maksymalna=0,i=0;
    int n=6;
    int tab[n]{100,0,100,100,110,87};
    minimalna=tab[i];
    maksymalna=tab[i];
    while(n!=i+1){
        if(maksymalna<tab[i+1]){
            maksymalna=tab[i+1];
        }
        else{
            if(minimalna>tab[i+1]){
                minimalna=tab[i+1];
            }
        }
    i=i+1;
    }
    cout << minimalna << endl;
    cout << maksymalna << endl;
    return 0;
}
