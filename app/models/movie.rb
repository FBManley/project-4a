class Movie < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates :title, presence: true, uniqueness: true
    validates :genre, presence: true
    validates :summary, presence: true
    validates :release_date, presence: true, :numericality => { :greater_than_or_equal_to => 1888, :less_than_or_equal_to => 2025}
    validates :director, presence: true
    
    scope :liked, -> { where(liked: true) }
    scope :created_before, ->(date) { where("created_at < ?", date) }
end
