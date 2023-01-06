class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :like, :user_id, :movie_id
  # has_one :user
  # has_one :movie
  # belongs_to :movie

end
