# Portfolio Customization Guide

This guide will walk you through personalizing your portfolio with your information, photos, projects, and certificates.

## ✅ Quick Customization Checklist

- [ ] Update profile photo
- [ ] Update contact information (email, phone, GitHub, LinkedIn)
- [ ] Add/update projects
- [ ] Add certificates
- [ ] Add gallery photos
- [ ] Set up email functionality
- [ ] Test portfolio locally
- [ ] Deploy to GitHub Pages

---

## 📸 Step 1: Add Your Profile Photo

### What You Need
- A professional headshot photo
- Recommended size: 500x500 pixels or square aspect ratio
- Format: JPG or PNG
- Keep file size under 200KB for faster loading

### How to Add
1. Save your photo as `profile.jpg` or `profile.png`
2. Place it in the `images/` folder
3. Open `index.html` in a text editor
4. Find this line (around line 50):
   ```html
   <img id="profileImg" src="images/placeholder-profile.jpg" alt="Sheldon Kasera" class="profile-photo">
   ```
5. Replace `placeholder-profile.jpg` with your filename:
   ```html
   <img id="profileImg" src="images/profile.jpg" alt="Sheldon Kasera" class="profile-photo">
   ```
6. Save and refresh your browser

---

## 📧 Step 2: Update Contact Information

### Edit Contact Details

1. Open `js/script.js` in a text editor
2. Find the `populateContactInfo()` function (around line 100)
3. Update with your actual information:

```javascript
const contactData = {
    email: 'your.email@example.com',           // Your email address
    phone: '+1 (555) 123-4567',                // Your phone number
    github: 'https://github.com/yourusername', // Your GitHub profile
    linkedin: 'https://linkedin.com/in/yourprofile' // Your LinkedIn
};
```

### Where to Find Your Links
- **Email**: Use your personal email
- **Phone**: Your contact number
- **GitHub**: Find your profile at github.com/yourusername
- **LinkedIn**: Find your profile at linkedin.com/in/yourname

---

## 💼 Step 3: Add Your Projects

### What You Need for Each Project
- Project name/title
- Brief description (1-2 sentences)
- Screenshot image (optional)
- Link to GitHub repository

### How to Add Projects

1. Create a screenshot of your project
2. Save it in the `projects/` folder with a descriptive name
3. Open `js/script.js`
4. Find the `defaultProjects` array (around line 13)
5. Add your project:

```javascript
{
    title: 'Your Project Name',
    description: 'A brief description of what your project does and its key features.',
    image: 'projects/your-project-screenshot.jpg',
    github: 'https://github.com/yourusername/your-repo-name'
}
```

### Example Project Entry

```javascript
{
    title: 'POS System',
    description: 'A comprehensive point-of-sale system with inventory management, sales tracking, and reporting features.',
    image: 'projects/pos-system.jpg',
    github: 'https://github.com/sheldonkasera/pos-system'
}
```

### Project Screenshot Tips
- **Size**: 1200x600 pixels works best
- **Format**: JPG or PNG
- **Content**: Show the final result, not just code
- **Quality**: Use high-resolution screenshots
- **Software**: Use Snipping Tool (Windows) or Screenshot (Mac)

---

## 🏆 Step 4: Add Certificates

### What You Need
- Certificate image (screenshot or export as image)
- Format: JPG or PNG
- Recommended size: 400x300 pixels

### How to Add Certificates

1. Take a screenshot or export your certificate as an image
2. Save to the `certificates/` folder
3. Open `js/script.js`
4. Find the `loadCertificates()` function (around line 70)
5. Update the certificates array:

```javascript
const certificates = [
    {
        name: 'Certificate Name',
        image: 'certificates/certificate-name.jpg'
    },
    {
        name: 'Another Certificate',
        image: 'certificates/another-cert.jpg'
    }
];
```

### Example Certificate Entry

```javascript
{
    name: 'Web Development Fundamentals - Coursera',
    image: 'certificates/web-dev-coursera.jpg'
}
```

### Getting Certificate Images
1. **Online Certificates**: Take a screenshot of your certificate page
2. **PDF Certificates**: Convert PDF to JPG using online tools
3. **Physical Certificates**: Scan or photograph them

---

## 🖼️ Step 5: Add Gallery Photos

### What You Need
- Personal or event photos
- Format: JPG or PNG
- Recommended: Square aspect ratio (500x500px)
- Professional looking images

### How to Add Gallery Images

1. Place your photos in the `images/` folder
2. Open `js/script.js`
3. Find the `loadGallery()` function (around line 80)
4. Update the gallery array:

```javascript
const gallery = [
    { src: 'images/photo1.jpg', alt: 'Photo description' },
    { src: 'images/photo2.jpg', alt: 'Photo description' },
    { src: 'images/photo3.jpg', alt: 'Photo description' }
];
```

### Example Gallery Entry

```javascript
const gallery = [
    { src: 'images/me-at-conference.jpg', alt: 'At Tech Conference 2025' },
    { src: 'images/team-project.jpg', alt: 'Working with my team' },
    { src: 'images/coding-workshop.jpg', alt: 'Coding Workshop Participation' }
];
```

### Gallery Photo Tips
- Use a mix of professional and candid photos
- Include 5-10 photos for a good gallery
- Keep them well-organized in the images folder
- Use descriptive filenames

---

## ✉️ Step 6: Set Up Email Functionality

### Option A: Using EmailJS (Recommended - Free)

