cars = ['honda', 'opel', 'audi','seat','bmw','volvo']
print(cars[0:3])
print(cars[1:3])
print(cars[:4])
print(cars[2:])
print(cars[-3:])

for car in cars[:3]:
    print(car.upper())

myCars = ['honda', 'opel', 'audi','seat','bmw','volvo']
friendCars = myCars[:]
print(myCars)
print(friendCars)
myCars.append('skoda')
friendCars.append('mercedes')
print(myCars)
print(friendCars)

