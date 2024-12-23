#include <iostream>

using namespace std;

int ciagfibonacciego(int elementciagu){
    if(elementciagu < 2)
        return elementciagu;
    else//zastosowanie rekurencji, jesli elementciagu >=2
        return ciagfibonacciego(elementciagu - 1) + ciagfibonacciego(elementciagu -2);
}
int main()
{
    cout << "podaj, ktory element ciagu mam obliczyc (liczymy od 0): ";
    int element = 0;
    cin >> element;

    cout << "liczba ciagow fibonacciego to: " << ciagfibonacciego(element) << endl;
    return 0;
}
