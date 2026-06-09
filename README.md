# Raju Manur - Professional Portfolio

A full-stack portfolio website built with Node.js, Express, and responsive HTML/CSS. Showcasing projects, skills, education, and contact capabilities.

## Features

- **Responsive Design**: Mobile-friendly layout with Bootstrap 5
- **Smooth Animations**: CSS animations for engaging user experience
- **Contact Form**: Email integration using Nodemailer
- **Production Ready**: Security headers, rate limiting, input validation
- **Fast Performance**: Static file caching, optimized delivery

## Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer with Gmail SMTP
- **Security**: Helmet.js, Express Rate Limit
- **Hosting**: Vercel

## Deployment on Vercel

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub account with this repository
- Gmail account with app-specific password

### Step 1: Generate Gmail App Password

1. Go to Google Account (https://myaccount.google.com)
2. Enable 2-Factor Authentication if not already enabled
3. Go to **Security** → **App Passwords**
4. Select Mail and Windows PC (or your device)
5. Copy the generated password (16 characters)

### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B: Using GitHub**
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel automatically detects Node.js project
5. Click Deploy

### Step 3: Add Environment Variables

In Vercel Dashboard:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add:
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASS`: your-gmail-app-password

4. Redeploy for changes to take effect

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your email credentials

5. Start the server:
```bash
npm start
```

6. Open http://localhost:3000 in your browser

## Project Structure

```
.
├── server.js              # Express server
├── package.json           # Dependencies
├── vercel.json            # Vercel configuration
├── .env.example           # Environment variables template
├── templates/
│   └── index.html         # Main portfolio page
├── static/
│   ├── photo.png          # Profile photo
│   └── resume.pdf         # Resume file
└── README.md              # This file
```

## Features Explained

### Email Contact Form
- Rate-limited to 5 requests per 15 minutes per IP
- Input validation and sanitization
- HTML email formatting
- Error handling with user feedback

### Security Features
- Helmet.js for HTTP headers
- Express rate limiting
- Input validation and sanitization
- CSRF protection ready
- XSS prevention via Helmet

### Performance
- Static file caching (1 day)
- HTML caching (1 hour)
- Optimized CSS animations
- Minified assets

## Troubleshooting

### Email Not Sending
- Verify Gmail app password (not regular password)
- Check EMAIL_USER and EMAIL_PASS are set correctly
- Ensure 2FA is enabled on Gmail account
- Check email isn't going to spam

### Port Already in Use
- The app defaults to port 3000
- Set `PORT` environment variable to use different port

### Static Files Not Loading
- Verify files exist in `/static` folder
- Check file paths in HTML are correct
- Clear browser cache

## Performance Metrics

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Email Response: < 2s

## Future Enhancements

- [ ] Admin dashboard
- [ ] Blog integration
- [ ] Analytics tracking
- [ ] Dark mode toggle
- [ ] Multi-language support

## License

MIT License - feel free to use this template

## Contact

For inquiries, use the contact form on the portfolio website.

---

**Deployed on Vercel** | Last Updated: 2026
