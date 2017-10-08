class CreateTodoLists < ActiveRecord::Migration[5.1]
  def change
    create_table :todo_lists do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.text :description
      t.references :category, foreign_key: true
      t.string :status
      t.references :api, foreign_key: true

      t.timestamps
    end
  end
end
