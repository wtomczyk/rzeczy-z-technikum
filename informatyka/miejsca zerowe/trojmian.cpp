#include <iostream>
#include <cmath>

using namespace std;

float funkcja(float* a, float* b, float* c){
float delta=*b * (*b) - 4 * *a * *c;
if(delta<0){
    cout << "brak miejsc zerowych" << endl;
    return 0;
}
else if(delta==0){
    float qqq=-(*b)/(2 * *a);
    cout << "miejsce zerowe to" << qqq << endl;
    return qqq;
}
else{
    float pierwszy=(-(*b)-(sqrt(delta)))/(2 * *a);
    float drugi=(-(*b)+(sqrt(delta)))/(2 * *a);

    cout << "miejsca zerowe to " << pierwszy << " i " << drugi << endl;
}
}
int main()
{
    float aa=0;
    float bb=0;
    float cc=0;
    float *aaa=&aa;
    float *bbb=&bb;
    float *ccc=&cc;
    cout << "podaj a" << endl;
    cin >> aa;
    cout << "podaj b" << endl;
    cin >> bb;
    cout << "podaj c" << endl;
    cin >> cc;
    funkcja(aaa, bbb, ccc);
    return 0;
}
