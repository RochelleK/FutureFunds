class ItemsController < ApplicationController
   skip_before_action :authorize

    def index 
        render json: Item.all
    end 
end
