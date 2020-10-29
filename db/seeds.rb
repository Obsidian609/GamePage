Comment.destroy_all
Game.destroy_all
User.destroy_all

@user = User.create!(username: 'admin', email:'admin@email.com', password: '123456')

@game = Game.create!(name: 'Dead Space', image: 'https://upload.wikimedia.org/wikipedia/en/5/57/Dead_Space_Box_Art.jpg', user: @user)
@game2 = Game.create!(name: 'Breath of the Wild', image: 'https://gamespot1.cbsistatic.com/uploads/scale_medium/1197/11970954/3181241-ig-lozbreathofthewildrelease-20170112.jpg', user: @user)
@game3= Game.create!(name: 'Bravely Default', image: 'https://i0.wp.com/www.nintendology.com/wp-content/uploads/2020/04/bravely-default-nintendo-3ds-box-art-na.jpg?fit=775%2C680&ssl=1', user: @user)
@game4 = Game.create!(name: 'Pokemon Platinum', image: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Pokemon_Platinum.png', user: @user)
@game5 = Game.create!(name: 'League of Legends', image: 'https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg', user: @user)

comment1 = Comment.create!(name: 'Dead Space has 3 games out now', user_id: @user.id, game: @game)
comment2 = Comment.create!(name: 'Best open world game I\'ve played so far', user_id: @user.id, game: @game2)
comment3 = Comment.create!(name: '10/10 would play over a 3rd time', user_id: @user.id, game: @game3)
comment4 = Comment.create!(name: 'Favorite pokemon game', user_id: @user.id, game: @game4)
comment5 = Comment.create!(name: 'Welcome.. to the League of Legends', user_id: @user.id, game: @game5)
