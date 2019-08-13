class CommentController < ApplicationController

  def index
    @pet = Pet.find(params[:pet_id])
    @comments = Comment.where(pet_id: @pet.id)
    render json: @comments, include: {pet: {include: :user}}, status: :ok
  end
  def show
    @pet = Pet.find(params[:pet_id])
    @comment = Comment.find(params[:id])
    render json: @comment, include: {pet: {include: :user}}, status: :ok
  end
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: :created
    else
      render json: {errors: @comment.errors}, status: :unprocessable_entity
    end
  end
  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment, status: :ok
    else
      render json: {errors: @comment.errors},status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    head 204
  end

  private

  def comment_params
    params.require(:Comment).permit(:post, :pet_id)
  end
end