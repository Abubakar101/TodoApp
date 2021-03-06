class TodolistsController < ApplicationController
    before_action :set_todolist, only: [:show, :edit, :update, :destroy]

   def index
        @user = current_user
        @todolists = Todolist.where(user_id: current_user.id, status: 'To Do')
    #    render json: { message: "ok", todolists_data: @todolists }
  
   end

   def show
    
    # begin
    #     @todolists = Todolist.find(params[:id])
    #     render json: { message: "ok", todolists_data: @todolist }
    #   rescue ActiveRecord::RecordNotFound
    #     render json: { message: "no quote matches that ID" }
    #   rescue Exception
    #     render json: { message: "there was some other error" }
    #   end

   end

   def create
    @user = User.find(params[:user_id])
       @todolist = Todolist.new(todolist_params)
       @todolist[:user_id] = @user.id
       respond_to do |format|
         if @todolist.save
           format.html { redirect_to user_todolists_path, notice: 'Post was successfully created.' }
           format.json { render :show, status: :created, location: @todolist }
         else
            debug
           format.html { render :new }
           format.json{ render json: @todolist.errors, status: :unprocessable_entity }
         end
       end
   end

   def new
    @user = User.find(params[:user_id])
       @todolist = Todolist.new
   end

   def destroy
       @todolist.destroy
       respond_to do |format|
         format.html { redirect_to user_todolists_path, notice: 'Post was successfully destroyed.' }
         format.json { head :no_content }
       end
   end
  
   def update
    p = todolist_params
       respond_to do |format|
         if @todolist.update(todolist_params)
           format.html { redirect_to user_todolist_path, notice: 'Post was successfully updated.' }
         else
           format.html { render :edit }
         end
       end
   end

   private
   def set_todolist 
    @user = User.find(params[:user_id])
    @todolist = Todolist.find(params[:id])
    
   end
    def todolist_params
     params.require(:todolist).permit(:title, :description, :category, :status)
   end


end