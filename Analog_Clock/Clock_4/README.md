# 🕘 Modern Analog Clock

A beautiful and responsive analog clock built using **HTML**, **CSS**, and **JavaScript**. This clock features colorful hands, glowing design, and smooth real-time animations — perfect for learning DOM manipulation and CSS transforms.

---

## ✨ Features

- Real-time analog clock
- Smooth rotation of hour, minute, and second hands
- Color-coded hands (hour, minute, second)
- Fully responsive and centered design
- Stylish dark mode theme with glowing effects

---

## 🛠️ Technologies Used

- **HTML5** – Markup structure  
- **CSS3** – Styling, animation, and layout  
- **JavaScript (ES6)** – Time calculations and DOM manipulation  

---

## ⚙️ How It Works

- `setInterval()` calls the `displayTime()` function every second.
- Clock hands are rotated using `transform: rotate(...)` with degree values:
  - Hour hand: `30 * hours + minutes / 2`
  - Minute hand: `6 * minutes`
  - Second hand: `6 * seconds`
- Custom properties (`--clr`, `--h`, `--i`) are used for colors, hand heights, and positioning numbers.

---
