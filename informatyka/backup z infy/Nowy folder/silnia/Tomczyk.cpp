#include <iostream>

using namespace std;

 int silnia(int a)
 {


    if (a == 0)
        return 1;
    return (a*silnia(a-1));
}
int main()
{
    int b=0,a=0;
    while(a<=10){
            cout << "silnia z " << b << " to " << silnia(b) << endl;
            b=b+1;
            a=a+1;}

    return 0;
}
