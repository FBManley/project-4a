class User < ApplicationRecord
    # macro that gives us password=, password, authenticate, and validates for us
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
end
