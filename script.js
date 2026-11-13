/* Ultra Max 7 Pro - shared UI effects, no external dependencies. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const menu = $('#primaryNav');
  const menuBtn = $('#menuBtn');
  if (menu && menuBtn) {
    const setMenu = open => { menu.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); };
    menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  }

  const hero = $('.hero');
  if (hero) {
    const slides = $$('.hero-bg');
    const names = ['Warm ivory kitchen','Matte grey kitchen','Fitted wardrobe','Floating media wall'];
    let index = 0, timer = null, paused = reduced, hovering = false, focused = false;
    const label = $('#slideStatus'), name = $('#slideName'), pause = $('#pauseSlide');
    const slideTo = n => {
      index = (n + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      if (label) label.textContent = String(index + 1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0');
      if (name) name.textContent = names[index];
    };
    const stop = () => { if (timer !== null) clearInterval(timer); timer = null; };
    const start = () => { stop(); if (!paused && !hovering && !focused && !document.hidden) timer = setInterval(() => slideTo(index + 1), 6800); };
    const updatePause = () => {
      if (pause) {
        pause.textContent = paused ? '▶' : 'II';
        pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      }
      start();
    };
    pause?.addEventListener('click', () => { paused = !paused; updatePause(); });
    $('#prevSlide')?.addEventListener('click', () => { slideTo(index - 1); start(); });
    $('#nextSlide')?.addEventListener('click', () => { slideTo(index + 1); start(); });
    hero.addEventListener('mouseenter', () => { hovering = true; start(); });
    hero.addEventListener('mouseleave', () => { hovering = false; start(); });
    hero.addEventListener('focusin', () => { focused = true; start(); });
    hero.addEventListener('focusout', e => { if (!hero.contains(e.relatedTarget)) { focused = false; start(); } });
    document.addEventListener('visibilitychange', start);
    updatePause();
  }

  const typeHeading = element => {
    if (reduced || element.dataset.typed) return;
    element.dataset.typed = '1';
    const text = element.dataset.text || element.textContent;
    // Keep original space reserved to avoid shifting nearby content while typing.
    element.style.minHeight = `${Math.ceil(element.getBoundingClientRect().height)}px`;
    element.setAttribute('aria-label', text);
    const emphasis = element.querySelector('em');
    const accent = emphasis?.textContent || '';
    const original = emphasis ? element.firstChild.textContent : text;
    const lead = document.createTextNode('');
    element.replaceChildren(lead);
    if (emphasis) { emphasis.textContent = ''; element.append(emphasis); }
    element.classList.add('is-typing');
    let i = 0;
    const step = () => {
      if (i < original.length + accent.length) {
        if (i < original.length) lead.textContent += original.charAt(i);
        else emphasis.textContent += accent.charAt(i-original.length);
        i++;
        window.setTimeout(step, 62);
      } else element.classList.remove('is-typing');
    };
    step();
  };
  const heroTitle = $('.hero .typewriter') || $('.inner-hero .typewriter');
  if (heroTitle) typeHeading(heroTitle);
  const description = $('.word-reveal');
  if (description && !reduced) {
    const words = (description.dataset.words || description.textContent).trim().split(/\s+/);
    description.setAttribute('aria-label', words.join(' '));
    description.textContent = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.setAttribute('aria-hidden','true');
      span.style.animationDelay = `${.55 + i * .085}s`;
      description.append(span, ' ');
    });
  }
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('reveal-title')) typeHeading(entry.target);
      io.unobserve(entry.target);
    }), { threshold: .10, rootMargin: '0px 0px -32px 0px' });
    reveals.forEach(item => { item.classList.add('ready'); io.observe(item); });
  } else {
    reveals.forEach(item => item.classList.add('visible'));
  }

  $$('.flip-card').forEach(card => {
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced;
    const setFlip = open => { card.classList.toggle('flipped', open); card.setAttribute('aria-pressed', String(open)); };
    if (fine) {
      card.addEventListener('mouseenter', () => { card.classList.remove('hover-reset'); if (!card.dataset.pinned) setFlip(true); });
      card.addEventListener('mouseleave', () => { card.classList.remove('hover-reset'); if (!card.dataset.pinned) setFlip(false); });
    }
    card.addEventListener('click', e => {
      if (fine && e.detail > 0 && card.matches(':hover') && !card.dataset.pinned && card.classList.contains('flipped')) {
        card.classList.add('hover-reset'); setFlip(false); return;
      }
      const open = !card.classList.contains('flipped');
      if (open) card.dataset.pinned = '1';
      else { delete card.dataset.pinned; if (fine) card.classList.add('hover-reset'); }
      setFlip(open);
    });
  });

  const year = $('#year'); if (year) year.textContent = String(new Date().getFullYear());
})();
