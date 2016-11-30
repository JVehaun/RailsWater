class RenameTypeToWaterType < ActiveRecord::Migration
  def change
  	rename_column :water_reports, :type, :water_type
  end
end
