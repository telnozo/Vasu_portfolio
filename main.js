document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. DATA LOADING (Existing Logic) ---
    // Load Header/Hero Data
    document.getElementById("hero-name").textContent = portfolioData.profile.name;
    document.getElementById("hero-title").textContent = portfolioData.profile.title;
    document.getElementById("hero-tagline").textContent = portfolioData.profile.tagline;
    
    // Load Profile Image
    const imgContainer = document.getElementById("profile-img-container");
    const img = document.createElement("img");
    img.src = portfolioData.profile.image_url;
    img.alt = portfolioData.profile.name;
    // Styling handled mostly in CSS now for responsiveness, but keeping base styles
    img.style.width = "100%"; 
    img.style.maxWidth = "350px"; // Max width for desktop
    img.style.borderRadius = "15px";
    img.style.boxShadow = "15px 15px 0px var(--accent)";
    imgContainer.appendChild(img);

    // Load About
    document.getElementById("about-text").textContent = portfolioData.profile.summary;

    // Load Skills
    const skillsList = document.getElementById("skills-list");
    portfolioData.skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "skill-tag reveal"; // Add reveal class for animation
        span.textContent = skill;
        skillsList.appendChild(span);
    });

    // Load Experience
    const expList = document.getElementById("experience-list");
    portfolioData.experience.forEach(job => {
        const div = document.createElement("div");
        div.className = "timeline-item reveal"; // Add reveal class
        
        let ul = "";
        job.highlights.forEach(point => {
            ul += `<li>${point}</li>`;
        });

        div.innerHTML = `
            <h3 class="role">${job.role}</h3>
            <div class="company">${job.company}</div>
            <span class="period"><i class="far fa-calendar-alt"></i> ${job.period}</span>
            <ul>${ul}</ul>
        `;
        expList.appendChild(div);
    });

    // Load Education
    const eduList = document.getElementById("education-list");
    portfolioData.education.forEach(edu => {
        const div = document.createElement("div");
        div.className = "edu-card reveal"; // Add reveal class
        div.innerHTML = `
            <div class="edu-degree">${edu.degree}</div>
            <div class="edu-inst">${edu.institution}</div>
            <div class="edu-year">${edu.year}</div>
            <p style="font-size:0.9rem; color:#666; margin-top:5px;">${edu.details}</p>
        `;
        eduList.appendChild(div);
    });

    // Load Awards
    const awardList = document.getElementById("awards-list");
    portfolioData.awards.forEach(award => {
        const div = document.createElement("div");
        div.className = "award-item reveal"; // Add reveal class
        div.innerHTML = `
            <div class="award-icon"><i class="fas fa-trophy"></i></div>
            <div class="award-text">${award}</div>
        `;
        awardList.appendChild(div);
    });

    // Contact & Footer
    const contactEmail = document.getElementById("contact-email");
    contactEmail.textContent = portfolioData.profile.contact_email;
    contactEmail.href = `mailto:${portfolioData.profile.contact_email}`; // Make email clickable

    document.getElementById("contact-linkedin").href = portfolioData.profile.linkedin;
    document.getElementById("year").textContent = new Date().getFullYear();


    // --- 2. MOBILE MENU LOGIC ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    menuToggle.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        
        // Toggle Icon (Bars to Times)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('nav-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });


    // --- 3. SCROLL ANIMATIONS (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
