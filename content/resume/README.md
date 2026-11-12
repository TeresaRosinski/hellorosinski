# Public résumé

- **Edit:** `content/resume/resume.html` (plain text inside simple tags; open it in any editor).
- **Publish:** export a new PDF over `public/Teresa-Rosinski-Resume.pdf`, then commit on a branch and merge as usual.

Export (run from the project folder):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --virtual-time-budget=5000 --print-to-pdf="public/Teresa-Rosinski-Resume.pdf" "file://$PWD/content/resume/resume.html"
```

Check that it's still one page before publishing.

**Public-version rules**
- No phone number or street address (the PDF is public and can be indexed).
- Claims match the portfolio exactly. If a fact changes in one, change it in the other.
- Keep the file name `Teresa-Rosinski-Resume.pdf` so links from the site keep working.
- Job-specific versions (like the AbbVie one) stay private on your computer.
