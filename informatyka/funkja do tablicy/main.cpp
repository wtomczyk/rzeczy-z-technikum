#include <iostream>

using namespace std;

void pokaztablice(int liczby[],int rozmiar){
    for(int licznik = 0; licznik < rozmiar;++licznik)
        cout << liczby[licznik] << " ";
    cout << endl;
}
void pokaztablice(char znaki[],int rozmiar){
    for(int licznik = 0; licznik < rozmiar;++licznik)
        cout << znaki[licznik] << " ";
    cout << endl;
}

int main()
{
    int mojeliczby[4] = {24,58,-1,245};
    pokaztablice(mojeliczby, 4);
    char mojeznaki[7] = {'w','i','t','a','j','!','\0'};
    pokaztablice(mojeznaki, 7);
    return 0;
}
