class UsersController < ApplicationController
        # POST /signup
        def create 
            @user = User.new(user_params)
            if @user.save 
                session[:user_id] = @user.id
                render json: @user, status: 201
            else 
                render json: { errors: @user.errors.full_messages }, status: 422
            end
        end
        # GET /me
        def show 
            if logged_in?
                render json: current_user 
            else 
                render json: { error: "Not authorized" }, status: 401
            end
        end
    
        private 
    
        def user_params
            params.require(:user).permit(:username, :password)
        end
end
