class UserSocial < ApplicationRecord
  belongs_to :user
  belongs_to :social
  def joined_social?(social)
    user_socials.exists?(social: social)
  end
  
end
