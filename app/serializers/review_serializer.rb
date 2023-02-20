class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :movie_id
 
  belongs_to :movie
  belongs_to :user

end
