class MovieReviewSerializerSerializer < ActiveModel::Serializer
  attributes :id, :review, :like, :movie
  
end
