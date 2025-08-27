import turtle

# Setup the screen
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Glowing Heart")

# Create the turtle
heart = turtle.Turtle()
heart.speed(3)
heart.color("red")
heart.pensize(3)

# Draw the heart shape
heart.begin_fill()
heart.fillcolor("red")
heart.left(50)
heart.forward(133)
heart.circle(50, 200)
heart.right(140)
heart.circle(50, 200)
heart.forward(133)
heart.end_fill()

# Create the glowing effect
heart.penup()
heart.goto(0, 0)
heart.pendown()
heart.pensize(2)
heart.color("pink")

for glow in range(10, 60, 10):
    heart.penup()
    heart.goto(0, -glow / 2)
    heart.pendown()
    heart.pensize(2)
    heart.pencolor((1, 0.5, 0.5))  # Light pink glow
    heart.circle(glow)

# Hide the turtle
heart.hideturtle()

# Keep the window open
screen.mainloop()