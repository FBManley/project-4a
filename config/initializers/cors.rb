# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.
# AJAX request is the fetch() function in JavaScript.

# Read more: https://github.com/cyu/rack-cors
# giving permissions to setting up fetch from frontend to backend and does it by default for all origins and all resources.
# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'localhost:4000', 

#     resource '*',  headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end
# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#     allow do
#       origins 'http://localhost:4000'
#       resource '*', headers: :any, methods: [:get, :post, :options]
#     end
# end