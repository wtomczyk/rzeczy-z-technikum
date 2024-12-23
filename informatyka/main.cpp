#include <iostream>

using namespace std;

int horn(int, int*, int);

int main()
{
    cout << "Podaj ilosc cyfr liczby:\t";
    int n;
    cin >> n;

    int system;

    while (true)
    {
        cout << "Podaj system liczbowy (2-9):\t";
        cin >> system;
        cout << endl;
        if (system > 1 && system < 10)
            break;
    }

    int a[n];
    for (int i = 0; i < n; i++)
    {
        cout << i+1 << ". cyfra to:\t";
        cin >> a[i];
        if (a[i] >= system || a[i] < 0)
        {
            i--;
            cout << "Bledne dane!" << endl;
        }
    }
    n--;
    int wartosc = horn(n, a, system);

    cout << "Wartosc w dziesietnym: " << wartosc << endl;
    return 0;
}


int horn(int n, int a[], int system)
{
    cout << "Petla numer: " << n+1 << endl;
    if (n == 0)
    {
        return a[n];
    }
    else
    {
        n--;
        return (horn(n, a, system) * system + a[n]);
    }
}
