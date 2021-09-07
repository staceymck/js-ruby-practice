# Update score unless user is an admin; provided with #update_score and #is_admin methods
def scoring(user_array)
  user_array.each do |user|
    user.update_score unless user.is_admin?
  end
end