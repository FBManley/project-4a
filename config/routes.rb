Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :create, :update, :delete]
  resources :movies, only: [:index, :create]
  # resources :users
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
