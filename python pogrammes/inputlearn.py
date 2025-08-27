a=input("Enter your beautiful name: ")
print("Hello", a)

x = input("Enter the first number: ") #takes input as string instead of inteager
y = input("Enter the second number: ") #takes input as string instead of inteager
print(x+y) #so the answer is not what we expect, it is a concatenation of two strings

#now we convert the input number to integer from string

#either
x = int(input("Enter the first number: ")) #takes input as string instead of inteager
y = int(input("Enter the second number: ")) #takes input as string instead of inteager
print(x+y) #now the answer is what we expect, it is a sum of two integers

#or
x = input("Enter the first number: ")
y = input("Enter the second number: ")
print(int(x) + int(y)) #now the answer is what we expect, it is a sum of two integers