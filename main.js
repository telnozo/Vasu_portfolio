document.addEventListener("DOMContentLoaded", function() {
    // 1. Load Header/Hero Data
    document.getElementById("hero-name").textContent = portfolioData.profile.name;
    document.getElementById("hero-title").textContent = portfolioData.profile.title;
    document.getElementById("hero-tagline").textContent = portfolioData.profile.tagline;
    
    // 2. Load Profile Image
    const imgContainer = document.getElementById("profile-img-container");
    const img = document.createElement("img");
    img.src = portfolioData.profile.image_url;
    img.alt = portfolioData.profile.name;
    img.style.width = "300px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "20px 20px 0px var(--accent)";
    imgContainer.appendChild(img);

    // 3. Load About
    document.getElementById("about-text").textContent = portfolioData.profile.summary;

    // 4. Load Skills
    const skillsList = document.getElementById("skills-list");
    portfolioData.skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "skill-tag";
        span.textContent = skill;
        skillsList.appendChild(span);
    });

    // 5. Load Experience
    const expList = document.getElementById("experience-list");
    portfolioData.experience.forEach(job => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        
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

    // 6. Load Education
    const eduList = document.getElementById("education-list");
    portfolioData.education.forEach(edu => {
        const div = document.createElement("div");
        div.className = "edu-card";
        div.innerHTML = `
            <div class="edu-degree">${edu.degree}</div>
            <div class="edu-inst">${edu.institution}</div>
            <div class="edu-year">${edu.year}</div>
            <p style="font-size:0.9rem; color:#666; margin-top:5px;">${edu.details}</p>
        `;
        eduList.appendChild(div);
    });

    // 7. Load Awards
    const awardList = document.getElementById("awards-list");
    portfolioData.awards.forEach(award => {
        const div = document.createElement("div");
        div.className = "award-item";
        div.innerHTML = `
            <div class="award-icon"><i class="fas fa-trophy"></i></div>
            <div class="award-text">${award}</div>
        `;
        awardList.appendChild(div);
    });

    // 8. Contact & Footer
    document.getElementById("contact-email").textContent = portfolioData.profile.contact_email;
    document.getElementById("contact-email").href = `mailto:${portfolioData.profile.contact_email}`;
    document.getElementById("contact-linkedin").href = portfolioData.profile.linkedin;
    document.getElementById("year").textContent = new Date().getFullYear();
});