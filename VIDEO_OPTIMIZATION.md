# Video Optimization Guide

## Current Implementation ✅

### LazyVideo Component Features:
- **preload="metadata"** instead of "auto" (saves ~26.3 MB on initial load)
- **IntersectionObserver** - Videos only load when approaching viewport
- **Smart autoplay** - Only plays when visible, pauses when out of view
- **rootMargin="300px"** - Starts loading 300px before visible
- **threshold=0.25** - Requires 25% visibility before activation

## Further Optimization Recommendations

### 1. Video Compression (CRITICAL - Do this!)

Current videos are likely too large. Compress them using:

```bash
# Install ffmpeg if not already installed
# Windows: winget install ffmpeg
# macOS: brew install ffmpeg
# Linux: apt/yum install ffmpeg

# Optimize video (recommended settings for web)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -an -movflags +faststart output.mp4
```

**Parameters explained:**
- `-crf 28` - Constant Rate Factor (18-28 is good, higher = smaller file)
- `-preset slow` - Better compression (slower encoding, worth it)
- `scale=1280:-2` - Resize to 1280px width (maintain aspect ratio)
- `-an` - Remove audio (not needed for demo videos)
- `-movflags +faststart` - Web-optimized (metadata at start)

### 2. Target File Sizes

| Resolution | Target Size (30s) | Max Bitrate |
|------------|------------------|-------------|
| 1920x1080  | 3-5 MB          | ~1000 kbps  |
| 1280x720   | 1.5-3 MB        | ~600 kbps   |
| 854x480    | 800KB-1.5MB     | ~350 kbps   |

**Current:** ~26.3 MB / 3 videos = ~8.7 MB/video ❌
**Target:** ~2-3 MB/video ✅

### 3. Create Poster Images

Generate thumbnail posters:

```bash
# Extract first frame as poster
ffmpeg -i video.mp4 -ss 00:00:01 -vframes 1 -q:v 2 poster.jpg
```

Then add to data.js:

```javascript
{
  title: "Project Name",
  video: "/videos/project.mp4",
  poster: "/videos/project-poster.jpg", // Add this
  // ...
}
```

### 4. Modern Video Formats (Advanced)

Consider WebM with VP9 (better compression than H.264):

```bash
# Create WebM version (better compression)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -vf "scale=1280:-2" output.webm
```

Then provide both formats:

```jsx
<LazyVideo
  srcWebm="/videos/project.webm"
  srcMp4="/videos/project.mp4"
  poster="/videos/project-poster.jpg"
/>
```

### 5. Expected Performance Gains

| Metric | Before | After (LazyVideo) | After (+ Compression) |
|--------|--------|-------------------|----------------------|
| **Initial Load** | ~26.3 MB | ~0 KB | ~0 KB |
| **Per Video** | 8.7 MB | 8.7 MB (lazy) | 2-3 MB (lazy) |
| **Total 3 Videos** | 26.3 MB | 26.3 MB (lazy) | 6-9 MB (lazy) |
| **LCP Impact** | High | Medium | Low ✅ |
| **Network** | All upfront | On-demand | On-demand + smaller |

### 6. Quick Win Commands

Run these in your `/public/videos` directory:

```bash
# Optimize all videos at once
for file in *.mp4; do
  ffmpeg -i "$file" -c:v libx264 -crf 28 -preset slow \
    -vf "scale=1280:-2" -an -movflags +faststart \
    "optimized_$file"
done

# Generate posters
for file in *.mp4; do
  ffmpeg -i "$file" -ss 00:00:01 -vframes 1 -q:v 2 \
    "${file%.mp4}-poster.jpg"
done
```

Then replace old videos with optimized versions.

## Implementation Checklist

- [x] LazyVideo component created
- [x] IntersectionObserver implemented
- [x] preload="metadata" set
- [x] Auto-play only when visible
- [ ] **Compress videos with ffmpeg** (CRITICAL)
- [ ] Generate poster images
- [ ] Add poster prop to data.js
- [ ] Test on slow 3G network
- [ ] Measure with Lighthouse

## Monitoring

After compression, verify in DevTools:
1. Network tab → Filter by "media"
2. Scroll slowly through projects
3. Videos should load **only** when approaching viewport
4. File sizes should be ~2-3 MB each

Target: **Initial page load < 500 KB** (excluding lazy videos)
