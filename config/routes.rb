Rails.application.routes.draw do
  root 'users#show'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :todolists 
  # get '/categories/', to: 'categories#index', as: 'categories'
  # get '/categories/:category', to: 'categories#show', as: 'category'

  resources :categories
  resources :dones
 

  resources :users do
    resources :todolists
    resources :categories
    resources :dones
  end

  
end
