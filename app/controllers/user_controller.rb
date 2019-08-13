class UsersController < ApplicationController

  def index = User.all
    render json: @users,  include: :pets, status: :ok
  end

  def show
    @user = User.find(params[:id])
    render json: @user, include: :pets, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: {error: @user.errors }, status: :umprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user, status: :ok
    else 
      render json: {errors: @user.errors}, status: :umprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    head 204
  end

  private

  def user_params
    params.require(:pet).permit(:username, :email, :password_digest)
  end  
end