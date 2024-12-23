#include <iostream>

using namespace std;

void Kwadrat(int &liczba){
liczba*=liczba;
}
int main()
{
    cout << "podaj liczbe, ktora chcesz podniesc do kwadratu: ";
    int liczba = 0;
    cin >> liczba;

    Kwadrat(liczba);
    cout << "kwadrat to: "<< liczba << endl;

    return 0;
}
