#include <iostream>

using namespace std;
int tab[32];
int main(){
int tab1[7] = {523, 458, 399, 878, 1001, 1112, 2056};
int tab2[7];
int tab3[7];
char tab4[7][20];
int a=0,b=0,c=0,d=0,e=0;
cout << "binarne" << endl;
    while(e!=7){
        tab2[e]=tab1[e];
        a=tab2[e];
            while(a!=0){
                tab[c]=a%2;
                a=a/2;
                c++;
                d=d+1;}
                c--;
                while (c>=0){
                    cout<<tab[c];
                    c--;}


                    cout << " " <<endl;
                    e=e+1;
                    a=0,b=0,c=0,d=0;
                    }
e=0,a=0,b=0,c=0,d=0;
cout << "osemkowe" << endl;
    while(e!=7){
        tab3[e]=tab1[e];
        a=tab3[e];
            while(a!=0){
                tab[c]=a%8;
                a=a/8;
                c++;
                d=d+1;}
                c--;
                while (c>=0){
                    cout<<tab[c];
                    c--;}


                    cout << " " <<endl;
                    e=e+1;
                    a=0,b=0,c=0,d=0;
                    }
e=0,a=0,b=0,c=0,d=0;
cout << "szesnastkowe" << endl;
    while(e!=7){
        tab4[e]=tab1[e];
        a=tab4[e];
            while(a!=0){
                tab[c]=a%16;
                a=a/16;
                c++;
                d=d+1;}
                c--;
                while (c>=0){
                    cout<<tab[c];
                    c--;}


                    cout << " " <<endl;
                    e=e+1;
                    a=0,b=0,c=0,d=0;}

return 0;}
