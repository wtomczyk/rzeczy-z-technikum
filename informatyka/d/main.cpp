void zamien(int & liczba1, int & liczba2)
{
int pamiec = liczba1;
liczba1 = liczba2;
liczba2 = pamiec;
return;
}

//scala tablice
void merge(int T[], int t[], int start, int middle, int end)
{
for(int i = start; i < middle; i++)
t[i - start] = T[i];

int Ti = start;
int i1 = 0;
int i2 = middle;
while ((i1 + start) < middle and i2 < end)
{
if (t[i1] <= T[i2])
T[Ti++] = t[i1++];
else
T[Ti++] = T[i2++];
}
for (i1; (i1 + start) < middle; i1++)
T[Ti++] = t[i1];

return;
}

//sortowanie przez scalanie
//funkcja rekurencyjna - podzial tablicy i ich ponowne scalanie
void mergesort_with_table(int T[], int t[], int start, int end)
{
if (end - start > 2)
{
mergesort_with_table(T, t, start, ((end - start) / 2) + start);
mergesort_with_table(T, t, ((end - start) / 2) + start, end);
merge(T, t, start, ((end - start) / 2) + start, end);
}
else if (end - start == 2)
if (T[start] > T[end - 1])
zamien(T[start], T[end - 1]);
else if (end - start == 1)
return;
}

//sortowanie przez scalanie - punkt wejsciowy do sortowania
void mergesort(int T[], int start, int end)
{
int t[(end - start)/2];
mergesort_with_table(T, t, start, end);
return;
}

//program
int main()
{
//  ios_base::sync_with_stdio(0);

srand(time(NULL));

int ROZMIAR;
int ZAKRES;
cout << "Podaj rozmiaj tablicy: ";
cin >> ROZMIAR;
cout << "Podaj zakres liczb ( 0 - n ): ";
cin >> ZAKRES;
ZAKRES++;

int T[ROZMIAR];
for (int i = 0; i < ROZMIAR; i++)
T[i] = rand()%ZAKRES;

//  for (int i = 0; i < ROZMIAR; i++)
//      cout << T[i] << " ";
//  cout << endl;

mergesort(T, 0, ROZMIAR);

//  for (int i = 0; i < ROZMIAR; i++)
//      cout << T[i] << " ";
//  cout << endl;

bool test = true;
for (int i = 0; i+1 < ROZMIAR; i++)
if (T[i] > T[i+1])
test = false;
if (test) cout << "OK!"; else cout << "Nie bangla!"; cout << endl;
return 0;
}
