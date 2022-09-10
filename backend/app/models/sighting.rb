class Sighting < ActiveRecord::Base
    has_one :bird 
    has_one :user
end