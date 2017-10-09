class TodoListsController < ApplicationController
     before_action :set_todoList, only: [:show, :edit, :update, :destroy]

    def index
        @todoLists = TodoList.order('id ASC').all
    end

    def show
        # @user = User.find(params[:id])
        # @comments = Comment.where("user_id = ?", params[:id])
    end

    def create
        @todoList = TodoList.new(todoList_params)
        respond_to do |format|
          if @todoList.save
            format.html { redirect_to @todoList, notice: 'Post was successfully created.' }
            format.json { render :show, status: :created, location: @todoList }
          else
            format.html { render :new }
            format.json{ render json: @todoList.errors, status: :unprocessable_entity }
          end
        end
    end

    def new
        @todoList = TodoList.new
    end

    def destroy
        @todoList.destroy
        respond_to do |format|
          format.html { redirect_to todoLists_url, notice: 'Post was successfully destroyed.' }
          format.json { head :no_content }
        end
    end
    
    def update
        respond_to do |format|
          if @todoList.update(todoList_params)
            format.html { redirect_to @todoList, notice: 'Post was successfully updated.' }
          else
            format.html { render :edit }
          end
        end
    end

    private
    def set_todoList
      @todoList = TodoList.find(params[:user_id])
    end
  
    def todoList_params
      params.require(:todoList).permit(:title, :description, :category, :status)
    end
end
