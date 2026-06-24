# ⏰ Tkinter Digital Clock

A sleek desktop digital clock built with **Python** and **Tkinter**, displaying the current time, day, and date in a stylish, real-time updating interface.

---

## 🧩 Features

- **Live update** every second using `strftime()` and `after()` methods
- Displays **time**, **day of the week**, and **full date** in a clean layout  
- Custom window **icon** support via `PhotoImage`  
- Stylish text using **Arial** and **Ink Free** fonts  
- Lightweight and self-contained — requires only standard Python and Tkinter

---

## 📂 Project Structure

```
├── Clock Program.py  # Main Tkinter clock application
├── clock_icon.png    # Optional window icon
└── README.md         # Project documentation
```

---

### 🛠️ How It Works

- The `update()` function retrieves formatted time, day, and date using `strftime()`, updates the label widgets via `config()`, and then schedules itself to run again after 1000 ms using `window.after(1000, update)`, ensuring continuous updates without freezing the UI :contentReference[oaicite:1]{index=1}.
  
- The UI components (`Label` widgets) are laid out using Tkinter’s `pack()` geometry manager for straightforward vertical stacking.

- Custom window styling (fonts, text colors, background, and icon) is applied through widget configuration and `PhotoImage` for a polished look.

---

## 📸 Screenshots

<p float="left">
  <img src="./Output Screenshots/Clock.png" width="48%" />
</p>

---

## 📫 Contact

- **GitHub**: [@Mithun0017](https://github.com/Mithun0017)  
- **Email**: [mithun200617@gmail.com](mailto:mithun200617@gmail.com)

---

## 📝 Summary

> A sleek and accurate desktop clock built with Python and Tkinter. It displays live time, day, and date with automatic updates every second. This project is ideal for learning GUI development, real-time scheduling in Tkinter, and crafting polished Python desktop applications.  
