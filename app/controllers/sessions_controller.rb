class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
    # session is a connection between the client and the server
    # data flow: user submits login form-> then session creates a user by session by finding the username with the params username. 
    # then it authenticates the user by comparing the password with the params password.
    # then it sets the session hash to the users id.
    # then it renders the user as json
    # then the user is logged in
    

        # POST /login  MUST NOT  BE WRAPPED IN USER OBJECT FOR USE_PARAMS
        def create 
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
