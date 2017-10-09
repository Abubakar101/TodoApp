class User < ApplicationRecord
    has_secure_password

    has_many :todo_lists
    has_many :categories, through: :todo_lists
    has_many :apis, through: :todo_lists
end
