
liczba = 0
lista = []
for value in range(1,11):
    liczba = int(input("podaj liczbe: "))
    lista.append(liczba)
print(sum(lista))
print(max(lista))
print(min(lista))
liczba = 0
liczba = int(input("podaj liczbe: "))
if liczba > 0:
    print("liczba jest dodatnia")
elif liczba == 0:
    print("liczba jest równa zero")
else:
    print("liczba jest ujemna")
podstawa = 0
wysokosc = 0
podstawa = int(input("podaj podstawe: "))
wysokosc = int(input("podaj wysokosc: "))
print(podstawa*wysokosc/2)

for x in range(0, 1001, 9):
    print(x)
rok = 0
rok = int(input("podaj rok: "))
if rok%400 == 0:
    print("rok przestepny")
elif rok%4 == 0:
    if rok%100 != 0:
        print("rok przestepny")
else:
    print("rok nie przestepny")
