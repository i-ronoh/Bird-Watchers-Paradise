class BirdsController <  ApplicationController
    

    get '/birds' do
        all_birds = Bird.all
        all_birds.to_json
    end

end
