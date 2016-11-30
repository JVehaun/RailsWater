source 'https://rubygems.org'



# ==================
# Architecture Setup
# ==================
gem 'rails', '4.2.6' # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'mysql2', '>= 0.3.13', '< 0.5'# Use mysql as the database for Active Record
gem 'activerecord-sqlserver-adapter'
# Web servers
gem 'puma' # Speed / concurrency / parallelism
gem 'thin' # dev debugging
gem 'sidekiq'   # Background worker queues and processing
gem 'apartment-sidekiq'
gem 'redis'

# ===========================
# Server/Back-end Development
# ===========================
gem 'devise'               # user authentication
gem 'devise_invitable'     # user invitations
gem 'jbuilder', '~> 2.0'   # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder

# ============================
# Client/Front-end Development
# ============================
gem 'react-rails' # Use ReactRails for the frontend
gem 'browserify-rails' # Use npm modules in rails
gem 'bootstrap-sass'   # Bootstrap
gem 'sass-rails', '~> 5.0' # Use SCSS for stylesheets
gem 'font-awesome-sass', '>= 4.5.0' # font awesome icons
gem 'uglifier', '>= 1.3.0' # Use Uglifier as compressor for JavaScript assets
gem 'therubyracer', platforms: :ruby # See https://github.com/rails/execjs#readme for more supported runtimes
gem 'underscore-rails' # underscore.js
gem 'jquery-rails' # Use jquery as the JavaScript library
gem 'jquery-ui-rails'



# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'pry'
  gem 'pry-rails'

  # Step-by-step debugging and stack navigation
  gem 'pry-byebug'
  # For memory profiling
  gem 'derailed'
  # Call stack profiler
  gem 'stackprof'
  # Use rspec as test suite
  # (available in dev to expose generators and rake tasks without having to type RAILS_ENV=test)
  gem 'rspec-rails', '~> 3.4.2'
  # Display more information error page
  gem 'better_errors'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

