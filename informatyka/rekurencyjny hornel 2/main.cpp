#include<iostream>
#include<cstdlib>
using namespace std;

int horner(int wsp[],int st, int x)
{
	if(st==0)
		return wsp[0];

	return x*horner(wsp,st-1,x)+wsp[st];
}

int main()
{
	int *wspolczynniki;
	int stopien, argument;

	cout<<"Podaj stopieñ wielomianu: ";
	cin>>stopien;

	wspolczynniki = new int [stopien+1];

	//wczytanie wspó³czynników
	for(int i=0;i<=stopien;i++)
	{
		cout<<"Podaj wspó³czynnik stoj¹cy przy potêdze "<<stopien-i<<": ";
		cin>>wspolczynniki[i];
	}

	cout<<"Podaj argument: ";
	cin>>argument;

	cout<<"W( "<<argument<<" ) = "<<horner(wspolczynniki,stopien,argument)<<endl;

	delete [] wspolczynniki;
	system("pause");
	return 0;
}
