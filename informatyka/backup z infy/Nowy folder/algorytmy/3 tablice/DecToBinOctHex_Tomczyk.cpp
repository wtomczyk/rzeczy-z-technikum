#include <iostream>
#include <cstdlib>

using namespace std;

int main()
{
    int DecNumbers[7] = {523,458,399,878,1001,1112,2056};
    char BinNumbers[7][100];
    char OctNumbers[7][100];
    char HexNumbers[7][100];

    for (int a=0;a<7;a=a+1)
    {
        itoa (DecNumbers[a], BinNumbers[a], 2);
        itoa (DecNumbers[a], OctNumbers[a], 8);
        itoa (DecNumbers[a], HexNumbers[a], 16);
    }
    for (int a=0; a<7; a=a+1)
    {
        cout << "Decymalne " << DecNumbers[a] << endl;
        cout << "Binarne " << BinNumbers[a] << endl;
        cout << "Oktalne " << OctNumbers[a] << endl;
        cout << "Hexadecymalne " << HexNumbers[a] << endl;
        cout << endl;
    }
    return 0;
}
