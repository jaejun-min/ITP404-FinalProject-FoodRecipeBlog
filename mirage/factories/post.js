import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  id(i){
    return `${i+1}`;
  },
  title(i) {
    return faker.list.cycle('Chicken Vesuvio', 'Creamy pasta', 'Lobster Roll', 'Chicken Ramen', 'Shaved Asparagus Pizza recipes', 'Steak & Chips Salad', 'Mixed Greens Salad', 'Orange & Avocado Salad', 'The Ultimate Burger', 'The Pastrami Burger Bomb Recipe')(i);
  },
  ingredient(i){
    return faker.list.cycle(`1) 1/2 cup olive oil, 2) 5 cloves garlic, peeled, 3) 2 large russet potatoes, 4) peeled and cut into chunks, 5) 1 3-4 pound chicken, 6) cut into 8 pieces (or 3 pound chicken legs), 7) 3/4 cup white wine, 8) 3/4 cup chicken stock, 9) 3 tablespoons chopped parsley, 10) 1 tablespoon dried oregano, 11) Salt and pepper, 12) 1 cup frozen peas, thawed`,
  "1) 12 oz (340 g) pasta, 2) 2 garlic cloves, 3) 7 oz (200 g) grated emmentaler cheese, 4) 1.4 oz (40 g) grated parmesan cheese, 5) ¼ cup (60 ml) sour cream, 6) ½ cup (120 g) yogurt, 7) 3 tbsp butter, 8) Salt, 9)Pepper, 10) Chopped fresh parsley",
  "1) Two 1-pound lobsters or 1 cup cooked lobster meat, 2) 1 1/2 to 2 tablespoons mayonnaise, 3) 1 1/2 teaspoons fresh lemon juice, 4) 1/2 teaspoon grated lemon zest, 5) 1 tablespoon minced fresh chives, 6) 1 tablespoon very finely chopped scallion, 7) Salt and freshly ground black pepper, 8) 1 tablespoon unsalted butter, 9) Two 3-inch chunks baguette (you can substitute 2 hot dog rolls if you must)",
  "1) 2 pounds chicken bones, 2) 1 pound chicken wing tips, 3) 1 small leek cut into 4 pieces, 4) 2 length ginger sliced into 8 coins, 5) 4 large cloves garlic unpeeled, 6) vegetable oil for frying the aromatics, 7) 4 inch piece kombu, 8) 10 cups water, 9) 1/4 cup sesame oil, 10) 3 scallions white part only, minced, 11) 1 tablespoon soy sauce, 12) 1 cup soy milk, 13) Salt, 14) 4 servings ramen noodles boiled according to package directions",
  "1) 1 recipe Really Simple Pizza Dough or your favorite pizza dough, 2) 1/2 pound asparagus, 3) 1/4 cup grated Parmesan, 4) 1/2 pound mozzarella, shredded or cut into small cubes, 5) 2 teaspoons olive oil, 6) 1/2 teaspoon coarse salt, 7) black pepper, 8) 1 scallion, thinly sliced",
  "1) 750.0g bag frozen potato wedges, 2) 1.0 tbsp olive oil, 3) 2 pieces sirloin steak , about 350g/12oz in total, 4) 120.0g bag herb salad, 5) 6.0 tbsp honey and mustard salad dessing , bought or homemade",
  "1) 6 to 8 cups fresh salad greens: red or green leaf lettuce, romaine heartsarugula, watercress, spinach, or frisée, or a mixtur, 2) 1/4 cup Classic Vinaigrette (see note), plus more for passing",
  "1) 2 1/2 pounds skirt steak or sirloin flap steak, 2) Accompaniments: homemade burger buns ; homemade ketchup ; homemade mustard ; homemade pickle relish ; lettuce and tomato ",
  "1) 20 ounces fresh ground beef, about 20% fat, 2) 1/4 cup mayonnaise, 3) 2 tablespoons ketchup, 4) 2 teaspoons white vinegar, 5) 1 teaspoon sugar, 6) 2 teaspoons sweet pickle relish, 7) 1/2 pound pastrami, sliced very thin, 8) 4 hearty burger buns, toasted, 9) Kosher salt and freshly ground black pepper, 10) 4 slices swiss cheese, 11) 1 1/2 cups creamy cole slaw")(i);
  },
  calorie(i){
    return faker.list.cycle(4230, 2732, 1223, 6237, 1544, 5295, 328, 1026, 2211, 3140)(i);
  },
  time(i){
    return faker.list.cycle(60, 15, 30, 20, 45, 20, 15, 10, 285, 20)(i);
  },
  img(i){
    return faker.list.cycle("https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    "https://www.edamam.com/web-img/c66/c661f2829c1c1454763501816b5895f7.jpg",
    "https://www.edamam.com/web-img/e3d/e3dd11608c7172b158d2a0b6485ecf98.jpg",
    "https://www.edamam.com/web-img/15b/15b3c28a2df3910ec02e68b771de33a3.jpg",
    "https://www.edamam.com/web-img/69b/69b8d995e081e796213efba80596e8ce",
    "https://www.edamam.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg",
    "https://www.edamam.com/web-img/893/893b3132c9db111710d5e823a1a84dd7.jpg",
    "https://www.edamam.com/web-img/e2b/e2b95cea78351738bfcd4ae9a1c88c53.jpg",
    "https://www.edamam.com/web-img/cdb/cdb50c7da0e97996995519e18fcc654a.jpg",
    "https://www.edamam.com/web-img/77d/77d71d0e0deec9db51434fe1effba84d.jpg"
  )(i);
  }
});
