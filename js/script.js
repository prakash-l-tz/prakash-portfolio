/* =====================================================================
   Prakash L — Portfolio behaviour
   You normally DON'T need to edit this file. Content lives in js/data.js.

   Sections of this file:
     1. Helpers
     2. Render skills, projects, achievements, contact
     3. Navigation (mobile menu, active link, header shadow)
     4. Achievement filters
     5. Lightbox (image preview)
     6. Project details modal
     7. Contact form (mailto) and resume button
     8. Scroll background, 3D background and 3D card tilt
     9. Scroll reveal + start-up
   ===================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     1. HELPERS
     --------------------------------------------------------------- */

  // Escape text before putting it into HTML (prevents broken markup).
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  const ICONS = {
    flutter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.3 2 4 12.3l3.2 3.2L20.7 2h-6.4zm0 9.3-5.6 5.6 5.6 5.1h6.4l-5.6-5.1 5.6-5.6h-6.4z"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16V11a7 7 0 0 1 14 0v5z"/><path d="m7 5.5-1.5-2M17 5.5l1.5-2"/><circle cx="9" cy="10.5" r=".6" fill="currentColor"/><circle cx="15" cy="10.5" r=".6" fill="currentColor"/><path d="M5 16h14v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h12m0 0-3-3m3 3-3 3M20 16H8m0 0 3-3m-3 3 3 3"/></svg>',
    git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-11.5 6.5"/></svg>',
    postman: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>',
    excel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/><path d="M13 13l4 5M17 13l-4 5"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-4.4A9 9 0 1 1 8 19.6z"/><path d="M9 8.2c-.4 3.6 3.2 7.2 6.8 6.8l.7-1.6-2-1-.9.8c-1-.4-2.4-1.8-2.8-2.8l.8-.9-1-2z" fill="currentColor" stroke-width="1"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  };

  function placeholderHTML(label) {
    return '<div class="placeholder" role="img" aria-label="' + esc(label) + '">' +
      ICONS.image + "<span>" + esc(label) + "</span></div>";
  }

  // If an image fails to load (missing / wrong name), swap in a placeholder.
  function useFallbackOnError(img, label) {
    img.addEventListener("error", function () {
      console.warn("Image not found: " + img.getAttribute("src"));
      const box = document.createElement("div");
      box.innerHTML = placeholderHTML(label);
      img.replaceWith(box.firstChild);
    }, { once: true });
  }

  function tagsHTML(list) {
    if (!list || !list.length) return "";
    return '<ul class="tags">' + list.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }

  /* ---------------------------------------------------------------
     2. RENDER CONTENT FROM data.js
     --------------------------------------------------------------- */

  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = SKILLS.map(function (s) {
      return '<article class="card skill-card reveal">' +
        '<div class="skill-top">' +
          '<span class="skill-icon" aria-hidden="true">' + (ICONS[s.icon] || ICONS.code) + "</span>" +
          (s.level ? '<span class="skill-level">' + esc(s.level) + "</span>" : "") +
        "</div>" +
        "<h3>" + esc(s.name) + "</h3>" +
        "<p>" + esc(s.description) + "</p>" +
        tagsHTML(s.tags) +
      "</article>";
    }).join("");
  }

  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = PROJECTS.map(function (p, i) {
      const media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' preview" loading="lazy" decoding="async">'
        : placeholderHTML("Screenshot coming soon");
      const status = p.status ? '<span class="project-status">' + esc(p.status) + "</span>" : "";
      const github = p.link
        ? '<a class="btn btn-ghost btn-sm" href="' + esc(p.link) + '" target="_blank" rel="noopener">Source / Link ↗</a>'
        : "";
      return '<article class="card project-card reveal">' +
        '<div class="project-media">' + media + status + "</div>" +
        '<div class="project-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.description) + "</p>" +
          tagsHTML(p.technologies) +
          '<div class="project-actions">' +
            '<button class="btn btn-primary btn-sm" type="button" data-project="' + i + '">View Project</button>' +
            github +
          "</div>" +
        "</div>" +
      "</article>";
    }).join("");

    grid.querySelectorAll(".project-media img").forEach(function (img) {
      useFallbackOnError(img, "Screenshot coming soon");
    });
    grid.querySelectorAll("[data-project]").forEach(function (btn) {
      btn.addEventListener("click", function () { openProject(Number(btn.dataset.project), btn); });
    });
  }

  function renderAchievements() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ACHIEVEMENTS.map(function (a, i) {
      const media = a.image
        ? '<img src="' + esc(a.image) + '" alt="' + esc(a.alt || a.title) + '" loading="lazy" decoding="async">'
        : placeholderHTML("Image coming soon");
      return '<article class="card ach-card reveal' + (a.featured ? " featured" : "") + '" data-category="' + esc(a.category) + '">' +
        '<button class="ach-thumb" type="button" data-index="' + i + '" aria-label="View full size: ' + esc(a.title) + '">' +
          media +
          '<span class="zoom-hint" aria-hidden="true">' + ICONS.zoom + " View</span>" +
        "</button>" +
        '<div class="ach-info">' +
          (a.badge ? '<span class="ach-badge ' + esc(a.category) + '">' + esc(a.badge) + "</span>" : "") +
          "<h3>" + esc(a.title) + "</h3>" +
          (a.date ? '<p class="ach-date">' + ICONS.calendar + esc(a.date) + "</p>" : "") +
          (a.description ? "<p>" + esc(a.description) + "</p>" : "") +
          (a.issuer ? '<p class="ach-issuer">' + esc(a.issuer) + "</p>" : "") +
        "</div>" +
      "</article>";
    }).join("");

    gallery.querySelectorAll(".ach-thumb img").forEach(function (img) {
      useFallbackOnError(img, "Image coming soon");
    });
    gallery.querySelectorAll(".ach-thumb").forEach(function (btn) {
      btn.addEventListener("click", function () { openLightbox(Number(btn.dataset.index), btn); });
    });
  }

  function renderContact() {
    const items = [];
    if (CONTACT.email) items.push({ icon: "email", label: "Email", text: CONTACT.email, href: "mailto:" + CONTACT.email });
    if (CONTACT.github) items.push({ icon: "github", label: "GitHub", text: CONTACT.github.replace(/^https?:\/\/(www\.)?/, ""), href: CONTACT.github, external: true });
    if (CONTACT.linkedin) items.push({ icon: "linkedin", label: "LinkedIn", text: CONTACT.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: CONTACT.linkedin, external: true });
    if (CONTACT.phone) items.push({ icon: "phone", label: "Phone", text: CONTACT.phone, href: "tel:" + CONTACT.phone.replace(/[^\d+]/g, "") });
    if (CONTACT.whatsapp) items.push({ icon: "whatsapp", label: "WhatsApp", text: "+" + CONTACT.whatsapp.replace(/^(\d{2})(\d{5})(\d+)$/, "$1 $2 $3"), href: whatsappLink(), external: true });
    if (CONTACT.instagram) items.push({ icon: "instagram", label: "Instagram", text: "@" + CONTACT.instagram.replace(/\/+$/, "").split("/").pop(), href: CONTACT.instagram, external: true });
    if (CONTACT.location) items.push({ icon: "location", label: "Location", text: CONTACT.location });

    document.getElementById("contactList").innerHTML = items.map(function (c) {
      const inner = '<span class="ci-icon ci-' + c.icon + '" aria-hidden="true">' + ICONS[c.icon] + "</span>" +
        "<span><small>" + esc(c.label) + "</small><strong>" + esc(c.text) + "</strong></span>";
      if (!c.href) return '<li><div class="contact-item">' + inner + "</div></li>";
      const ext = c.external ? ' target="_blank" rel="noopener"' : "";
      return '<li><a class="contact-item" href="' + esc(c.href) + '"' + ext + ">" + inner + "</a></li>";
    }).join("");
  }

  function whatsappLink() {
    return "https://wa.me/" + CONTACT.whatsapp.replace(/\D/g, "");
  }

  // 3D social buttons (hero + contact) and the floating WhatsApp button
  function renderSocial() {
    const list = [];
    if (CONTACT.whatsapp) list.push({ icon: "whatsapp", label: "WhatsApp", href: whatsappLink() });
    if (CONTACT.instagram) list.push({ icon: "instagram", label: "Instagram", href: CONTACT.instagram });
    if (CONTACT.github) list.push({ icon: "github", label: "GitHub", href: CONTACT.github });
    if (CONTACT.linkedin) list.push({ icon: "linkedin", label: "LinkedIn", href: CONTACT.linkedin });

    const html = list.map(function (s, i) {
      return '<a class="s3d s3d-' + s.icon + '" href="' + esc(s.href) + '" target="_blank" rel="noopener"' +
        ' aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '" style="--i:' + i + '">' +
        '<span class="s3d-face">' + ICONS[s.icon] + "</span></a>";
    }).join("");
    document.querySelectorAll(".social-3d").forEach(function (box) { box.innerHTML = html; });

    const fab = document.getElementById("whatsappFab");
    if (CONTACT.whatsapp) { fab.href = whatsappLink(); fab.hidden = false; }
  }

  /* ---------------------------------------------------------------
     3. NAVIGATION
     --------------------------------------------------------------- */

  function setupNavigation() {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");
    const links = Array.prototype.slice.call(menu.querySelectorAll(".nav-link"));

    function setMenu(open) {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    links.forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); toggle.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (menu.classList.contains("open") && !menu.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
    });

    // Header border after scrolling a little
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Highlight the nav link of the section currently on screen
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          const active = a.getAttribute("href") === "#" + entry.target.id;
          a.classList.toggle("active", active);
          if (active) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });
  }

  /* ---------------------------------------------------------------
     4. ACHIEVEMENT FILTERS
     --------------------------------------------------------------- */

  function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = btn.dataset.filter;
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        document.querySelectorAll(".ach-card").forEach(function (card) {
          card.hidden = !(filter === "all" || card.dataset.category === filter);
        });
      });
    });
  }

  /* ---------------------------------------------------------------
     5. LIGHTBOX (full-size image preview)
     Keyboard: ← → to move, Esc to close. Touch: swipe left/right.
     Only the cards currently shown by the filter are included.
     --------------------------------------------------------------- */

  const lb = {
    el: document.getElementById("lightbox"),
    stage: document.getElementById("lbStage"),
    title: document.getElementById("lbTitle"),
    meta: document.getElementById("lbMeta"),
    counter: document.getElementById("lbCounter"),
    list: [],        // indexes into ACHIEVEMENTS that can be browsed
    pos: 0,          // current position in list
    opener: null,    // element to return focus to
  };

  function visibleAchievementIndexes() {
    return Array.prototype.slice.call(document.querySelectorAll(".ach-card:not([hidden]) .ach-thumb"))
      .map(function (btn) { return Number(btn.dataset.index); });
  }

  function showLightboxItem() {
    const a = ACHIEVEMENTS[lb.list[lb.pos]];
    lb.stage.innerHTML = "";
    if (a.image) {
      const img = document.createElement("img");
      img.src = a.image;
      img.alt = a.alt || a.title;
      useFallbackOnError(img, "Image not available");
      lb.stage.appendChild(img);
    } else {
      lb.stage.innerHTML = placeholderHTML("Image coming soon");
    }
    lb.title.textContent = a.title;
    lb.meta.textContent = [a.date, a.issuer].filter(Boolean).join(" · ");
    lb.counter.textContent = (lb.pos + 1) + " of " + lb.list.length;

    const single = lb.list.length < 2;
    document.getElementById("lbPrev").hidden = single;
    document.getElementById("lbNext").hidden = single;
  }

  function stepLightbox(direction) {
    lb.pos = (lb.pos + direction + lb.list.length) % lb.list.length;
    showLightboxItem();
  }

  function openLightbox(index, opener) {
    lb.list = visibleAchievementIndexes();
    lb.pos = Math.max(0, lb.list.indexOf(index));
    lb.opener = opener;
    showLightboxItem();
    lb.el.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lbClose").focus();
  }

  function closeLightbox() {
    lb.el.hidden = true;
    lb.stage.innerHTML = "";
    document.body.style.overflow = "";
    if (lb.opener) lb.opener.focus();
  }

  // Keep keyboard focus inside an open dialog
  function trapFocus(container, e) {
    const focusable = Array.prototype.filter.call(
      container.querySelectorAll("button, a[href], input, textarea"),
      function (el) { return !el.hidden && el.offsetParent !== null; }
    );
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function setupLightbox() {
    document.getElementById("lbClose").addEventListener("click", closeLightbox);
    document.getElementById("lbPrev").addEventListener("click", function () { stepLightbox(-1); });
    document.getElementById("lbNext").addEventListener("click", function () { stepLightbox(1); });

    // Click on the dark background (not the image) closes it
    lb.el.addEventListener("click", function (e) {
      if (e.target === lb.el || e.target === lb.stage) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (lb.el.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      else if (e.key === "ArrowRight") stepLightbox(1);
      else if (e.key === "Tab") trapFocus(lb.el, e);
    });

    // Swipe on touch screens
    let startX = null, startY = null;
    lb.el.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { startX = null; return; }
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    lb.el.addEventListener("touchend", function (e) {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) stepLightbox(dx < 0 ? 1 : -1);
      startX = null;
    });
  }

  /* ---------------------------------------------------------------
     6. PROJECT DETAILS MODAL
     --------------------------------------------------------------- */

  const modal = document.getElementById("projectModal");
  let modalOpener = null;

  function openProject(index, opener) {
    const p = PROJECTS[index];
    const shots = (p.screenshots && p.screenshots.length) ? p.screenshots : (p.image ? [p.image] : []);
    const shotsHTML = shots.length
      ? '<div class="modal-shots">' + shots.map(function (src, n) {
          return '<img src="' + esc(src) + '" alt="' + esc(p.title) + " screenshot " + (n + 1) + '" loading="lazy">';
        }).join("") + "</div>"
      : "";

    document.getElementById("pmBody").innerHTML =
      '<h3 id="pmTitle">' + esc(p.title) + "</h3>" +
      (p.status ? '<span class="project-status inline">' + esc(p.status) + "</span>" : "") +
      shotsHTML +
      "<p>" + esc(p.description) + "</p>" +
      tagsHTML(p.technologies) +
      (p.note ? '<p class="modal-note" style="margin-top:18px">' + esc(p.note) + "</p>" : "") +
      (p.link ? '<p style="margin-top:18px"><a class="btn btn-primary btn-sm" href="' + esc(p.link) + '" target="_blank" rel="noopener">Open link ↗</a></p>' : "");

    document.querySelectorAll("#pmBody .modal-shots img").forEach(function (img) {
      useFallbackOnError(img, "Screenshot not available");
    });

    modalOpener = opener;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("pmClose").focus();
  }

  function closeProject() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (modalOpener) modalOpener.focus();
  }

  function setupProjectModal() {
    document.getElementById("pmClose").addEventListener("click", closeProject);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeProject(); });
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") closeProject();
      else if (e.key === "Tab") trapFocus(modal, e);
    });
  }

  /* ---------------------------------------------------------------
     7. CONTACT FORM + RESUME BUTTON
     --------------------------------------------------------------- */

  function setupContactForm() {
    const form = document.getElementById("contactForm");
    if (!CONTACT.email) return;          // form stays hidden without an email
    form.hidden = false;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const message = form.elements.message.value.trim();
      const error = document.getElementById("cfError");
      if (!name || !message) {
        error.textContent = "Please enter your name and a message.";
        (name ? form.elements.message : form.elements.name).focus();
        return;
      }
      error.textContent = "";
      const subject = encodeURIComponent("Portfolio message from " + name);
      const body = encodeURIComponent(message + "\n\n— " + name);
      window.location.href = "mailto:" + CONTACT.email + "?subject=" + subject + "&body=" + body;
    });
  }

  function setupResume() {
    if (!CONTACT.resume) return;         // buttons stay hidden without a resume
    const buttons = document.querySelectorAll(".resume-btn");
    buttons.forEach(function (b) { b.href = CONTACT.resume; b.hidden = false; });

    // On a real web server (e.g. GitHub Pages) double-check the file exists
    if (location.protocol.indexOf("http") === 0) {
      fetch(CONTACT.resume, { method: "HEAD" }).then(function (res) {
        if (!res.ok) {
          console.warn("Resume not found at " + CONTACT.resume);
          buttons.forEach(function (b) { b.hidden = true; });
        }
      }).catch(function () { /* offline: keep the button */ });
    }
  }

  /* ---------------------------------------------------------------
     8. SCROLL BACKGROUND
     Sets --scroll (0 at the top, 1 at the bottom) on <html>. The CSS
     uses it to drift the background glows and fill the progress bar.
     --------------------------------------------------------------- */

  function setupScrollBackground() {
    const root = document.documentElement;
    let ticking = false;
    function update() {
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--scroll", progress.toFixed(4));
      ticking = false;
    }
    function request() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    update();
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 3D background drawn on a <canvas>: a rotating globe of linked dots
  // with a ring around it, plus stars you fly through while scrolling.
  // The globe drifts across the page as you scroll and follows the mouse.
  function setup3DBackground() {
    const canvas = document.getElementById("bg3d");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, small = false;
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

    // Globe: points spread evenly over a sphere (Fibonacci sphere)
    const count = window.innerWidth < 700 ? 150 : 240;
    const globe = [];
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const angle = i * 2.399963;              // golden angle
      globe.push([Math.cos(angle) * r, y, Math.sin(angle) * r]);
    }

    // Link every point to its 3 nearest neighbours (worked out once)
    const links = [];
    const seen = {};
    globe.forEach(function (a, i) {
      globe
        .map(function (b, j) {
          const dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2];
          return { j: j, d: dx * dx + dy * dy + dz * dz };
        })
        .sort(function (p, q) { return p.d - q.d; })
        .slice(1, 4)
        .forEach(function (n) {
          const key = Math.min(i, n.j) + "-" + Math.max(i, n.j);
          if (!seen[key]) { seen[key] = true; links.push([i, n.j]); }
        });
    });

    // Tilted ring of dots around the globe
    const ring = [];
    for (let i = 0; i < 90; i++) {
      const a = (i / 90) * Math.PI * 2;
      ring.push([Math.cos(a) * 1.55, 0, Math.sin(a) * 1.55]);
    }

    // Stars in a deep box in front of the camera
    const DEPTH = 1600;
    const stars = [];
    for (let i = 0; i < (window.innerWidth < 700 ? 90 : 170); i++) {
      stars.push({ x: (Math.random() - .5) * 2400, y: (Math.random() - .5) * 1600, z: Math.random() * DEPTH });
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth; h = window.innerHeight;
      small = w < 700;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Rotate a point around the Y axis, then the X axis
    function rotate(p, ay, ax) {
      const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
      const x = p[0] * cy - p[2] * sy;
      const z = p[0] * sy + p[2] * cy;
      return [x, p[1] * cx - z * sx, p[1] * sx + z * cx];
    }

    function draw(time) {
      const t = reduceMotion ? 0 : time / 1000;
      const max = document.documentElement.scrollHeight - h;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      mouseX += (targetX - mouseX) * .05;
      mouseY += (targetY - mouseY) * .05;
      ctx.clearRect(0, 0, w, h);

      // Stars: move towards the camera as you scroll
      const fov = h * .9;
      stars.forEach(function (s) {
        let z = (s.z - window.scrollY * .6 - t * 25) % DEPTH;
        if (z < 0) z += DEPTH;
        z += 40;
        const k = fov / z;
        const px = w / 2 + (s.x - mouseX * 60) * k;
        const py = h / 2 + (s.y - mouseY * 40) * k;
        if (px < 0 || px > w || py < 0 || py > h) return;
        const near = 1 - z / (DEPTH + 40);
        ctx.fillStyle = "rgba(200, 225, 255, " + (near * .8).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(px, py, .4 + near * 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Globe position: starts on the right, drifts left as you scroll
      const R = Math.min(w, h) * (small ? .42 : .34);
      const cx = small ? w * .5 : w * (.74 - progress * .48);
      const cy = h * (small ? .42 : .5) + Math.sin(t * .6) * 10;
      const ay = t * .12 + progress * Math.PI * 1.6 + mouseX * .35;
      const ax = -.35 + mouseY * .25 + progress * .5;
      const cam = 3.2;

      function project(p) {
        const k = cam / (cam + p[2]);
        return { x: cx + p[0] * R * k, y: cy + p[1] * R * k, front: (1 - p[2]) / 2 };
      }

      const pts = globe.map(function (p) { return project(rotate(p, ay, ax)); });

      ctx.lineWidth = 1;
      links.forEach(function (l) {
        const a = pts[l[0]], b = pts[l[1]];
        const alpha = ((a.front + b.front) / 2) * .32 + .03;
        ctx.strokeStyle = "rgba(34, 211, 238, " + alpha.toFixed(3) + ")";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      pts.forEach(function (p, i) {
        const mix = (globe[i][1] + 1) / 2;       // top cyan, bottom purple
        const r = Math.round(34 + mix * 134), g = Math.round(211 - mix * 126), b = Math.round(238 + mix * 9);
        ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + (.25 + p.front * .75).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, .8 + p.front * 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ring, spinning on its own tilted axis
      ring.forEach(function (p) {
        const q = project(rotate(rotate(p, -t * .3, .45), ay * .3, ax));
        ctx.fillStyle = "rgba(168, 85, 247, " + (.15 + q.front * .6).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(q.x, q.y, .6 + q.front * 1.6, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    let running = false;
    function loop(time) {
      if (document.hidden) { running = false; return; }   // pause in background tabs
      draw(time);
      requestAnimationFrame(loop);
    }
    function start() {
      if (reduceMotion) { draw(0); return; }
      if (!running) { running = true; requestAnimationFrame(loop); }
    }

    window.addEventListener("resize", function () { resize(); if (reduceMotion) draw(0); });
    window.addEventListener("pointermove", function (e) {
      targetX = e.clientX / window.innerWidth - .5;
      targetY = e.clientY / window.innerHeight - .5;
    }, { passive: true });
    if (reduceMotion) window.addEventListener("scroll", function () { draw(0); }, { passive: true });
    document.addEventListener("visibilitychange", function () { if (!document.hidden) start(); });
    resize();
    start();
  }

  // Cards lean towards the mouse in 3D, with a soft light reflection
  function setupTilt() {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".project-card, .skill-card, .info-card, .hero-photo").forEach(function (el) {
      el.classList.add("tilt");
      el.addEventListener("pointermove", function (e) {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        el.style.setProperty("--ry", (x * 12).toFixed(2) + "deg");
        el.style.setProperty("--rx", (-y * 12).toFixed(2) + "deg");
        el.style.setProperty("--gx", ((x + .5) * 100).toFixed(1) + "%");
        el.style.setProperty("--gy", ((y + .5) * 100).toFixed(1) + "%");
      });
      el.addEventListener("pointerleave", function () {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ---------------------------------------------------------------
     9. SCROLL REVEAL + START-UP
     --------------------------------------------------------------- */

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { observer.observe(el); });
  }

  function setupProfilePhoto() {
    const img = document.querySelector('[data-fallback="avatar"]');
    if (!img) return;
    function fallback() {
      console.warn("Profile photo not found: " + img.getAttribute("src"));
      const box = document.createElement("div");
      box.className = "avatar-fallback";
      box.setAttribute("role", "img");
      box.setAttribute("aria-label", "Prakash L");
      box.textContent = "PL";
      img.replaceWith(box);
    }
    if (img.complete && img.naturalWidth === 0) fallback();
    else img.addEventListener("error", fallback, { once: true });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  setupProfilePhoto();
  renderSkills();
  renderProjects();
  renderAchievements();
  renderContact();
  renderSocial();
  setupNavigation();
  setupFilters();
  setupLightbox();
  setupProjectModal();
  setupContactForm();
  setupResume();
  setupScrollBackground();
  setup3DBackground();
  setupTilt();
  setupReveal();
})();
