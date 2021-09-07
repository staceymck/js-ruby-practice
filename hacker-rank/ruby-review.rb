# Update score unless user is an admin; provided with #update_score and #is_admin methods
def scoring(user_array)
  user_array.each do |user|
    user.update_score unless user.is_admin?
  end
end

# Write a case statement that prints output based on object type passed in as argument
def determine_class(obj)
  case obj
  when Hacker
    puts "It's a Hacker!"
  when Submission
    puts "It's a Submission!"
  when TestCase
    puts "It's a TestCase!"
  when Contest
    puts "It's a Contest!"
  else
    puts "It's an unknown model"
  end
end