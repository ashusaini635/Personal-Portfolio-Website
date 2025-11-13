// Project data - Based on your portfolio projects
const projectsData = [
  {
    id: 1,
    name: "DaisyBill Automation",
    category: "Healthcare Automation",
    description: "Built an automation solution using Python and VBA to extract, transform, and upload reports from the DaisyBill PMS.",
    image: "../Assets/Projects/Daisy_bill.png",
    duration: "3 Months",
    role: "Automation Engineer",
    status: "Completed",
    overview: "Built an automation solution using Python and VBA to extract, transform, and upload reports from the DaisyBill PMS. Scheduled to run at fixed times, this streamlined reporting, decreased errors, and significantly reduced team workload.",
    technologies: ["Python", "VBA", "Automation", "PMS Integration"],
    features: [
      "Automated report extraction from DaisyBill PMS",
      "Data transformation and validation",
      "Scheduled automation with fixed-time runs",
      "Error detection and logging",
      "Reduced manual workload by hours weekly"
    ],
    challenges: [
      {
        title: "Challenge: PMS Integration",
        solution: "Successfully integrated with DaisyBill's PMS to extract reports automatically and handle various data formats."
      },
      {
        title: "Challenge: Data Consistency",
        solution: "Implemented validation checks to ensure data accuracy and consistency across transformation steps."
      }
    ],
    results: [
      { metric: "90%", description: "Error Reduction" },
      { metric: "15hrs", description: "Time Saved Weekly" },
      { metric: "100%", description: "Automation Success Rate" }
    ],
    link: null,
    github: null,
    confidentiality: "HIPAA Compliance - Healthcare Confidential Project"
  },
  {
    id: 2,
    name: "Data Transformation",
    category: "Data Analysis",
    description: "Created Python automation scripts to handle data transformation for different clients and upload datasets into a PostgreSQL database.",
    image: "../Assets/Projects/Data_transformation.png",
    duration: "4 Months",
    role: "Data Engineer",
    status: "Completed",
    overview: "Created Python automation scripts to handle data transformation for different clients and upload datasets into a PostgreSQL database. Scheduling fixed-time runs saved significant processing time and reduced manual errors.",
    technologies: ["Python", "PostgreSQL", "ETL", "Data Processing", "Pandas"],
    features: [
      "Multi-client data transformation pipelines",
      "PostgreSQL database integration",
      "Automated data validation and cleaning",
      "Scheduled batch processing",
      "Error handling and logging",
      "Data quality assurance"
    ],
    challenges: [
      {
        title: "Challenge: Multiple Data Formats",
        solution: "Built flexible ETL scripts that handle various data formats and sources from different clients."
      },
      {
        title: "Challenge: Performance Optimization",
        solution: "Optimized database queries and batch processing to handle large datasets efficiently."
      }
    ],
    results: [
      { metric: "95%", description: "Data Accuracy" },
      { metric: "20hrs", description: "Processing Time Saved Weekly" },
      { metric: "5+", description: "Active Clients" }
    ],
    link: null,
    github: null,
    confidentiality: "Proprietary - Cannot Share Client Data"
  },
  {
    id: 3,
    name: "Modmed Automation",
    category: "Healthcare Automation",
    description: "Designed a full automation workflow using Python to extract, transform, and upload reports from the Modmed PMS into PostgreSQL.",
    image: "../Assets/Projects/Modmed_Automation.png",
    duration: "3 Months",
    role: "Automation Engineer",
    status: "Completed",
    overview: "Designed a full automation workflow using Python to extract, transform, and upload reports from the Modmed PMS into PostgreSQL. Scheduled runs improved accuracy and saved several hours of manual processing weekly.",
    technologies: ["Python", "PostgreSQL", "Automation", "PMS Integration", "Scheduling"],
    features: [
      "Modmed PMS integration",
      "Automated report extraction and processing",
      "Real-time data upload to PostgreSQL",
      "Scheduled workflow automation",
      "Comprehensive error handling",
      "Performance monitoring"
    ],
    challenges: [
      {
        title: "Challenge: Complex Workflow Orchestration",
        solution: "Implemented a robust workflow system with multiple validation stages and rollback capabilities."
      },
      {
        title: "Challenge: Data Accuracy in Medical Records",
        solution: "Added extensive validation and reconciliation checks to ensure accuracy of healthcare data."
      }
    ],
    results: [
      { metric: "98%", description: "Accuracy Improvement" },
      { metric: "12hrs", description: "Manual Processing Eliminated Weekly" },
      { metric: "100%", description: "On-Time Delivery Rate" }
    ],
    link: null,
    github: null,
    confidentiality: "HIPAA Compliance - Healthcare Confidential Project"
  },
  {
    id: 4,
    name: "Niko Automation",
    category: "Web Automation",
    description: "Developed an automation system with Python and Playwright to extract, transform, and upload reports from Niko PMS.",
    image: "../Assets/Projects/Niko_Automation.png",
    duration: "4 Months",
    role: "Automation Engineer",
    status: "Completed",
    overview: "Developed an automation system with Python and Playwright to extract, transform, and upload reports from Niko PMS. This scheduled process minimized human interface, enhanced accuracy, and improved operational efficiency.",
    technologies: ["Python", "Playwright", "Automation", "Web Scraping", "PostgreSQL"],
    features: [
      "Playwright-based web automation",
      "Intelligent element detection and handling",
      "Dynamic content extraction",
      "Data transformation pipelines",
      "Scheduled automation with monitoring",
      "Detailed execution logs and alerts"
    ],
    challenges: [
      {
        title: "Challenge: Dynamic Web Elements",
        solution: "Implemented advanced Playwright strategies to handle dynamic elements and AJAX-loaded content."
      },
      {
        title: "Challenge: Session Management",
        solution: "Built intelligent session handling with automatic re-authentication and error recovery."
      }
    ],
    results: [
      { metric: "99%", description: "Automation Reliability" },
      { metric: "18hrs", description: "Time Saved Weekly" },
      { metric: "25+", description: "Automated Workflows" }
    ],
    link: null,
    github: null,
    confidentiality: "HIPAA Compliance - Healthcare Confidential Project"
  },
  {
    id: 5,
    name: "Power BI Dashboard",
    category: "Data Analysis",
    description: "Created a comprehensive RCM appointments dashboard in Power BI, tracking key performance indicators (KPIs) to provide actionable insights.",
    image: "../Assets/Projects/Power_bi_dashboard.png",
    duration: "2 Months",
    role: "Data Analyst",
    status: "Completed",
    overview: "Created a comprehensive RCM appointments dashboard in Power BI, tracking key performance indicators (KPIs) to provide actionable insights and improve operational efficiency in healthcare revenue cycle management.",
    technologies: ["Power BI", "Data Visualization", "DAX", "SQL", "Healthcare Analytics"],
    features: [
      "Interactive KPI dashboard",
      "Real-time data updates",
      "RCM performance metrics tracking",
      "Appointment scheduling insights",
      "Revenue cycle analysis",
      "Custom drill-down capabilities",
      "Automated report generation"
    ],
    challenges: [
      {
        title: "Challenge: Complex Healthcare Metrics",
        solution: "Created sophisticated DAX calculations to accurately represent RCM KPIs and metrics."
      },
      {
        title: "Challenge: Real-time Data Refresh",
        solution: "Configured Power BI with automated refresh schedules for up-to-date insights."
      }
    ],
    results: [
      { metric: "200%", description: "User Engagement" },
      { metric: "15+", description: "Key Metrics Tracked" },
      { metric: "5min", description: "Report Load Time" }
    ],
    link: null,
    github: null,
    confidentiality: "HIPAA Compliance - Healthcare Confidential Project"
  },
  {
    id: 6,
    name: "Personal Portfolio Website",
    category: "Web Development",
    description: "Designed and deployed a responsive personal portfolio site using HTML, Tailwind CSS, and JavaScript. Deployed on Netlify.",
    image: "../Assets/Projects/Personal_porfolio_website.png",
    duration: "2 Weeks",
    role: "Full Stack Developer",
    status: "Completed",
    overview: "Designed and deployed a responsive personal portfolio site using HTML, Tailwind CSS, and JavaScript. Deployed on Netlify, it includes a contact form and serves as a professional platform to showcase skills and projects.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Netlify", "Responsive Design"],
    features: [
      "Fully responsive design",
      "Dark mode support",
      "Smooth scrolling navigation",
      "Interactive project showcase",
      "Contact form integration",
      "Fast loading performance",
      "SEO optimized",
      "Mobile-first approach"
    ],
    challenges: [
      {
        title: "Challenge: Responsive Design",
        solution: "Used Tailwind CSS utilities to create a fully responsive design that works perfectly on all devices."
      },
      {
        title: "Challenge: Performance Optimization",
        solution: "Optimized images and implemented lazy loading for optimal performance on all connection speeds."
      }
    ],
    results: [
      { metric: "100%", description: "Mobile Responsive" },
      { metric: "95%", description: "Lighthouse Score" },
      { metric: "0.8s", description: "Page Load Time" }
    ],
    link: "https://ashusaini.netlify.app",
    github: "https://github.com/yourusername/Personal-Portfolio-Website"
  }
];

