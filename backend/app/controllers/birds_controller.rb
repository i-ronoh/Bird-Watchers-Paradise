class BirdsController <  ApplicationController
    # get '/birds' do
    #     all_birds = Bird.all
    #     all_birds.to_json
    # end

    get '/birds/:id' do
        birds_id = Bird.find(params[:id])
        birds_id.to_json
    end

    get '/birds' do 
        # if name is provided by user, then search by name, else search by other query from query string below
        if !params[:name].nil? 
            birds = Bird.where(name: params[:name])
        else
            # query string 
            birds = Bird.all
            birds = birds.where('lower(primary_color) = ? ', params[:primary_color].downcase) unless params[:primary_color].nil?
            birds = birds.where('lower(beak) = ? ', params[:beak].downcase) unless params[:beak].nil?
            birds = birds.where('lower(feet_type) = ? ', params[:feet_type].downcase) unless params[:feet_type].nil?
            birds = birds.where('flies = ? ', ActiveModel::Type::Boolean.new.cast(params[:flies])) unless params[:flies].nil?
        end
        
        birds.to_json
    end

    # get '/birds' do
    #     p '*******************************'
    #     p params
    #     p '*******************************'
    #     # bird_name = Bird.find_by_name(params[:name])
    #     # bird_name.to_json
    # end

    # get '/birds/:color' do 
    #     bird_color = Bird.find_by_color(params[:primary_color])
    #     bird_color.to_json
    # end

end
