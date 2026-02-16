# Visited-Places


A simple web-based Travel Log application.  
It allows the user to **Create, View, and Delete destinations**, with details displayed in a clean, card-style interface. Destinations persist across page reloads using local storage.

---

## 📸 Web-page Preview
![alt text](image.png)

---

## 👩‍💻 Author's Information
**Author's Name:** Sharon Moegi  
**Contact Info:** (Email) sharamoegi@gmail.com  

---

## ⚙️ Setup Instructions
- Clone the repository:
(```bash
git clone `https://github.com/shara-arch/Visited-Places.git`)
- Open terminal command line then navigate to the root folder of the application. `cd Visited-Places`
- Open `index.html` on your preferred browser.

---
## 🧪 Behaviour Driven Development (BDD)
### 1. Displays Form for Destination Details
- INPUT: Location, Sub-Location, Landmark, Year, Season, Month, Notes
- OUTPUT: Displays a list saved destinations.

### 2. Displays an Error Message if:
- Location is null
- Sub-Location is null
- Landmark is null
- Timeline is null

### 3. Clears Form and Adds Destination
 -INPUT: "Add Destination"
- OUTPUT: Clears form fields
- OUTPUT: Renders destination list with count

### 4. Displays Destination Details
- INPUT: Click on a destination in the list
- OUTPUT: Shows full details in the details block, including seasonal emoji

### 5. Deletes Destination
- INPUT: "Delete" button in details view
- OUTPUT: Removes destination from list and storage

---

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript (with Local Storage)

---

🚀 Future Improvements
- Add search and filter functionality for large destination lists
- Add edit/update functionality for destinations
- Allow users to add images to their Visited Places

---

## 🔗 Link to Live Site
Please find the link to the Live Site: https://shara-arch.github.io/Visited-Places/

---

## Support
I encourage collaboration!
Feel free to contact me at:
📧 Email: sharamoegi@gmail.com

---

## 📜 LICENSE
MIT License

Copyright (c) 2026 shara-arch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
