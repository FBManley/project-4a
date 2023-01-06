class MoviesController < ApplicationController
    def create 
        @movie = Movie.new(movie_params)
        if @movie.save 
            render json: @movie, status: 201
        else 
            render json: { errors: @movie.errors.full_messages }, status: 422
        end
    end

    private 

    def movie_params 
        params.require(:movie).permit(:title, :genre, :summary, :director, :release_date, :would_watch_again)
    end
end
