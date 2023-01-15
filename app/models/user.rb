class User < ApplicationRecord
    # macro that gives us password=, password, authenticate, and validates for us
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
    # def user 
    #     User.find_by_id(id: :user_id)
    # end
    # def user
    #     object.user.where(user_id: :user_id)
    # end
    # returns the user's id attribute by calling self.id.
    # def user_id
    #     self.object.id 
    # end
end
