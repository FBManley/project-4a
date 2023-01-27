class SessionsController < ApplicationController
    # session is a connection between the client and the server
    # data flow: user submits login form-> then session creates a user by session by finding the username with the params username. 

        # POST /login  MUST NOT  BE WRAPPED IN USER OBJECT FOR USE_PARAMS
        def create 
            # user is local variable onlu accessable in createl. @user would be accessable across multiple methods within same controller. So use @user when nedding to making an action universal to this controller
            # user = User.find_by(username: params[:username]) -> need nil value which find_by returns if user is not found
            user = User.find_by_username(params[:username]) # find the user before authenticating them
            # if user exists and the password is correct (authenticate from has_secure_password-match salted hash from bcrypt compare it to user stored password is) .valid when persisting to database
            if user&.authenticate(params[:password])
                # setting session hash to users id. session is accessable to controllers only. an existing hash  that is available when we configure sessions in application.rb + extended in application controller
                session[:user_id] = user.id 
                render json: user, status: 200
            else 
                render json: { errors: ["Invalid Credentials"] }, status: 422
            end
        end
        #DELETE /logout -> logging out is deleting the session. session always exists from ActionController Cookies
        def destroy 
            session.delete :user_id 
            render json: { message: "FINE JUST LEAVE I DONT CARE ANYMORE"}
        end
end
