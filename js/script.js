// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// DEFAULT PROJECTS
// ===========================

const defaultProjects = [
    {
        title: 'Christ-like Missionaries',
        description: 'JavaScript project. See the repository for features, setup steps, and screenshots.',
        image: '',
        github: 'https://github.com/ka-sera/Christ-like-Missionaries'
    },
    {
        title: 'JUDIE',
        description: 'HTML project. See the repository for the live pages, structure, and assets.',
        image: '',
        github: 'https://github.com/ka-sera/JUDIE'
    },
    {
        title: 'Sheldon Portfolio',
        description: 'An earlier version of my portfolio site (HTML).',
        image: '',
        github: 'https://github.com/ka-sera/sheldon-portfolio'
    },
    {
        title: 'GitHub Skills: Introduction',
        description: 'Practice repository from GitHub Skills / learning workflow.',
        image: '',
        github: 'https://github.com/ka-sera/skills-introduction-to-github'
    }
];

function getGithubRepoFromUrl(repoUrl) {
    if (!repoUrl) return null;

    try {
        const url = new URL(repoUrl);
        if (url.hostname !== 'github.com') return null;

        const parts = url.pathname.replace(/^\/|\/$/g, '').split('/');
        if (parts.length < 2) return null;

        const owner = parts[0];
        const repo = parts[1];
        if (!owner || !repo) return null;

        return { owner, repo };
    } catch {
        return null;
    }
}

function getGithubOpenGraphImageUrl(repoUrl) {
    const repo = getGithubRepoFromUrl(repoUrl);
    if (!repo) return null;

    // GitHub-hosted preview image (works well for portfolio cards without local screenshots).
    return `https://opengraph.githubassets.com/1/${repo.owner}/${repo.repo}`;
}

function getProjectImageUrl(project) {
    if (!project) return null;
    if (project.image) return project.image;

    return getGithubOpenGraphImageUrl(project.github);
}

// ===========================
// LOAD PROJECTS
// ===========================

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    defaultProjects.forEach(project => {
        const imageUrl = getProjectImageUrl(project);
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                ${imageUrl ?
                    `<img src="${imageUrl}" alt="${project.title}" loading="lazy" onerror="this.remove(); this.parentElement.innerHTML='<span>📁 Project</span>';">` :
                    '<span>📁 Project</span>'
                }
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ===========================
// LOAD CERTIFICATES
// ===========================

function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    certificatesGrid.innerHTML = '';

    // Your certificates
    const certificates = [
        {
            name: 'Bunimation Whiteboard Animation Course - Buni Sanara Program',
            image: 'images/bunimation_certificate.jpg'
        }
    ];

    if (certificates.length === 0) {
        certificatesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d; padding: 2rem;">No certificates uploaded yet. Add your certificate images to the <code>certificates/</code> folder.</p>';
    } else {
        certificates.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'certificate-card';
            const imageUrl = cert.image || 'images/certificate-placeholder.svg';
            certCard.innerHTML = `
                <div class="certificate-image">
                    <img src="${imageUrl}" alt="${cert.name}" loading="lazy" onerror="this.remove(); this.parentElement.innerHTML='<span>🏆</span>';">
                </div>
                <div class="certificate-name">${cert.name}</div>
            `;
            certificatesGrid.appendChild(certCard);
        });
    }
}

// ===========================
// LOAD GALLERY
// ===========================

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    // Sample gallery images - will be populated when user adds images
    const gallery = [];

    if (gallery.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d; padding: 2rem;">No gallery images yet. Add your photos to the <code>images/</code> folder.</p>';
    } else {
        gallery.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            galleryGrid.appendChild(galleryItem);
        });
    }
}

// ===========================
// CONTACT FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();

    // Note: To send actual emails, you'll need to set up EmailJS or a backend service
    // See README.md for instructions on how to integrate EmailJS
});

// ===========================
// POPULATE CONTACT INFO
// ===========================

function populateContactInfo() {
    // Updated with your actual contact information
    const contactData = {
        email: 'kaserasheldon7@gmail.com',
        phone: '+254 727 515 329',
        github: 'https://github.com/ka-sera',
        linkedin: 'https://www.linkedin.com/in/sheldon-kasera-99a557305'
    };

    document.getElementById('contactEmail').textContent = contactData.email;
    document.getElementById('contactPhone').textContent = contactData.phone;

    const githubLink = document.getElementById('contactGithub');
    githubLink.href = contactData.github;
    githubLink.textContent = contactData.github.replace(/^https?:\/\//, '');

    const linkedinLink = document.getElementById('contactLinkedin');
    linkedinLink.href = contactData.linkedin;
    linkedinLink.textContent = 'LinkedIn Profile';
}

// ===========================
// SMOOTH SCROLL ENHANCEMENT
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// FADE IN ON SCROLL
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===========================
// INITIALIZE ON LOAD
// ===========================

window.addEventListener('load', () => {
    loadProjects();
    loadCertificates();
    loadGallery();
    populateContactInfo();

    // Add slight animation delay to projects/certificates/gallery
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===========================
// SCROLL EFFECT FOR NAVBAR
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 128, 128, 0.2)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 128, 128, 0.15)';
    }
});
