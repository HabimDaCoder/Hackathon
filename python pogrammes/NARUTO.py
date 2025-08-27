import turtle

# Setup the screen
screen = turtle.Screen()
screen.bgcolor("white")
screen.title("Naruto Uzumaki")

# Create the turtle
naruto = turtle.Turtle()
naruto.speed(5)

# Draw Naruto's headband
naruto.penup()
naruto.goto(-100, 100)
naruto.pendown()
naruto.fillcolor("gray")
naruto.begin_fill()
for _ in range(2):
    naruto.forward(200)
    naruto.right(90)
    naruto.forward(50)
    naruto.right(90)
naruto.end_fill()

# Draw the spiral symbol on the headband
naruto.penup()
naruto.goto(0, 75)
naruto.pendown()
naruto.pencolor("black")
naruto.width(2)
for _ in range(36):
    naruto.forward(5)
    naruto.right(10)

# Draw whisker marks
naruto.penup()
naruto.goto(-50, 50)
naruto.pendown()
naruto.width(3)
naruto.goto(-100, 30)

naruto.penup()
naruto.goto(-50, 20)
naruto.pendown()
naruto.goto(-100, 0)

naruto.penup()
naruto.goto(50, 50)
naruto.pendown()
naruto.goto(100, 30)

naruto.penup()
naruto.goto(50, 20)
naruto.pendown()
naruto.goto(100, 0)

# Hide the turtle
naruto.hideturtle()

# Keep the window open
screen.mainloop()