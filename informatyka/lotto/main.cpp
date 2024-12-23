#include <iostream>
#include <iomanip>
#include <cmath>
#include <cstdlib>
#include <ctime>


using namespace std;

int main()
{
    cout << "w co chcesz zagrac?"<<endl;
    cout << "lotto (wybierz 1)" << endl;
    cout << "mini lotto (wybierz 2)"<< endl;
    cout << "multi multi (wybierz 3)" << endl;
    int a;
    cin >> a;
    cout << "ile razy chcesz zagrac?" << endl;
    int z=0;
    cin >> z;
    int y=0;
    for(y=0;y<z;y++){



    if(a==1){
    srand((unsigned)time(0));
    float *tablica = NULL;
    int iloscLiczb;
    float liczba;
    iloscLiczb = 6;
    try{
    tablica = new float[iloscLiczb];
    }
    catch(bad_alloc){
    cout << "brak miejsca";
    cin.ignore();
    return -1;
    }
    for (int licznik = 0;licznik<iloscLiczb;licznik++){

        liczba = (rand()%48)+1;
        *(tablica + licznik)=liczba;
    }
    cout << "numery to:" << endl;
    for(int licznik=0;licznik < iloscLiczb; licznik++){
        cout << setw(6) << *(tablica+licznik);
    }
    cout << endl;
    delete [] tablica;
    }



    else if(a==2){
         srand((int)time(0));
    float *tablica = NULL;
    int iloscLiczb;
    float liczba;
    iloscLiczb = 5;
    try{
    tablica = new float[iloscLiczb];
    }
    catch(bad_alloc){
    cout << "brak miejsca";
    cin.ignore();
    return -1;
    }
    for (int licznik = 0;licznik<iloscLiczb;licznik++){

        liczba = (rand()%41)+1;
        *(tablica + licznik)=liczba;
    }
    cout << "numery to:" << endl;
    for(int licznik=0;licznik < iloscLiczb; licznik++){
        cout << setw(6) << *(tablica+licznik);
    }
    cout << endl;
    delete [] tablica;
    }
    else if(a==3){




         srand((int)time(0));
    float *tablica = NULL;
    int iloscLiczb;
    float liczba;
    iloscLiczb = 20;
    try{
    tablica = new float[iloscLiczb];
    }
    catch(bad_alloc){
    cout << "brak miejsca";
    cin.ignore();
    return -1;
    }
    for (int licznik = 0;licznik<iloscLiczb;licznik++){

        liczba = (rand()%79)+1;
        *(tablica + licznik)=liczba;
    }
    cout << "numery to:" << endl;
    for(int licznik=0;licznik < iloscLiczb; licznik++){
        cout << setw(6) << *(tablica+licznik);
    }
    cout << endl;
    delete [] tablica;
    }
    else if(a!=1||a!=2||a!=3){
        cout << "nie wybrano gry"<< endl;
    }

    }
    return 0;
}
