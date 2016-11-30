class LoginController < ApplicationController

  def login_screen
    @users = User.all
  end

end
