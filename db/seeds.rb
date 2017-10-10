# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User Name
yan = User.create!(name: 'Yan', username: 'xyanz', password: 'abu')


# # Category 
# junk_food = Category.create!(name: 'junkfood')

# To Do list item
first_item = Todolist.create!(user: yan, title: 'Need pizza', description: 'GA has it!', category: 'junk_food' , status: 'true' )
