class MoviesController < ApplicationController
    # before_action :find_movie, only: [:update, :delete]
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
        @movies = current_user.movies 
        render json: @movies
    end

    private 

    def movie_params 
        params.require(:movie).permit(:title, :genre, :summary, :director, :release_date)
    end

    def find_movie
        @movie = Movie.find_by_id(params[:id])
    end
end
