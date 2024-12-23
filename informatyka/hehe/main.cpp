//dyrektywa preprocesora, która powoduje do³¹czenie pliku nag³ówkowego iostream
#include <iostream>

//okreœlenie przestrzeni nazw
//using namespace std;

//pocz¹tek programu, blok funkcji main
int main()
{
    using std::cout;
    using std::endl;
//wyœwietlanie komunikatu na ekranie w konsoli
    cout << "Hello world!" << endl;
    //zwrot wartoœci systemowi operacyjnemu
    return 0;
}
