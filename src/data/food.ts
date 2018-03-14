const data = [
  "Chicken",
  "Shrimp",
  "Beef",
  "Taco",
  "Naan",
  "Beets",
  "Cabbage",
  "Cauliflower",
  "Celery",
  "Cucumber",
  "Eggplant",
  "Mushrooms",
  "Peppers, bell",
  "Spinach",
  "Tomato",
  "Turnip",
  "Zucchini",
  "Nectarine",
  "Peach",
  "Mango ",
  "Banana",
  "Grapefruit",
  "Orange",
  "Plum",
  "Kiwi",
  "Apple",
  "Pear",
  "Berries",
  "Watermelon",
  "Grapes",
  "Cherries",
  "Dried fruit",
  "Corn, 1 ear",
  "Whole grain Bread",
  "Whole grain Cereal cold",
  "Barley",
  "Bulgur",
  "Wild rice",
  "Whole grain pasta/noodles",
  "Whole wheat couscous",
  "Potato",
  "Brown rice",
  "Sweet potato",
  "Whole wheat tortilla",
  "Whole grain Pita",
  "Whole grain Bagel",
  "Whole wheat waffle",
  "Whole grain Muffin",
  "Plain popcorn",
  "herring",
  "mackerel",
  "trout",
  "salmon",
  "sardines",
  "squid",
  "tuna",
  "Egg",
  "Beans, yellow",
  "Beans, cooked and canned",
  "Peas",
  "Snow peas",
  "tofu",
  "Peanut butter",
  "Hummus",
  "Lentils",
  "salmon",
  "tuna",
  "ptarmigan",
  "partridge",
  "turkey",
  "goose",
  "grouse",
  "lamb",
  "pork",
  "Milk",
  "Fortified soy beverage",
  "Milk, powdered",
  "Yogurt",
  "Evaporated canned milk",
  "Cheese, block",
  "Cheese, cottage or quark",
  "Apple Berry crumble, President's Choice Blue Menu",
  "White Bagel",
  "Pineapple",
  "Prunes, pitted",
  "Raisins",
  "Strawberry fruit leather",
  "Whole Grain Baguette, President's Choice Blue Menu",
  "Cranberry juice cocktail",
  "Orange juice",
  "Tomato juice, President's Choice Blue Menu",
  "Tomato juice, no sugar",
  "Baked Beans, canned",
  "Blackeyed beans",
  "Butter beans",
  "Chickpeas",
  "Haricot/Navy beans, boiled",
  "Haricot/Navy beans",
  "Kidney beans",
  "Lentils",
  "Marrowfat peas, dried, boiled",
  "Pinto beans, steamed",
  "Soya beans, dried, boiled",
  "Soya beans, canned",
  "Chocolate bar",
  "SlimFast French Vanilla ready-to-drink shake",
  "McChicken burger",
  "Chicken Nuggets",
  "mashed potato (McCain, McCain Foods, USA) eaten with 62 g cheese and 16 g butter",
  "Parboiled rice (Uncle Bens Converted, Mars, USA) consumed with 68 g cheese and 14 g butter",
  "Pizza: Stone Baked Whole Wheat - Vegetable, Pesto and Feta Cheese, President's Choice Blue Menu",
  "Tandoori Chicken",
  "White Bread (Wonder Bread, Interstate Bakeries) (140 g), consumed with 30 g raw almonds",
  "White bread",
  "Enercal Plus, made from powder",
  "Ensure Pudding, old fashioned vanilla",
  "Glucerna, diabetes-specific enteral formula",
  "Glucerna, vanilla flavor",
  "Glucerna",
  "Glucerna SR, diabetes-specific enteral formula",
  "French vanilla Resource Diabetic",
  "Bread made from flax meal & wheat flour",
  "Cashew nuts",
  "Instant noodles, all flavors",
  "Proti pasta, protein-enriched, boiled in water",
  "Spaghetti",
  "Durum semolina spaghetti",
  "Wholemeal",
  "spaghetti: President's Choice Blue Menu Whole Wheat",
  "Muesli bread, made from packet mix in bread making machine",
  "Chocolate",
  "Chocolate candy, sugar free",
  "Cocoavia Chocolate Covered Almonds",
  "Cheddar Cheese Crackers",
  "Cheddar Cheese Pretzels",
  "Apple Fruit Bar, fat-free, President's Choice Blue Menu",
  "Fig Fruit bar, President's Choice Blue Menu",
  "Cinnamon Chewy Bar: Fruit & Yogurt Apple (Soy) President's Choice Blue Menu",
  "Raspberry Fruit bar, fat-free, President's Choice Blue Menu",
  "Strawberry fruit leather",
  "Milk Chocolate Granola bar with M&M's Milk Chocolate Mini Baking Bits",
  "Whole-Grain bars, chocolate chip",
  "Milk Chocolate Granola bars Peanut Butter flavor",
  "M & M",
  "Burger Buns: 100% Whole wheat Gigantico President's Choice Blue Menu",
  "Mars Bar",
  "Milky Way bar",
  "Milky Way Lite bar",
  "Hot Dog Rolls: 100% Whole wheat Gigantico President's Choice Blue Menu",
  "Pirate's Booty",
  "Popping Corn: Microwave, butter flavor, President's Choice Blue Menu",
  "Popcorn",
  "Potato crisps, plain, salted",
  "Tomato Basil Vegetable Sticks: President's Choice Blue Menu Original",
  "Granola Bar: Chewy Chocolate Chip & Marshmallow  President's Choice Blue Menu",
  "Granola Bar: Chewy Cranberry Apple President's Choice Blue Menu",
  "Chocolate Raspberry Zing bar",
  "Chocolate Almond Snack bar",
  "Cripsy Chocolate Bar",
  "Apple Cinnamon Delight Bar",
  "Chocolate Delight Bar",
  "Peanut Delight Bar",
  "Munch Peanut Butter bar",
  "Oat bar, made from oat flour and bran starch",
  "Peanut Butter Chocolate Pal bar",
  "Slimfast Meal Options bar, rich chocolate brownie",
  "Snack bar, Apple Cinnamon",
  "Snack bar, Peanut Butter and Choc-Chip",
  "Snickers Bar",
  "Sunshine soy protein chips, lightly salted",
  "Twix Cookie Bar, caramel",
  "Clif bar, Chocolate Brownie Energy bar",
  "Performance Chocolate Energy bar",
  "VO2 Max Chocolate Energy bar",
  "ZonePerfect Nutrition bar, Double Chocolate flavor",
  "Barley Vegetable Instant soup, low-fat President's Choice Blue Menu",
  "Carrot soup, President's Choice Blue Menu Soupreme",
  "Indian Lentil Instant soup, low-fat President's Choice Blue Menu",
  "Lentil, ready-to-serve, President's Choice Blue Menu",
  "Minestrone",
  "Minestrone & Pasta Instant soup, low-fat President's Choice Blue Menu",
  "Mushroom Barley, ready-to-serve, President's Choice Blue Menu",
  "Pasta & Fagioli soup, ready-to-serve, President's Choice Blue Menu",
  "Spicy Black Bean Instant soup, low-fat, President's Choice Blue Menu",
  "Spicy Black Bean with Vegetables soup President's Choice Blue Menu",
  "Spicy Thai Instant soup, low-fat, President's Choice Blue Menu",
  "Tomato soup, condensed, prepared with water",
  "Tomato & Herb, President's Choice Blue Menu Soupreme",
  "Vegetable Couscous Instant soup, low-fat, President's Choice Blue Menu",
  "Vegetarian Chili Instant soup, low-fat, President's Choice Blue Menu",
  "Winter Squash, President's Choice Blue Menu Soupreme",
  "Organic Agave Cactus Nectar, light, 90% fructose",
  "Organic Agave Cactus Nectar, light, 97% fructose",
  "Premium Agave nectar",
  "Clover honey, ratio of fructose: glucose, 1.09",
  "Buckwheat honey, ratio of fructose:glucose, 1.12",
  "Cotton honey, ratio of fructose:glucose, 1.03",
  "Tupelo honey, ratio of fructose:glucose, 1.54",
  "Honey",
  "Pea, frozen, boiled",
  "Sweet corn, boiled",
  "Carrots",
  "Russet, baked without fat",
  "Red potatoes, boiled with skin on in salted water for 12 min",
  "red potatoes, cubed",
  "French Fries, baked 15 min",
  "white potato: Prince Edward Island",
  "Russet Burbank potato, unpeeled, cooked in microwave for 18 min",
  "California white potatoes, cubed, roasted in soybean oil",
  "White flour",
  "Lychee",
  "Blueberry muffin",
  "Wholemeal flour",
  "Cranberry & Orange Soy muffin, President's Choice Blue Menu",
  "English Muffin bread",
  "English Muffin, Whole Grain Multigrain President's Choice Blue Menu",
  "Raisin Bran Flax muffin, President's Choice Blue Menu",
  "Whole Grain bread",
  "Raspberry Pomegranate muffin, President's Choice Blue Menu",
  "Bran Flakes, President's Choice Blue Menu",
  "Cornflakes",
  "Cornflakes",
  "Fibre First Multi-Bran Cereal, President's Choice Blue Menu",
  "Granola Clusters, Original, low fat President's Choice Blue Menu",
  "Granola Clusters, Raisin & Almond, low fat President's Choice Blue Menu",
  "Grapenuts",
  "cereal, apple & cinnamon",
  "cereal, unflavored",
  "Kashi Seven Whole Grain Puffs",
  "Muesli",
  "Porridge, made from rolled oats cooked for 20 min",
  "Porridge, made from steel-cut oats, cooked in water",
  "Old-Fashioned Steel Cut Oats, President's Choice Blue Menu",
  "Porridge",
  "Multi grain instant oatmeal, Regular and Cinnamon & Spice, President's Choice Blue Menu",
  "Raisin Bran",
  "Beer",
  "Shredded Wheat",
  "Soy Crunch Multi-Grain Cereal, President's Choice Blue Menu",
  "Chocolate Daydream shake, fructose",
  "Weetabix",
  "Coca Cola",
  "Fruit punch",
  "Barley, pot, boiled",
  "Lemonade",
  "Sweet corn",
  "Mars Active Energy Drink, flavored milk",
  "Orange Delight Cocktail with pulp President's Choice Blue Menu",
  "Brown Rice",
  "Ready Rice",
  "Slim Fast French Vanilla ready-to-drink shake",
  "Smoothie, banana and strawberry",
  "Brown, steamed",
  "Smoothie, raspberry",
  "Soy Beverage, Chocolate flavored, President's Choice Blue Menu",
  "Soy Beverage, Original flavored, President's Choice Blue Menu",
  "Soy Beverage, Vanilla flavored, President's Choice Blue Menu",
  "Coffee",
  "Oatmeal",
  "Cranberry Orange Cookies: President's Choice Blue Menu",
  "Crunchy Oat Cookies President's Choice Blue Menu",
  "Ginger & Lemon Cookies President's Choice Blue Menu",
  "V8 Splash, tropical blend fruit drink",
  "Rich Tea",
  "V8 100% vegetable juice",
  "Ancient Grains snack crackers President's Choice Blue Menu",
  "Wheat & Onion snack crackers President's Choice Blue Menu",
  "Wheat & Sesame snack crackers President's Choice Blue Menu",
  "Wheat snack crackers President's Choice Blue Menu",
  "Rice cake",
  "Puffed rice cakes, caramel flavored",
  "Ryvita",
  "Water cracker",
  "Ice cream",
  "Milk, skim",
  "Milk",
  "Skim Milk",
  "Vanilla cake",
  "Nutrimeal, meal replacement drink, Dutch Chocolate",
  "Soy Beverage, Chocolate flavored, President's Choice Blue Menu",
  "Soy Beverage, Original flavored, President's Choice Blue Menu",
  "Soy Beverage, Vanilla flavored, President's Choice Blue Menu",
  "Apple",
  "Twice the Fruit Apricot spread President's Choice Blue Menu",
  "Banana",
  "Bluberries",
  "Kiwi fruit",
  "Mango"
]

export default data
    