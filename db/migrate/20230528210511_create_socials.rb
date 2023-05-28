class CreateSocials < ActiveRecord::Migration[6.1]
  def change
    create_table :socials do |t|
      t.string :name

      t.timestamps
    end
  end
end
