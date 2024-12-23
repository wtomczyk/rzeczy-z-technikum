#include <iostream>

using namespace std;

int main()
{
    cout << "Podaj dwie liczby: " << endl;
    int liczba1 = 0, liczba2 = 0;
    cin >> liczba1;
    cin >> liczba2;

    int wartoscMAX = (liczba1 > liczba2)? liczba1 : liczba2;
    cout << "sposrod " << liczba1 << " i " << liczba2 << " wieksza wartoscia jest " << wartoscMAX << endl;
    return 0;
}
