#include <iostream>

using namespace std;

int main()
{
    int a=0,b=0,c=0,d=0;
    int tab1[25] = {27,27,27,27,47,47,47,52,52,52,64,64,64,64,64,78,78,78,78,92,92,92,92,102,102};
    int tab2[25] = {125,125,125,125,150,150,150,158,160,160,160,160,160,170,170,172,172,172,172,179,179,179,179,180,180};
    int tab3[25];
    int tab4[25];
    int tab5[25];
    b=tab1[a]/tab2[a];
    tab3[a]=b;
    tab4[a]=tab1[a];
    tab5[a]=tab2[a];
    a=a+1;
    while(a<25){
        b=tab1[a]/tab2[a];
        if (b<tab3[a-1]){
            c=tab3[a-1];
            tab3[a-1]=tab3[a];
            tab3[a]=c;

            }
        else{
            tab3[a]=b;}
        a=a+1
    }
    return 0;
}
