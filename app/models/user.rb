class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    
    # def user
    #     object.user.where(user_id: :user_id)
    # end
    # returns the user's id attribute by calling self.id.
    # def user_id
    #     self.object.id 
    # end
end
