for value in range(1,10):
    print(value)

numbers = list(range(1,6))
print(numbers)

evenNumbers = list(range(2,21,2))
print(evenNumbers)

squares = []
for value in range(1,11):
    square = value ** 2
    squares.append(square)
print(squares)
print(min(squares))
print(max(squares))
print(sum(squares))

squares = [value ** 2 for value in range(1,11)]
print(squares)

