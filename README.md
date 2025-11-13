# Personal-Portfolio-Website

A static portfolio website showcasing data analysis, RCM automation, ETL and web automation projects. Built with HTML, Tailwind CSS and vanilla JavaScript. Includes a dedicated project details view that loads project data from a JS file.

## Features
- Responsive single-page portfolio (index.html)
- Detailed project view pages (pages/project-details.html)
- Dynamic project population from `js/project-details.js`
- Project confidentiality handling (shows a notice when links are not shareable)
- Tailwind CSS + custom styles at `CSS/styles.css`
- Assets stored in `Assets/Projects`

## Project structure
- index.html
- pages/
  - project-details.html
- js/
  - project-details.js
- CSS/
  - styles.css
- Assets/
  - Projects/ (project images)
- README.md

## Local preview
Open project root in VS Code and use Live Server, or run a simple HTTP server:

PowerShell / Command Prompt:
```powershell
cd "c:\Users\inashu312\Desktop\Personal-Portfolio-Website"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Editing projects
- Add or update project objects in `js/project-details.js` (projectsData array).
- Ensure `id` matches the `?id=` used in the index.html project card links (`./pages/project-details.html?id=1`).
- Image paths should point to `./Assets/Projects/...`.

## Notes
- Projects built under NDAs / HIPAA: live/demo/GitHub links can be left `null`. The site will show a confidentiality notice instead of external links.
- Keep sensitive data out of the repo.

## License
Add your preferred license here.