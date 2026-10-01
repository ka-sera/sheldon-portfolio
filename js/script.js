// ============================================================
// SHELDON KASERA PORTFOLIO
// Main JavaScript
// ============================================================


// ============================================================
// MOBILE MENU
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }


    // ============================================================
    // PROJECTS
    // ============================================================

    const projects = [
        {
            title: 'Christ-like Missionaries',
            description:
                'A JavaScript project focused on developing a practical digital solution.',
            github:
                'https://github.com/ka-sera/Christ-like-Missionaries'
        },

        {
            title: 'JUDIE',
            description:
                'An HTML-based project demonstrating web structure, design and development.',
            github:
                'https://github.com/ka-sera/JUDIE'
        },

        {
            title: 'Sheldon Portfolio',
            description:
                'An earlier version of my personal software engineering portfolio.',
            github:
                'https://github.com/ka-sera/sheldon-portfolio'
        },

        {
            title: 'GitHub Skills: Introduction',
            description:
                'A practical learning repository created while developing GitHub and software development skills.',
            github:
                'https://github.com/ka-sera/skills-introduction-to-github'
        }
    ];


    function getGithubPreview(repoUrl) {

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

            const owner = parts[0];
            const repo = parts[1];

            return `https://opengraph.githubassets.com/1/${owner}/${repo}`;

        } catch (error) {

            console.error('Invalid GitHub URL:', repoUrl);
            return null;
        }
    }


    function loadProjects() {

        const projectsGrid =
            document.getElementById('projectsGrid');

        if (!projectsGrid) {
            return;
        }

        projectsGrid.innerHTML = '';

        projects.forEach((project, index) => {

            const preview =
                getGithubPreview(project.github);

            const card =
                document.createElement('div');

            card.className = 'project-card';

            card.style.animationDelay =
                `${index * 0.1}s`;

            card.innerHTML = `

                <div class="project-image">

                    ${
                        preview
                            ? `
                                <img
                                    src="${preview}"
                                    alt="${project.title} project preview"
                                    loading="lazy"
                                    onerror="
                                        this.style.display='none';
                                        this.parentElement.innerHTML='<span>📁 Project</span>';
                                    "
                                >
                              `
                            : `
                                <span>📁 Project</span>
                              `
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

            projectsGrid.appendChild(card);

        });
    }


    // ============================================================
    // CERTIFICATES
    // ============================================================

    const certificates = [

        {
            name:
                'Bunimation Whiteboard Animation Course - Buni Sanara Program',

            image:
                'images/bunimation_certificate.jpg'
        },

        {
            name:
                'ALX AI Career Essentials',

            image:
                'images/73-alx-aice-ai-career-essentials-certificate-sheldon-kasera.png'
        },

        {
            name:
                'Virtual Assistant Certificate',

            image:
                'images/72-virtual-assistant-certificate-sheldon-kasera.png'
        }

    ];


    function loadCertificates() {

        const certificatesGrid =
            document.getElementById('certificatesGrid');

        if (!certificatesGrid) {
            return;
        }

        certificatesGrid.innerHTML = '';

        certificates.forEach((certificate, index) => {

            const card =
                document.createElement('div');

            card.className =
                'certificate-card';

            card.style.animationDelay =
                `${index * 0.1}s`;

            card.innerHTML = `

                <button
                    class="certificate-view"
                    type="button"
                    aria-label="View ${certificate.name} in larger size"
                >

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

                    <div class="certificate-view-text">
                        Click to enlarge
                    </div>

                </button>
            `;

            const button =
                card.querySelector('.certificate-view');

            button.addEventListener('click', () => {

                openCertificate(
                    certificate.image,
                    certificate.name
                );

            });

            certificatesGrid.appendChild(card);

        });

    }


    // ============================================================
    // CERTIFICATE VIEWER
    // ============================================================

    function openCertificate(image, name) {

        const modal =
            document.getElementById('certificateModal');

        const modalImage =
            document.getElementById('certificateModalImage');

        if (!modal || !modalImage) {
            return;
        }

        modalImage.src = image;
        modalImage.alt = name;

        modal.classList.add('active');

        modal.setAttribute(
            'aria-hidden',
            'false'
        );

        document.body.style.overflow = 'hidden';
    }


    function closeCertificate() {

        const modal =
            document.getElementById('certificateModal');

        const modalImage =
            document.getElementById('certificateModalImage');

        if (!modal) {
            return;
        }

        modal.classList.remove('active');

        modal.setAttribute(
            'aria-hidden',
            'true'
        );

        if (modalImage) {
            modalImage.src = '';
        }

        document.body.style.overflow = '';
    }


    const closeCertificateButton =
        document.getElementById('closeCertificateModal');

    if (closeCertificateButton) {

        closeCertificateButton.addEventListener(
            'click',
            closeCertificate
        );
    }


    const certificateModal =
        document.getElementById('certificateModal');

    if (certificateModal) {

        certificateModal.addEventListener(
            'click',
            event => {

                if (event.target === certificateModal) {
                    closeCertificate();
                }

            }
        );
    }


    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key === 'Escape' &&
                certificateModal &&
                certificateModal.classList.contains('active')
            ) {
                closeCertificate();
            }

        }
    );


    // ============================================================
    // GALLERY
    // ============================================================

    const gallery = [

        {
            src:
                'images/_JAK0094 - Copy - Copy.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20231118-WA0161 - Copy.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240330-WA0036.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240617-WA0061.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240617-WA0131.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240724-WA0031.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240724-WA0033.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240724-WA0043.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20240928-WA0060.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20250120-WA0027.jpg',
            alt:
                'Sheldon Kasera'
        },

        {
            src:
                'images/IMG-20250209-WA0128.jpg',
            alt:
                'Sheldon Kasera'
        }

    ];


    function loadGallery() {

        const galleryGrid =
            document.getElementById('galleryGrid');

        if (!galleryGrid) {
            return;
        }

        galleryGrid.innerHTML = '';

        gallery.forEach((image, index) => {

            const galleryItem =
                document.createElement('div');

            galleryItem.className =
                'gallery-item';

            galleryItem.style.animationDelay =
                `${index * 0.08}s`;

            const img =
                document.createElement('img');

            img.src = image.src;
            img.alt = image.alt;
            img.loading = 'lazy';

            img.addEventListener(
                'error',
                () => {
                    galleryItem.style.display = 'none';
                }
            );

            galleryItem.appendChild(img);

            galleryGrid.appendChild(galleryItem);

        });
    }


    // ============================================================
    // SMOOTH SCROLLING
    // ============================================================

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            'click',
            function (event) {

                const targetId =
                    this.getAttribute('href');

                if (
                    !targetId ||
                    targetId === '#'
                ) {
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


    // ============================================================
    // SECTION FADE-IN ANIMATION
    // ============================================================

    function setupScrollAnimations() {

        const sections =
            document.querySelectorAll('section');

        if (
            !('IntersectionObserver' in window)
        ) {
            return;
        }

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                'visible'
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08,
                    rootMargin:
                        '0px 0px -60px 0px'
                }
            );


        sections.forEach(section => {

            section.classList.add(
                'scroll-hidden'
            );

            observer.observe(section);

        });

    }


    // ============================================================
    // NAVBAR SCROLL EFFECT
    // ============================================================

    function setupNavbarScroll() {

        const navbar =
            document.querySelector('.navbar');

        if (!navbar) {
            return;
        }

        window.addEventListener(
            'scroll',
            () => {

                if (window.scrollY > 100) {

                    navbar.classList.add(
                        'navbar-scrolled'
                    );

                } else {

                    navbar.classList.remove(
                        'navbar-scrolled'
                    );

                }

            },
            {
                passive: true
            }
        );

    }


    // ============================================================
    // CONTACT LINKS
    // ============================================================

    function setupContactLinks() {

        const whatsapp =
            document.querySelector(
                'a[href*="wa.me"]'
            );

        if (whatsapp) {

            whatsapp.href =
                'https://wa.me/254727515329';

            whatsapp.target =
                '_blank';

            whatsapp.rel =
                'noopener noreferrer';
        }


        const linkedin =
            document.querySelector(
                'a[href*="linkedin.com"]'
            );

        if (linkedin) {

            linkedin.href =
                'https://www.linkedin.com/in/sheldon-kasera-99a557305';

            linkedin.target =
                '_blank';

            linkedin.rel =
                'noopener noreferrer';
        }


        const email =
            document.getElementById(
                'contactEmail'
            );

        if (email) {

            email.href =
                'mailto:sheldonkasera9@gmail.com';

            email.textContent =
                'sheldonkasera9@gmail.com';
        }

    }


    // ============================================================
    // INITIALIZE EVERYTHING
    // ============================================================

    loadProjects();

    loadCertificates();

    loadGallery();

    setupScrollAnimations();

    setupNavbarScroll();

    setupContactLinks();

});
