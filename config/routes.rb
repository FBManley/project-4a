Rails.application.routes.draw do
  # RESTful
  resources :reviews, only: [:index, :show, :create]
  resources :movies, only: [:index, :show, :create, :update]
  # NOT RESTful
  delete "/movies/:id", to: "movies#destroy"
  get "/users/:user_id/reviews", to: "reviews#index"
  delete "/reviews/:id", to: "reviews#destroy"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # CREATE session for specific user data
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  
  get "users/search", to: "users#search", as: "search"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end