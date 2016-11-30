class DashboardController < ApplicationController

  def dashboard_screen
    user = User.find_by(id: params[:user_id])
    @current_user = user;
  end

end
