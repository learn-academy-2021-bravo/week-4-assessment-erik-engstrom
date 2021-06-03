# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Need to test if a value in the array includes a character. If it does contain that character then return the value.
# Will use the .include? method to look for character.
# if .include? returns true then return value 
# Need to filter over the array to run .include? method on each value. 
# Upon doing some research I found the filter method in Ruby is the .select method

def does_include(array, letter)
  array.select {|value| value.include? letter}
end
p does_include(beverages_array, letter_o)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Need to remove all the vowels from a given string. 
# Define custom method using the .delete method to return a string with no 'a,e,i,o,u' characters.  
def no_vowels string
  string.delete ('a,e,i,o,u,A,E,I,O,U')
end
p no_vowels(album1)
p no_vowels(album2)
p no_vowels(album3)





# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Create a class called Bike
class Bike
  attr_accessor :model, :wheels, :current_speed
  # initialized with a model, wheels, and current_speed.
  def initialize model
    # The current_speed should start at 0.
    @model = model
    @wheels = 2
    @current_speed = 0
  end
#  Create a get_info method that returns a sentence with all the data from the bike object.
  def get_info
    "Your #{@model} bike has #{@wheels} wheels and is going #{@current_speed}mph."
  end

end

new_bike = Bike.new 'Specialized'
p new_bike.get_info



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

class Bike
  attr_accessor :model, :wheels, :current_speed
  # initialized with a model, wheels, and current_speed.
  def initialize model
    # The current_speed should start at 0.
    @model = model
    @wheels = 2
    @current_speed = 0
  end

#  Create a get_info method that returns a sentence with all the data from the bike object.
  def get_info
    "Your #{@model} bike has #{@wheels} wheels and is going #{@current_speed}mph."
  end

# The pedal_faster method should increase the speed.
  def pedal_faster speed
    @current_speed = @current_speed + speed
  end

  # The brake method should decrease the speed. The bike cannot go negative speeds.
  def brake resistance
    @current_speed = @current_speed - resistance 
    if @current_speed < 0
      @current_speed = 0
      else @current_speed = @current_speed - resistance 
    end
  end
end

new_bike = Bike.new 'Specialized'

p new_bike.pedal_faster 20
p new_bike.brake 36
p new_bike.get_info
