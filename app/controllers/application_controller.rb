class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :set_current_user
  helper_method :get_current_user

  def set_current_user user
    @current_user = user
  end

  def get_current_user
    @current_user
  end
end
