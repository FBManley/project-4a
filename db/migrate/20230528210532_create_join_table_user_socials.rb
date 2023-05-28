class CreateJoinTableUserSocials < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :socials do |t|
      # t.index [:user_id, :social_id]
      # t.index [:social_id, :user_id]
    end
  end
end
