# This file is used by Rack-based servers to start the application.

require_relative "config/environment"
set :database, "postgres://localhost/jakemanley"
run Rails.application
Rails.application.load_server
