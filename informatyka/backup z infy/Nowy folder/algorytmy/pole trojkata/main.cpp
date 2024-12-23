#include <iostream>

using namespace std;

double poletrojkata(double podstawa,double wysokosc);

int main()
{
    cout << "podaj podstawe trojkata: ";
    double podstawawejsciowa = 0;
    while (podstawawejsciowa<=0){
    cin >> podstawawejsciowa;
        if (podstawawejsciowa <0){
            cout << "podaj liczbe nieujemna" << endl;
        }}
    cout << "podaj wysokosc trojkat: ";
    double wysokoscwejsciowa = 0;
    while (wysokoscwejsciowa<=0){
    cin >> wysokoscwejsciowa;
        if (wysokoscwejsciowa <0){
            cout << "podaj liczbe nieujemna" << endl;
        }}


    cout << "pole trojkata to: " << poletrojkata(podstawawejsciowa,wysokoscwejsciowa) << endl;

    return 0;
}

double poletrojkata(double podstawa,double wysokosc){
    double pole = podstawa * wysokosc / 2;
    return pole;
}
