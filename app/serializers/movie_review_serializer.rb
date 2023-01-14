class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :reviews, :user_id, :movie_id
  has_many :reviews
  belongs_to :user
  belongs_to :movie
  # reviews method is overridden, and it returns only the reviews that have the same user_id as the user that is being serialized
  def reviews
    object.reviews.where(user_id: :user_id)
  end
end
