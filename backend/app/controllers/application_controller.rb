require 'sinatra'
require 'sinatra/cross_origin'

class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    configure do
        enable :cross_origin
    end
    
    before do
        response.headers['Access-Control-Allow-Origin'] = '*'
    end
      
      # routes...
    options "*" do
        response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
        response.headers["Access-Control-Allow-Origin"] = "*"
        200
    end    
end