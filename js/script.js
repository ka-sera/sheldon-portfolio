// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});


// ===========================
// PROJECTS
// ===========================

const defaultProjects = [
    {
        title: 'Christ-like Missionaries',
        description: 'A JavaScript-based project focused on creating a functional digital solution.',
        image: '',
        github: 'https://github.com/ka-sera/Christ-like-Missionaries'
    },
    {
        title: 'JUDIE',
        description: 'An HTML-based project showcasing web structure, design and interactive content.',
        image: '',
        github: 'https://github.com/ka-sera/JUDIE'
    },
    {
        title: 'Sheldon Portfolio',
        description: 'A personal portfolio website built with HTML, CSS and JavaScript.',
        image: '',
        github: 'https://github.com/ka-sera/sheldon-portfolio'
    },
    {
        title: 'GitHub Skills: Introduction',
        description: 'A learning and practice repository exploring GitHub workflows and development practices.',
        image: '',
        github: 'https://github.com/ka-sera/skills-introduction-to-github'
    }
];


// ===========================
// GITHUB PROJECT IMAGE
// ===========================

function getGithubRepoFromUrl(repoUrl) {
    if (!repoUrl) return null;

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

    } catch {
        return null;
    }
}


function getGithubOpenGraphImageUrl(repoUrl) {
    const repo = getGithubRepoFromUrl(repoUrl);

    if (!repo) return null;

    return `https://opengraph.githubassets.com/1/${repo.owner}/${repo.repo}`;
}


function getProjectImageUrl(project) {
    if (!project) return null;

    if (project.image) {
        return project.image;
    }

    return getGithubOpenGraphImageUrl(project.github);
}


// ===========================
// LOAD PROJECTS
// ===========================

function loadProjects() {

    const projectsGrid =
        document.getElementById('projectsGrid');

    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    defaultProjects.forEach(project => {

        const imageUrl =
            getProjectImageUrl(project);

        const projectCard =
            document.createElement('div');

        projectCard.className =
            'project-card';

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
                                this.remove();
                                this.parentElement.innerHTML =
                                '<span>📁 Project</span>';
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

        projectsGrid.appendChild(projectCard);
    });
}


// ===========================
// CERTIFICATES
// ===========================

function loadCertificates() {

    const certificatesGrid =
        document.getElementById('certificatesGrid');

    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = '';

    const certificates = [

        {
            name: 'Bunimation Whiteboard Animation Course - Buni Sanara Program',
            image: 'images/bunimation_certificate.jpg'
        }

    ];

    certificates.forEach(cert => {

        const certCard =
            document.createElement('div');

        certCard.className =
            'certificate-card';

        certCard.innerHTML = `
            <div class="certificate-image">

                <img
                    src="${cert.image}"
                    alt="${cert.name}"
                    loading="lazy"
                    onerror="
                        this.remove();
                        this.parentElement.innerHTML =
                        '<span>🏆</span>';
                    "
                >

            </div>

            <div class="certificate-name">
                ${cert.name}
            </div>
        `;

        certificatesGrid.appendChild(certCard);
    });
}


// ===========================
// GALLERY
// ===========================

function loadGallery() {

    const galleryGrid =
        document.getElementById('galleryGrid');

    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    /*
     * ONLY these photos appear on the website.
     *
     * Other images may remain inside the GitHub
     * images folder but will not appear here.
     */

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


    gallery.forEach(image => {

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

        galleryGrid.appendChild(galleryItem);
    });
}


// ===========================
// CONTACT FORM
// ===========================

const contactForm =
    document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();

        alert(
            'Thank you for your message! I will get back to you soon.'
        );

        contactForm.reset();
    });
}


// ===========================
// CONTACT INFORMATION
// ===========================

function populateContactInfo() {

    const contactData = {

        email: 'sheldonkasera9@gmail.com',

        phone: '+254 727 515 329',

        whatsapp: 'https://wa.me/254727515329',

        github: 'https://github.com/ka-sera',

        linkedin:
            'https://www.linkedin.com/in/sheldon-kasera-99a557305'

    };


    // ===========================
    // EMAIL
    // ===========================

    const emailElement =
        document.getElementById('contactEmail');

    if (emailElement) {

        emailElement.textContent =
            contactData.email;
    }


    // ===========================
    // WHATSAPP
    // ===========================

    const phoneElement =
        document.getElementById('contactPhone');

    if (phoneElement) {

        phoneElement.outerHTML = `
            <a
                id="contactPhone"
                href="${contactData.whatsapp}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${contactData.phone}
            </a>
        `;
    }


    // ===========================
    // GITHUB
    // ===========================

    const githubLink =
        document.getElementById('contactGithub');

    if (githubLink) {

        githubLink.href =
            contactData.github;

        githubLink.textContent =
            contactData.github.replace(
                /^https?:\/\//,
                ''
            );
    }


    // ===========================
    // LINKEDIN
    // ===========================

    const linkedinLink =
        document.getElementById('contactLinkedin');

    if (linkedinLink) {

        linkedinLink.href =
            contactData.linkedin;

        linkedinLink.textContent =
            'LinkedIn Profile';
    }
}


// ===========================
// SMOOTH SCROLL
// ===========================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            'click',
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute('href')
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

            }
        );

    });


// ===========================
// FADE IN ON SCROLL
// ===========================

const observerOptions = {

    threshold: 0.1,

    rootMargin:
        '0px 0px -100px 0px'

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
                }

            });

        },
        observerOptions
    );


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


// ===========================
// INITIALIZE WEBSITE
// ===========================

window.addEventListener('load', () => {

    loadProjects();

    loadCertificates();

    loadGallery();

    populateContactInfo();


    // Project animation delay

    document
        .querySelectorAll('.project-card')
        .forEach((card, index) => {

            card.style.animationDelay =
                `${index * 0.1}s`;

        });

});


// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar =
    document.querySelector('.navbar');


window.addEventListener('scroll', () => {

    if (!navbar) return;

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

});
