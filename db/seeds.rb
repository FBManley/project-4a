# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."
User.destroy_all
Movie.destroy_all
Review.destroy_all
# seed first to establish associations before we start on controllers- ensure models talk to each other correctly first. then establish attributes then connections . 
test_user = User.create(username: "test", password: "123")
test_user_1 = User.create(username: "test1", password: "123")

test_movie = Movie.create(title: "Point Break", genre: "Action", summary: "lorem ipsum surfer bank rob bro down", director: "Tim Allen", release_date: 1993)
test_movie_1 = Movie.create(title: "Loba", genre: "Comedy", summary: "lorem ipsum blahhhhhh", director: "John Brody", release_date: 1956)

review_1 = Review.create(review: "THIS MOVIE ROCKS BOTTOMS", like: true, user: test_user, movie: test_movie)
review_2 = Review.create(review: "THIS MOVIE GAVE ME SHINGLES", like: false, user: test_user_1, movie: test_movie_1)
review_3 = Review.create(review: "I heart this flcik", like: false, user: test_user_1, movie: test_movie_1)
review_4 = Review.create(review: "rofl", like: false, user: test_user, movie: test_movie_1)
puts "✅ Done seeding!"
# rails g resource review review:text like:boolean user:belongs_to  movie:belongs_to

