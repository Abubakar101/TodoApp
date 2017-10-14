class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :edit, :update, :destroy]

    def index
        @user = User.find(params[:user_id])
        @todolists = Todolist.pluck(:category)
        # @categories = Todolist.pluck(:category)
        # render json: { message: "ok", categories_data: @todolists }
    end

    def show
      @todolist = Todolist.where(:category => params[:category]).all
      # @categories = Todolist.pluck(:category)
      # render json: { message: "ok", categories_data: @todolist }
      # debug
    end

    def destroy
        @category = Todolist.pluck(:category)
        @category.destroy
        respond_to do |format|
          format.html { redirect_to user_categories_path, notice: 'Post was successfully destroyed.' }
          format.json { head :no_content }
        end
    end

    def update
        p = todolist_params
        p[:category] = Category.find(todolist_params[:category])
        @category = Todolist.pluck(:category)
           respond_to do |format|
             if @category.update(todolist_params)
               format.html { redirect_to user_categories_path, notice: 'Post was successfully updated.' }
             else
               format.html { render :edit }
             end
           end
       end

       private
       def set_category 
        # @user = User.find(params[:user_id])
        @user = current_user
        @category = Todolist.where(category:(params[:id]))
        
        
    
        
       end
        def todolist_params
         params.require(:category).permit(:name)
       end

end




  


   