# Vercel Deployment Guide

## Quick Start (5 Minutes)

### 1. Create Vercel Account
- Go to https://vercel.com
- Sign up with GitHub (recommended) or email

### 2. Deploy Your Portfolio

**Method 1: GitHub Integration (Recommended)**
```bash
# Push your code to GitHub first
git push origin main

# Then go to: https://vercel.com/new
# Select your GitHub repository
# Click "Deploy"
```

**Method 2: Using Vercel CLI**
```bash
# Install Vercel CLI globally
npm install -g vercel

# From your project directory
vercel
```

### 3. Add Environment Variables

1. **Get Gmail App Password**
   - Open https://myaccount.google.com
   - Go to **Security** in left sidebar
   - Scroll down to **How you sign in to Google**
   - Enable **2-Step Verification** (if not enabled)
   - Go to **App passwords** (appears after 2FA is enabled)
   - Select **Mail** and **Windows PC**
   - Copy the 16-character password

2. **Set in Vercel**
   - Go to your Vercel dashboard
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add:
     ```
     EMAIL_USER = your-email@gmail.com
     EMAIL_PASS = your-app-password-16-chars
     ```
   - Click **Save**

3. **Redeploy**
   - Go to **Deployments** tab
   - Click the 3-dot menu on latest deployment
   - Select **Redeploy**

### 4. Test Your Deployment

1. Open your deployed URL (given by Vercel)
2. Navigate to Contact Us section
3. Fill in and submit the form
4. Check your email for the message

## Your Deployment URL

After deployment, Vercel gives you a unique URL:
```
https://your-project.vercel.app
```

Share this link with recruiters!

## GitHub Setup (First Time)

If you haven't pushed to GitHub yet:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push
git push -u origin main
```

## Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update your domain's DNS records (instructions in Vercel)
4. Wait for DNS propagation (usually 24-48 hours)

## Troubleshooting

### "EMAIL_USER is missing"
- Check Vercel Environment Variables are set
- Redeploy after adding variables
- Variables update only on new deployments

### Email Still Not Sending
- Use Gmail app password, NOT your regular Gmail password
- Ensure 2FA is enabled on your Gmail
- Check email address format: `example@gmail.com`
- Verify you copied full 16-character app password

### "Too many requests" Error
- Contact form has rate limit: 5 emails per 15 minutes per IP
- Wait 15 minutes or use different IP/browser

### Port Already in Use
- Vercel handles port assignment automatically
- No action needed on your end

## Monitoring & Logs

View your app logs in Vercel:
1. Dashboard → Your Project
2. Go to **Functions** tab
3. Click on `server` function
4. View real-time logs

## Keep It Updated

When you make changes:

```bash
# Make your changes locally
# ...

# Commit and push to GitHub
git add .
git commit -m "Update portfolio"
git push

# Vercel auto-deploys on every push!
```

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Create an issue in your repo
- Stack Overflow: Tag with `vercel` and `node.js`

---

**Deployment URL**: https://your-project.vercel.app
**Last Updated**: 2026
