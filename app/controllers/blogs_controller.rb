class BlogsController < ApplicationController

    # GET /blogs
    def index
        @blogs = Blog.all
        render json: @blogs
    end
    
end
