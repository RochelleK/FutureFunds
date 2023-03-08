class ItemsController < ApplicationController
#    skip_before_action :authorize

    def index 
        render json: Item.all.sort_by{rand}
    end 
end
