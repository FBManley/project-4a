class SocialsController < ApplicationController
    def index
        @socials = Social.all
      end
      
end
