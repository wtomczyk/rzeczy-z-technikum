#include <iostream>

using namespace std;

int main()
{
    int *wwiek = new int;

    cout << "podaj wiek ";
    cin >> *wwiek;

    cout << "warotsc zmiennej wiek wynosi "<< *wwiek << " i jest przechowywana pod adresem " << hex << wwiek << endl;
    delete wwiek;
    return 0;
}
