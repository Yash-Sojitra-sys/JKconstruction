# 📧 Gmail App Password Setup - Step by Step

## Method 1: Direct Link (Easiest)

1. **Go directly to**: https://myaccount.google.com/apppasswords
2. **Sign in** to your Gmail account if prompted
3. **You should see "App passwords" page**

## Method 2: Through Google Account Settings

### Step 1: Go to Google Account
1. **Visit**: https://myaccount.google.com
2. **Sign in** with your Gmail account (jaykrishna.surat@gmail.com)

### Step 2: Navigate to Security
1. **Click "Security"** in the left sidebar
2. **Scroll down** to "Signing in to Google" section

### Step 3: Enable 2-Step Verification (if not already enabled)
1. **Click "2-Step Verification"**
2. **Follow the setup process** (you'll need your phone)
3. **Complete the verification setup**

### Step 4: Access App Passwords
1. **Go back to Security page**
2. **Look for "App passwords"** (it will only appear AFTER 2-step verification is enabled)
3. **Click "App passwords"**

### Step 5: Generate App Password
1. **Select app**: Choose "Mail"
2. **Select device**: Choose "Other (Custom name)"
3. **Type**: "JKC Website Backend"
4. **Click "Generate"**
5. **Copy the 16-character password** (example: `abcd efgh ijkl mnop`)

## If You Can't Find "App Passwords"

### Troubleshooting:
1. **Ensure 2-Step Verification is ON** - App passwords only appear after this is enabled
2. **Wait 5-10 minutes** after enabling 2-step verification
3. **Refresh the page** and check Security section again
4. **Use Chrome/Firefox** - some browsers have issues

### Alternative Method:
1. **Google Search**: "Gmail app password"
2. **Click the official Google support link**
3. **Follow their direct link to app passwords**

## What the App Password Looks Like

```
Generated app password: abcd efgh ijkl mnop
```

**Important**: 
- Use this EXACT password (with or without spaces)
- Don't use your regular Gmail password
- This password is only for the backend application

## Add to Railway Environment Variables

In Railway dashboard, set:
```env
EMAIL_PASS=abcdefghijklmnop
```
(Remove spaces when entering in Railway)

## Test Your Setup

After setting the app password, test it by visiting:
```
https://your-railway-backend.up.railway.app/api/contact/test
```

Should return:
```json
{
  "success": true,
  "message": "Email configuration is valid"
}
```

---

**Need Help?** If you still can't find App Passwords, it might be because:
1. 2-Step Verification isn't fully enabled yet
2. Your Google account has different security settings
3. You need to wait a few minutes after enabling 2-step verification
