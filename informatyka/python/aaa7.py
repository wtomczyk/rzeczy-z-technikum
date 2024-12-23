cars = ['honda', 'opel', 'audi','seat','bmw','volvo']
for car in cars:
    if car == 'bmw':
        print(car.upper())
    else:
        print(car.title())
if 'vw' in cars:
    print('jest na liscie')
else:
    print("brak pojazdu")

if 'vw' not in cars:
    print("brak pojazdu")
else:
    print('jest na liscie')
age = 12
if age < 4:
    print("cena biletu to 0 zł")
elif age < 18:
    print("cena biletu to 5 zł")
else:
    print("cena biletu to 10zł")
age = int(input("podaj wiek: "))