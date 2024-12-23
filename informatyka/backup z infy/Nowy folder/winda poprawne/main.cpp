#include <iostream>

using namespace std;

int main()
{
    int wagawindy=900;

int wagi[25]= {52,52,52,27,27,27,27,102,102,78,78,78,78,64,64,64,64,64,47,47,47,92,92,92,92};
int wzrost[25]= {160,160,158,125,125,125,125,180,180,172,172,172,172,160,160,160,170,170,150,150,150,179,179,179,179};

float proporcje[25];
for(int i=0; i<25; i++) proporcje[i]=wzrost[i]/wagi[i];

int zamiana;
do
{
    zamiana=0;
    for (int i=0; i<25; i++)
    {
        if (proporcje[i]>proporcje[i+1])
        {
            zamiana=zamiana+1;
            swap(proporcje[i],proporcje[i+1]);
            swap(wagi[i],wagi[i+1]);
            swap(wzrost[i],wzrost[i+1]);
        }
    }
}
while(zamiana!=0);
cout<<" do windy zmieœci siê osoba o: ";
for(int k=0; k<25; k++)
    if(wagi[k]<wagawindy)
    {
        wagawindy-=wagi[k];
        cout<<"wadze"<<wagi[k]<<" i "<<"wzroscie"<<wzrost[k]<<endl;

    };

return 0;
}
