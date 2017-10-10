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
       @todolist = Todolist.new(todolist_params)
       respond_to do |format|
         if @todolist.save
           format.html { redirect_to @todolist, notice: 'Post was successfully created.' }
           format.json { render :show, status: :created, location: @todolist }
         else
           format.html { render :new }
           format.json{ render json: @todolist.errors, status: :unprocessable_entity }
         end
       end
   end

   def new
       @todolist = Todolist.new
   end

   def destroy
       @todolist.destroy
       respond_to do |format|
         format.html { redirect_to todolists_url, notice: 'Post was successfully destroyed.' }
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