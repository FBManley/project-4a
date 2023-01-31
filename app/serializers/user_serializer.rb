class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
    has_many :reviews
#   has_many :reviews, serializer: ReviewMovieSerializer
#   has_many :movies
  # , serializer: MovieReviewSerializer
  # the keyword object represents what ever object has been passed to the serializer.
  # you could override an object’s attributes if you define a method in the serializer with the same name
  # def movie
  #   self.object.movie
  # end
end
