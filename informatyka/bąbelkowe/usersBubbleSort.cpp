#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tab[19] = {"ala", "ola", "bogdan", "zenon", "pawel", "kasia", "zenobia", "kosma", "norbert", "adam", "cyprian", "jozef", "wojtek", "tomek", "maciek", "grzegorz", "lucjan", "sebastian", "henryk"};
    string e;
    int a=0,b=0,c=0,d=19,f=0;
    for (int a=(d-1);a>0;a--){
        for(int c=0;c<a;c++){
            if (tab[c]<tab[c+1]){
                e=tab[c];
                tab[c]=tab[c+1];
                tab[c+1]=e;
            }
        }
    }
    while(f!=d+1){
        cout << tab[d] << endl;
        d=d-1;
    }





    return 0;
}
