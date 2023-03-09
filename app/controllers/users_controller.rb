class UsersController < ApplicationController
  # skip_before_action :authorize, except: :me
  skip_before_action :authorize, only: [:create, :index, :show]

  def index
    render json: User.all
  end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # def show
  #   render json: @current_user
  # end
  # def show
  #   if current_user
  #     render json: current_user, status: :ok
  #   else 
  #     render json: {errors ['Not authorized'], status: :unauthorized}
  # end

  #hardcoded login
  def show
    user = User.first
    render json: user
  end

  def sum_items
    @user = User.find(params[:id])
    @total = @user.sum_items
    render json: @total
  end

  def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content 
    end

  private

  def user_params
    params.permit(:name, :email, :password, :list)
  end

end