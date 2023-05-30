class DropSocialsUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :socials_users
  end
end
