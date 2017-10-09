class CreateTodolists < ActiveRecord::Migration[5.1]
  def change
    create_table :todolists do |t|
      t.references :user
      t.string :title
      t.text :description
      t.references :category
      t.string :status
      # t.references :api

      t.timestamps
    end
    # add_index :todo_lists, :user
    # add_index :todo_lists, :category
    # add_index :todo_lists, :api
  end
end