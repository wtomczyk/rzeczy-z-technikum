#listy

bicycles = ["aaa", "aaaaa", "a", "aaaaaaa"]
print(bicycles)
print(bicycles[0])
print(bicycles[1].upper())
print(bicycles[-1])

cars = ["aaaaaa","bbbbbb","cccc","dddd","eeee"]
print(cars)
cars[1]="fffff"
print(cars)
cars.append("gggg")
print(cars)
cars = []
cars.append("aaaa")
cars.append("aaaa")
cars.append("aaaa")
cars.append("aaaa")
cars.append("aaaa")
cars.append("aaaa")
print(cars)
cars.insert(1,"sss")
print(cars)
del cars[3]
print(cars)
cars.pop()
print(cars)
cars.remove("aaaa")
print(cars)