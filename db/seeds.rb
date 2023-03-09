# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seed created"
Anna = User.create(name:"Anna", email: "a@a.com",password:'1234')
Jacob = User.create(name:"Jacob", email: "b@b.com",password:'1234')
Jingle = User.create(name:"Jingle", email: "c@c.com",password:'1234')


Car = Item.create(name:"Car Payment +200", price:"200", image:"./noun-car-5034962-C462DD.svg", frequency: "yearly")
Coffee = Item.create(name:"Coffee ", price:"100", image:"./noun-coffee-5571134-3B6BF9.svg", frequency: "yearly")
Shoes = Item.create(name:"Shoes", price:"150", image:"./noun-shoes-5569483-C3DC64.svg", 
frequency: "yearly")
Dinner = Item.create(name:"Dinner", price:"80", image:"./noun-dinner-1879875-71D358.svg", frequency: "yearly")
Bag = Item.create(name:"Bag", price:"50", image:"./noun-bag-80921-FF824A.svg", frequency: "yearly")
Headphones = Item.create(name:"Headphones", price:"60", image:"./noun-headphones-5562607-FFD65B.svg",frequency: "yearly")
Jacket = Item.create(name:"Jacket", price:"70", image:"./noun-jacket-5570698-00BBC3.svg",frequency: "yearly")
Phone = Item.create(name:"Phone", price:"80", image:"./noun-cell-phone-1315138-FF001C.svg", frequency: "yearly")
FastFood = Item.create(name:"Fast Food", price:"90", image:"./noun-takeout-1614323-FF824A.svg",frequency: "yearly")
Subscription = Item.create(name:"Subscription", price:"100", image:"./noun-subscription-model-4789155-FF59B9.svg", frequency: "yearly")

List.create(user_id: John.id, item_id:Car.id)
List.create(user_id: John.id, item_id:Coffee.id)
List.create(user_id: John.id, item_id:Jacket.id)


puts "...done seeding"

