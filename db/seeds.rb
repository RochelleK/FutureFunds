# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seed created"
John = User.create(name:"John", email: "a@a.com",password:'1234')
Jacob = User.create(name:"Jacob", email: "b@b.com",password:'1234')
Jingle = User.create(name:"Jingle", email: "c@c.com",password:'1234')


Car = Item.create(name:"Car", price:"200", image:"car.jpg", frequency: "yearly")
Coffee = Item.create(name:"Coffee", price:"100", image:"coffee.jpg", frequency: "yearly")
Shoes = Item.create(name:"Shoes", price:"150", image:"shoe.jpg", frequency: "yearly")
Dinner = Item.create(name:"Dinner", price:"80", image:"dinner.jpg", frequency: "yearly")
Bag = Item.create(name:"Bag", price:"50", image:"bag.jpg", frequency: "yearly")
Headphones = Item.create(name:"Headphones", price:"60", image:"Headphones.jpg",frequency: "yearly")
Jacket = Item.create(name:"Jacket", price:"70", image:"Jacket.jpg",frequency: "yearly")
Phone = Item.create(name:"Phone", price:"80", image:"phone.jpg", frequency: "yearly")
FastFood = Item.create(name:"Fast Food", price:"90", image:"food.jpg",frequency: "yearly")
Subscription = Item.create(name:"Subscription", price:"100", image:"sub.jpg", frequency: "yearly")

List.create(user_id: John.id, item_id:Car.id)
List.create(user_id: John.id, item_id:Coffee.id)
List.create(user_id: John.id, item_id:Jacket.id)


puts "...done seeding"

