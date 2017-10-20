class TodosController < ApplicationController
    before_action :set_todo, only: [:show, :edit, :update, :destroy]

    def index
        @user = User.find(params[:user_id])
        @todolists = Todolist.where(user_id: current_user.id, status: 'ToDo').all
   end





   private
   def set_todo 
    @user = current_user
    @status = Todolist.where(status: params[:id],user_id: current_user.id)
    end
    def todolist_params
     params.require(:todolist).permit(:status)
   end
end
