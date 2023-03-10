class BlogsController < ApplicationController
    

    def index 
        @blogs = Blog.all
        render json: @blogs, status: 200
    end
    def create 
        blog = Blog.create(blog_params) 
        if blog.valid?
            render json: blog, status: 201
        else 
            render json: { errors: blog.errors.full_messages }, status: 422
        end
    end
    
    # config/puma.rb = set PORT port ENV.fetch("PORT") { 3000 }vs changing frontend port
    # rails db:migrate will give you more warnings in terminal
    private 
    # frontend fetch must be called the same as backend params
    
    def blog_params
        params.require(:blog).permit(:title, :content)
    end
end
