class MoviesController < ApplicationController
    before_action :authorization, only: [:update, :delete]
    skip_before_action :authorized, only: [:index, :show]
    skip_before_action :authorized, only: [:update]
    

    # GET /movies/:id
    def show 
        @movie = Movie.find(params[:id])
        if @movie 
            render json: @movie, status: 200
        else
            render json: { errors: @movie.errors.full_messages }, status: 422
        end
    end
    def create 
        # byebug
        @movie = Movie.new(movie_params)
        if @movie.save 
            render json: @movie, status: 201
        else 
            render json: { errors: @movie.errors.full_messages }, status: 422
        end
    end

    # GET /movies
    def index 
        # movies = current_user.movies
        movies = Movie.all
        render json: movies
    end
    # DELETE /movies/:id
    def destroy 
        @movie = Movie.find(params[:id])
        if @movie.destroy
            render json: { message: "Movie deleted" }, status: 200
        else
            render json: { errors: @movie.errors.full_messages }, status: 422
        end
    end
    

    def update
        @movie = Movie.find(params[:id])
        if @movie.update(movie_params)
            render json: @movie, status: 200
        else
            render json: { errors: @movie.errors.full_messages }, status: 422
        end
    end
    # using scope method to find liked movies
    def liked_movies
        @liked_movies = current_user.liked 
        render json: @liked_movies
    end
    def old_posts
        @old_posts = Post.created_before(1.year.ago)
        render json: @old_posts
    end
    

    private 

    def movie_params 
        params.require(:movieFormInput).permit(:title, :genre, :summary, :director, :release_date)
    end
    def authorization
        return render json: { errors: ["Not authorized"] }, status: 401 unless session.include? :user_id
    end
    # def authorize_user 
    #     @movie = Movie.find(params[:id])
    #     unless @movie.user_id == current_user.id
    #         render json: { errors: @movie.errors.full_messages }, status: 422
    #     end
    # end

end
