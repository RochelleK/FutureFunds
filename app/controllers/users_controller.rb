class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :destroy, :show]

  def index
    render json: User.all
  end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  # def show
  #   total = @current_user.sum_items
  #   render json: total
  # end

  def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content 
    end


  private

  def user_params
    params.permit(:name, :email, :password)
  end

end