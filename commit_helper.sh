#!/bin/bash
rm -f .git/index.lock
git add .
git commit -m "chore: remove git lfs for videos and update favicon"
git push origin main
