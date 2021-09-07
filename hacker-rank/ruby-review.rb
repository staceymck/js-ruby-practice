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

# Accessing elements in arrays
def element_at(arr, index)
  arr[index]
  # or arr.at(index)
end

def inclusive_range(arr, start_idx, end_idx)
  arr[start_idx..end_idx]
end

def non_inclusive_range(arr, start_idx, end_idx)
  arr[start_idx...end_idx]
end

def start_and_length(arr, start_idx, length)
  arr[start_idx,length]
end

def get_first_x_elements(arr, x_elements)
  arr.take(x)
end

def drop_first_x_elements(arr, x_elements)
  arr.drop(x)
end