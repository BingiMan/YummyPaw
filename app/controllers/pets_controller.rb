class PetsController < ApplicationController
  before_action :authorize_request, except: %i[index show]
  def index
    @pets = Pet.all
    render json: @pets, include: :user, status: :ok
  end
  def show
    @pet = Pet.find(params[:id])
    render json: @pet, include: :user, status: :ok
  end
  def create
    @pet = Pet.new(pet_params)
    if @pet.save
      render json: @pet, status: :created
    else
      render json: {errors: @pet.errors }, status: :unprocessable_entity
    end
  end
  def update
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params)
      render json: @pet, status: :ok
    else
      render json: {errors: @pet.errors}, status: :unprocessable_entity
    end
  end
  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    head 204
  end

  private

  def pet_params
    params.require(:pet).permit(:title, :video_url, :is_cat ,:user_id)
  end

end