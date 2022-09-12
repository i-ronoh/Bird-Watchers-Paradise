class Sighting < ActiveRecord::Base
    belongs_to :bird, foreign_key: "birds_id" , class_name: "Bird"
    belongs_to :user
end