class ListsController < ApplicationController

    def index 
        render json: List.all
    end 

    def create 
        path = List.create!(list_params)
        render json: path 
    end 
    

    def destroy
    path = List.find(params[:id])
    path.destroy
    head :no_content
    end
    
    private 
    def list
        params.permit(
            :priority, :loan_amt, :interest_rate, :loan_term,:user_id, :career_id
        )
    end 


end
