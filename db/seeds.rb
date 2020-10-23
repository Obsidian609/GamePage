Comment.destroy_all
Game.destroy_all
User.destroy_all

@user = User.create(username: 'admin', email:'admin@email.com', password: '123456')

@game = Game.create(name: 'Dead Space', user: @user)

@comment = Comment.create(name:"Can't wait for the remakes! 10/10 would play again.", user: @user)