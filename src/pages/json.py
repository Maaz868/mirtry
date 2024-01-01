import json


file="data.json"

data = [
    {
      'id': 1,
      'title': 'My Trip to Paris',
      'content': "Whether you are a history buff, a fashion lover, or simply seeking romance, Paris promises to be a trip of a lifetime. Bon voyage!",
      'author': 'Faiq Jamal',
      'date': 'March 10, 2023',
      'imgSrc': 'https://culturetourist.com/wp-content/uploads/2022/03/P1100351-630x420.webp'
    },
    {
      'id': 2,
      'title': 'My Favorite Recipe',
      'content': "Indulge in the rich and comforting flavors of my favorite recipe, a dish that is sure to warm your heart and satisfy your taste buds.",
      'author': 'Faiq Jamal',
      'date': 'March 15, 2023',
      'imgSrc': 'https://moonshinerecipe.org/wp-content/uploads/2022/04/Meal-Recipe.jpg'
    }
]

with open(file, "w") as f:
    json.dump(data,f,indent=2)