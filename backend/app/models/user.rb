class User < ActiveRecord::Base
    has_many :sightings
end