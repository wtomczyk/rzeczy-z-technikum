#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;


int main()
{
    srand(time(NULL));
    int b=0,c=0,n=20,najmniejszy=0,najwiekszy=0,lewy=0,prawy=0;
    int tab[n];
    while(b!=n){
        c=(std::rand()% 51);
        tab[b]=c;
        b=b+1;
        cout << c << endl;
    }
    int t1[n/2];
    int t2[n/2];

    return 0;
}
