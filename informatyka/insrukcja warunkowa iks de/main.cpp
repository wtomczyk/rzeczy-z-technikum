#include <iostream>

using namespace std;

int main()
{
   cout << "podaj dwie liczby: " << endl;
   float liczba1 = 0, liczba2 = 0;
   cin >> liczba1;
   cin >> liczba2;

   cout << "nacisnij 'd' , aby wykonac dzielenie, inny klawisz oznacza mnozenie: ";
   char decyzja = '\0';
   cin >> decyzja;

   if (decyzja == 'd'){
        cout << "wybrales dzielenie" << endl;
            if (liczba2 != 0){
                cout << "to nie jest dzielenie przez zero, przechodze do obliczen: " << endl;
                cout << liczba1 << " / " << liczba2 << " = " << liczba1 / liczba2 << endl;
            }
            else{
                cout << "nie dzielimy przez zero" << endl;
            }
   }
   else{
    cout << "wybrales mnozenie" << endl;
    cout << liczba1 << " * " << liczba2 << " = " << liczba1 * liczba2 << endl;
   }
    return 0;
}
