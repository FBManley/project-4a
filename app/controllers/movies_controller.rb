class MoviesController < ApplicationController
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
        @movies = Movie.all
        render json: @movies
    end

    private 

    def movie_params 
        params.require(:movie).permit(:title, :genre, :summary, :director, :release_date)
    end
end
