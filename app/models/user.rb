class User < ActiveRecord::Base

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true

  def self.create_with_params user_params
  	byebug
    attrs = user_params
    attrs[:banned] = false
    attrs[:logins] = 0
    self.create!(attrs)
  end

  def update_with_params user_params
    attrs = user_params
    self.update!(attrs)
  end

end
