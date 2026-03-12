# 🚀 Quick Start Guide - Run Your Portfolio Locally

Follow these simple steps to see your portfolio in action immediately!

## Option 1: VS Code Live Server (⭐ EASIEST)

### Requirements
- VS Code installed
- Extension: "Live Server" by Ritwick Dey (free)

### Steps

1. **Open the project in VS Code**
   ```
   File → Open Folder → Select Achieng's_portfolio
   ```

2. **Install Live Server Extension**
   - Open Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Install by Ritwick Dey
   - Reload VS Code

3. **Start the server**
   - Right-click `index.html`
   - Click "Open with Live Server"
   - **Your portfolio opens automatically!** 🎉

4. **Make live changes**
   - Edit any file (HTML, CSS, JS)
   - Browser auto-refreshes instantly
   - No need to restart server

**Portfolio Location**: `http://localhost:5500`

---

## Option 2: Windows PowerShell (Built-in)

### For Python Users

**Step 1: Open PowerShell in your portfolio folder**
```
cd C:\Users\user\Desktop\Achieng's_portfolio
```

**Step 2: Start Python server**
```
python -m http.server 8000
```

**Step 3: Open browser**
- Visit: `http://localhost:8000`

**Step 4: Stop server**
- Press `Ctrl+C` in PowerShell

---

## Option 3: Node.js HTTP Server

### Requirements
- Node.js installed ([nodejs.org](https://nodejs.org))

### Steps

**Step 1: Install http-server globally**
```
npm install -g http-server
```

**Step 2: Navigate to portfolio**
```
cd C:\Users\user\Desktop\Achieng's_portfolio
```

**Step 3: Start server**
```
http-server
```

**Step 4: Open browser**
- Visit the URL shown (usually `http://localhost:8080`)

**Step 5: Stop server**
- Press `Ctrl+C`

---

## Testing Your Portfolio

Once your server is running:

### ✅ Check Each Section
- [ ] Home section displays correctly
- [ ] Navigation menu works
- [ ] "View Projects" button scrolls to projects
- [ ] "Contact Me" button scrolls to contact
- [ ] All images load properly

### ✅ Test Navigation
- Click each navbar link
- Verify smooth scrolling
- Test mobile menu (resize window)

### ✅ Mobile Responsive
- Resize browser window to mobile size
- Or press `F12` → Toggle device toolbar
- Should adapt to all screen sizes

### ✅ Forms
- Fill out contact form
- Click "Send Message"
- Should see confirmation

### ✅ Links
- Click project GitHub links
- Click contact email/phone/GitHub links
- Should open correctly

---

## File Structure Confirmation

Make sure you have all files:

```
✓ index.html           (main file)
✓ css/styles.css       (styling)
✓ js/script.js         (functionality)
✓ images/              (folder with images)
  ✓ placeholder-profile.jpg
✓ certificates/        (empty, ready for certs)
✓ projects/            (empty, ready for screenshots)
✓ README.md            (instructions)
✓ CUSTOMIZATION_GUIDE.md (personalization help)
```

---

## Next Steps

1. **Customize your info** - Follow CUSTOMIZATION_GUIDE.md
2. **Add your profile photo**
3. **Update contact information**
4. **Add your projects**
5. **Deploy to GitHub Pages** - See README.md

---

## Troubleshooting

### Port Already in Use?

If you get "Address already in use" error:

**Python Server**:
```
python -m http.server 9000
```
(Use port 9000 instead)

**HTTP Server**:
```
http-server -p 9000
```

### Page Doesn't Load?

- Check the URL in browser address bar
- Refresh page (Ctrl+R)
- Clear cache (Ctrl+Shift+R)
- Close and reopen browser

### Images Not Showing?

- Check Files are in correct folders
- File names must match exactly (case-sensitive)
- Use forward slashes: `images/photo.jpg`

### JavaScript Not Working?

- Open DevTools: F12
- Go to Console tab
- Look for error messages
- Check that js/ folder exists

---

## Live Editing Tips

**While server is running:**

1. Edit `index.html` → Page refreshes automatically
2. Edit `css/styles.css` → Styles update in real-time
3. Edit `js/script.js` → Functions reload instantly
4. Change colors in CSS → See changes immediately

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Page shows "Cannot GET /" | Visit `http://localhost:8000/index.html` or make sure index.html is in root folder |
| Styles not loading | Hard refresh: Ctrl+Shift+R |
| No images show | Check images/ folder exists with files |
| Forms don't work | Check js/script.js is linked in HTML |
| Mobile menu stuck | Clear cache and refresh page |

---

## What You Should See

### Home Section (Landing Page)
- Teal gradient background
- Your profile photo (currently placeholder)
- Name: "Sheldon Kasera"
- Title: "Software Engineering Student"
- Two buttons: "View Projects" and "Contact Me"

### Navigation Bar
- Logo "SK"
- Menu items: Home, About, Skills, Coursework, Projects, Certificates, Gallery, Contact
- Responsive hamburger menu on mobile

### About Section
- Professional bio
- 3 highlight boxes with icons

### Skills Section
- Technical skills with progress bars
- Tools & technologies cards
- Soft skills list

### Projects Section
- Project cards (currently showing default projects)
- Project images and descriptions
- GitHub links

### Certificates & Gallery Sections
- Currently empty (ready for your uploads)
- Shows placeholder messages

### Contact Section
- Contact form
- Displays contact info

---

## Next: Personalization

Now that you see it working:

1. **Read CUSTOMIZATION_GUIDE.md**
2. **Add your profile photo**
3. **Add your real projects**
4. **Update contact info**
5. **See changes live!**

---

## Ready to Deploy?

Once you're happy with your portfolio:

1. See README.md for GitHub Pages deployment
2. Follow step-by-step guide
3. Your portfolio goes live at: `https://yourusername.github.io`

---

**Happy building! 🚀**

Need help? Check CUSTOMIZATION_GUIDE.md or README.md
