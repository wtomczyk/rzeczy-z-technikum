//dyrektywa preprocesora, która powoduje dołączenie pliku nagłówkowego iostream
#include <iostream>

//określenie przestrzeni nazw
//using namespace std;

//początek programu, blok funkcji main
int main()
{
    using std::cout;
    using std::endl;
//wyświetlanie komunikatu na ekranie w konsoli
    cout << "Hello world!" << endl;
    //zwrot wartości systemowi operacyjnemu
    return 0;
}
