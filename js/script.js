// ==========================================
// SHELDON KASERA PORTFOLIO
// Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("active");

            hamburger.classList.toggle("active", isOpen);
            hamburger.setAttribute("aria-expanded", isOpen);

        });

    }

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu?.classList.remove("active");
            hamburger?.classList.remove("active");
            hamburger?.setAttribute("aria-expanded", "false");

        });

    });


    // ==========================================
    // PROJECT DATA
    // ==========================================

    const projects = [
        {
            title: "Christ-Like Missionaries",
            category: "Web Application",
            description:
                "A web platform for Christ-Like Missionaries that brings together information about missionaries, missions, communication, registration, and related activities.",
            technologies: [
                "React",
                "Django",
                "Django REST Framework",
                "SQLite"
            ],
            github:
                "https://github.com/ka-sera/Christ-like-Missionaries",
            live:
                "https://christ-likemissionaries.org/"
        },

        {
            title: "Alumni Tracer System",
            category: "Data & Web System",
            description:
                "A university alumni tracking platform designed to collect graduate information, employment data, further education records, program feedback, and analytics for institutional decision-making.",
            technologies: [
                "Next.js",
                "TypeScript",
                "MySQL",
                "Prisma"
            ],
            github:
                "https://github.com/ka-sera"
        },

        {
            title: "Student Record Management System",
            category: "Database Application",
            description:
                "A Java and MySQL application designed to manage student records and demonstrate practical use of object-oriented programming and relational database concepts.",
            technologies: [
                "Java",
                "MySQL",
                "OOP",
                "SQL"
            ],
            github:
                "https://github.com/ka-sera"
        },

        {
            title: "UEAB Tracer Database",
            category: "Database Design",
            description:
                "A database design project for organizing alumni tracer information and supporting structured collection and analysis of graduate data.",
            technologies: [
                "MySQL",
                "Database Design",
                "SQL",
                "Data Modeling"
            ],
            github:
                "https://github.com/ka-sera"
        }
    ];


    // ==========================================
    // LOAD PROJECTS
    // ==========================================

    function loadProjects() {

        const container = document.getElementById("projects-container");

        if (!container) return;

        container.innerHTML = "";

        projects.forEach((project, index) => {

            const card = document.createElement("article");

            card.className = "project-card";

            const technologyTags = project.technologies
                .map(technology => `<span>${technology}</span>`)
                .join("");

            const liveLink = project.live
                ? `
                    <a
                        href="${project.live}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link"
                    >
                        Live Site
                    </a>
                `
                : "";

            card.innerHTML = `
                <div class="project-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="project-content">

                    <p class="project-category">
                        ${project.category}
                    </p>

                    <h3>
                        ${project.title}
                    </h3>

                    <p class="project-description">
                        ${project.description}
                    </p>

                    <div class="project-technologies">
                        ${technologyTags}
                    </div>

                    <div class="project-links">

                        <a
                            href="${project.github}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="project-link"
                        >
                            GitHub
                        </a>

                        ${liveLink}

                    </div>

                </div>
            `;

            container.appendChild(card);

        });

    }


    // ==========================================
    // CERTIFICATE DATA
    // ==========================================

    const certificates = [
        {
            title: "AI Career Essentials",
            organization: "ALX",
            image: "images/73-alx-aice-ai-career-essentials-certificate-sheldon-kasera.png"
        },

        {
            title: "Virtual Assistant Certificate",
            organization: "Professional Training",
            image: "images/72-virtual-assistant-certificate-sheldon-kasera.png"
        },

        {
            title: "Whiteboard Animation Course",
            organization: "Buni Sanara Program",
            image: "images/bunimation_certificate.jpg"
        }
    ];


    // ==========================================
    // LOAD CERTIFICATES
    // ==========================================

    function loadCertificates() {

        const container = document.getElementById("certificates-container");

        if (!container) return;

        container.innerHTML = "";

        certificates.forEach((certificate, index) => {

            const card = document.createElement("article");

            card.className = "certificate-card";

            card.innerHTML = `
                <button
                    type="button"
                    class="certificate-button"
                    data-index="${index}"
                    aria-label="View ${certificate.title} certificate"
                >

                    <div class="certificate-image-wrapper">

                        <img
                            src="${encodeURI(certificate.image)}"
                            alt="${certificate.title}"
                            class="certificate-image"
                            loading="lazy"
                        >

                    </div>

                    <div class="certificate-info">

                        <p class="certificate-organization">
                            ${certificate.organization}
                        </p>

                        <h3>
                            ${certificate.title}
                        </h3>

                        <span class="certificate-view">
                            View Certificate
                        </span>

                    </div>

                </button>
            `;

            container.appendChild(card);

        });

        const buttons = document.querySelectorAll(".certificate-button");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                showCertificate(index);

            });

        });

    }


    // ==========================================
    // CERTIFICATE MODAL
    // ==========================================

    const modal = document.getElementById("certificate-modal");
    const modalImage = document.getElementById("certificate-modal-image");
    const modalTitle = document.getElementById("certificate-modal-title");
    const modalClose = document.getElementById("certificate-modal-close");

    function showCertificate(index) {

        const certificate = certificates[index];

        if (!certificate || !modal) return;

        modalImage.src = encodeURI(certificate.image);
        modalImage.alt = certificate.title;

        modalTitle.textContent =
            `${certificate.title} — ${certificate.organization}`;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

    }


    function closeCertificate() {

        if (!modal) return;

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        if (modalImage) {
            modalImage.removeAttribute("src");
        }

    }


    if (modalClose) {

        modalClose.addEventListener("click", closeCertificate);

    }


    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeCertificate();
            }

        });

    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeCertificate();
        }

    });


    // ==========================================
    // GALLERY DATA
    // ==========================================

    const galleryImages = [
        "images/1697697028627 - Copy (2).jpg",
        "images/1697697039529.jpg",
        "images/1697697051478.jpg",
        "images/1699455785274.jpg",
        "images/1O1A1344 - Copy - Copy.jpg",
        "images/DSC_7601 - Copy.JPG",
        "images/IMG-20231118-WA0161 - Copy.jpg",
        "images/IMG-20240330-WA0002.jpg",
        "images/IMG-20240330-WA0006.jpg",
        "images/IMG-20240330-WA0036.jpg",
        "images/IMG-20240617-WA0061.jpg",
        "images/IMG-20240617-WA0131.jpg",
        "images/IMG-20240724-WA0031.jpg",
        "images/IMG-20240724-WA0033.jpg",
        "images/IMG-20240724-WA0043.jpg",
        "images/IMG-20240928-WA0060.jpg",
        "images/IMG-20250120-WA0027.jpg",
        "images/IMG-20250209-WA0128.jpg",
        "images/_JAK0094 - Copy - Copy.jpg"
    ];


    // ==========================================
    // LOAD GALLERY
    // ==========================================

    function loadGallery() {

        const container = document.getElementById("gallery-container");

        if (!container) return;

        container.innerHTML = "";

        galleryImages.forEach((image, index) => {

            const item = document.createElement("div");

            item.className = "gallery-item";

            item.innerHTML = `
                <img
                    src="${encodeURI(image)}"
                    alt="Sheldon Kasera portfolio gallery image ${index + 1}"
                    loading="lazy"
                >
            `;

            container.appendChild(item);

        });

    }


    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    // ==========================================
    // ACTIVE NAVIGATION LINK
    // ==========================================

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .focus-card, .skill-category, " +
        ".project-card, .leadership-card, .education-card, " +
        ".certificate-card, .gallery-item, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // ==========================================
    // INITIALIZE
    // ==========================================

    loadProjects();
    loadCertificates();
    loadGallery();

});
