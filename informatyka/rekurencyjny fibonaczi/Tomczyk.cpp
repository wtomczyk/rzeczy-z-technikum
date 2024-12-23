#include <iostream>

using namespace std;

int ciagfibonacciego(int elementciagu){
    if(elementciagu < 2)
        return elementciagu;
    else
        return ciagfibonacciego(elementciagu - 1) + ciagfibonacciego(elementciagu -2);
}
int main()
{
    cout << "dla elementu " << 0 << " ciag to " << 0 << endl;
    int element=1;
    while (element<20){
        cout << "dla elementu " << element+1 << " ciag to " << ciagfibonacciego(element) << endl;
        element=element+1;}
    return 0;
}
