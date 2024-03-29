Rails.application.routes.draw do
  # RESTful
  resources :reviews, only: [:index, :show, :create]
  resources :movies, only: [:index, :show, :create, :update]
  resources :blogs
  resources :socials, only: [:index, :show]
  post '/user_socials/join_group', to: 'user_socials#join_group', as: 'join_group'
  get '/user/socials', to: 'user_socials#user_socials', as: 'user_socials'
  # custom route, get /movies/search/:term -> search action in movies controller
  get "/movies/search/:term", to: "movies#search"

  # NOT RESTful
  delete "/movies/:id", to: "movies#destroy"
  get "/users/:user_id/reviews", to: "reviews#index"
  delete "/reviews/:id", to: "reviews#destroy"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # CREATE session for specific user data
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  get "users/search", to: "users#search", as: "search"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end