// Shared article data for blog pages
export const articles = [
    {
        id: 1,
        slug: "webgl-virtual-museum",
        title: "Engineering a WebGL Virtual Museum for Digital Cultural Preservation",
        description: "Exploring the intersection of 3D rendering, interactive systems, and digital heritage preservation through a web-native museum experience.",
        category: "Academic Project",
        reading_time: "8 min read",
        cover_image: "/blogs/museum-cover.png",
        date: "2024",
        tags: ["WebGL", "Three.js", "Digital Heritage", "Research"],
        content: `
## Overview

This project represents the convergence of visual computing, cultural studies, and modern web technologies. The goal was to create an immersive 3D experience that preserves and showcases the artwork of Byron Gálvez in a virtual museum environment.

## Technical Implementation

### 3D Scene Architecture

The museum is built using Three.js, a powerful JavaScript library that abstracts WebGL complexity while providing full access to advanced rendering features.

\`\`\`javascript
// Scene initialization
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
\`\`\`

### Spatial Navigation System

The navigation system implements first-person camera controls with collision detection, allowing visitors to walk through the virtual gallery naturally.

### Performance Optimizations

- Level of Detail (LOD) for distant objects
- Frustum culling for off-screen geometry
- Texture compression for faster loading

## Research Context

This project was developed as part of an academic research initiative on digital heritage preservation, exploring how web technologies can democratize access to cultural artifacts.

## Future Work

- Multi-user support for guided tours
- VR headset compatibility
- Audio narration integration
        `
    },
    {
        id: 2,
        slug: "automated-code-evaluation",
        title: "Automated Code Evaluation at Classroom Scale Using GitHub Actions",
        description: "Building a production-grade CI/CD system for Java assignment evaluation serving 120+ concurrent students.",
        category: "Engineering",
        reading_time: "7 min read",
        cover_image: "/blogs/cicd-cover.png",
        date: "2024",
        tags: ["CI/CD", "GitHub Actions", "Java", "Education"],
        content: `
## The Challenge

Grading 120+ Java assignments manually every week is unsustainable. Each submission requires compilation, execution against test cases, and feedback generation. This project automates the entire pipeline.

## System Architecture

### CI/CD Pipeline

\`\`\`yaml
name: Java Assignment Evaluation
on:
  push:
    branches: [main]
jobs:
  evaluate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
      - name: Compile
        run: javac *.java
      - name: Run Tests
        run: java -jar junit-platform.jar
\`\`\`

### Key Components

1. **Automated Compilation** - Catches syntax errors immediately
2. **Test Suite Execution** - Runs predefined test cases
3. **Result Dashboard** - Cloudflare Pages deployment for instant feedback

## Impact

- **Zero manual grading** for routine assignments
- **Instant feedback** for students
- **Scalable** to any class size

## Lessons Learned

Building for real classroom constraints taught me more about systems design than any theoretical exercise.
        `
    },
    {
        id: 3,
        slug: "practical-ai-systems",
        title: "Designing Practical AI Systems Beyond Demos",
        description: "Lessons from building applied AI tools in constrained academic environments. Why real-world constraints shape better engineering.",
        category: "AI Research",
        reading_time: "6 min read",
        cover_image: "/blogs/ai-cover.png",
        date: "2024",
        tags: ["AI", "Python", "Applied ML", "Constraints"],
        content: `
## Beyond the Demo

Most AI tutorials end at "look, it works!" Real-world deployment is where the actual engineering begins.

## Constraints Shape Design

In academic environments, you often face:

- **Limited compute** - No cloud GPUs
- **Data scarcity** - Small, noisy datasets
- **Maintenance burden** - Who supports this after you graduate?

These constraints aren't bugs—they're features that force better engineering decisions.

## Why Tkinter?

Yes, I built an AI application with Tkinter. Here's why:

\`\`\`python
# Simple, dependency-light GUI
import tkinter as tk

class AIAssistant:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Practical AI")
        # No npm install, no bundlers, just Python
\`\`\`

- Zero external dependencies beyond Python standard library
- Works on any machine with Python installed
- Students can understand and modify the code

## The Real Lesson

Building AI that works in constrained environments teaches you what's actually necessary versus what's merely fashionable.
        `
    },
    {
        id: 4,
        slug: "competitive-robotics-engineering",
        title: "Engineering Competitive Robotics: Control, Constraints, and Reality",
        description: "Driver control, sensor fusion, and what competition-level robotics actually teaches about real-time systems.",
        category: "Robotics",
        reading_time: "9 min read",
        cover_image: "/blogs/robotics-cover.png",
        date: "2024",
        tags: ["Robotics", "C++", "VEXU", "Control Systems"],
        content: `
## Competition Context

VEXU robotics is where theoretical control systems meet 2-minute matches, stressed operators, and Murphy's Law.

## Driver Control vs. Autonomous

The distinction matters:

- **Autonomous**: Pre-programmed sequences, no human input
- **Driver Control**: Human-in-the-loop, real-time response

Our team's 7th place national finish came from exceptional driver code, not autonomous routines.

## The Code That Matters

\`\`\`cpp
void driveControl() {
    // Arcade drive with exponential response curve
    int forward = controller.Axis3.position();
    int turn = controller.Axis1.position();
    
    // Exponential curve for fine control at low speeds
    forward = (forward * abs(forward)) / 100;
    turn = (turn * abs(turn)) / 100;
    
    leftMotors.spin(forward + turn);
    rightMotors.spin(forward - turn);
}
\`\`\`

## Sensor Fusion

Combining multiple data sources for reliable positioning:

- **Inertial sensors** for orientation
- **Wheel encoders** for distance
- **Vision sensor** for object detection

## What Competition Teaches

- Code must work under pressure
- Simplicity beats cleverness
- Test in conditions that mirror competition
        `
    }
];

export function getArticleBySlug(slug) {
    return articles.find(article => article.slug === slug);
}
