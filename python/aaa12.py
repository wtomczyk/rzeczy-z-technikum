currentNumber = 1
while currentNumber <= 5:
    print(currentNumber)
    currentNumber +=1

prompt = 'dowolny tekst '
prompt += 'n\wpisz "koniec" jesli chcesz skonczyc'

message = ''
while message != 'koniec':
    message = input(prompt)
    print(message)

active = True
message = ''
while active:
    message = input(prompt)
    if message == 'koniec':
        active = False
    else:
        print(message)