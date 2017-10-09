class UsersController < ApplicationController
    before_action :set_user, only: [:show, :edit, :update, :destroy]

    def index
        @users = User.order('id ASC').all
    end

    def show
        # @user = User.find(params[:id])
        # @comments = Comment.where("user_id = ?", params[:id])
    end

    def create
        @user = User.new(user_params)
        respond_to do |format|
          if @user.save
            format.html { redirect_to @user, notice: 'Post was successfully created.' }
            format.json { render :show, status: :created, location: @user }
          else
            format.html { render :new }
            format.json{ render json: @user.errors, status: :unprocessable_entity }
          end
        end
    end

    def new
        @user = User.new
    end

    def destroy
        @user.destroy
        respond_to do |format|
          format.html { redirect_to users_url, notice: 'Post was successfully destroyed.' }
          format.json { head :no_content }
        end
      end
    
      def update
        respond_to do |format|
          if @user.update(user_params)
            format.html { redirect_to @user, notice: 'Post was successfully updated.' }
          else
            format.html { render :edit }
          end
        end
      end

    private
    def set_user
      @user = User.find(params[:id])
    end
  
    def user_params
      params.require(:user).permit(:name)
    end
end
