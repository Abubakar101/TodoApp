class TodolistsController < ApplicationController
    before_action :set_todolist, only: [:show, :edit, :update, :destroy]

   def index
        @user = User.find(params[:user_id])
       @todolists = Todolist.order('id ASC').all
   end

   def show
    #    @user = User.find(params[:user_id])
       # @comments = Comment.where("user_id = ?", params[:id])
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
    # p = todolist_params
    # p[:category] = Category.find(todolist_params[:category])

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