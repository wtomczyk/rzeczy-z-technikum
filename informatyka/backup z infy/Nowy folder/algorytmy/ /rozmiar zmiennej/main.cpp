#include <iostream>

int main()
{
    using namespace std;
    cout << "Okreslenie rozmiarow zmiennych C++" << endl;

    cout << "Rozmiar zmiennej typu bool: " << sizeof(bool) << endl;
    cout << "Rozmiar zmiennej typu char: " << sizeof(char) << endl;
    cout << "Rozmiar zmiennej typu unsigned short int: " << sizeof(unsigned short) << endl;
    cout << "Rozmiar zmiennej typu short int: " << sizeof(short) << endl;
    cout << "Rozmiar zmiennej typu unsigned long int: " << sizeof(unsigned long) << endl;
    cout << "Rozmiar zmiennej typu long: " << sizeof(long) << endl;
    cout << "Rozmiar zmiennej typu int: " << sizeof(int) << endl;
    cout << "Rozmiar zmiennej typu unsigned long long: "<< sizeof(unsigned long long)<< endl;
    cout << "Rozmiar zmiennej typu long long: " << sizeof(long long) << endl;
    cout << "Rozmiar zmiennej typu unsigned int: " << sizeof(unsigned int) << endl;
    cout << "Rozmiar zmiennej typu float: " << sizeof(float) << endl;
    cout << "Rozmiar zmiennej typu double: " << sizeof(double) << endl;

    cout << "Otrzymane dane wyjsciowe zaleza od kompilatora, sprzetu i systemu operacyjnego" << endl;

    return 0;
}
