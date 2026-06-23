# 🕰️ Roman Vintage Clock

A beautifully crafted **vintage-style clock** with Roman numerals, ticking sound, and smooth animation—built with **HTML**, **CSS**, and **vanilla JavaScript** using the Canvas API.

---

## 🎨 Demo & Features

- Analog clock with **Roman numeral hour markers**
- Canvas rendering with **hand-drawn vintage hands**
- Synchronized second hand + **tick sound effect**
- Smooth, continuous animation using `requestAnimationFrame`
- Elegant dark-tone UI with gradient background


---


## 🧩 How It Works

- **Canvas initialization**:  
  Uses `ctx = canvas.getContext('2d')`, translates to center, and sets radius for scaling.

- **Clock face elements**:  
  - `drawFace()` — draws outer circle, gradient stroke, and center hub  
  - `drawNumbers()` — maps Roman numerals I–XII around the dial  
  - `drawTime()` — computes angles for hour, minute, and second hands

- **Vintage hands style**:  
  - Uses **custom polygon shapes** with shadow effects  
  - `drawHand()` supports a “vintage” style for aesthetics

- **Animation & sound sync**:  
  - `animateClock()` triggers `drawClock()` via `requestAnimationFrame`  
  - On second change, plays tick sound (`tick.mp3`) using the `Audio` object—this follows patterns seen in analog-clock sound toggles

- **Decorative styling**:  
  - `drawCenter()` creates a metallic central cap with radial gradient  
  - `drawGloss()` adds a subtle glossy arc to simulate sheen

---

## 📸 Screenshots

<p float="left">
  <img src="./Output Screenshots/Clock.png" width="48%" />
</p>

---

