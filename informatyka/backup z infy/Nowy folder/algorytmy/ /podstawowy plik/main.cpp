//dyrektywa preprocesora, kt�ra powoduje do��czenie pliku nag��wkowego iostream
#include <iostream>

//okre�lenie przestrzeni nazw
//using namespace std;

//pocz�tek programu, blok funkcji main
int main()
{
    using std::cout;
    using std::endl;
//wy�wietlanie komunikatu na ekranie w konsoli
    cout << "Hello world!" << endl;
    //zwrot warto�ci systemowi operacyjnemu
    return 0;
}
