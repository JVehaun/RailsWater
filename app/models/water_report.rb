class WaterReport < ActiveRecord::Base

  def self.create_with_params water_report_params
    attrs = water_report_params
    attrs[:report_num] = 0
    self.create!(attrs)
  end

end
