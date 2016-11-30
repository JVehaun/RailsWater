class UsersController < ApplicationController

  def create
    @user = User.find_by(username: user_params[:username].downcase)
    if (!@user)
      @user = User.create_with_params(user_params)
    end
    redirect_to("/login/")
  end

  def update
    if params[:user]
      @user = User.find(params[:id])
      @user.update_with_params(user_params)
    end
    redirect_to("/dashboard/" + params[:user][:id])
  end

  def login
    current_user = User.find_by(id: params[:id])
    set_current_user(current_user)
    current_user.update logins: (current_user.logins + 1)
    redirect_to("/dashboard/" + params[:id])
  end

  def login_fail
    @current_user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:id, :username, :name, :password, :type, :banned, :logins)
  end

end