alien0 = {
    'color': 'zielony',
    'points': '5'
}
alien1 = {
    'color': 'czerwony',
    'points': '10'
}
alien2 = {
    'color': 'niebieski',
    'points': '15'
}
aliens = [alien0, alien1, alien2]
for alien in aliens:
    print(alien)
for alien in aliens[:1]:
    print(alien)

favoriteLanguages = {
    'janek': ['python', 'html'],
    'tomek': ['c','c++'],
    'pawel': ['js'],
    'michal': ['c#','bootstrap','css'],
    'jozin': ['python']
}
for name, languages in favoriteLanguages.items():
    print('\nulubione jezyki programowania uzytkownika ' + name.title() + " to: ")
    for language in languages:
        print('\t' + language.title())

users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton'
    },
    'mcurie':{
        'first': 'maria',
        'last': 'sklodowska',
        'location': 'paryz'
    }
}
for userName, userInfo in user.items():
    print('\nnazwa uzytkownika: ' + userName)
    fullName = userInfo['first'] + ' ' + userInfo['last']
    location = userInfo['location']
    print('\timie i nazwisko: ' + fullName.title())
    print('\tmiejscowosc: ' + location.title())