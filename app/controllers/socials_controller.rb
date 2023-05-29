class SocialsController < ApplicationController
    def index
        render json: Social.all
      end

end
