class Movie < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates :title, presence: true, uniqueness: true
    validates :genre, presence: true
    validates :summary, presence: true
    validates :release_date, presence: true
    validates :director, presence: true
    

end
