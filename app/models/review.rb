class Review < ApplicationRecord

    belongs_to :user
    # error-> user cant be blank
    # validates :user_id, presence: :true
    belongs_to :movie
    # error-> movie cant be blank
    # validates :movie_id, presence: :true

    validates :review, presence: :true
end
