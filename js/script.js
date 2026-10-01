
// ======================================================
// SHELDON KASERA PORTFOLIO - MAIN JAVASCRIPT
// ======================================================


// ======================================================
// MOBILE MENU TOGGLE
// ======================================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when navigation link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});


// ======================================================
// PROJECTS
// ======================================================

const defaultProjects = [
    {
        title: 'Christ-like Missionaries',
        description:
            'A JavaScript project focused on building a functional digital solution. Explore the GitHub repository for the source code and project details.',
        github:
            'https://github.com/ka-sera/Christ-like-Missionaries'
    },

    {
        title: 'JUDIE',
        description:
            'An HTML-based project demonstrating web structure, design, and front-end development.',
        github:
            'https://github.com/ka-sera/JUDIE'
    },

    {
        title: 'Sheldon Portfolio',
        description:
            'An earlier version of my personal software engineering portfolio website.',
        github:
            'https://github.com/ka-sera/sheldon-portfolio'
    },

    {
        title: 'GitHub Skills: Introduction',
        description:
            'A learning and practice repository developed while exploring GitHub workflows and development practices.',
        github:
            'https://github.com/ka-sera/skills-introduction-to-github'
    }
];


// Get GitHub repository information
function getGithubRepoFromUrl(repoUrl) {

    if (!repoUrl) {
        return null;
    }

    try {

        const url = new URL(repoUrl);

        if (url.hostname !== 'github.com') {
            return null;
        }

        const parts = url.pathname
            .replace(/^\/|\/$/g, '')
            .split('/');

        if (parts.length < 2) {
            return null;
        }

        return {
            owner: parts[0],
            repo: parts[1]
        };

    } catch (error) {

        console.error('Invalid GitHub URL:', repoUrl);

        return null;
    }
}


// GitHub preview image
function getGithubOpenGraphImageUrl(repoUrl) {

    const repo = getGithubRepoFromUrl(repoUrl);

    if (!repo) {
        return null;
    }

    return `https://opengraph.githubassets.com/1/${repo.owner}/${repo.repo}`;
}


// Get project image
function getProjectImageUrl(project) {

    if (!project) {
        return null;
    }

    if (project.image) {
        return project.image;
    }

    return getGithubOpenGraphImageUrl(project.github);
}


// ======================================================
// LOAD PROJECTS
// ======================================================

function loadProjects() {

    const projectsGrid =
        document.getElementById('projectsGrid');

    if (!projectsGrid) {
        console.warn('projectsGrid not found.');
        return;
    }

    projectsGrid.innerHTML = '';

    defaultProjects.forEach((project, index) => {

        const imageUrl =
            getProjectImageUrl(project);

        const projectCard =
            document.createElement('div');

        projectCard.className = 'project-card';

        projectCard.innerHTML = `

            <div class="project-image">

                ${
                    imageUrl
                        ? `
                            <img
                                src="${imageUrl}"
                                alt="${project.title}"
                                loading="lazy"
                                onerror="
                                    this.style.display='none';
                                    this.parentElement.innerHTML='<span>📁 Project</span>';
                                "
                            >
                          `
                        : '<span>📁 Project</span>'
                }

            </div>

            <div class="project-content">

                <h3 class="project-title">
                    ${project.title}
                </h3>

                <p class="project-description">
                    ${project.description}
                </p>

                <div class="project-links">

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>

                </div>

            </div>
        `;

        projectCard.style.animationDelay =
            `${index * 0.1}s`;

        projectsGrid.appendChild(projectCard);
    });
}




// ===========================
// LOAD CERTIFICATES
// ===========================

function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');

    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = '';

    const certificates = [
        {
            name: 'Bunimation Whiteboard Animation Course - Buni Sanara Program',
            image: 'images/bunimation_certificate.jpg'
        },
        {
            name: 'ALX AI Career Essentials',
            image: 'images/73-alx-aice-ai-career-essentials-certificate-sheldon-kasera.png'
        },
        {
            name: 'Virtual Assistant Certificate',
            image: 'images/72-virtual-assistant-certificate-sheldon-kasera.png'
        }
    ];

    certificates.forEach((certificate) => {

        const card = document.createElement('div');
        card.className = 'certificate-card';

        card.innerHTML = `
            <div class="certificate-image">
                <img
                    src="${certificate.image}"
                    alt="${certificate.name}"
                    loading="lazy"
                >
            </div>

            <div class="certificate-name">
                ${certificate.name}
            </div>

            <div class="certificate-view-hint">
                Click to view larger
            </div>
        `;

        card.addEventListener('click', function () {
            showCertificate(certificate.image, certificate.name);
        });

        certificatesGrid.appendChild(card);
    });
}


// ===========================
// CERTIFICATE FULL-SCREEN VIEW
// ===========================

