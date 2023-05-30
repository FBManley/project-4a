class Social < ApplicationRecord
    
    has_many :user_socials, dependent: :destroy
    has_many :users, through: :user_socials
end
