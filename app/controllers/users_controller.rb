class UsersController < ApplicationController
        # POST /signup MUST BE IN USER OBJECT FOR USE_PARAMS
        # is @user supposed to be current_user?
        # the “!” version will raise an exception if the record is invalid. 
        # The “?” version will return false if the record is invalid.
        def create 
            user = User.create!(user_params)
            if user.valid? 
                session[:user_id] = user.id
                render json: user, status: 201
            else 
                render json: { errors: @user.errors.full_messages }, status: 422
            end
        end
        # GET /me
        def show 
            user = User.find_by(id: session[:user_id])
            render json: user, status: 200
        end
    
        private 
    
        def user_params
            params.require(:user).permit(:username, :password)
        end
end
