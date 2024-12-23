#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    srand(time(NULL));
    int a=20,b=0,c=0,j=0,i=0,k=0,huehue=0,e=0;
    int tab[a];
    while(b!=a){
        c=(std::rand()% 111)-10;
        tab[b]=c;
        b=b+1;
        cout << c << "\t";
    }
    cout << endl;
    while(e<19){
        k=i;
        j=i+1;
        while(j<20){
            if(tab[j]>tab[k]){
                k=j;
            }
            j=j+1;
        }

        huehue=tab[k];
        tab[k]=tab[i];
        tab[i]=huehue;
        i=i+1;
        e=e+1;
    }
    b=0;
    while(b!=20){
            cout << tab[b] << "\t";
            b=b+1;
    }


    return 0;
}
