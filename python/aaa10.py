user = {
    'login': 'jkowalski',
    'firstName': 'Jan',
    'lastname': 'Kowalski'
}
for key, value in user.items():
    print('\nKlucz: ' + key)
    print('wartosc: ' + value)

favoriteLanguages = {
    'janek': 'python',
    'tomek': 'c++',
    'pawel': 'js',
    'michal': 'c#',
    'jozin': 'python'
}
print('iteracja przez klucze')
for name in favoriteLanguages.keys():
    print(name.title())
print('iteracja przez klucze posortowane')
for name in sorted(favoriteLanguages.keys()):
    print(name.title())
print('iteracja przez wartosci')
for language in favoriteLanguages.keys():
    print(language.title())
print('iteracja przez unikatowe wartosci')
for language in set(favoriteLanguages.keys()):
    print(language.title())