1. **Sign up at [EmailJS.com](https://www.emailjs.com)**
   - Click "Sign Up"
   - Create your account
   - Verify your email

2. **Create an Email Service**
   - Go to Email Services
   - Add your email (Gmail recommended)
   - Follow their authentication steps

3. **Create an Email Template**
   - Go to Email Templates
   - Create new template
   - Set up like this:
     ```
     To Email: {{to_email}}
     Subject: New Message from {{from_name}}
     
     From: {{from_email}}
     Name: {{from_name}}
     
     Message:
     {{message}}
     ```

4. **Get Your Credentials**
   - Service ID (e.g., service_abc123)
   - Template ID (e.g., template_xyz789)
   - Public Key (25 characters)

5. **Update Your HTML** - Add to `index.html` in the `<head>` section:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
   ```

6. **Update Your JavaScript** - Replace the contact form handler in `js/script.js`:
   ```javascript
   const emailServiceId = 'service_your_service_id';
   const emailTemplateId = 'template_your_template_id';
   const emailPublicKey = 'your_public_key_here';

   contactForm.addEventListener('submit', async (e) => {
       e.preventDefault();

       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;

       emailjs.init(emailPublicKey);

       emailjs.send(emailServiceId, emailTemplateId, {
           from_name: name,
           from_email: email,
           message: message,
           to_email: 'your-email@gmail.com'
       }).then(() => {
           alert('Thank you! Your message has been sent successfully.');
           contactForm.reset();
       }).catch((error) => {
           alert('Error sending message. Please try again.');
           console.error(error);
       });
   });
   ```

### Option B: Using Formspree (Alternative)

1. Go to [Formspree.io](https://formspree.io)
2. Create account and form
3. In `index.html`, change the form tag:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace YOUR_FORM_ID with your actual form ID from Formspree
5. Keep the existing form fields

---

## 🌐 Step 7: Customize Site Info

### Update Site Title

1. Open `index.html`
2. Find: `<title>Sheldon Kasera - Software Engineering Portfolio</title>`
3. Change to your name and title

### Update Footer

1. Open `index.html`
2. Find the footer near the bottom
3. Update the year and text as needed

### Customize Colors (Optional)

If you want to change colors:

1. Open `css/styles.css`
2. Find the `:root` section at the top
3. Modify these colors:
   ```css
   :root {
       --primary-color: #008080;      /* Main teal color */
       --primary-dark: #006666;       /* Darker teal */
       --primary-light: #20b2aa;      /* Lighter teal */
       /* ... other colors ... */
   }
   ```

---

## 🧪 Step 8: Test Your Portfolio

### Local Testing

1. **Use VS Code Live Server:**
   - Right-click `index.html` → "Open with Live Server"
   - Browser opens automatically at `http://localhost:5500`

2. **Test Each Section:**
   - ✓ Click navigation links
   - ✓ Verify all images load
   - ✓ Check contact form works
   - ✓ Test on mobile (F12 → Toggle Device Toolbar)

3. **Check Links:**
   - ✓ All project GitHub links open
   - ✓ Contact links work (email, phone, GitHub, LinkedIn)
   - ✓ Navigation scrolls smoothly

4. **Performance:**
   - ✓ No broken images
   - ✓ No console errors (F12 → Console)
   - ✓ Smooth animations on scroll

---

## 🚀 Step 9: Deploy to GitHub

### Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name it: `username.github.io` (use your GitHub username)
4. Leave everything else default
5. Click **"Create repository"**

### Upload Your Portfolio

1. Open terminal/PowerShell in your portfolio folder
2. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Visit `https://yourusername.github.io` after 1-2 minutes

---

## 📱 Step 10: Final Checks

Before considering your portfolio complete:

- [ ] Profile photo is professional
- [ ] All contact information is correct
- [ ] At least 3-4 projects are displayed
- [ ] All project links work
- [ ] Contact form can be submitted
- [ ] Gallery has 5+ photos
- [ ] Certificates are displayed
- [ ] Portfolio is mobile responsive
- [ ] Navigation works smoothly
- [ ] No broken images or links

---

## 🔧 Troubleshooting

### Images Not Loading?
- Check file paths match exactly (case-sensitive on some systems)
- Ensure files are in correct folders
- Use forward slashes: `images/photo.jpg` not `images\photo.jpg`

### Changes Not Showing?
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Close and reopen Live Server
- Check that you saved the files

### Email Not Working?
- Verify EmailJS credentials are correct
- Check browser console for errors (F12)
- Test with EmailJS dashboard first
- Ensure you added the script tag to HTML

### Mobile Looks Wrong?
- Clear browser cache
- Test in incognito/private window
- Check on a real mobile device
- Review "media queries" in CSS

---

## 💡 Pro Tips

1. **SEO Optimization**
   - Add meta description in HTML head
   - Use descriptive project names
   - Include keywords naturally

2. **Performance**
   - Compress images before uploading
   - Use modern image formats
   - Minimize CSS/JavaScript

3. **Recruiter Appeal**
   - Keep it up to date
   - Show diverse projects
   - Include links to live demos
   - Make contact easy
   - Professional photos

4. **Regular Updates**
   - Add new projects monthly
   - Update skills as you learn
   - Refresh photos occasionally
   - Keep links working

---

## 📮 Customization Support

If you get stuck:

1. Review the relevant section above
2. Check the README.md for more details
3. Inspect the HTML/CSS/JavaScript comments
4. Test in browser dev tools (F12)
5. Clear cache and try again

---

## 🎉 You're All Set!

Your portfolio is ready to impress! Remember to:
- Keep it updated with new work
- Share it with recruiters and peers
- Use it on resumes and applications
- Update your GitHub regularly

Good luck with your career! 🚀

---

**Last Updated**: March 2026
