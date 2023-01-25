class SessionsController < ApplicationController
        # POST /login  MUST NOT  BE WRAPPED IN USER OBJECT FOR USE_PARAMS
        def create 
            user = User.find_by(username: params[:username])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id 
                render json: @user, status: 200
            else 
                render json: { erloginrors: ["Invalid Credentials"] }, status: 422
            end
        end
        #DELETE /logout
        def destroy 
            session.delete :user_id 
            render json: { message: "You are now logged out :)"}
        end
end
