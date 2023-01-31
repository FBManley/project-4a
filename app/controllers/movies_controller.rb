class MoviesController < ApplicationController
    # before_action :find_movie, only: [:update, :delete]
    # before_action :authorized, only: [:create, :update, :delete]
    def create 
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
        render json: movies, include: :reviews
    end
    # def index
    #     movies = Movie.all 
    #     render json: movies.to_json()
    # end
    # def show 
    #     @movie = Movie.includes(:reviews).find(params[:id])
    #     render json: @movie.to_json(include: [:reviews, :movies])
    # end
    # def show 
    #     movie = Movie.find_by(id: params[:id])
    #     render json: movie, include: review
    # end

    private 

    def movie_params 
        params.require(:movie).permit(:title, :genre, :summary, :director, :release_date)
    end

    # def find_movie
    #     @movie = Movie.find_by_id(params[:id])
    # end
end
