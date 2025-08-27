import random
num=random.randint(1,100)
a=0
guess = 0
while guess != num:
  guess = int(input("Guess the number. HINT 1-100:  "))
  a=a+1
  if guess>num:
    print("guess lower")
  elif guess<num:
      print("guess higher")
  else:
   print("You got it!")
print( a )    