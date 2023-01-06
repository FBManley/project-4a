class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user 
    @current_user = User.find_by_id(session[:user_id]) if
    logged_in?
  end

  def logged_in?  # return boolean
    !!session[:user_id]
  end

  def must_be_logged_in
    render json: { errors: ["YOU DUMB IDIOT. Must be logged in first"] }
  end

  def unprocessable_entity_error(object)
    render json: { errors: object.errors.full_messages }, status: 422
  end

  # def object_processed(object)
  #   render json: @object, status: 201 
  # end

end
