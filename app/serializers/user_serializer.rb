class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews, serializer: ReviewMovieSerializer
end
