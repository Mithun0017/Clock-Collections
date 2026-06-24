# 🕒 Digital Clock with PyQt5

A sleek and customizable digital clock application built using Python and PyQt5. This GUI-based clock displays the current time in a digital format with a retro LED-style font.


---

## 🛠️ Features

- ⏰ Real-time digital clock display
- 🎨 Stylish UI with customizable colors
- 🔤 Custom retro digital font (`DS-DIGIT.TTF`)
- 📦 Lightweight and standalone

---

## 🧱 Requirements

- Python 3.x
- PyQt5

---

## 📥 Installation

**Install dependencies:**

```bash
pip install PyQt5
```
---

## 🖼️ UI Customization

- **Font Size:** Adjust the size in `setStyleSheet("font-size: 150px; ...")`
- **Font Color:** Change HSL values in the `color` style string
- **Background Color:** Modify the `background-color` value
- **Window Size:** Controlled by `setGeometry(600, 400, 300, 100)`

---

## 📁 Project Structure

```
Clock_6/
├── Digital Clock.py
├── DS-DIGIT.TTF
├── clock_icon.png
└── README.md
```

---

## ❓ Troubleshooting

- **Font not displaying correctly?**  
  Ensure `DS-DIGIT.TTF` is in the same directory and not corrupted.

- **No icon showing?**  
  Check that `clock_icon.png` exists and is a valid image file.

---

## 📸 Screenshots

<p float="left">
  <img src="./Output Screenshots/Clock.png" width="48%" />
</p>

---


## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Developed by Mithun  
Feel free to contribute, fork, or open issues.
