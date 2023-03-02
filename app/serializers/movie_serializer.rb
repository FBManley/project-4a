class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :summary, :director, :release_date
  has_many :users
  has_many :reviews
end
