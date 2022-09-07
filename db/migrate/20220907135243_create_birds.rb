class CreateBirds < ActiveRecord::Migration[6.1]
  def change
    create_table :birds do |t|
      t.string :name
      t.string :image
      t.string :primary_color
      t.string :beak
      t.string :feet_type
      t.boolean :flies
    end
  end
end
