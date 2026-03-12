# Sheldon Kasera - Software Engineering Portfolio

A modern, professional, and responsive portfolio website built with HTML5, CSS3, and JavaScript. Featuring a beautiful teal green design theme with smooth animations and a recruiter-friendly layout.

## 📋 Project Overview

This portfolio website showcases Sheldon Kasera's skills, projects, certificates, and professional experience as a Software Engineering student. The website is fully responsive, works on all devices, and is optimized for recruiter engagement.

### Features

✅ **Modern Design**: Clean, minimalist interface with teal green color scheme  
✅ **Fully Responsive**: Mobile, tablet, and desktop optimized  
✅ **Smooth Animations**: CSS transitions and scroll effects  
✅ **Professional Typography**: Easy to read and aesthetically pleasing  
✅ **Multiple Sections**: Home, About, Skills, Coursework, Projects, Certificates, Gallery, Contact  
✅ **Email Integration**: Contact form ready for EmailJS integration  
✅ **Fast Loading**: Optimized for performance  
✅ **Accessible**: Semantic HTML and proper contrast ratios  

## 🚀 Quick Start

### Option 1: Using VS Code Live Server (Recommended)

1. **Open the project in VS Code**
   ```bash
   code /path/to/Achieng\'s_portfolio
   ```

2. **Install Live Server Extension**
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

3. **Start the server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your portfolio will open at `http://localhost:5500`

4. **Make changes**
   - Any file changes will automatically refresh the browser

### Option 2: Using Python HTTP Server

1. **Navigate to the project folder**
   ```bash
   cd /path/to/Achieng\'s_portfolio
   ```

2. **Start a Python HTTP server**
   ```bash
   python -m http.server 8000
   ```
   
   Or for Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Open in browser**
   - Visit `http://localhost:8000`

### Option 3: Using Node.js

1. **Install a simple HTTP server**
   ```bash
   npm install -g http-server
   ```

2. **Navigate to the project folder**
   ```bash
   cd /path/to/Achieng\'s_portfolio
   ```

3. **Start the server**
   ```bash
   http-server
   ```

4. **Open in browser**
   - Visit the URL shown in the terminal (usually `http://localhost:8080`)

## 📁 Project Structure

```
Achieng's_portfolio/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling (teal green theme)
├── js/
│   └── script.js             # JavaScript functionality
├── images/                   # Profile photos and gallery images
│   └── placeholder-profile.jpg  # Add your profile photo here
├── certificates/            # Certificate images
├── projects/                # Project screenshots
└── README.md               # This file
```

## 🎨 Color Scheme

The portfolio uses a professional teal green color palette:

- **Primary Color**: `#008080` (Teal Green)
- **Primary Dark**: `#006666` (Dark Teal)
- **Primary Light**: `#20b2aa` (Light Teal)
- **Accent Color**: `#e0f2f1` (Soft Teal)
- **Text Dark**: `#2c3e50` (Dark Charcoal)
- **Text Light**: `#7f8c8d` (Gray)

These colors are defined in `css/styles.css` under the `:root` CSS variables and can be easily customized.

## 📸 Customization Guide

### 1. Update Profile Photo

1. Prepare your profile photo (recommended: square, 500x500px minimum)
2. Place it in the `images/` folder
3. In `index.html`, find this line:
   ```html
   <img id="profileImg" src="images/placeholder-profile.jpg" alt="Sheldon Kasera" class="profile-photo">
   ```
4. Replace `placeholder-profile.jpg` with your image filename

### 2. Update Contact Information

In `js/script.js`, find the `populateContactInfo()` function:

```javascript
const contactData = {
    email: 'your.email@example.com',
    phone: '+1 (555) 000-0000',
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile'
};
```

Update with your actual information.

### 3. Add Projects

To add your own projects, modify the `defaultProjects` array in `js/script.js`:

```javascript
const defaultProjects = [
    {
        title: 'Your Project Name',
        description: 'Brief description of your project',
        image: 'projects/your-project-image.jpg',
        github: 'https://github.com/yourusername/your-repo'
    },
    // Add more projects...
];
```

**Steps:**
1. Create a screenshot of your project and save it to `projects/` folder
2. Add the project object to the array with title, description, image path, and GitHub link
3. Save and refresh your browser

### 4. Add Certificates

1. Take screenshots or export PDFs of your certificates as images (JPG or PNG)
2. Save them in the `certificates/` folder
3. The certificates will be displayed in a grid layout
4. Currently configured to display placeholder; to add custom certificates, modify the `loadCertificates()` function in `js/script.js`

**To enable custom certificates, edit `js/script.js`:**

```javascript
function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    const certificates = [
        {
            name: 'Certificate Name',
            image: 'certificates/your-certificate.jpg'
        },
        // Add more certificates...
    ];
    
    // Rest of the code...
}
```

### 5. Add Gallery Images

1. Place your photos in the `images/` folder
2. Update the `loadGallery()` function in `js/script.js`:

