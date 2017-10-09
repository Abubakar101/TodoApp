class CategoriesController < ApplicationController
    def index
        @categories = Category.order('id ASC').all
    end

    def show
        @category = Category.find(params[:id])
        # @comments = Comment.where("user_id = ?", params[:id])
    end
end
