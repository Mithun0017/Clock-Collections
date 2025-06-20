# 🕒 Tkinter Digital Clock

A simple yet elegant digital clock application built using Python's Tkinter module. This clock displays the current system time in an attractive UI with real-time updates.

## 🧰 Technologies Used

- Python 3
- Tkinter (standard GUI library in Python)
- `time.strftime` for retrieving system time

## 🚀 Features

- Displays current system time in 12-hour format with AM/PM
- Real-time updating every second
- Sleek, centered digital clock interface
- Styled with a bold stencil font and modern black-and-white theme

## 📝 Code Overview

- `Label()` widget is used to display the clock.
- `strftime()` gets the current time in hours, minutes, and seconds.
- `after()` schedules the clock to update every 1000 milliseconds (1 second).
