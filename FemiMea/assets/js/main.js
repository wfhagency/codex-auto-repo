/**
 * FemiMea - Premium Women's Health Clinic
 * Main JavaScript File
 * Vanilla JS - No dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. MOBILE NAVIGATION
     ========================================================================== */

  const MobileNav = (() => {
    const toggle = document.querySelector('.nav-toggle, .hamburger');
    const menu = document.querySelector('.mobile-menu, .nav-mobile');
    const overlay = document.querySelector('.nav-overlay');
    const closeBtn = document.querySelector('.nav-close, .mobile-menu-close');
    const body = document.body;

    if (!toggle || !menu) return null;

    const open = () => {
      menu.classList.add('is-active');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
      body.classList.add('no-scroll');
      if (overlay) overlay.classList.add('is-visible');
    };

    const close = () => {
      menu.classList.remove('is-active');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('no-scroll');
      if (overlay) overlay.classList.remove('is-visible');
    };

    const isOpen = () => menu.classList.contains('is-active');

    // Toggle button
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen() ? close() : open();
    });

    // Close button
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Close on overlay click
    if (overlay) overlay.addEventListener('click', close);

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) {
        close();
      }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) close();
    });

    // Close when clicking a nav link inside the mobile menu
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', close);
    });

    return { open, close };
  })();


  /* ==========================================================================
     2. STICKY HEADER
     ========================================================================== */

  const StickyHeader = (() => {
    const header = document.querySelector('.site-header, header');
    if (!header) return null;

    let lastScrollY = 0;
    const shrinkThreshold = 80;

    const onScroll = () => {
      const currentY = window.scrollY;

      // Shrink effect
      if (currentY > shrinkThreshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }

      // Show/hide based on scroll direction
      if (currentY > lastScrollY && currentY > 200) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return { onScroll };
  })();


  /* ==========================================================================
     3. SMOOTH SCROLLING
     ========================================================================== */

  const SmoothScroll = (() => {
    const headerOffset = () => {
      const header = document.querySelector('.site-header, header');
      return header ? header.offsetHeight + 16 : 80;
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (id === '#' || id === '#0') return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
        window.scrollTo({ top, behavior: 'smooth' });

        // Update URL without jump
        history.pushState(null, '', id);
      });
    });
  })();


  /* ==========================================================================
     4. SERVICE / OFFER FILTERING
     ========================================================================== */

  const ServiceFilter = (() => {
    const filterBtns = document.querySelectorAll('.service-filter-btn, [data-filter]');
    const items = document.querySelectorAll('.service-card, [data-category]');

    if (!filterBtns.length || !items.length) return null;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        filterBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Filter items with transition
        items.forEach((item) => {
          const category = item.dataset.category;
          if (filter === 'all' || category === filter) {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            item.style.display = '';
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 400);
          }
        });
      });
    });

    return { filterBtns, items };
  })();


  /* ==========================================================================
     5. PERSONNEL FILTERING
     ========================================================================== */

  const PersonnelFilter = (() => {
    const specialtyBtns = document.querySelectorAll('.specialty-filter-btn, [data-specialty-filter]');
    const searchInput = document.querySelector('.personnel-search, [data-personnel-search]');
    const cards = document.querySelectorAll('.personnel-card, [data-specialty]');

    if (!cards.length) return null;

    let activeSpecialty = 'all';

    const applyFilters = () => {
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

      cards.forEach((card) => {
        const specialty = card.dataset.specialty || '';
        const name = (card.dataset.name || card.textContent).toLowerCase();

        const matchesSpecialty = activeSpecialty === 'all' || specialty === activeSpecialty;
        const matchesSearch = !searchTerm || name.includes(searchTerm);

        if (matchesSpecialty && matchesSearch) {
          card.style.opacity = '0';
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.35s ease';
            card.style.opacity = '1';
          });
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 350);
        }
      });
    };

    // Specialty buttons
    specialtyBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        specialtyBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeSpecialty = btn.dataset.specialtyFilter || btn.dataset.filter || 'all';
        applyFilters();
      });
    });

    // Search input
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(applyFilters, 250);
      });
    }

    return { applyFilters };
  })();


  /* ==========================================================================
     6. FAQ ACCORDION
     ========================================================================== */

  const FAQAccordion = (() => {
    const items = document.querySelectorAll('.faq-item, .accordion-item');
    if (!items.length) return null;

    items.forEach((item) => {
      const trigger = item.querySelector('.faq-question, .accordion-trigger, .accordion-header');
      const content = item.querySelector('.faq-answer, .accordion-content, .accordion-body');

      if (!trigger || !content) return;

      // Set initial collapsed state
      content.style.maxHeight = item.classList.contains('is-open') ? content.scrollHeight + 'px' : '0';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height 0.4s ease, padding 0.4s ease';

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close others (single-open mode)
        items.forEach((other) => {
          if (other !== item && other.classList.contains('is-open')) {
            other.classList.remove('is-open');
            const otherContent = other.querySelector('.faq-answer, .accordion-content, .accordion-body');
            if (otherContent) otherContent.style.maxHeight = '0';
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('is-open');
          content.style.maxHeight = '0';
        } else {
          item.classList.add('is-open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    return { items };
  })();


  /* ==========================================================================
     7. TESTIMONIAL SLIDER
     ========================================================================== */

  const TestimonialSlider = (() => {
    const slider = document.querySelector('.testimonial-slider, .testimonials-carousel');
    if (!slider) return null;

    const track = slider.querySelector('.slider-track, .testimonial-track');
    const slides = slider.querySelectorAll('.testimonial-slide, .testimonial-item');
    const dotsContainer = slider.querySelector('.slider-dots, .testimonial-dots');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');

    if (!slides.length) return null;

    let current = 0;
    let autoplayTimer = null;
    const autoplayDelay = 5000;
    let touchStartX = 0;
    let touchEndX = 0;

    // Build dots if container exists but is empty
    if (dotsContainer && !dotsContainer.children.length) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];

    const goTo = (index) => {
      // Wrap around
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides.forEach((s) => s.classList.remove('is-active'));
      slides[index].classList.add('is-active');

      // If using a track-based layout, translate
      if (track) {
        track.style.transform = `translateX(-${index * 100}%)`;
      }

      // Update dots
      dots.forEach((d) => d.classList.remove('is-active'));
      if (dots[index]) dots[index].classList.add('is-active');

      current = index;
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(next, autoplayDelay);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    // Navigation buttons
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAutoplay(); });

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Touch / swipe support
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev();
      }
      startAutoplay();
    }, { passive: true });

    // Initialise
    goTo(0);
    startAutoplay();

    return { goTo, next, prev, startAutoplay, stopAutoplay };
  })();


  /* ==========================================================================
     8. SCROLL ANIMATIONS (IntersectionObserver)
     ========================================================================== */

  const ScrollAnimations = (() => {
    const animatedEls = document.querySelectorAll(
      '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, [data-animate]'
    );

    if (!animatedEls.length && !document.querySelectorAll('[data-counter]').length) return null;

    // Fade / slide-in animations
    if (animatedEls.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = el.dataset.delay || 0;
              setTimeout(() => el.classList.add('is-visible'), Number(delay));
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );

      animatedEls.forEach((el) => observer.observe(el));
    }

    // Stagger animations for card grids
    const grids = document.querySelectorAll('.stagger-grid, [data-stagger]');
    if (grids.length) {
      const gridObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const children = entry.target.children;
              Array.from(children).forEach((child, i) => {
                setTimeout(() => child.classList.add('is-visible'), i * 120);
              });
              gridObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      grids.forEach((grid) => gridObserver.observe(grid));
    }

    // Counter animation for statistics
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseInt(el.dataset.counter, 10);
              const suffix = el.dataset.counterSuffix || '';
              const prefix = el.dataset.counterPrefix || '';
              const duration = parseInt(el.dataset.counterDuration, 10) || 2000;
              let start = 0;
              const startTime = performance.now();

              const animate = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(eased * target);
                el.textContent = prefix + value.toLocaleString() + suffix;
                if (progress < 1) requestAnimationFrame(animate);
              };

              requestAnimationFrame(animate);
              counterObserver.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((c) => counterObserver.observe(c));
    }
  })();


  /* ==========================================================================
     9. BACK TO TOP BUTTON
     ========================================================================== */

  const BackToTop = (() => {
    const btn = document.querySelector('.back-to-top, .scroll-to-top');
    if (!btn) return null;

    const threshold = 300;

    window.addEventListener('scroll', () => {
      if (window.scrollY > threshold) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return { btn };
  })();


  /* ==========================================================================
     10. LAZY LOADING IMAGES
     ========================================================================== */

  const LazyLoad = (() => {
    const images = document.querySelectorAll('img[data-src], [data-bg]');
    if (!images.length) return null;

    const loadImage = (el) => {
      if (el.dataset.src) {
        el.src = el.dataset.src;
        if (el.dataset.srcset) el.srcset = el.dataset.srcset;
        el.removeAttribute('data-src');
      }
      if (el.dataset.bg) {
        el.style.backgroundImage = `url(${el.dataset.bg})`;
        el.removeAttribute('data-bg');
      }
      el.classList.add('is-loaded');
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '200px 0px' }
      );

      images.forEach((img) => observer.observe(img));
    } else {
      // Fallback: load all immediately
      images.forEach(loadImage);
    }

    return { images };
  })();


  /* ==========================================================================
     11. BREADCRUMBS GENERATION
     ========================================================================== */

  const Breadcrumbs = (() => {
    const container = document.querySelector('.breadcrumbs, [data-breadcrumbs]');
    if (!container) return null;

    // Skip if breadcrumbs already populated
    if (container.children.length > 0) return null;

    const path = window.location.pathname.replace(/\/$/, '').split('/').filter(Boolean);
    const ol = document.createElement('ol');
    ol.classList.add('breadcrumbs-list');
    ol.setAttribute('itemscope', '');
    ol.setAttribute('itemtype', 'https://schema.org/BreadcrumbList');

    // Home link
    const homeLi = document.createElement('li');
    homeLi.setAttribute('itemprop', 'itemListElement');
    homeLi.setAttribute('itemscope', '');
    homeLi.setAttribute('itemtype', 'https://schema.org/ListItem');
    homeLi.innerHTML = `<a itemprop="item" href="/"><span itemprop="name">Accueil</span></a><meta itemprop="position" content="1">`;
    ol.appendChild(homeLi);

    // Build remaining crumbs
    let href = '';
    path.forEach((segment, i) => {
      href += '/' + segment;
      const li = document.createElement('li');
      li.setAttribute('itemprop', 'itemListElement');
      li.setAttribute('itemscope', '');
      li.setAttribute('itemtype', 'https://schema.org/ListItem');

      const label = decodeURIComponent(segment)
        .replace(/[-_]/g, ' ')
        .replace(/\.html?$/, '')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      if (i === path.length - 1) {
        li.innerHTML = `<span itemprop="name" class="breadcrumb-current">${label}</span><meta itemprop="position" content="${i + 2}">`;
        li.setAttribute('aria-current', 'page');
      } else {
        li.innerHTML = `<a itemprop="item" href="${href}"><span itemprop="name">${label}</span></a><meta itemprop="position" content="${i + 2}">`;
      }
      ol.appendChild(li);
    });

    container.appendChild(ol);
    return { container };
  })();


  /* ==========================================================================
     12. FORM VALIDATION
     ========================================================================== */

  const FormValidation = (() => {
    const forms = document.querySelectorAll('[data-validate], .validate-form');
    if (!forms.length) return null;

    const patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\d\s\-+()]{7,20}$/,
    };

    const showError = (field, message) => {
      clearError(field);
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      const error = document.createElement('span');
      error.classList.add('field-error');
      error.textContent = message;
      field.parentNode.appendChild(error);
    };

    const clearError = (field) => {
      field.classList.remove('is-invalid');
      const existing = field.parentNode.querySelector('.field-error');
      if (existing) existing.remove();
    };

    const markValid = (field) => {
      clearError(field);
      field.classList.add('is-valid');
    };

    const validateField = (field) => {
      const value = field.value.trim();

      // Required check
      if (field.hasAttribute('required') && !value) {
        showError(field, 'Ce champ est requis.');
        return false;
      }

      // Email check
      if (field.type === 'email' && value && !patterns.email.test(value)) {
        showError(field, 'Veuillez entrer une adresse email valide.');
        return false;
      }

      // Phone check
      if (field.type === 'tel' && value && !patterns.phone.test(value)) {
        showError(field, 'Veuillez entrer un numero de telephone valide.');
        return false;
      }

      // Min length
      if (field.minLength > 0 && value.length < field.minLength) {
        showError(field, `Minimum ${field.minLength} caracteres requis.`);
        return false;
      }

      markValid(field);
      return true;
    };

    forms.forEach((form) => {
      const fields = form.querySelectorAll('input, textarea, select');

      // Real-time validation on blur
      fields.forEach((field) => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
          if (field.classList.contains('is-invalid')) validateField(field);
        });
      });

      // Submit validation
      form.addEventListener('submit', (e) => {
        let isValid = true;
        fields.forEach((field) => {
          if (!validateField(field)) isValid = false;
        });

        if (!isValid) {
          e.preventDefault();
          // Scroll to first error
          const firstError = form.querySelector('.is-invalid');
          if (firstError) {
            firstError.focus();
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });

    return { forms };
  })();


  /* ==========================================================================
     13. TAB COMPONENT
     ========================================================================== */

  const Tabs = (() => {
    const tabContainers = document.querySelectorAll('.tabs, [data-tabs]');
    if (!tabContainers.length) return null;

    tabContainers.forEach((container) => {
      const triggers = container.querySelectorAll('.tab-trigger, [data-tab]');
      const panels = container.querySelectorAll('.tab-panel, [data-tab-panel]');

      if (!triggers.length || !panels.length) return;

      const activate = (targetId) => {
        triggers.forEach((t) => {
          const id = t.dataset.tab || t.getAttribute('href')?.replace('#', '');
          t.classList.toggle('is-active', id === targetId);
          t.setAttribute('aria-selected', id === targetId ? 'true' : 'false');
        });

        panels.forEach((p) => {
          const id = p.dataset.tabPanel || p.id;
          if (id === targetId) {
            p.classList.add('is-active');
            p.removeAttribute('hidden');
          } else {
            p.classList.remove('is-active');
            p.setAttribute('hidden', '');
          }
        });
      };

      triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const id = trigger.dataset.tab || trigger.getAttribute('href')?.replace('#', '');
          activate(id);
        });

        // Keyboard navigation
        trigger.addEventListener('keydown', (e) => {
          const idx = Array.from(triggers).indexOf(trigger);
          let newIdx = idx;
          if (e.key === 'ArrowRight') newIdx = (idx + 1) % triggers.length;
          if (e.key === 'ArrowLeft') newIdx = (idx - 1 + triggers.length) % triggers.length;
          if (newIdx !== idx) {
            e.preventDefault();
            triggers[newIdx].focus();
            triggers[newIdx].click();
          }
        });
      });

      // Activate first tab by default if none active
      if (!container.querySelector('.tab-trigger.is-active, [data-tab].is-active')) {
        const firstId = triggers[0].dataset.tab || triggers[0].getAttribute('href')?.replace('#', '');
        activate(firstId);
      }
    });

    return { tabContainers };
  })();


  /* ==========================================================================
     14. MODAL / LIGHTBOX
     ========================================================================== */

  const Modal = (() => {
    const openTriggers = document.querySelectorAll('[data-modal-open]');
    const modals = document.querySelectorAll('.modal, [data-modal]');

    if (!modals.length) return null;

    const openModal = (id) => {
      const modal = document.querySelector(`#${id}, [data-modal="${id}"]`);
      if (!modal) return;
      modal.classList.add('is-active');
      document.body.classList.add('no-scroll');
      modal.setAttribute('aria-hidden', 'false');

      // Focus trap: focus first focusable element
      const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable) focusable.focus();
    };

    const closeModal = (modal) => {
      modal.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
      modal.setAttribute('aria-hidden', 'true');
    };

    const closeAll = () => {
      modals.forEach(closeModal);
    };

    // Open triggers
    openTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(trigger.dataset.modalOpen);
      });
    });

    // Close buttons & overlay clicks
    modals.forEach((modal) => {
      // Close button
      const closeBtns = modal.querySelectorAll('.modal-close, [data-modal-close]');
      closeBtns.forEach((btn) => btn.addEventListener('click', () => closeModal(modal)));

      // Click on backdrop / overlay area
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAll();
    });

    // Lightbox: open images in a modal
    document.querySelectorAll('[data-lightbox]').forEach((img) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        let lightboxModal = document.getElementById('lightbox-modal');
        if (!lightboxModal) {
          lightboxModal = document.createElement('div');
          lightboxModal.id = 'lightbox-modal';
          lightboxModal.classList.add('modal', 'lightbox-modal');
          lightboxModal.setAttribute('aria-hidden', 'true');
          lightboxModal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content lightbox-content">
              <button class="modal-close lightbox-close" aria-label="Fermer">&times;</button>
              <img class="lightbox-img" src="" alt="">
            </div>`;
          document.body.appendChild(lightboxModal);

          lightboxModal.querySelector('.modal-close').addEventListener('click', () => closeModal(lightboxModal));
          lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('modal-overlay')) {
              closeModal(lightboxModal);
            }
          });
        }

        const lightboxImg = lightboxModal.querySelector('.lightbox-img');
        lightboxImg.src = img.dataset.lightbox || img.src;
        lightboxImg.alt = img.alt || '';
        lightboxModal.classList.add('is-active');
        document.body.classList.add('no-scroll');
        lightboxModal.setAttribute('aria-hidden', 'false');
      });
    });

    return { openModal, closeAll };
  })();


  /* ==========================================================================
     15. COOKIE CONSENT BANNER
     ========================================================================== */

  const CookieConsent = (() => {
    const COOKIE_KEY = 'femimea_cookie_consent';

    // If already consented, do nothing
    if (localStorage.getItem(COOKIE_KEY)) return null;

    // Check if a banner already exists in the HTML
    let banner = document.querySelector('.cookie-banner, [data-cookie-banner]');

    if (!banner) {
      // Create banner dynamically
      banner = document.createElement('div');
      banner.classList.add('cookie-banner');
      banner.setAttribute('role', 'dialog');
      banner.setAttribute('aria-label', 'Consentement aux cookies');
      banner.innerHTML = `
        <div class="cookie-banner-inner">
          <p class="cookie-banner-text">
            Nous utilisons des cookies pour ameliorer votre experience sur notre site.
            En continuant, vous acceptez notre
            <a href="/politique-de-confidentialite">politique de confidentialite</a>.
          </p>
          <div class="cookie-banner-actions">
            <button class="cookie-accept btn btn-primary" data-cookie-accept>Accepter</button>
            <button class="cookie-decline btn btn-outline" data-cookie-decline>Refuser</button>
          </div>
        </div>`;
      document.body.appendChild(banner);
    }

    // Show with slight delay for animation
    requestAnimationFrame(() => {
      banner.classList.add('is-visible');
    });

    const dismiss = (accepted) => {
      localStorage.setItem(COOKIE_KEY, accepted ? 'accepted' : 'declined');
      banner.classList.remove('is-visible');
      setTimeout(() => banner.remove(), 500);
    };

    banner.querySelector('[data-cookie-accept], .cookie-accept')
      ?.addEventListener('click', () => dismiss(true));

    banner.querySelector('[data-cookie-decline], .cookie-decline')
      ?.addEventListener('click', () => dismiss(false));

    return { dismiss };
  })();


  /* ==========================================================================
     16. SCROLL PROGRESS BAR
     ========================================================================== */

  const ScrollProgress = (() => {
    let bar = document.querySelector('.scroll-progress, [data-scroll-progress]');

    if (!bar) {
      bar = document.createElement('div');
      bar.classList.add('scroll-progress');
      bar.setAttribute('aria-hidden', 'true');
      document.body.prepend(bar);
    }

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    };

    window.addEventListener('scroll', update, { passive: true });
    update();

    return { bar, update };
  })();


  /* ==========================================================================
     UTILITY: Debounce & Throttle helpers
     ========================================================================== */

  window.FemiMea = window.FemiMea || {};

  window.FemiMea.debounce = (fn, delay = 250) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  window.FemiMea.throttle = (fn, limit = 100) => {
    let inThrottle = false;
    return (...args) => {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => { inThrottle = false; }, limit);
      }
    };
  };


  /* ==========================================================================
     INIT LOG
     ========================================================================== */

  console.log('%cFemiMea%c JS initialised', 'color:#b5467a;font-weight:bold;', 'color:inherit;');
});
