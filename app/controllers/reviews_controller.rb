class ReviewsController < ApplicationController
    before_action :find_review, only: [:update, :delete]
    # POST /reviews 
    def create 
        if logged_in? 
            @review = current_user.reviews.build(review_params)
            if @review.save 
                render json: @review, status: 201   
            else 
                render json: { errors: @review.errors.full_messages }, status : 422
            end
        else 
            must_be_logged_in
        end
    end
    # PATCH /reviews/:id
    def update 
      review = Review.find_by(id: params[:id])
      review.update(review_params)
      renderjson: review, status: :accepted
    end
    # DELETE /reviews/:id
    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private 
    def review_params
        params.require(:review).permit(:review, :movie_id, :like)
    def find_review
        @review = Review.find_by_id(params[:id])
    end
end
