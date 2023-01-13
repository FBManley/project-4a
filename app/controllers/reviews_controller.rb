class ReviewsController < ApplicationController
    before_action :find_review, only: [:update, :delete]
    # GET /reviews -> index getting ALL reviews I need just users reveiws
    # @reviews = current_user.Review.all
    def index 
        # current users reviews 
        @reviews = current_user.reviews
        render json: @reviews
    end
    # POST /reviews 
    def create 
        if logged_in? 
            @review = current_user.reviews.build(review_params)
            if @review.save 
                render json: @review, status: 201   
            else 
                # render json: { errors: @review.errors.full_messages }, status : 422
                unprocessable_entity_error(@review)
            end
        else 
            must_be_logged_in
        end
    end
    # PATCH /reviews/:id
    # @review.update(status: "approved")
    # use foriegn key to find user # if authoriz_user(@review.user)
    def update 
      review = Review.find_by(id: params[:id])
      review.update(review_params)
      render json: review, status: :accepted
    end
    # DELETE /reviews/:id
    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private 
    def review_params
        params.require(:review).permit(:review, :movie_id, :like)
    end
    def find_review
        @review = Review.find_by_id(params[:id])
    end

end
