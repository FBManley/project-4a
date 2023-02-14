class RemoveLikesFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :like, :boolean
  end
end
