class Category < ApplicationRecord
    has_many :todo_lists
    has_many :users, through: :todo_lists
end
