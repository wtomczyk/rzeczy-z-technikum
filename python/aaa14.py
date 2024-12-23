rok = 0
rok = int(input("podaj rok: "))
if rok%400 == 0:
    print("rok przestepny")
elif rok%4 == 0:
    if rok%100 != 0:
        print("rok przestepny")
    else:
        print("rok nie przestepny")
else:
    print("rok nie przestepny")
