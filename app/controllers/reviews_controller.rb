class ReviewsController < ApplicationController
    # rescue_from ActionController::ParameterMissing, with: :parameter_missing
    # before_action :find_review, only: [:update, :delete]
    
    def index
        if params[:uer_id]
            user = User.find_by_id(params[:user_id])
            render json: user.reviews
        else 
        @reviews = Review.all
        end
        render json: @reviews, include: [:user, :movie]
    end

  
    def show
        @review = Review.find_by(id: params[:id])
        render json: @review
    end

   
    def create 
        @review = Review.new(review_params)
        if @review.save
            render json: @review, status: 201
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # DELETE /reviews/:id
    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private 
    def review_params
        params.require(:reviewFormData).permit(:review, :user_id, :movie_id)
    end
    def find_review
        @review = Review.find_by_id(params[:id])
    end
    def parameter_missing
        render json: { error: "parameter is missing" }, status: :unprocessable_entity
    end

end
