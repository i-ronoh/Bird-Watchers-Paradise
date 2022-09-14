require 'pry'

class SightingsController <  ApplicationController

    
    get '/sightings' do
        # join birds and sightings tables using the birds_id stipulated in the sightings model
        all_birdies = Sighting.includes(:bird).all
        x = all_birdies.map do |sighting|
            # binding.pry
            {
                date_of_sighting: sighting.date_of_sighting,
                location_of_sighting: sighting.location_of_sighting,
                observation: sighting.observation,
                birds_id: sighting.birds_id,
                user_id: sighting.user_id,
                bird_name: sighting.bird.name,
                bird_image: sighting.bird.image
            }
        end
        x.to_json
    end
    
    post '/sightings/upload' do
        # used request payload variable that was defined in app-controller 
        # uses inheritance 
        sighting = Sighting.create(
            date_of_sighting: @request_payload[:date_of_sighting],
            location_of_sighting: @request_payload[:location_of_sighting],
            observation: @request_payload[:observation],
            birds_id: @request_payload[:birds_id],
            user_id: @request_payload[:user_id]
        )
        sighting.to_json
    end

    delete "/sightings/:id" do 
        sighting = Sighting.find_by_id(params[:id])
        sighting.delete
        sighting.to_json
    end


end
