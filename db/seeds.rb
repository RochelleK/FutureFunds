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



puts "...done seeding"

