Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :todolists
  resources :categories

  resources :users do
    resources :todolists
    resources :categories
  end
  root 'users#index'
end
