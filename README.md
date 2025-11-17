# Mailer API

A Node.js/Express server for handling contact form submissions and sending emails via Gmail SMTP.

## Features

- ✅ Contact form endpoint (`POST /api/contact`)
- ✅ Email validation and formatting
- ✅ HTML email templates
- ✅ CORS enabled for frontend integration
- ✅ Environment variable configuration

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_TO=recipient@gmail.com
   PORT=3001
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoint

### POST /api/contact

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Contact Form Subject",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Deployment on Render

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `mailer-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

6. **Environment Variables** (in Render dashboard):
   ```
   NODE_ENV=production
   PORT=10000
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_TO=recipient@gmail.com
   ```

7. Click "Create Web Service"

## Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the App Password (not your regular password) for `EMAIL_PASS`

## Usage

Once deployed, your API will be available at:
```
https://your-app-name.onrender.com/api/contact
```

## Frontend Integration

```javascript
const response = await fetch('https://your-app-name.onrender.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Hello',
    message: 'This is a test message'
  })
});

const data = await response.json();
console.log(data);
```
