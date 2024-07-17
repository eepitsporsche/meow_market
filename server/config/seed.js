const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Food' },
        { name: 'Litter and Accessories' },
        { name: 'Treats' },
        { name: 'Toys' },
        { name: 'Furniture' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
        breed: ['siamese', 'maine coon'],
        name: 'Blue Buffalo Tastefuls Ocean Fish & Tuna Entrée Pate Wet Cat Food - 4 Cans',
        description:
            'Treat your kitty to a whisker-licking flavor with BLUE Tastefuls Adult Cat Ocean Fish and Tuna Entrée Pate wet cat food.',
        image: 'blue_wet_food.jpeg',
        category: categories[0]._id,
        price: 5.99,
        quantity: 500
        },
        {
            breed: ['bengal'],
            name: 'Royal Canin Bengal Breed Adult Dry Cat Food, 7 lb bag',
            description:
                'Royal Canin Bengal Adult Cat Food is formulated to meet the nutritional needs of this purebred cat 1 year and older',
            image: 'bengalfood.png',
            category: categories[0]._id,
            price: 45.99,
            quantity: 500
            },
        {
            breed: ['maine coon'],
            name: 'Royal Canin Maine Coon Breed Adult Dry Cat Food, 6 lb bag',
            description:
                'Royal Canin Maine Coon Adult Cat Food is formulated to meet the nutritional needs of purebred Maine Coon cats 15 months and older',
            image: 'mainecoonfood.png',
            category: categories[0]._id,
            price: 45.99,
            quantity: 500
            },
        {
            breed: ['persian'],
            name: 'Royal Canin Persian Breed Adult Dry Cat Food, 7 lb bag',
            description:
                'Breed-specific nutrients promote skin and coat health, helping to keep a Persian’s long hair soft and shiny',
            image: 'persianfood.png',
            category: categories[0]._id,
            price: 45.99,
            quantity: 500
            },
        {
            breed: ['persian'],
            name: 'Royal Canin Persian Breed Adult Dry Cat Food, 7 lb bag',
            description:
                'Breed-specific nutrients promote skin and coat health, helping to keep a Persian’s long hair soft and shiny',
            image: 'persianfood.png',
            category: categories[0]._id,
            price: 45.99,
            quantity: 500
            },
        {
            breed: ['ragdoll'],
            name: 'Royal Canin Ragdoll Breed Adult Dry Cat Food, 7 lb bag',
            description:
                'Royal Canin Ragdoll Adult Cat Food is formulated to meet the nutritional needs of purebred Ragdoll cats 1 year and older',
            image: 'ragdollfood.png',
            category: categories[0]._id,
            price: 45.99,
            quantity: 500
            },
        {
            breed: ['siamese'],
            name: 'Royal Canin Siamese Breed Adult Dry Cat Food, 6 lb bag',
            description:
                'FORMULATED FOR PUREBRED SIAMESE CATS: Royal Canin Siamese Adult Cat Food is formulated to meet the nutritional needs of purebred Siamese cats 1 year and older',
            image: 'siamesefood.png',
            category: categories[0]._id,
            price: 45.99,
            quantity: 500
            },
        {
            breed: ['persian'],
            name: 'Royal Canin Persian Breed Dry Kitten Food, 3 lb.',
            description:
                'Royal Canin Persian breed-specific dry kitten food is formulated to meet the nutritional needs of a growing kitten up to 12 months old',
            image: 'persianpink.png',
            category: categories[0]._id,
            price: 35.99,
            quantity: 500
            },
        {
        breed: ['persian', 'ragdoll'],
        name: 'Reveal Natural Grain-Free Variety Fish & Chicken in Broth Flavored Wet Cat Food - 12 Cans',
        description:
            'Each dish features delicious, high-quality ingredients without any artificial preservatives, colors, or flavors, providing a wholesome dining experience.',
        image: 'reveal_wet_food.jpeg',
        category: categories[0]._id,
        price: 15.99,
        quantity: 500
        },
        {
        breed: ['persian', 'ragdoll', 'bengal'],
        name: 'Iams ProActive Health Healthy Adult Original with Chicken Dry Cat Food - 16lb Bag',
        description:
            'Real chicken is the very first ingredient in this kibble, plus prebiotics to support digestive health and omega-6 and omega-3 fatty acids to support healthy skin and coat.',
        image: 'iams_dry_food.jpeg',
        category: categories[0]._id,
        price: 29.99,
        quantity: 200
        },
        {
        name: 'Dr. Elsey\'s Ultra Unscented Clumping Clay Cat Litter - 40lb Bag',
        category: categories[1]._id,
        description:
            'This litter features paw-some odor control, so it\’s ideal for multi-cat families and for sifting or mechanical litter boxes.',
        image: 'dr_elseys_litter.jpeg',
        price: 20.99,
        quantity: 100
        },
        {
        name: 'Frisco Open Top Cat Litter Box, Large, Gray, 19-in + Plastic Litter Scooper with Caddy',
        category: categories[1]._id,
        description:
            'This open-top litter box from Frisco by Chewy provides a roomy, private place for cats to do their business. The caddy attaches the scoop to the litter box, so it\’s always handy when you need it.',
        image: 'frisko_litter_box_bundle.jpeg',
        price: 13.99,
        quantity: 50
        },
        {
        breed: ['siamese', 'maine coon', 'bengal'],

        name: 'Greenies Feline Oven Roasted Chicken Flavor Adult Dental Cat Treats - 4.6oz Bag',
        category: categories[2]._id,
        description:
            'Designed to help clean teeth, reduce tartar buildup and freshen your cat\’s breath, these crunchy treats are made with natural ingredients plus added vitamins, minerals and other nutrients that make them a nutritionally complete and balanced snack for an adult cat.',
        image: 'feline_greenies_treats.jpg',
        price: 4.99,
        quantity: 30
        },
        {
        breed: ['siamese', 'maine coon', 'persian'],

        name: 'Meow Mix Irresistibles Soft Salmon Cat Treats - 3oz Bag',
        category: categories[2]._id,
        description:
            'Cats crave the natural flavor of real seafood, which is why these bite-size snacks are packed with real salmon and no artificial flavors.',
        image: 'meow_mix_treats.jpg',
        price: 1.99,
        quantity: 30
        },
        {
        name: 'Frisco Fabric Teaser Wand Cat Toy',
        category: categories[3]._id,
        description:
            'Wiggle and wave it around to activate your cat\’s play instinct. The colorful fabric ribbon is sure to grab their attention for more batting, jumping and leaping.',
        image: 'fabric_wand_toy.jpeg',
        price: 3.99,
        quantity: 100
        },
        {
        name: 'Multipet Value Pack Cat Toy, Assorted Colors - 24-pack',
        category: categories[3]._id,
        description: 
        '24 toys in one pack, from furry mice to sparkly puffs and plastic balls with bells, you\’ll love watching your fur-iend bat them around the house for entertaining enjoyment.',
        image: 'multipet_toy_pack.jpeg',
        price: 5.99,
        quantity: 100
        },
        {
        name: 'HDP Grab Bag Assorted Catnip Cat Toys',
        category: categories[3]._id,
        description:
            'Filled with a whopping number of toys in different shapes and styles, this bag will provide hours of fun and exercise for your playful cat.hdp_toy_papalakakak',
        image: 'hdp_toy_pack.jpeg',
        price: 12.99,
        quantity: 100
        },
        {
        name: 'Frisco 47.5-in Modern Cat Tree & Condo',
        category: categories[4]._id,
        description:
            'This 47.5-in, four-story, high-rise cat tree is move-in ready and comes with all the amenities for kitties. There are five scratching posts fully wrapped in sisal rope, and two sisal scratching pads.',
        image: 'frisco_cat_tree.jpeg',
        price: 69.99,
        quantity: 30
        },
        {
        name: 'Frisco Animal Series Cat Condo, Llama',
        category: categories[4]._id,
        description:
            'Includes all the kitty amenities—a scratching post, a private condo and a perch at the top.',
        image: 'frisco_cat_tree_llama.jpg',
        price: 49.99,
        quantity: 30
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@test.com',
        password: 'password12345',
        orders: [
        {
            products: [products[0]._id, products[0]._id, products[1]._id]
        }
        ]
    });

    await User.create({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@test.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});