function showCertificate(image, title) {

    const viewer = document.createElement('div');

    viewer.className = 'certificate-modal';

    viewer.innerHTML = `
        <div class="certificate-modal-background"></div>

        <div class="certificate-modal-content">

            <button
                type="button"
                class="certificate-modal-close"
                aria-label="Close certificate"
            >
                &times;
            </button>

            <img
                src="${image}"
                alt="${title}"
                class="certificate-modal-image"
            >

            <h3 class="certificate-modal-title">
                ${title}
            </h3>

        </div>
    `;

    document.body.appendChild(viewer);

    // Close button
    viewer.querySelector('.certificate-modal-close')
        .addEventListener('click', function () {
            viewer.remove();
        });

    // Close when clicking the dark background
    viewer.querySelector('.certificate-modal-background')
        .addEventListener('click', function () {
            viewer.remove();
        });

    // Close with Escape
    function closeWithEscape(event) {
        if (event.key === 'Escape') {
            viewer.remove();
            document.removeEventListener('keydown', closeWithEscape);
        }
    }

    document.addEventListener('keydown', closeWithEscape);
}



// ======================================================
// GALLERY
// ======================================================

function loadGallery() {

    const galleryGrid =
        document.getElementById('galleryGrid');

    if (!galleryGrid) {
        console.warn('galleryGrid not found.');
        return;
    }

    galleryGrid.innerHTML = '';


    // These are the photos that should appear
    // on the actual website.
    //
    // Other photos can remain inside GitHub
    // without appearing on the portfolio.

    const gallery = [

        {
            src: 'images/_JAK0094 - Copy - Copy.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20231118-WA0161 - Copy.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240330-WA0036.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240617-WA0061.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240617-WA0131.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240724-WA0031.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240724-WA0033.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240724-WA0043.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20240928-WA0060.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20250120-WA0027.jpg',
            alt: 'Sheldon Kasera'
        },

        {
            src: 'images/IMG-20250209-WA0128.jpg',
            alt: 'Sheldon Kasera'
        }

    ];


    gallery.forEach((image, index) => {

        const galleryItem =
            document.createElement('div');

        galleryItem.className =
            'gallery-item';


        galleryItem.innerHTML = `

            <img
                src="${image.src}"
                alt="${image.alt}"
                loading="lazy"
                onerror="
                    this.parentElement.style.display='none';
                "
            >

        `;


        galleryItem.style.animationDelay =
            `${index * 0.08}s`;


        galleryGrid.appendChild(
            galleryItem
        );
    });
}


// ======================================================
// CONTACT INFORMATION
// ======================================================

function populateContactInfo() {

    const contactData = {

        email:
            'sheldonkasera9@gmail.com',

        phone:
            '+254 727 515 329',

        whatsapp:
            'https://wa.me/254727515329',

        github:
            'https://github.com/ka-sera',

        linkedin:
            'https://www.linkedin.com/in/sheldon-kasera-99a557305'

    };


    // EMAIL

    const emailElement =
        document.getElementById('contactEmail');

    if (emailElement) {

        emailElement.textContent =
            contactData.email;

        emailElement.href =
            `mailto:${contactData.email}`;
    }


    // PHONE → WHATSAPP

    const phoneElement =
        document.getElementById('contactPhone');

    if (phoneElement) {

        const whatsappLink =
            document.createElement('a');

        whatsappLink.id =
            'contactPhone';

        whatsappLink.href =
            contactData.whatsapp;

        whatsappLink.target =
            '_blank';

        whatsappLink.rel =
            'noopener noreferrer';

        whatsappLink.textContent =
            contactData.phone;


        phoneElement.replaceWith(
            whatsappLink
        );
    }


    // GITHUB

    const githubLink =
        document.getElementById('contactGithub');

    if (githubLink) {

        githubLink.href =
            contactData.github;

        githubLink.textContent =
            'github.com/ka-sera';

        githubLink.target =
            '_blank';

        githubLink.rel =
            'noopener noreferrer';
    }


    // LINKEDIN

    const linkedinLink =
        document.getElementById('contactLinkedin');

    if (linkedinLink) {

        linkedinLink.href =
            contactData.linkedin;

        linkedinLink.textContent =
            'LinkedIn Profile';

        linkedinLink.target =
            '_blank';

        linkedinLink.rel =
            'noopener noreferrer';
    }
}

// ======================================================
// SMOOTH SCROLLING
// ======================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            'click',
            function (event) {

                const targetId =
                    this.getAttribute('href');

                if (!targetId || targetId === '#') {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        );
    });


// ======================================================
// FADE-IN SECTION ANIMATION
// ======================================================

const observerOptions = {

    threshold: 0.1,

    rootMargin:
        '0px 0px -80px 0px'

};


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        '1';

                    entry.target.style.transform =
                        'translateY(0)';

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        observerOptions
    );


// Observe sections

document
    .querySelectorAll('section')
    .forEach(section => {

        section.style.opacity = '0';

        section.style.transform =
            'translateY(20px)';

        section.style.transition =
            'opacity 0.6s ease, transform 0.6s ease';

        observer.observe(section);
    });


// ======================================================
// NAVBAR SCROLL EFFECT
// ======================================================

const navbar =
    document.querySelector('.navbar');


window.addEventListener(
    'scroll',
    () => {

        if (!navbar) {
            return;
        }

        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop;


        if (scrollTop > 100) {

            navbar.style.boxShadow =
                '0 5px 30px rgba(0, 128, 128, 0.2)';

        } else {

            navbar.style.boxShadow =
                '0 5px 20px rgba(0, 128, 128, 0.15)';
        }

    }
);


// ======================================================
// INITIALIZE WEBSITE
// ======================================================

window.addEventListener(
    'load',
    () => {

        loadProjects();

        loadCertificates();

        loadGallery();

        populateContactInfo();

    }
);

