from tkinter import *
from tkinter import font
from time import *
import os

def update():
    time_string = strftime("%I:%M:%S %p")
    time_label.config(text=time_string)
    
    day_string = strftime("%A")
    day_label.config(text=day_string)
    
    date_string = strftime("%B %d, %Y")
    date_label.config(text=date_string)
    
    window.after(1000, update)

window = Tk()
window.title('Clock')

icon = PhotoImage(file="clock_icon.png")
window.iconphoto(True, icon)

time_label = Label(window, font=('Arial', 50), fg='#00ff00', bg='black')
time_label.pack()

day_label = Label(window, font=('Ink Free', 25))
day_label.pack()

date_label = Label(window, font=('Ink Free', 30))
date_label.pack()

update()

window.mainloop()