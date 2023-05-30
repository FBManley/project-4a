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
    # user_socials' index action
    def index
        user = User.find(params[:user_id])
        joined_socials = user.socials
        render json: joined_socials
    end

    def user_socials
        user = current_user # Assuming you have a method to retrieve the current user
        user_socials = user.socials
        render json: user_socials
    end

    private

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
end
