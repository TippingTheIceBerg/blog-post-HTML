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