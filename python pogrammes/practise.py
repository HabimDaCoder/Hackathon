import turtle
t=turtle.Turtle()
t.speed(0)
turtle.bgcolor("yellow")
t.pensize(5)
t.pencolor("red")
t.penup()
t.goto(0,290)
t.pendown()
for i in range(10):
    t.right(36)
    t.forward(50)
    t.left(75)
    t.forward(50)
    t.right(75)
    t.forward(50)
t.penup()
t.goto(0,0)
t.pendown()
for i in range(10):
     
    t.left(75)
    t.forward(50)
    t.left(75)
    t.forward(50)

t.penup()
t.goto(90,50)
t.pendown()
for i in range(10):
    t.right(75)
    t.forward(50)
    t.right(75)
    t.forward(50)
    



turtle.done()    