class UsersController < ApplicationController
        # POST /signup MUST BE IN USER OBJECT FOR USE_PARAMS
        before_action :authorized, only: [:show]
       
        skip_before_action :authorized, only: [:create]

        def create 
            user = User.create(user_params)
            if user.valid? 
                session[:user_id] = user.id
                render json: user, status: 201
            else 
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        end
        # GET /me
        def show 
            user = User.find_by(id: session[:user_id])
            render json: user, status: 200
        end
        def search 
            searched_user = User.where()
        end

        
    
        private 
        def user_params
            params.require(:user).permit(:username, :password)
        end
        def authorization 
           return render json: { error: "Unauthorized user" }, status: :unauthorized unless session.include? :user_id
        end
end
