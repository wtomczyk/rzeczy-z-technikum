#include <iostream>

using namespace std;

int main()
{
    int tab1[10]{1,2,3,4,3,4,5,3,3,1};
    int tab2[7]{-3,0,0,3,0,-2,0};
    int tab3[8]{9,6,7,6,2,2,2,2};
    int a=0,b=0,c=0,d=0,e=0,f=0;
    bool xd=true;
    while(a!=10){
            while(c!=10){
                if(tab1[a]==tab1[c]){
                    e=e+1;
                }
                c=c+1;
            }

            if(e>10/2){
                cout << "lider w tab1 to " << tab1[a] << endl;
                xd = false;
                break;
            }
            e=0;
            c=0;
            a=a+1;
    }
    if (xd)
    {
        cout << "nie ma lidera w tab1" << endl;
    }
    xd = true;
    a=0,b=0,c=0,d=0,e=0,f=0;
    while(a!=7){
            while(c!=7){
                if(tab2[a]==tab2[c]){
                    e=e+1;
                }
                c=c+1;
            }

            if(e>7/2){
                cout << "lider w tab2 to " << tab2[a] << endl;
                xd = false;
                break;
            }
            e=0;
            c=0;
            a=a+1;
    }
    if (xd)
    {
        cout << "nie ma lidera w tab2" << endl;
    }
    xd = true;
    a=0,b=0,c=0,d=0,e=0,f=0;
    while(a!=8){
            while(c!=8){
                if(tab3[a]==tab3[c]){
                    e=e+1;
                }
                c=c+1;
            }

            if(e>8/2){
                cout << "lider w tab3 to " << tab3[a] << endl;
                xd = false;
                break;
            }
            e=0;
            c=0;
            a=a+1;
    }
    if (xd)
    {
        cout << "nie ma lidera w tab3" << endl;
    }
    xd = true;
    return 0;
}
