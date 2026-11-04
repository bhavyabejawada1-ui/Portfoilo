# Bejawada Bhavya | Portfolio

A personal portfolio website built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Files (all 16 sit together in one folder, no sub-folders)

| File | What it does |
|------|--------------|
| `index.html` | All the content (about, skills, workshops, certificates, contact) |
| `style.css` | Colours, layout, animations |
| `script.js` | Typing effect, scroll animations, background, certificate pop-up |
| `resume.pdf` | Resume used by the "Download resume" button |
| `photo.jpg` | Your profile photo |
| `cert-generative-ai.jpg`, `cert-agentic-ai.jpg`, `cert-ideathon.jpg`, `cert-dday.jpg` | Your workshop and event certificates |
| `cert-aiml-internship.jpg`, `cert-android-internship.jpg`, `cert-python-internship.jpg`, `cert-data-engineering-internship.jpg` | Your four virtual internship certificates |
| `world-2050.mp4`, `world-2050-poster.jpg` | The "World in 2050" video and its preview image |
| `README.md` | This guide |

Keep all of these in the same place. The page loads everything by file name.

## Run it on your laptop

1. Extract the zip (right-click, Extract All).
2. Open the extracted folder and double-click `index.html`.

## Edit it

Open the folder in VS Code (or Notepad). All your details are in `index.html`.

- Typing headline words: top of `script.js`, the `phrases` list.
- Colours: top of `style.css`, the `--a1`, `--a2`, `--a3` values.
- Add CGPA: in `index.html`, find the B.Tech item under "Education" and add a line inside its `<p>`.
- Workshop details: the `WORKSHOPS` section. Each workshop is one `<article class="project">` card.
- Add a new certificate: put the image in the folder, copy one `<article class="cert-card">` block in the `CERTIFICATES` section and change the image name, title, issuer and date.
- Replace the video: overwrite `world-2050.mp4` and `world-2050-poster.jpg` using the same file names.

## Deploy on GitHub Pages (free)

### 1. Create the repository
1. Sign in at https://github.com (account: `bhavyabejawada1-ui`).
2. Click **+** (top right), then **New repository**.
3. Name it `bhavyabejawada1-ui.github.io` (your username, then `.github.io`). Set it to **Public**. Do not tick "Add a README". Click **Create repository**.

### 2. Upload the files
1. Extract the zip on your laptop first. GitHub cannot open zip files.
2. On the empty repository page, click **uploading an existing file**.
3. Open the extracted folder, press **Ctrl + A** to select all 16 files, and drag them into the GitHub box. Wait until every file finishes uploading.
4. Click **Commit changes**.

### 3. Turn on GitHub Pages
1. In the repository go to **Settings**, then **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait 1 to 2 minutes. Your site is live at **https://bhavyabejawada1-ui.github.io**

### 4. Update it later
Edit a file on your laptop, then in the repository click **Add file**, **Upload files**, drag the changed file in and **Commit changes**. Reload your site with Ctrl + F5.

## Put the link to work
Add the live link to your resume, your LinkedIn profile ("Contact info" and "Featured"), your GitHub bio and every internship application.
