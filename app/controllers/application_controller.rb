class ApplicationController < ActionController::API
  include ActionController::Cookies
  # all controllers inherit from ApplicationController

  # session contains user_id when signed in - retireve logged in user
  # avoid unnecessary database queries by caching the current_user in an instance variable.
  # def current_user
  #   # retrieve the user from the database every time it is called and check if the user exists in the database before trying to return it
  #   @current_user = User.find_by(id: session[:user_id]) if logged_in? && User.exists?(session[:user_id])
  # end

  # def authorized_user(object)
  #   object.user_id == current_user.id
  # end
  # checking if session[:user_id] has a value or not
  # def logged_in? 
  #   !!session[:user_id]
  # end

  # def must_be_logged_in
  #   render json: { errors: ["YOU DUMB IDIOT. Must be logged in first"] }
  # end
  # def authorized
  #   authorized_user = User.find_by(id: session[:user_id])
  #   render json: { errors: ["Not authorized"] }, status: 401 unless authorized_user
  # end

  def unprocessable_entity_error(object)
    render json: { errors: object.errors.full_messages }, status: 422
  end

  # def object_processed(object)
  #   render json: @object, status: 201 
  # end

end
