Rails.application.routes.draw do
  
  resources :blogs
  resources :reviews, only: [:index, :show, :create, :update]
  resources :movies, only: [:index, :show, :create]
  
  # resources :users
  # just a read- not sending anything to the server
  delete "/reviews/:id", to: "reviews#destroy"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # CREATE session for specific user data
  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end