class ReviewMovieSerializer < ActiveModel::Serializer 
    # special serializer passing in desired attributes :: review serializers if this is backwards from desired action
    attributes :id, :review, :like, :movies

    def movies
        self.object.movie
    end
end
