class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :edit, :update, :destroy]

    def index
        @user = current_user
        # @user = User.find(params[:user_id])
        @todolists = Todolist.where(user_id: current_user.id).all.group_by(&:category)
        @todolists_count = Todolist.where(user_id: current_user.id).all.group(:category).count

        # "&" - https://stackoverflow.com/questions/1961030/ruby-ampersand-colon-shortcut 

        # debug
        
        # @todolists = Todolist.where(user_id: current_user.id).all 
        # @todolists = Todolist.pluck(:category).where(current.user.id)
# debug
        # >>  Todolist.select(:id, :category).find_by(user_id: current_user.id)
        # @todolists = Todolist.where(user_id: current_user.id).all.group_by(&:category)   
             
        # @todolists =Todolist.select( :category).group_by(&:category).where(user_id: current_user.id).count        
        # @todolists =Todolist.select( :category).distinct.where(user_id: current_user.id).count        
        # Todolist.where("category = ?", current_user.id)
        # @todolists = Todolist.pluck(category: current_user.id)
        # @categories = Todolist.pluck(:category)

    #    @count = Todolist.where(user_id: current_user.id).group(:category).count

        render json: { message: "ok", categories_data: @todolists_count, user:@user }
    end

    def show
    end

    def destroy
        # @category = Todolist.pluck(:category)
        # @category.destroy
        # respond_to do |format|
        #   format.html { redirect_to user_categories_path, notice: 'Post was successfully destroyed.' }
        #   format.json { head :no_content }
        # end
    end

    def update
        # p = todolist_params
        # # p[:category] = Category.find(todolist_params[:category])
        # @category = Todolist.pluck(:category)
        #    respond_to do |format|
        #      if @category.update(todolist_params)
        #        format.html { redirect_to user_categories_path, notice: 'Post was successfully updated.' }
        #      else
        #        format.html { render :edit }
        #      end
        #    end
       end

       private
       def set_category 
        @user = current_user
        @category = Todolist.where(category: params[:id],user_id: current_user.id)
        end
        def todolist_params
         params.require(:todolist).permit(:category)
       end

end




  


   