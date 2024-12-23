#include <iostream>
using namespace std;
int rekurencja(int, int*, int);
int main()
{
    cout << "ilosc cyfr liczby ";
    int n;
    cin >> n;
    int s;
    while (true)
    {
        cout << "Podaj system liczbowy od 2 do 9 ";
        cin >> s;
        cout << endl;
        if (s > 1 && s < 10)
        break;
    }
    int a[n];
    for (int i=0; i<n; i=i+1)
    {
        cout << i+1 << " cyfra to ";
        cin >> a[i];
        if (a[i] >= s || a[i] < 0)
        {
            i=i-1;
            cout << "podaj poprawna dane " << endl;
        }
    }
    n=n-1;
    int w = rekurencja(n, a, s);
    cout << "Wartosc w systemie dziesietnym " << w << endl;
    return 0;
}
int rekurencja(int n, int a[], int s)
{
    cout << "Petla numer " << n+1 << endl;
    if (n == 0)
    {
        return a[n];
    }
    else
    {
        n=n-1;
        return (rekurencja(n, a, s)*s+a[n]);
    }
}
