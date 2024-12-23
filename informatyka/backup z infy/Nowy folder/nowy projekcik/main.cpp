#include <iostream>

using namespace std;

const double Pi = 3.14159;

void pole(double promien,double& wynik){
    wynik = Pi*promien*promien;
}

int main()
{
    cout << "podaj promien: ";
    double promien=0;
    cin >> promien;
    double polekola=0;
    pole(promien, polekola);
    cout << "pole wynosi: " << polekola << endl;
    return 0;

}
