class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :genre
      t.text :summary
      t.text :director
      t.integer :release_date
      t.timestamps
    end
  end
end
