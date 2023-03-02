class MoviesController < ApplicationController
    # before_action :find_movie, only: [:update, :delete]
    # before_action :authorized only: [:update, :delete]
    before_action :authorization, only: [:show]
    skip_before_action :authorized, only: [:index, :show]
    # q. how do I refactor this so that only the user that created the  movie can edit the movie?
    # a. add a before_action :authorized, only: [:create, :update, :delete]
    # q. how do I use authorized method in my application controller here in MoviesCOntroller?
    # a. 
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
    # PATCH /movies/:id
    # q. how do I refactor this so that only the user that created the  movie can edit the movie?
    # a. add a before_action :authorized, only: [:create, :update, :delete]
    # q. do I add the authroized method to applicationcontroller or to moviescontroller?
    # a. applicationcontroller
    

    def update
        @movie = Movie.find(params[:id])
        if @movie.update(movie_params)
            render json: @movie, status: 200
        else
            render json: { errors: @movie.errors.full_messages }, status: 422
        end
    end
    # def update
    #     movie = Movie.find_by(id: params[:id])
    #     user_id = session[:user_id]
    #     if movie && movie.user_id == user_id
    #         movie.update(movie_params)
    #         render json: movie, status: 200
    #     else
    #         render json: { errors: ["Not authorized"] }, status: 401
    #     end
    # end

    


    private 

    def movie_params 
        params.require(:movieFormInput).permit(:title, :genre, :summary, :director, :release_date)
    end
    def authorization
        return render json: { errors: ["Not authorized"] }, status: 401 unless session.include? :user_id
    end
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
    # def find_movie
    #     @movie = Movie.find_by_id(params[:id])
    # end