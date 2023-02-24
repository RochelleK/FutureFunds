class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :user_id
      t.string :item_id
      t.integer :total

      t.timestamps
    end
  end
end
