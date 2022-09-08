class BirdsController <  ApplicationController
    

    get '/birds' do
        all_birds = Bird.all
        all_birds.to_json
    end

    get '/birds/:id' do
        birds_id = Bird.find(params[:id])
        birds_id.to_json
    end

    get 'birds/:name' do
        bird_name = Bird.find_by_name(params[:name])
        bird_name.to_json
    end

    get 'birds/:color' do 
        bird_color = Bird.find_by_color(params[:primary_color])
        bird_color.to_json
    end

end
