Comment.destroy_all
Game.destroy_all
User.destroy_all

@user = User.create(username: 'admin', email:'admin@email.com', password: '123456')

@game = Game.create(name: 'Dead Space', image: 'https://upload.wikimedia.org/wikipedia/en/5/57/Dead_Space_Box_Art.jpg', user: @user)

comment1 = Comment.create(name: 'Dead Space has 3 games out now', user_id: @user.id game_id: @game.id)
comment2 = Comment.create()
comment3 = Comment.create()
comment4 = Comment.create()
comment5 = Comment.create()
