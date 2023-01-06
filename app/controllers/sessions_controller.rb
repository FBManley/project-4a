class SessionsController < ApplicationController
        # POST /login
        def create 
            @user = User.find_by_username(params[:username])
            if @user && @user.authenticate(params[:password])
                session[:user_id] = @user.id 
                render json: @user, status: 200
            else 
                render json: { errors: ["Username or Password doesn't match"] }, status: 422 
            end
        end
        #DELETE /logout
        def destroy 
            session.delete :user_id 
            render json: { message: "You are now logged out :)"}
        end
end
