class WaterReportsController < ApplicationController

  def create
    @water_report = WaterReport.create_with_params(water_report_params)
    user = User.find_by(name: water_report_params[:reporter])
    redirect_to("/dashboard/" + user.id.to_s)
  end

  def water_report_params
    params.require(:water_report).permit(:id, :reporter, :location, :water_type, :cond, :date)
  end

end