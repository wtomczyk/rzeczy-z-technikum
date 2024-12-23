car = {'color': 'czerwony', 'liczbaDrzwi': 4}
print(car)

print(car['color'])

car['rok'] = 2012

print(car)

car['color'] = 'zielony'
print(car)
del car['liczbaDrzwi']
print(car)

favoriteLanguages = {
    'janek': 'python',
    'tomek': 'c++',
    'pawel': 'js',
    'michal': 'c#'
}
print('aaaaaa ' + favoriteLanguages['tomek'].title() + " .")