// Get project ID from URL parameter
function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id")) || 1;
}

// Populate project details
function populateProjectDetails() {
  const projectId = getProjectIdFromURL();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    document.body.innerHTML = "<div class='text-center py-20'>Project not found</div>";
    return;
  }

  // Update main content
  document.getElementById("project-title").textContent = project.name;
  document.getElementById("project-name").textContent = project.name;
  document.getElementById("project-category").textContent = project.category;
  document.getElementById("project-description").textContent = project.description;
  document.getElementById("project-image").src = project.image;
  document.getElementById("project-duration").textContent = project.duration;
  document.getElementById("project-role").textContent = project.role;
  document.getElementById("project-status").textContent = project.status;
  document.getElementById("project-overview").textContent = project.overview;

  // Update technologies
  const technologiesContainer = document.getElementById("technologies-container");
  technologiesContainer.innerHTML = project.technologies
    .map(tech => `<span class="bg-primary text-white px-3 py-1 rounded-full text-sm">${tech}</span>`)
    .join("");

  // Update features
  const featuresContainer = document.getElementById("features-container");
  featuresContainer.innerHTML = project.features
    .map(feature => `
      <li class="flex items-start space-x-3">
        <i class="ri-check-line text-primary mt-1 flex-shrink-0"></i>
        <span class="text-gray-600 dark:text-gray-400">${feature}</span>
      </li>
    `)
    .join("");

  // Update challenges
  const challengesContainer = document.getElementById("challenges-container");
  challengesContainer.innerHTML = project.challenges
    .map(challenge => `
      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h4 class="font-semibold text-lg mb-2">${challenge.title}</h4>
        <p class="text-gray-600 dark:text-gray-400">${challenge.solution}</p>
      </div>
    `)
    .join("");

  // Update results
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = project.results
    .map(result => `
      <div class="border-l-4 border-primary pl-4">
        <p class="text-3xl font-bold text-primary mb-2">${result.metric}</p>
        <p class="text-gray-600 dark:text-gray-400">${result.description}</p>
      </div>
    `)
    .join("");

  // Update project links (conditional rendering)
  updateProjectLinks(project);

  // Update related projects
  populateRelatedProjects(projectId);

  // Update navigation buttons
  updateNavigationButtons(projectId);
}

