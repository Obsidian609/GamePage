# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@user = User.create(username: 'admin', email:'admin@email.com', password: '123456')

@game = Game.create(name: 'Dead Space', user: @user)

@comment = Comment.create(name:"Can't wait for the remakes! 10/10 would play again.", user: @user)