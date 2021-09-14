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

# Add to an array
def add_to_end(arr, element)
  arr.push(element)
end

def add_to_start(arr, element)
  arr.unshift(element)
end

def insert_element(arr, index, element)
  arr.insert(index, element)
end

# Remove from an array
def remove_from_end(arr)
  arr.pop
end

def remove_from_start(arr)
  arr.shift
end

def remove_at_index(arr, index)
  arr.delete_at(index)
end

def remove_all_instances(arr, element)
  arr.delete(element)
end

# Selection methods
  # Non-destructive
  def select_odd(arr)
      arr.select {|a| a % 2 != 0}
  end

  def reject_multiples_3(arr)
    arr.reject {|a| a % 3 == 0}
  end

  # Destructive
  def delete_neg_elements(arr)
    arr.delete_if {|a| a < 0}
  end

  def keep_non_neg_elements(arr)
    arr.keep_if {|a| a >= 0}
  end

# Initialize hashes & set default value
# Ruby docs - If key not found, returns default value. This is determined by
# its default proc (if exists) or else its default (set initially to nil)

# Can read and set default for hash
# Option 1
d_hash = Hash.new
d_hash.default = 0
#d_hash.default => 0

# Option 2
d2_hash = Hash.new(-1)
#d2_hash.default => -1

# Add key-value pairs to hash
  hash_add = Hash.new
  hash_add.default = 0

  # Approach 1
  hash_add["key_one"] = "value_one"

  # Approach 2
  hash_add.store("key_two", "value_two")
  hash_add.store(2, "Second Quarter")

# Delete key-value pairs from hash
  # Symbols
  hash_delete = {name: "Dail", age: 65}
  hash_delete.delete(:name)

  # Standard keys
  hash_delete_2 = {"name" => "Dail", "age" => 65}
  hash_delete_2.delete("name")
  
