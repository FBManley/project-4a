class User < ApplicationRecord
    has_secure_password
    #  adds password_digest attribute to the model
    #  adds a pair of virtual attributes (password and password_confirmation) to the model
    #  adds a presence validation on the password attribute
    #  adds an authentication method to the model
    #  rails automatically validates password/password_confirmation and makes sure they match
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
 
end
