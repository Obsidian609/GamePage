Comment.destroy_all
Game.destroy_all
User.destroy_all

@user = User.create(username: 'admin', email:'admin@email.com', password: '123456')

@game = Game.create(name: 'Dead Space', image: 'https://upload.wikimedia.org/wikipedia/en/5/57/Dead_Space_Box_Art.jpg', user: @user)
