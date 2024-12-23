#include <iostream>

using namespace std;

int funkcja(int* c,int* d){

    if(*c>*d){
        return *d;
    }
    else{
        return *c;
    }


}
int main()
{
    int a=0;
    int b=0;
    int *aa=&a;
    int *bb=&b;
    cout << "podaj dwie wartosci do porownania" << endl;
    cin >> a;
    cin >> b;

    cout << "mniejsza to " << funkcja(aa,bb) << endl;
    return 0;
}
