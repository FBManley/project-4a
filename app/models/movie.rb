class Movie < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    # validates :title, presence: true
    # validates :director, presence: true 
    # validates :director, uniqueness: { scope: :title, message: "must be unique-title with this director may already exist"}
    # def user 
    #     User.find_by(id: self.user_ids)
    # end

end
