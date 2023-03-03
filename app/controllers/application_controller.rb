class ApplicationController < ActionController::API
  include ActionController::Cookies
  # all controllers inherit from ApplicationController
  # helper_method :current_user
  before_action :authorized, only: [:create, :update]
  # before_action :require_login
  # session contains user_id when signed in - retireve logged in user
  # avoid unnecessary database queries by caching the current_user in an instance variable.
  # def current_user
  #   # retrieve the user from the database every time it is called and check if the user exists in the database before trying to return it
  #   @current_user = User.find_by(id: session[:user_id]) if logged_in? && User.exists?(session[:user_id])
  # end

  def authorized_user(object)
    object.user_id == current_user.id
  end

  
  # private
  def authorized
    user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: 401 unless user
  end

  def unprocessable_entity_error(object)
    render json: { errors: object.errors.full_messages }, status: 422
  end
  # private
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end

end
