# Asset Export Guide - Figma to GitHub Migration

## ⚠️ CRITICAL: All `figma:asset` references have been replaced

All code now uses placeholder SVG files with TODO comments. Follow this guide to export the actual assets from Figma.

---

## 📁 Directory Structure

All assets must be exported to `/src/assets/images/` with the following structure:

```
/src/assets/images/
├── placeholder.svg (✅ Already created - temporary fallback)
├── home/                  (17 images needed)
├── about-us/
│   ├── initiatives/       (6 images)
│   ├── sports/            (15 images)
│   └── rewards/           (12 images)
├── team/                  (8 team member photos)
└── services/              (2 service-specific images)
```

---

## 🎯 Export Instructions by Page

### **HomePage (Desktop72.tsx)** - 17 images
Located in: `/src/imports/Desktop72.tsx`

**Background Images (2):**
- `home/hero-background-1.png` - Main hero background
- `home/hero-background-2.png` - Secondary hero background

**Partner/Client Logos (7):**
- `home/partner-1.png` through `home/partner-7.png`

**Video Thumbnails (6):**
- `home/video-thumb-1.png` through `home/video-thumb-6.png`

**Case Studies (2):**
- `home/case-study-religare.png` - Cloud migration success story
- `home/testimonial-abhijit-shah.png` - Testimonial author photo

**Textures (2):**
- `home/texture-pattern.png` - Background texture overlay
- `home/noise-texture.png` - Noise texture for gradients

**Careers (1):**
- `home/careers-hero.png` - Careers section hero image

---

### **AboutUsPage** - 33 images
Located in: `/src/app/components/AboutUsPage.tsx`

**Our Initiatives (6 images):**
- `about-us/initiatives/initiative-1.png`
- `about-us/initiatives/initiative-2.png`
- `about-us/initiatives/initiative-3.png`
- `about-us/initiatives/initiative-4.png`
- `about-us/initiatives/initiative-5.png`
- `about-us/initiatives/initiative-6.png`

**ACC Sports Culture (15 images):**
- `about-us/sports/sports-1.png` through `sports-15.png`
  - Team sports events
  - Cricket matches
  - Volleyball games
  - Team building activities

**Rewards and Recognition (12 images):**
- `about-us/rewards/rewards-1.png` through `rewards-12.png`
  - Award ceremonies
  - Recognition events
  - Team celebrations
  - Achievement milestones

---

### **OurTeamPage** - 8 images
Located in: `/src/app/components/OurTeamPage.tsx`

**Leadership Team Photos:**
- `team/nilesh-shah.png` - CEO and Cloud Delivery
- `team/rogin-joseph.png` - Head of Sales & Marketing
- `team/shubho-paul.png` - Head of Application & Product Delivery
- `team/ghanshyam-aswal.png` - Head of Operations & Chief of Staff
- `team/mithun-sharma.png` - Head of Data & AI Delivery
- `team/reema-menon.png` - Head of Human Resources
- `team/priyanka-patel.png` - Head of Project Management Office
- `team/sachin-singh.png` - Head of Finance

**Specifications:**
- Format: PNG with transparent background preferred
- Size: Minimum 400x400px, square aspect ratio
- Professional headshots with consistent lighting/background

---

### **Service Pages** - 2 images

**ERPTestingPage:**
Located in: `/src/app/components/ERPTestingPage.tsx`
- `services/erp-testing-hero.png` - Hero section background

**SecurityPage:**
Located in: `/src/app/components/SecurityPage.tsx`
- `services/security-dashboard.png` - Security dashboard screenshot

---

## 📋 Export Settings (Recommended)

### For Photos & Screenshots:
```
Format: PNG or WebP
Scale: 2x (for retina displays)
Color Profile: sRGB
Compression: Optimized
```

### For Team Photos:
```
Format: PNG (with transparency)
Size: 800x800px minimum
Aspect Ratio: 1:1 (square)
Background: Transparent or consistent
```

### For Backgrounds:
```
Format: PNG or WebP
Size: 1920x1080px or larger
Quality: High (for hero images)
```

### For Thumbnails:
```
Format: PNG or JPG
Size: 640x360px minimum
Aspect Ratio: 16:9
```

---

## 🔧 Step-by-Step Export Process

### In Figma:
1. **Identify the Asset**
   - Open the Figma file
   - Navigate to the specific page/component
   - Select the image/photo layer

2. **Export Individual Asset**
   - Right-click on the layer
   - Select "Export [layer name]..."
   - Choose PNG format (or WebP for better compression)
   - Select 2x scale
   - Click "Export"

3. **Batch Export (for multiple assets)**
   - Select multiple image layers
   - In the Design panel (right sidebar)
   - Scroll to "Export" section
   - Add export settings (PNG, 2x)
   - Click "Export [number] layers"

4. **Name the Files**
   - Use the exact filenames from the TODO comments
   - Follow kebab-case naming convention
   - Example: `initiative-1.png`, `team-photo-nilesh.png`

---

## 📝 Replacement Checklist

After exporting each image, update the import statement in the code:

### Before:
```typescript
import initiativeImg1 from '@/assets/images/placeholder.svg'; // TODO: Replace with initiatives/initiative-1.png
```

### After:
```typescript
import initiativeImg1 from '@/assets/images/about-us/initiatives/initiative-1.png';
```

**Remove the TODO comment after replacement!**

---

## ✅ Verification Steps

1. **Check File Sizes**
   - Images should be optimized (typically < 500KB each)
   - Use tools like TinyPNG or ImageOptim if needed

2. **Test in Browser**
   - Run `npm run dev`
   - Navigate to each page
   - Verify images load correctly
   - Check for broken image icons

3. **Verify All TODO Comments Removed**
   ```bash
   # Search for remaining TODOs
   grep -r "TODO: Replace with" src/
   ```

4. **Build Test**
   ```bash
   npm run build
   ```
   - Ensure no import errors
   - Verify all assets are bundled

---

## 🚨 Common Issues & Solutions

### Issue: Image not found
**Solution:** Double-check the file path matches exactly (case-sensitive)

### Issue: Image too large
**Solution:** Use image compression tools:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac): https://imageoptim.com/

### Issue: Broken transparency
**Solution:** Re-export as PNG-24 with alpha channel enabled

### Issue: Aspect ratio distorted
**Solution:** Check CSS styling - images may need `object-fit: cover`

---

## 📊 Progress Tracking

Use this checklist to track export progress:

### Home Page (17 images)
- [ ] Background images (2)
- [ ] Partner logos (7)
- [ ] Video thumbnails (6)
- [ ] Case studies (2)

### About Us Page (33 images)
- [ ] Initiatives (6)
- [ ] Sports culture (15)
- [ ] Rewards (12)

### Team Page (8 images)
- [ ] All team member photos (8)

### Service Pages (2 images)
- [ ] ERP Testing hero
- [ ] Security dashboard

---

## 🎉 Final Steps

Once ALL images are exported and replaced:

1. Delete placeholder file (optional):
   ```bash
   rm src/assets/images/placeholder.svg
   ```

2. Update this guide status to COMPLETED

3. Commit changes to Git:
   ```bash
   git add src/assets/images/
   git commit -m "Add all exported image assets from Figma"
   ```

4. Test production build:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📞 Need Help?

If you encounter issues during export:
1. Check the Figma file has proper layer naming
2. Verify export permissions
3. Ensure layers are not hidden or locked
4. Check if assets are linked or embedded

**Total Assets to Export: 60 images**

Good luck! 🚀
