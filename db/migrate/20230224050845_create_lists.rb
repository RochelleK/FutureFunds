class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.integer :user_id
      t.integer :item_id
      t.integer :total

      t.timestamps
    end
  end
end
