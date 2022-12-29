print "bubuyu"
puts "sadda"

# To convert an integer to a float:
13.to_f   #=> 13.0

# To convert a float to an integer:
13.0.to_i #=> 13
13.9.to_i #=> 13

# With the plus operator:
"Welcome " + "to " + "Odin!"    #=> "Welcome to Odin!"

# With the shovel operator:
"Welcome " << "to " << "Odin!"  #=> "Welcome to Odin!"

# With the concat method:
"Welcome ".concat("to ").concat("Odin!")  #=> "Welcome to Odin!

"hello"[0]      #=> "h"

"hello"[0..1]   #=> "he"

"hello"[0, 4]   #=> "hell"

"hello"[-1]     #=> "o"

 hash = {:dog => 'barks', :cat => 'meows', :pig => 'oinks'}

 "hello".capitalize #=> "Hello"

 "hello".include?("lo")  #=> true

 "hello".include?("z")   #=> false

 "hello".upcase  #=> "HELLO"

 "Hello".downcase  #=> "hello"

 "hello".empty?  #=> false

 "".empty?       #=> true

 "hello".length  #=> 5

 "hello".reverse  #=> "olleh"

 "hello world".split  #=> ["hello", "world"]

 "hello".split("")    #=> ["h", "e", "l", "l", "o"]

 " hello, world   ".strip  #=> "hello, world"


 string.gsub(" ","")

# user input
 name = gets.chomp

# blocks
 total = 0
[1, 2, 3].each { |number| total += number }
puts total # 6

total = 0
[1, 2, 3].each do |number|
  total += number
end
puts total # 6

# variable types
MY_CONSTANT = 'I am available throughout your app.'

$global = 'I am also available throughout your app.'

@@classes = 0

@instance = 'I am available throughout the current instance of this class.'

var = 'I must be passed around to cross scope boundaries.'


10.times do
  puts name
end


aFile = File.new("filename", "mode")
   # ... process the file
aFile.close


File.open("filename", "mode") do |aFile|
  # ... process the file
end


aFile = File.new("input.txt", "r")
if aFile
   content = aFile.sysread(20)
   puts content
else
   puts "Unable to open file!"
end

if 1 < 2
  puts "Hot diggity, 1 is less than 2!"
end

puts "Hot diggity damn, 1 is less than 2" if 1 < 2
# spaceship
5 <=> 10    #=> -1
10 <=> 10   #=> 0
10 <=> 5    #=> 1

grade = 'F'

did_i_pass = case grade #=> create a variable `did_i_pass` and assign the result of a call to case with the variable grade passed in
  when 'A' then "Hell yeah!"
  when 'D' then "Don't tell your mother."
  else "'YOU SHALL NOT PASS!' -Gandalf"
end

grade = 'F'

case grade
when 'A'
  puts "You're a genius"
  future_bank_account_balance = 5_000_000
when 'D'
  puts "Better luck next time"
  can_i_retire_soon = false
else
  puts "'YOU SHALL NOT PASS!' -Gandalf"
  fml = true
end

age = 19
puts "Welcome to a life of debt." unless age < 18

unless age < 18
  puts "Down with that sort of thing."
else
  puts "Careful now!"
end

age = 19
response = age < 18 ? "You still have your entire life ahead of you." : "You're all grown up."
puts response #=> "You're all grown up."

puts "x is 3" if x == 3
puts "x is NOT 3" unless x == 3


# accetpable ternary
foo = hitchhiker ? 42 : 3.1415    // Assign result of ?: to a variable
puts(hitchhiker ? 42 : 3.1415)    // Pass result as argument
return hitchhiker ? 42: 3.1415    // Return result

# case with only one puts
a = 5

answer = case a
  when 5
    "a is 5"
  when 6
    "a is 6"
  else
    "a is neither 5, nor 6"
  end

puts answer

# case with no arguments
a = 5

case
when a == 5
  puts "a is 5"
when a == 6
  puts "a is 6"
else
  puts "a is neither 5, nor 6"
end

# while loop
i = 0
while i < 10 do
 puts "i is #{i}"
 i += 1
end

# while without i
while gets.chomp != "yes" do
  puts "Will you go to prom with me?"
end

# until
i = 0
until i >= 10 do
 puts "i is #{i}"
 i += 1
end

until gets.chomp == "yes" do
  puts "Will you go to prom with me?"
end

(1..5)      # inclusive range: 1, 2, 3, 4, 5
(1...5)     # exclusive range: 1, 2, 3, 4

# We can make ranges of letters, too!
('a'..'d')  # a, b, c, d
# for loop
for i in 0..5
  puts "#{i} zombies incoming!"
end
# times loop
5.times do |number|
  puts "Alternative fact number #{number}"
