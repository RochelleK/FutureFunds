Rails.application.routes.draw do
  
  resources :lists
  resources :items
  resources :users 
  # do 
  #   get 'sum_items', on: :member
  # end 


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 
  
  # get "/sum_items", to: "users#sum_items"
  
  # get "/budget", to: "lists#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
