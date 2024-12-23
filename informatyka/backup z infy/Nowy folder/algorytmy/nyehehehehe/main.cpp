#include <iostream>

using namespace std;

const double Pi = 3.14159;

double pole(double promien); //pole okregu
double pole(double promien,double wysokosc); //pole walca
int main()
{
    cout << "aby obliczyc pole walca nacisnije \"w\", okregu nacisnij \"o\": " ;
    char wybor ='w';
    cin >> wybor;
    cout << "podaj promien: ";
    double promien = 0;
    cin >> promien;

    if(wybor == 'w'){
            cout << "podaj wysokosc walca: ";
            double wysokosc = 0;
            cin >> wysokosc;

            //wywolanie funkcji
            cout << "pole walca to: " << pole(promien,wysokosc) << endl;
    }
    else
        cout << "pole okregu wynosi: " << pole(promien) << endl;

    return 0;

}
double pole(double promien){
    return Pi*promien*promien;
}
double pole(double promien,double wysokosc){
    return 2*pole(promien) + 2*Pi*promien*wysokosc;
}

