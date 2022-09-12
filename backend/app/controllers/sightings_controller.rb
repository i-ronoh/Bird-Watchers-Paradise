class SightingsController <  ApplicationController
    
    get '/sightings' do
        all_birdies = Sighting.all
        all_birdies.to_json
    end
    
    post '/sightings/upload' do
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