end

5.upto(10) {|num| print "#{num} " }     #=> 5 6 7 8 9 10

10.downto(5) {|num| print "#{num} " }   #=> 10 9 8 7 6 5

i = 0
loop do
  i = i + 2
  puts i
  if i == 10
    break       # this will cause execution to exit the loop
  end
end

# next
i = 0
loop do
  i = i + 2
  if i == 4
    next        # skip rest of the code in this iteration
  end
  puts i
  if i == 10
    break
  end
end

# next in while loop
x = 0

while x <= 10
  if x == 3
    x += 1
    next
  elsif x.odd?
    puts x
  end
  x += 1
end

# countdown with for loops
x = gets.chomp.to_i

for i in 1..x do
  puts x - i
end

puts "Done!"

x = [1, 2, 3, 4, 5]

for i in x.reverse do
  puts i
end

puts "Done!"

# iterator basic
names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']

names.each { |name| puts name }

# recursion simple
def doubler(start)
  puts start
  if start < 10
    doubler(start * 2)
  end
end
# recursion fibonacci
def fibonacci(number)
  if number < 2
    number
  else
    fibonacci(number - 1) + fibonacci(number - 2)
  end
end

puts fibonacci(6)
# arrays
num_array = [1, 2, 3, 4, 5]
str_array = ["This", "is", "a", "small", "array"]
str_array = ["This", "is", "a", "small", "array"]

str_array.first         #=> "This"
str_array.first(2)      #=> ["This", "is"]
str_array.last(2)       #=> ["small", "array"]

# removing adding to arrays
num_array = [1, 2]

num_array.push(3, 4)      #=> [1, 2, 3, 4]
num_array << 5            #=> [1, 2, 3, 4, 5]
num_array.pop             #=> 5
num_array                 #=> [1, 2, 3, 4]

num_array = [2, 3, 4]

num_array.unshift(1)      #=> [1, 2, 3, 4]
num_array.shift           #=> 1
num_array                 #=> [2, 3, 4]

num_array = [1, 2, 3, 4, 5, 6]

num_array.pop(3)          #=> [4, 5, 6]
num_array.shift(2)        #=> [1, 2]
num_array                 #=> [3]

# concating arrays and finding the difference between the two.

a = [1, 2, 3]
b = [3, 4, 5]

a + b         #=> [1, 2, 3, 3, 4, 5]
a.concat(b)   #=> [1, 2, 3, 3, 4, 5]

[1, 1, 1, 2, 2, 3, 4] - [1, 4]  #=> [2, 2, 3]


# map/collect (they do the same)
irb :001 > a = [1, 2, 3, 4]
=> [1, 2, 3, 4]
irb :002 > a.map { |num| num**2 }
=> [1, 4, 9, 16]
irb :003 > a.collect { |num| num**2 }
=> [1, 4, 9, 16]
irb :004 > a
=> [1, 2, 3, 4]

# deletes at index
irb :005 > a.delete_at(1)
=> 2
irb :006 > a
=> [1, 3, 4]
# deletes at word
irb :007 > my_pets = ["cat", "dog", "bird", "cat", "snake"]
=> ["cat", "dog", "bird", "cat", "snake"]
irb :008 > my_pets.delete("cat")
=> "cat"
irb :009 > my_pets
=> ["dog", "bird", "snake"]
# deletes duplcaites
irb :010 > b = [1, 1, 2, 2, 3, 3, 4, 4]
=> [1, 1, 2, 2, 3, 3, 4, 4]
irb :011 > b.uniq
=> [1, 2, 3, 4]
irb :012 > b
=> [1, 1, 2, 2, 3, 3, 4, 4]

# select ruby
irb :001 > numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
irb :002 > numbers.select { |number| number > 4 }
=> [5, 6, 7, 8, 9, 10]
irb :003 > numbers
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# map with do and end (format difference but same result as {})
irb(main):028:1* array.map do |number| 
  irb(main):029:1*   puts number + "2" 
  irb(main):030:0> end

# joining arrays and literal format
letters = %w(a b c d)
letters.join
# "abcd"
letters = %w(a b c d)
letters.join(" ")
# "a b c d"

# deconstruct 2 dimensional arrays
users = [
  [1, 'Peter'],
  [2, 'Steven']
 ]
users.flatten
# [1, "Peter", 2, "Steven"]

# choose a random number
numbers.sample

# remove nil values in arrays
numbers << nil
# [1, 3, 3, 5, 5, nil]
numbers.compact
# [1, 3, 3, 5, 5]

# more on joining arrays

# Faster, because this changes the users array
users.concat(new_users)  
# Slower, because this creates a new array
users += new_users  

# Finally, you can get the elements that appear in two arrays at the same time:
users & new_users
