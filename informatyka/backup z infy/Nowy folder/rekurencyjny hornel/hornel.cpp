#include <iostream>
using namespace std;
int rekurencja(int, int*, int);
int main()
{
    cout << "stopien wielomianu ";
    int n;
    cin >> n;
    int s;
        cout << "Podaj x " << endl;
        cin >> s;
    int a[n+1];
    for (int i=0; i <n; i=i+1)
    {
        cout << i+1 << " cyfra to ";
        cin >> a[i];
    }
    cout << "podaj wolny: " << endl;
    cin >> a[n];

    int w = rekurencja(n, a, s) + a[n];
    cout << "Wartosc " << w << endl;
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