```javascript
function loadGallery() {
    const gallery = [
        { src: 'images/photo1.jpg', alt: 'Photo description' },
        { src: 'images/photo2.jpg', alt: 'Photo description' },
        // Add more images...
    ];
    
    // Rest of the code...
}
```

### 6. Set Up Email Functionality

The contact form is currently set to show a confirmation message but doesn't actually send emails. To enable email sending:

#### Using EmailJS (Recommended)

1. **Sign up at EmailJS**: Visit [EmailJS.com](https://www.emailjs.com)
2. **Create a free account** and set up your email service
3. **Get your Service ID, Template ID, and Public Key**
4. **Update `js/script.js`** with this code in the contact form submit handler:

```javascript
// Add this to the top of script.js
const emailServiceId = 'YOUR_SERVICE_ID';
const emailTemplateId = 'YOUR_TEMPLATE_ID';
const emailPublicKey = 'YOUR_PUBLIC_KEY';

// Replace the form submission code with:
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Initialize EmailJS
    emailjs.init(emailPublicKey);

    // Send email
    emailjs.send(emailServiceId, emailTemplateId, {
        from_name: name,
        from_email: email,
        message: message
    }).then(() => {
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    }).catch((error) => {
        alert('Error sending message. Please try again.');
        console.error('EmailJS error:', error);
    });
});
```

5. **Add EmailJS library** to your `index.html` in the `<head>` section:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

#### Using Formspree (Alternative)

1. Visit [Formspree.io](https://formspree.io)
2. Create an account and form
3. Update the form in `index.html` with the Formspree action

## 🌐 Deployment to GitHub Pages

### Step 1: Initialize Git Repository

```bash
cd /path/to/Achieng\'s_portfolio
git init
```

### Step 2: Create .gitignore (Optional)

```bash
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
```

### Step 3: Stage All Files

```bash
git add .
```

### Step 4: Create Initial Commit

```bash
git commit -m "Initial portfolio commit"
```

### Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `sheldonkasera.github.io` (important: use your GitHub username)
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create Repository"

### Step 6: Add Remote and Push

```bash
git remote add origin https://github.com/sheldonkasera/sheldonkasera.github.io.git
git branch -M main
git push -u origin main
```

### Step 7: Verify Deployment

1. Go to `https://sheldonkasera.github.io`
2. Your portfolio should be live!
3. GitHub Pages automatically deploys from the main branch

### Step 8: Enable GitHub Pages (if needed)

1. Go to your repository settings
2. Scroll to "Pages"
3. Select "main" branch as source
4. Save

## 📝 Making Updates

After deployment, you can continue to update your portfolio:

```bash
# Make changes to files
# Then commit and push

git add .
git commit -m "Update portfolio with new projects"
git push
```

Your changes will be live within a few seconds!

## 🎯 Optimization Tips

### Performance
- Compress images using [TinyPNG](https://tinypng.com) or similar
- Minimize CSS by removing unused code
- Use modern image formats (WebP) when possible

### SEO
- Update the meta description in `index.html`
- Add meta keywords
- Ensure all images have proper alt text

### Mobile-Friendly
- Test on multiple devices
- Use DevTools mobile view (F12 → Toggle Device Toolbar)
- Check that all buttons are clickable on touch devices

## 🛠️ Troubleshooting

### Images not loading?
- Check file paths in HTML/JS
- Make sure image files are in correct folders
- Use relative paths (e.g., `images/photo.jpg`)

### Navigation not scrolling?
- Check that section IDs match href values
- Ensure JavaScript file is loaded
- Clear browser cache (Ctrl+Shift+Del)

### Contact form not working?
- For local testing, the form will show a confirmation message
- To send emails, follow the EmailJS setup guide above
- Check browser console for errors (F12)

### Styling looks off?
- Clear browser cache
- Check that CSS file is linked in HTML
- Verify file paths are correct

## 🔐 Privacy & Security

- Never commit sensitive information (email passwords, API keys)
- Use environment variables for sensitive data
- Review GitHub Pages [privacy policy](https://docs.github.com/en/site-policy)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

Consider adding:
- Dark mode toggle
- Blog section
- Case studies with detailed project information
- Video demonstrations
- Download CV functionality
- Testimonials/Reviews section
- Newsletter signup

## 📄 License

This portfolio template is free to use and modify for personal use.

## 💡 Tips for Recuiters

When recruiters visit your portfolio:

1. **First Impression**: Your hero section loads first - make it count!
2. **Projects**: Link to your actual GitHub repositories
3. **Contact**: Make it easy for recruiters to reach you
4. **Updates**: Keep your portfolio current with latest projects
5. **Mobile**: Most recruiters browse on mobile - ensure it looks great

## 📞 Support

For issues or questions:
1. Check this README.md thoroughly
2. Review the code comments in HTML/CSS/JS files
3. Test on different browsers
4. Clear browser cache and try again

## 🎓 Learning Resources

- [HTML5 Documentation](https://html.spec.whatwg.org/)
- [CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Git & GitHub Guide](https://guides.github.com/)

---

**Created**: March 2026  
**Last Updated**: March 2026  
**Version**: 1.0

Good luck with your career journey! 🚀
