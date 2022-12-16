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
