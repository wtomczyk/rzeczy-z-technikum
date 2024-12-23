#include <iostream>

using namespace std;

int main()
{
    cout << "Podaj dlugosc ciagu" << endl;
    int dlugosc = 0;
    cin >> dlugosc;

    int ciag[dlugosc];
    bool rosn = true;
    bool malej = true;
    bool nierosn = true;
    bool niemalej = true;

    for (int i = 0; i < dlugosc; i++)
    {
        cout << "Podaj " << i+1 << " liczbe ciagu:\t";
        cin >> ciag[i];
    }

    for (int i = 0; i < dlugosc - 1; i++)
    {
        if (ciag[i] >= ciag[i+1])
        {
            rosn = false;
        }

        if (ciag[i] <= ciag[i+1])
        {
            malej = false;
        }

        if (ciag[i] < ciag[i+1])
        {
            nierosn = false;
        }

        if (ciag[i] > ciag[i+1])
        {
            niemalej = false;
        }
    }

    if(rosn)
        cout << "Ciag jest rosnacy" << endl;

    if(malej)
        cout << "Ciag jest malejacy" << endl;

    if(nierosn)
        cout << "Ciag jest nierosnacy" << endl;

    if(niemalej)
        cout << "Ciag jest niemalejacy" << endl;

    if( !(rosn || malej || nierosn || niemalej))
        cout << "Ciag jest niemonotoniczy" << endl;

    return 0;
}
