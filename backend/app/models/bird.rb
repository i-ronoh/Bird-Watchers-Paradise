class Bird < ActiveRecord::Base
    has_many :sightings
end