class Social < ApplicationRecord
    has_many :users, through: :user_socials
    has_many :user_socials
end
