Rails.application.routes.draw do
  root 'todolists#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :todolists 
  get '/categories/:category', to: 'categories#index', as: 'category'

  # resources :categories
 

  # resources :users do
  #   resources :todolists
  #   resources :categories
  # end

  
end
