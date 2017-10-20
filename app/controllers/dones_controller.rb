class DonesController < ApplicationController
    before_action :set_done, only: [:show, :edit, :update, :destroy]
    
       def index
            @user = current_user
            @todolists = Todolist.where(user_id: current_user.id, status: 'Done').all
        #    render json: { message: "ok", todolists_data: @todolists }
      
       end


       private
       def set_done 
        @user = current_user
        @todo = Todolist.where(status: params[:id],user_id: current_user.id)
        end
        def todolist_params
         params.require(:todolist).permit(:status)
       end
end
