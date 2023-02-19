class Review < ApplicationRecord

    belongs_to :user
    validates :user_id, presence: :true
    belongs_to :movie
    validates :movie_id, presence: :true

    validates :review, presence: :true
end
