class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :summary, :director, :release_date
end