// Update project links with conditional rendering
function updateProjectLinks(project) {
  const projectLinkContainer = document.querySelector(".mt-8.space-y-4");
  
  if (!projectLinkContainer) return;

  projectLinkContainer.innerHTML = "";

  // Add live project link if available
  if (project.link) {
    projectLinkContainer.innerHTML += `
      <a
        href="${project.link}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full bg-primary text-white px-6 py-3 rounded-button font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
      >
        <i class="ri-external-link-line"></i>
        <span>View Live Project</span>
      </a>
    `;
  }

  // Add GitHub link if available
  if (project.github) {
    projectLinkContainer.innerHTML += `
      <a
        href="${project.github}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full bg-gray-800 text-white px-6 py-3 rounded-button font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
      >
        <i class="ri-github-line"></i>
        <span>View on GitHub</span>
      </a>
    `;
  }

  // If no links available, show confidentiality notice
  if (!project.link && !project.github) {
    projectLinkContainer.innerHTML += `
      <div class="w-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 px-6 py-4 rounded-button flex items-start space-x-3">
        <i class="ri-lock-line mt-1 flex-shrink-0"></i>
        <div>
          <p class="font-semibold">Confidential Project</p>
          <p class="text-sm mt-1">${project.confidentiality || "This project cannot be shared due to confidentiality agreements."}</p>
        </div>
      </div>
    `;
  }
}

// Populate related projects
function populateRelatedProjects(currentProjectId) {
  const relatedProjects = projectsData.filter(p => p.id !== currentProjectId).slice(0, 3);
  const container = document.getElementById("related-projects");

  container.innerHTML = relatedProjects
    .map(project => `
      <a href="./project-details.html?id=${project.id}" class="group">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <img src="${project.image}" alt="${project.name}" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-4">
            <p class="text-primary text-sm font-semibold mb-2">${project.category}</p>
            <h4 class="font-semibold text-lg group-hover:text-primary transition-colors">${project.name}</h4>
          </div>
        </div>
      </a>
    `)
    .join("");
}

// Update navigation buttons
function updateNavigationButtons(currentProjectId) {
  const previousProject = projectsData.find(p => p.id === currentProjectId - 1);
  const nextProject = projectsData.find(p => p.id === currentProjectId + 1);

  const prevButton = document.getElementById("prev-project");
  const nextButton = document.getElementById("next-project");

  if (previousProject) {
    prevButton.href = `./project-details.html?id=${previousProject.id}`;
    prevButton.style.visibility = "visible";
  } else {
    prevButton.style.visibility = "hidden";
  }

  if (nextProject) {
    nextButton.href = `./project-details.html?id=${nextProject.id}`;
    nextButton.style.visibility = "visible";
  } else {
    nextButton.style.visibility = "hidden";
  }
}

// Mobile menu toggle
document.getElementById("mobile-menu-button").addEventListener("click", function() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Initialize page
document.addEventListener("DOMContentLoaded", populateProjectDetails);