# GitHub Pages Deployment Guide

Deploy your portfolio for FREE using GitHub Pages!

## Prerequisites

- GitHub account (free from [github.com](https://github.com))
- Git installed on your computer (or use GitHub Desktop app)
- Your portfolio folder ready

## 📋 Quick Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Sign in to your account
3. Click **+** in top right corner
4. Select **"New repository"**
5. Repository name: **`ka-sera.github.io`**
   - ⚠️ **Important**: Must end with `.github.io`
   - Use your actual GitHub username if different
6. Add description (optional): "My Software Engineering Portfolio"
7. Leave other settings default
8. Click **"Create repository"**

### Step 2: Open PowerShell in Your Portfolio Folder

1. Navigate to: `C:\Users\user\Desktop\Achieng's_portfolio`
2. Right-click in empty space → **Open PowerShell here** (or Git Bash)
3. Or open PowerShell and run:
   ```
   cd "C:\Users\user\Desktop\Achieng's_portfolio"
   ```

### Step 3: Initialize Git Repository

Run these commands one by one:

```powershell
git init
```

This creates a `.git` folder (hidden by default).

### Step 4: Add All Files

```powershell
git add .
```

This stages all files for upload.

### Step 5: Create Initial Commit

```powershell
git commit -m "Initial portfolio commit"
```

This creates a snapshot of your files.

### Step 6: Connect to GitHub

```powershell
git remote add origin https://github.com/ka-sera/ka-sera.github.io.git
```

Replace `ka-sera` with your GitHub username if different.

### Step 7: Set Main Branch

```powershell
git branch -M main
```

This sets your main branch.

### Step 8: Push to GitHub

```powershell
git push -u origin main
```

Enter your GitHub credentials when prompted. This uploads all files to GitHub!

### Step 9: Wait for Deployment

GitHub Pages deploys automatically. Your portfolio will be live at:

```
https://ka-sera.github.io
```

**Note**: First deployment takes 1-2 minutes. Keep refreshing until it appears.

## ✅ Verification

1. Visit `https://ka-sera.github.io` in your browser
2. You should see your portfolio!
3. Click links to verify everything works
4. Test on mobile (press F12 → Toggle Device Toolbar)

## 🔄 Making Updates

After deployment, to update your portfolio:

1. Make changes to files locally
2. Save files
3. Run these commands:
   ```powershell
   git add .
   git commit -m "Update portfolio with new projects"
   git push
   ```
4. Changes appear live within seconds!

## 📚 Useful Git Commands

| Command | What it does |
|---------|-------------|
| `git status` | Shows what files changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Create a snapshot with a message |
| `git push` | Upload to GitHub |
| `git log` | See commit history |
| `git pull` | Download latest from GitHub |

## 🆘 Troubleshooting

### "fatal: Not a git repository"
- Make sure you're in correct folder
- Run `git init` first

### "fatal: authentication failed"
- Create GitHub [Personal Access Token](https://github.com/settings/tokens)
- Use token as password instead

### "fatal: Could not read from remote repository"
- Check GitHub username in remote URL
- Run: `git remote -v` to verify URL

### Website not appearing
- Wait 1-2 minutes for deployment
- Check repository settings → Pages
- Ensure `main` branch is selected

### Old version showing
- Clear browser cache (Ctrl+Shift+R)
- Wait for GitHub Pages to rebuild (check Actions tab)

## 🎯 Repository Settings to Check

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **"Pages"** section
4. Verify:
   - Source: `Deploy from a branch`
   - Branch: `main` (not master)
5. Your site URL shows: `https://ka-sera.github.io`

## 📝 Best Practices

1. **Commit regularly**: Make commits for each update
2. **Clear messages**: Describe what you changed
3. **Check locally first**: Test on localhost before pushing
4. **Keep it simple**: Only push necessary files

## 🔗 Custom Domain (Advanced)

To use your own domain instead of github.io:

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. In repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Update domain DNS settings (provider specific)

## 📊 Track Your Portfolio

GitHub shows visitor statistics:

1. Go to your repository
2. Click **Insights** tab
3. View traffic and statistics

## Need Help?

- [GitHub Pages Documentation](https://pages.github.com/)
- [Git Tutorial](https://git-scm.com/doc)
- [GitHub Help](https://docs.github.com/en)

## 🎉 You've Done It!

Your portfolio is now **LIVE** at `https://ka-sera.github.io`!

Share it:
- LinkedIn profile
- Email signature
- Resume/CV
- Interview applications
- GitHub bio

---

**Your Portfolio URL**: `https://ka-sera.github.io`

**View your portfolio**: https://ka-sera.github.io

Congratulations on completing your professional portfolio! 🚀
