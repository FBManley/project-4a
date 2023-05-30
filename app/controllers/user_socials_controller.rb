class UserSocialsController < ApplicationController
    def join_group
      social = Social.find(params[:social_id])
      user = User.find(params[:user_id])
  
      if user.joined_social?(social)
        # User has already joined the group
        render json: { error: 'User has already joined the group' }, status: :conflict
      else
        user_social = UserSocial.create(user: user, social: social)
        render json: { message: 'User joined the group successfully' }, status: :ok
      end
    end
end
