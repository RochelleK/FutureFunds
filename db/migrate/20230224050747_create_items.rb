class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.string :image
      t.string :frequency

      t.timestamps
    end
  end
end
