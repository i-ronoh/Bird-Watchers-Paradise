class CreateSightings < ActiveRecord::Migration[6.1]
  def change
    create_table :sightings do |t|
      t.datetime :date_of_sighting
      t.string :location_of_sighting
      t.string :observation
      t.references :birds, foreign_key: :true
     
    end
  end
end
