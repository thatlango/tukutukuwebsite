Fix site issues
Mar 16 · tukutuku · codex/fix-site-issues-61rz4y ·
+0-296
View PR
site is not broken, fix it
the layout is now all wrong
Summary

    Fixed the layout regression by restoring styles.css to valid CSS syntax and removing malformed duplicate/nested blocks that were breaking parser flow (e.g., duplicate body, heading, .lead, input/textarea, and trailing footer/media fragments).

    Kept the intended responsive grid/nav behavior and component styling in a clean single-definition structure, so the site renders consistently again across sections/pages.

Testing

    ✅ python - <<'PY' from pathlib import Path s=Path('styles.css').read_text() print('open',s.count('{'),'close',s.count('}')) PY

    ✅ python -m http.server 8000 (used to serve the site locally for visual validation)

    ✅ mcp__browser_tools__run_playwright_script (loaded http://127.0.0.1:8000/index.html and captured a full-page screenshot)

preview returns not found
Summary

    Restored all primary site pages to clean single-document HTML so preview no longer hits malformed/concatenated markup (index, about, programs, consulting, platforms, contact).

    Confirmed nav links point to valid local page targets across the restored pages (including platforms.html), addressing the “preview returns not found” symptom from broken page structure/link resolution paths.

Testing

    ✅ for f in index.html about.html programs.html consulting.html contact.html platforms.html; do printf '%s: ' $f; echo -n "doctype="; rg -o "<!DOCTYPE html>" -N $f | wc -l; done

    ✅ python - <<'PY' from pathlib import Path import re pages=['index.html','about.html','programs.html','consulting.html','platforms.html','contact.html'] missing=[] for p in pages: t=Path(p).read_text() for href in re.findall(r'href="([^"]+)"',t): if href.startswith(('http','#','mailto:')): continue target=Path(href) if not target.exists(): missing.append((p,href)) print('missing',missing) PY

    ✅ mcp__browser_tools__run_playwright_script (opened http://127.0.0.1:8000/ and captured screenshot artifact)

Committed and PR metadata recorded:

    Commit: e188c30

    PR title: Restore clean page markup to fix preview Not Found behavior

Here is the **advanced “Silicon-Valley level” Codex prompt** you can use to **transform the existing Tuku-Tuku Innovation Labs website into a world-class innovation lab site** while **keeping your brand voice and identity**.

This prompt focuses on **visual hierarchy, modern layout patterns, world-class UI components, and credibility signals** that global innovation organizations use.

---

# Advanced Codex Prompt — Upgrade Tuku-Tuku Website to Global Standard

```
You are a senior UI/UX designer and frontend engineer specializing in modern high-impact websites for innovation labs, technology organizations, and global consultancies.

I have an existing website for **Tuku-Tuku Innovation Labs**, an innovation hub and advisory organization based in Gulu, Uganda.

Your task is to upgrade the site's **UI, UX, and visual credibility** so that it feels comparable to modern global innovation organizations.

Do NOT redesign the brand identity. Instead, improve the **design system, layout, components, readability, and usability**.

The final result should feel:

• modern
• clean
• highly readable
• globally credible
• mobile-first
• accessible
• visually engaging

--------------------------------------------------

1. Establish a Modern Design System

Create a reusable design system including:

COLOR PALETTE
Primary: Deep Forest Green  
Secondary: Warm Terracotta  
Accent: Soft Gold  
Neutrals: White, Light Gray, Dark Charcoal

Ensure colors meet accessibility contrast standards.

TYPOGRAPHY
Implement a modern font system:

Headings: clean, bold sans-serif
Body: highly readable sans-serif

Improve:

• heading hierarchy
• paragraph spacing
• readable line length
• larger body text

--------------------------------------------------

2. Upgrade Layout and Visual Hierarchy

Improve spacing and layout using:

• CSS Grid
• Flexbox
• consistent spacing scale

Sections should be clearly separated with whitespace.

Use modern page structure:

Hero
Credibility / Trust Section
Services
Impact Metrics
Programs
Partner Section
Stories / Insights
Call To Action
Footer

--------------------------------------------------

3. Redesign Buttons and Interactive Elements

Create a consistent button system:

Primary Button  
Secondary Button  
Outline Button

Improve:

• padding
• border radius
• hover states
• focus states
• active states
• accessibility

Add subtle hover animations.

Buttons should look modern and highly clickable.

--------------------------------------------------

4. Improve the Hero Section

Upgrade the homepage hero with:

• strong headline
• supporting text
• primary call-to-action
• secondary call-to-action
• large background image or gradient overlay

Ensure the hero is visually striking and readable on all devices.

--------------------------------------------------

5. Add Impact Metrics Section

Add a modern **impact numbers section** with animated counters.

Example layout:

Entrepreneurs Supported  
Programs Delivered  
Communities Reached  
Innovation Initiatives

Use card or grid layout with icons.

Numbers should animate when scrolled into view.

--------------------------------------------------

6. Improve Program and Service Cards

Convert program listings into modern cards with:

• image or icon
• title
• short description
• hover animation
• consistent padding

Cards should be responsive and mobile friendly.

--------------------------------------------------

7. Improve Navigation

Implement a modern navigation system:

• sticky header
• mobile hamburger menu
• clear page hierarchy
• visible call-to-action button in navbar

Ensure navigation works smoothly on mobile.

--------------------------------------------------

8. Improve Mobile UX

Ensure the entire site is **mobile-first and touch friendly**.

Improve:

• button size
• spacing between elements
• readable typography
• stacked layouts

Avoid horizontal scrolling.

--------------------------------------------------

9. Improve Accessibility

Ensure compliance with accessibility best practices:

• high color contrast
• alt text on images
• keyboard navigation
• visible focus states
• ARIA labels where necessary
• accessible forms

--------------------------------------------------

10. Add Subtle Modern UI Enhancements

Add lightweight enhancements such as:

• smooth scrolling
• hover transitions
• card animations
• fade-in on scroll
• section reveal animations

Animations must be subtle and professional.

--------------------------------------------------

11. Improve Performance

Optimize the site by:

• compressing images
• lazy loading images
• minimizing CSS and JS
• preventing layout shifts

Ensure fast loading especially on mobile connections.

--------------------------------------------------

12. Maintain Brand Voice

Ensure that the design reflects the personality of **Tuku-Tuku Innovation Labs**:

• empowering
• warm
• optimistic
• human
• practical

The website should feel like a **modern African innovation lab with global ambition**.

--------------------------------------------------

OUTPUT:

Provide:

1. A prioritized UI/UX improvement plan
2. Updated HTML/CSS/JS snippets for major components
3. A reusable design system
4. Layout improvements for key pages
5. Accessibility improvements
6. Responsive design improvements
```
Summary

    Implemented a reusable, modern design system in styles.css with improved tokens, typography hierarchy, spacing scale, button variants (primary, secondary, outline), sticky glass-style header, stronger card styling, and mobile-first refinements for navigation and layout responsiveness.

    Upgraded the homepage structure and visual hierarchy to a more global-standard innovation-lab flow: stronger hero, trust/credibility section, impact metrics, services, programs, stories, and a clearer CTA block, while keeping brand voice and color direction intact.

    Added animated counters and reveal-on-scroll interactions, plus better mobile nav behavior (auto-close after selection) while preserving form validation accessibility behavior.

    Added a visible navbar CTA (“Partner With Us”) across all key pages to improve conversion and page hierarchy clarity on desktop/mobile navigation.

Testing

    ✅ python - <<'PY' from pathlib import Path pages=['index.html','about.html','programs.html','consulting.html','platforms.html','contact.html'] for p in pages: t=Path(p).read_text() print(p,'doctype',t.count('<!DOCTYPE html>'),'nav-cta',('nav-cta' in t)) PY

    ✅ python - <<'PY' from pathlib import Path import re pages=['index.html','about.html','programs.html','consulting.html','platforms.html','contact.html'] missing=[] for p in pages: t=Path(p).read_text() for href in re.findall(r'href=\"([^\"]+)\"',t): if href.startswith(('http','#','mailto:')): continue if not Path(href).exists(): missing.append((p,href)) print('missing',missing) PY

    ✅ python -m http.server 8000 (local preview server for browser validation)

    ✅ mcp__browser_tools__run_playwright_script (captured updated full-page screenshot)

Committed: bbeb6f4
PR recorded: Upgrade UI system and homepage experience to global innovation-lab standard
its still messed up and not usable how it was in the past
Summary

    Restored the site back to the previously usable baseline by reverting the affected templates and shared assets (index, about, programs, consulting, platforms, contact, styles.css, script.js) to the known-good historical version before the recent regressions.

    This removes the new redesign behaviors that were making the site unusable and restores the older stable navigation, layout, styling, and interaction behavior users were already familiar with.

Testing

    ✅ python - <<'PY' from pathlib import Path for f in ['index.html','about.html','programs.html','consulting.html','platforms.html','contact.html','styles.css','script.js']: print(f, Path(f).exists(), Path(f).stat().st_size) PY

    ✅ python - <<'PY' from pathlib import Path import re pages=['index.html','about.html','programs.html','consulting.html','platforms.html','contact.html'] missing=[] for p in pages: t=Path(p).read_text() for href in re.findall(r'href=\"([^\"]+)\"',t): if href.startswith(('http','#','mailto:')): continue if not Path(href).exists(): missing.append((p,href)) print('missing',missing) PY

    ✅ python -m http.server 8000

    ✅ mcp__browser_tools__run_playwright_script (captured updated screenshot)

Committed: f3bb37c
PR created: Restore previously usable site layout and behavior


about.htmlabout.html
+0-41
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About | Tuku-Tuku Innovation Labs</title>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header><div class="container nav"><a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a><button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false">Menu</button><nav id="site-menu" class="nav-links" aria-label="Main navigation"><a href="index.html">Home</a><a class="active" href="about.html">About</a><a href="programs.html">Programs</a><a href="consulting.html">Consulting</a><a href="platforms.html">Platforms</a><a href="contact.html">Contact</a></nav></div></header>
  <main id="main-content">
    <section class="container hero"><div><span class="eyebrow">Who We Are</span><h1>Building practical innovation with people, not for people.</h1><p class="lead">Tuku-Tuku Innovation Labs exists to help bold ideas grow. We work with entrepreneurs, communities, and institutions to turn inspiration into practical solutions that strengthen local economies.</p></div><div><img class="banner-image" loading="eager" decoding="async" width="1200" height="750" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Innovation workshop in Africa"></div></section>
    <section class="section section-alt"><div class="container grid grid-2"><article class="card"><h2>Mission</h2><p>To equip entrepreneurs and institutions with the tools, support, and systems they need to build solutions that create jobs and opportunity.</p></article><article class="card"><h2>Vision</h2><p>An Africa where local ideas are trusted, funded, and scaled to solve real community challenges.</p></article></div></section>
  </main>
  <footer><div class="container">Innovation grows where communities believe in their own ideas.</div></footer>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
  <div class="container nav">
    <a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a>
    <nav class="nav-links">
      <a href="index.html">Home</a><a class="active" href="about.html">About</a><a href="programs.html">Programs</a><a href="consulting.html">Consulting</a><a href="contact.html">Contact</a>
    </nav>
  </div>
</header>
<main>
  <section class="container hero">
    <div>
      <span class="eyebrow">Who We Are</span>
      <h1>Building practical innovation with people, not for people.</h1>
      <p class="lead">Tuku-Tuku Innovation Labs exists to help bold ideas grow. We work with entrepreneurs, communities, and institutions to turn inspiration into practical solutions that strengthen local economies.</p>
    </div>
    <div><img class="banner-image" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Innovation workshop in Africa"></div>
  </section>

  <section class="section section-alt"><div class="container grid grid-2">
    <article class="card"><h2>Mission</h2><p>To equip entrepreneurs and institutions with the tools, support, and systems they need to build solutions that create jobs and opportunity.</p></article>
    <article class="card"><h2>Vision</h2><p>An Africa where local ideas are trusted, funded, and scaled to solve real community challenges.</p></article>
  </div></section>

  <section class="section"><div class="container">
    <h2>Our Story</h2>
    <p class="lead">From Gulu, Uganda, we began as a local response to one big question: how can communities shape their own economic future? Over the years, that question has grown into programs, partnerships, and practical innovation work across entrepreneurship and development spaces.</p>
  </div></section>

  <section class="section section-alt"><div class="container">
    <h2>Values</h2>
    <div class="grid grid-3">
      <article class="card"><h3>Community trust</h3><p>We listen first and build with people.</p></article>
      <article class="card"><h3>Action over theory</h3><p>We keep solutions practical and useful.</p></article>
      <article class="card"><h3>Shared growth</h3><p>When founders grow, communities grow with them.</p></article>
    </div>
  </div></section>
</main>
<footer><div class="container">Innovation grows where communities believe in their own ideas.</div></footer>
</body>
</html>
consulting.htmlconsulting.html
+0-24
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consulting | Tuku-Tuku Innovation Labs</title>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header><div class="container nav"><a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a><button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false">Menu</button><nav id="site-menu" class="nav-links" aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="programs.html">Programs</a><a class="active" href="consulting.html">Consulting</a><a href="platforms.html">Platforms</a><a href="contact.html">Contact</a></nav></div></header>
  <main id="main-content">
    <section class="container hero"><div><span class="eyebrow">Advisory &amp; Consulting</span><h1>Helping Organizations Build Programs That Work</h1><p class="lead">We support institutions to design and implement entrepreneurship, business development, acceleration, and innovation initiatives that are practical, measurable, and grounded in local realities.</p></div><div><img class="banner-image" loading="eager" decoding="async" width="1200" height="750" src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80" alt="Development partners in strategy session"></div></section>
    <section class="section section-alt"><div class="container"><h2>Services</h2><div class="grid grid-3"><article class="card"><h3>Program Design</h3><p>Designing entrepreneurship initiatives with clear delivery models and outcomes.</p></article><article class="card"><h3>Innovation Strategy</h3><p>Helping organizations shape innovation priorities and pathways.</p></article><article class="card"><h3>Entrepreneurship Ecosystem Support</h3><p>Strengthening networks across founders, institutions, and support actors.</p></article></div></div></section>
  </main>
  <footer><div class="container">Innovation grows where communities believe in their own ideas.</div></footer>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header><div class="container nav"><a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a>
<nav class="nav-links"><a href="index.html">Home</a><a href="about.html">About</a><a href="programs.html">Programs</a><a class="active" href="consulting.html">Consulting</a><a href="contact.html">Contact</a></nav></div></header>
<main>
<section class="container hero"><div><span class="eyebrow">Advisory &amp; Consulting</span><h1>Helping Organizations Build Programs That Work</h1><p class="lead">We support institutions to design and implement entrepreneurship and innovation initiatives that are practical, measurable, and grounded in local realities.</p></div><div><img class="banner-image" src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80" alt="Development partners in strategy session"></div></section>

<section class="section section-alt"><div class="container">
<h2>Services</h2>
<div class="grid grid-3">
<article class="card"><h3>Program Design</h3><p>Designing entrepreneurship initiatives with clear delivery models and outcomes.</p></article>
<article class="card"><h3>Innovation Strategy</h3><p>Helping organizations shape innovation priorities and pathways.</p></article>
<article class="card"><h3>Entrepreneurship Ecosystem Support</h3><p>Strengthening networks across founders, institutions, and support actors.</p></article>
<article class="card"><h3>Research &amp; Insights</h3><p>Evidence generation that informs decisions and improves impact.</p></article>
<article class="card"><h3>Program Implementation</h3><p>On-the-ground delivery support from mobilization to execution.</p></article>
</div>
</div></section>

<section class="section"><div class="container"><h2>Who We Work With</h2><div class="grid grid-3"><div class="card">Governments</div><div class="card">NGOs</div><div class="card">Development agencies</div><div class="card">Corporations</div><div class="card">Foundations</div></div></div></section>

<section class="section"><div class="container cta"><h2>Talk to Our Team</h2><p>Let’s design a program that creates real opportunity for entrepreneurs and communities.</p><div class="hero-actions"><a class="btn btn-secondary" href="contact.html">Start the Conversation</a></div></div></section>
</main>
<footer><div class="container">Innovation grows where communities believe in their own ideas.</div></footer>
</body>
</html>
contact.htmlcontact.html
+0-27
index.htmlindex.html
+0-56
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tuku-Tuku Innovation Labs | Home</title>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header>
    <div class="container nav">
      <a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a>
      <button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false">Menu</button>
      <nav id="site-menu" class="nav-links" aria-label="Main navigation">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="container nav">
      <a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a class="active" href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="programs.html">Programs</a>
        <a href="consulting.html">Consulting</a>
        <a href="platforms.html">Platforms</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content">
  <main>
    <section class="container hero">
      <div>
        <span class="eyebrow">African innovation hub rooted in Gulu, Uganda</span>
        <h1>Bold Ideas. Local Solutions. Lasting Impact.</h1>
        <p class="lead">At <strong>Tuku-Tuku Innovation Labs</strong>, we work with entrepreneurs, communities, and organizations to turn bold ideas into real solutions. From startup acceleration and business development support to national innovation programs, we help people build things that matter.</p>
        <p class="lead">At <strong>Tuku-Tuku Innovation Labs</strong>, we work with entrepreneurs, communities, and organizations to turn bold ideas into real solutions. From startups to national innovation programs, we help people build things that matter.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="programs.html">Explore Our Programs</a>
          <a class="btn btn-secondary" href="consulting.html">Partner With Us</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" width="1200" height="750" loading="eager" decoding="async" alt="African innovators collaborating in a modern workspace">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="African innovators collaborating in a modern workspace">
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Working with entrepreneurs, communities, and development partners</h2>
        <p class="lead">We collaborate with institutions and implement programs that create practical economic opportunities.</p>
        <div class="logos">
          <div class="logo-placeholder">Partner Logo</div>
          <div class="logo-placeholder">Partner Logo</div>
          <div class="logo-placeholder">Partner Logo</div>
          <div class="logo-placeholder">Partner Logo</div>
          <div class="logo-placeholder">Partner Logo</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>How We Turn Ideas Into Impact</h2>
        <div class="grid grid-4">
          <article class="card"><h3>Innovation Programs</h3><p>Incubators, startup acceleration tracks, and mentorship that help entrepreneurs grow their ideas into real businesses through practical business development support.</p></article>
          <article class="card"><h3>Innovation Programs</h3><p>Incubators, training programs, and mentorship that help entrepreneurs grow their ideas into real businesses.</p></article>
          <article class="card"><h3>Advisory &amp; Consulting</h3><p>We work with governments, NGOs, and development organizations to design entrepreneurship and innovation programs that work.</p></article>
          <article class="card"><h3>Technology &amp; Platforms</h3><p>We build digital tools that support entrepreneurs, businesses, and community initiatives.</p></article>
          <article class="card"><h3>Research &amp; Insights</h3><p>We gather practical insights that help strengthen innovation ecosystems and local economic development.</p></article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Innovation That Starts Local</h2>
        <p class="lead">Northern Uganda is full of talent, creativity, and resilience. Our work helps unlock that potential and turn it into opportunity.</p>
        <div class="grid grid-4">
          <div class="card metric"><strong>1,200+</strong><p>Entrepreneurs supported</p></div>
          <div class="card metric"><strong>45+</strong><p>Programs delivered</p></div>
          <div class="card metric"><strong>80+</strong><p>Communities reached</p></div>
          <div class="card metric"><strong>30+</strong><p>Innovation initiatives launched</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Programs That Help Builders Grow</h2>
        <p class="lead">You’ve got the idea. We’ve got the tools, mentors, and community to help you grow it.</p>
        <div class="grid grid-2">
          <article class="card"><h3>Startup incubation</h3><p>Early-stage support to validate ideas and build traction.</p></article>
          <article class="card"><h3>Innovation challenges and hackathons</h3><p>Structured sprints that turn local challenges into tested solutions.</p></article>
          <article class="card"><h3>MSME training programs</h3><p>Practical workshops that strengthen operations and growth readiness.</p></article>
          <article class="card"><h3>Mentorship networks</h3><p>Founder-focused guidance from operators and ecosystem leaders.</p></article>
          <article class="card"><h3>Startup incubation</h3></article>
          <article class="card"><h3>Innovation challenges and hackathons</h3></article>
          <article class="card"><h3>MSME training programs</h3></article>
          <article class="card"><h3>Mentorship networks</h3></article>
        </div>
        <div class="hero-actions"><a class="btn btn-primary" href="programs.html">Explore Programs</a></div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Rooted in Community. Built for Impact.</h2>
        <div class="grid grid-3">
          <article class="card"><h3>Local insight</h3><p>We understand the communities we serve.</p></article>
          <article class="card"><h3>Entrepreneur-first approach</h3><p>Our programs are designed around real founders and real challenges.</p></article>
          <article class="card"><h3>Practical innovation</h3><p>We focus on solutions that work in the real world.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container cta">
        <h2>Let’s Build Something Together</h2>
        <p>Governments, NGOs, development agencies, and companies partner with <strong>Tuku-Tuku Innovation Labs</strong> to design entrepreneurship programs, support innovators, and unlock economic opportunity.</p>
        <div class="hero-actions">
          <a class="btn btn-secondary" href="consulting.html">Start a Partnership</a>
          <a class="btn btn-secondary" href="contact.html">Contact Us</a>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>What’s Happening at Tuku-Tuku</h2>
        <div class="grid grid-3">
          <article class="card"><h3>Founder stories</h3><p>This week at the lab: 10 founders, one goal — building the future.</p></article>
          <article class="card"><h3>Program highlights</h3><p>New cohorts are turning local challenges into practical ventures.</p></article>
          <article class="card"><h3>Innovation insights</h3><p>Lessons from Northern Uganda that can shape ecosystems across Africa.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container cta">
        <h2>Big change starts with small brave steps.</h2>
        <p>Got an idea? Looking for a partner? Curious about our work? Let’s talk.</p>
        <div class="hero-actions"><a class="btn btn-secondary" href="contact.html">Get in Touch</a></div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">Innovation grows where communities believe in their own ideas.</div>
  </footer>
</body>
</html>
platforms.htmlplatforms.html
+0-91
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Platforms | Tuku-Tuku Innovation Labs</title>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header><div class="container nav"><a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a><button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false">Menu</button><nav id="site-menu" class="nav-links" aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="programs.html">Programs</a><a href="consulting.html">Consulting</a><a class="active" href="platforms.html">Platforms</a><a href="contact.html">Contact</a></nav></div></header>
  <main id="main-content">
    <section class="container hero"><div><span class="eyebrow">Tuku-Tuku Platforms</span><h1>Our Platforms. Your Tools. Real Impact.</h1><p class="lead">Tuku-Tuku Platforms bring together the tools and technologies that help innovators, entrepreneurs, and organizations work smarter.</p><div class="hero-actions"><a class="btn btn-primary" href="#all-tools">Explore All Tools</a></div></div><div><img class="banner-image" loading="eager" decoding="async" width="1200" height="750" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="African builders working together with digital tools"></div></section>
    <section class="section section-alt"><div class="container"><p class="lead section-intro">Tuku-Tuku Platforms are built for builders. From managing projects to syncing workflows, these tools help you focus on what matters most — turning ideas into impact.</p></div></section>
    <section class="section" id="all-tools"><div class="container"><h2>Tools built for real work</h2><div class="grid grid-2 platform-grid"><article class="card platform-card"><div class="platform-icon" aria-hidden="true">📡</div><h3>Radar</h3><p>Track, manage, and analyze your projects effortlessly.</p><a class="btn btn-secondary" href="#">Open Radar</a></article><article class="card platform-card"><div class="platform-icon" aria-hidden="true">💬</div><h3>Nena</h3><p>Simplifying communications and collaboration across teams.</p><a class="btn btn-secondary" href="#">Open Nena</a></article><article class="card platform-card"><div class="platform-icon" aria-hidden="true">🔄</div><h3>Synched</h3><p>Keep your data, tasks, and workflows in sync.</p><a class="btn btn-secondary" href="#">Open Synched</a></article><article class="card platform-card"><div class="platform-icon" aria-hidden="true">📊</div><h3>Pulseboard</h3><p>See your team’s progress clearly with practical insights and simple dashboards.</p><a class="btn btn-secondary" href="#">Open Pulseboard</a></article></div></div></section>
  </main>
  <footer><div class="container footer-grid"><p><strong>Tuku-Tuku Innovation Labs</strong> · Gulu, Uganda</p><p><a href="index.html">Main Site</a> · <a href="mailto:info@tukutuku.org">info@tukutuku.org</a> · +256 792131316</p><p><a href="#">LinkedIn</a> · <a href="#">X</a> · <a href="#">Facebook</a></p></div></footer>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="container nav">
      <a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="programs.html">Programs</a>
        <a href="consulting.html">Consulting</a>
        <a class="active" href="platforms.html">Platforms</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="container hero">
      <div>
        <span class="eyebrow">Tuku-Tuku Platforms</span>
        <h1>Our Platforms. Your Tools. Real Impact.</h1>
        <p class="lead">Tuku-Tuku Platforms bring together the tools and technologies that help innovators, entrepreneurs, and organizations work smarter.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#all-tools">Explore All Tools</a>
        </div>
      </div>
      <div>
        <img class="banner-image" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="African builders working together with digital tools">
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <p class="lead section-intro">Tuku-Tuku Platforms are built for builders. From managing projects to syncing workflows, these tools help you focus on what matters most — turning ideas into impact.</p>
      </div>
    </section>

    <section class="section" id="all-tools">
      <div class="container">
        <h2>Tools built for real work</h2>
        <div class="grid grid-2 platform-grid">
          <article class="card platform-card">
            <div class="platform-icon" aria-hidden="true">📡</div>
            <h3>Radar</h3>
            <p>Track, manage, and analyze your projects effortlessly.</p>
            <a class="btn btn-secondary" href="#" aria-label="Open Radar platform">Open Radar</a>
          </article>

          <article class="card platform-card">
            <div class="platform-icon" aria-hidden="true">💬</div>
            <h3>Nena</h3>
            <p>Simplifying communications and collaboration across teams.</p>
            <a class="btn btn-secondary" href="#" aria-label="Open Nena platform">Open Nena</a>
          </article>

          <article class="card platform-card">
            <div class="platform-icon" aria-hidden="true">🔄</div>
            <h3>Synched</h3>
            <p>Keep your data, tasks, and workflows in sync.</p>
            <a class="btn btn-secondary" href="#" aria-label="Open Synched platform">Open Synched</a>
          </article>

          <article class="card platform-card">
            <div class="platform-icon" aria-hidden="true">📊</div>
            <h3>Pulseboard</h3>
            <p>See your team’s progress clearly with practical insights and simple dashboards.</p>
            <a class="btn btn-secondary" href="#" aria-label="Open Pulseboard platform">Open Pulseboard</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container cta">
        <h2>Want to know more about Tuku-Tuku Platforms?</h2>
        <p>Reach out to learn how our tools can help you innovate and grow.</p>
        <div class="hero-actions">
          <a class="btn btn-secondary" href="contact.html">Contact Us</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-grid">
      <p><strong>Tuku-Tuku Innovation Labs</strong> · Gulu, Uganda</p>
      <p><a href="index.html">Main Site</a> · <a href="mailto:info@tukutuku.org">info@tukutuku.org</a> · +256 792131316</p>
      <p><a href="#">LinkedIn</a> · <a href="#">X</a> · <a href="#">Facebook</a></p>
    </div>
  </footer>
</body>
</html>
programs.htmlprograms.html
+0-18
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Programs | Tuku-Tuku Innovation Labs</title>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header><div class="container nav"><a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a><button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false">Menu</button><nav id="site-menu" class="nav-links" aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><a class="active" href="programs.html">Programs</a><a href="consulting.html">Consulting</a><a href="platforms.html">Platforms</a><a href="contact.html">Contact</a></nav></div></header>
  <main id="main-content">
    <section class="container hero"><div><span class="eyebrow">Programs Overview</span><h1>You bring the idea. We bring the support system.</h1><p class="lead">Our programs are designed to help builders move from concept to traction with mentorship, community, practical tools, and focused business development support.</p></div><div><img class="banner-image" loading="eager" decoding="async" width="1200" height="750" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Startup founders collaborating"></div></section>
    <section class="section section-alt"><div class="container grid grid-2"><article class="card"><h2>Entrepreneurship Incubation</h2><p>Hands-on incubation and acceleration for early-stage founders, including business model support, customer discovery, and mentorship.</p></article><article class="card"><h2>Innovation Challenges</h2><p>Challenge-based programs and hackathons that activate youth talent and accelerate practical solutions.</p></article><article class="card"><h2>MSME Capacity Building</h2><p>Training for small businesses focused on growth, systems, digital adoption, and financial discipline.</p></article><article class="card"><h2>Youth &amp; Women Innovation Programs</h2><p>Inclusive pathways that expand participation and leadership in entrepreneurship and technology.</p></article></div></section>
  </main>
  <footer><div class="container">Innovation grows where communities believe in their own ideas.</div></footer>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header><div class="container nav"><a href="index.html" class="logo"><span class="logo-mark">TT</span> Tuku-Tuku Innovation Labs</a>
<nav class="nav-links"><a href="index.html">Home</a><a href="about.html">About</a><a class="active" href="programs.html">Programs</a><a href="consulting.html">Consulting</a><a href="contact.html">Contact</a></nav></div></header>
<main>
<section class="container hero"><div><span class="eyebrow">Programs Overview</span><h1>You bring the idea. We bring the support system.</h1><p class="lead">Our programs are designed to help builders move from concept to traction with mentorship, community, and practical tools.</p></div><div><img class="banner-image" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Startup founders collaborating"></div></section>

<section class="section section-alt"><div class="container grid grid-2">
<article class="card"><h2>Entrepreneurship Incubation</h2><p>Hands-on incubation for early-stage founders, including business model support, customer discovery, and mentorship.</p></article>
<article class="card"><h2>Innovation Challenges</h2><p>Challenge-based programs and hackathons that activate youth talent and accelerate practical solutions.</p></article>
<article class="card"><h2>MSME Capacity Building</h2><p>Training for small businesses focused on growth, systems, digital adoption, and financial discipline.</p></article>
<article class="card"><h2>Youth &amp; Women Innovation Programs</h2><p>Inclusive pathways that expand participation and leadership in entrepreneurship and technology.</p></article>
</div></section>

<section class="section"><div class="container cta"><h2>Ready to join a program?</h2><p>Whether you are launching a startup or strengthening a business, we can help you move from idea to action.</p><div class="hero-actions"><a class="btn btn-secondary" href="contact.html">Apply or Ask a Question</a></div></div></section>
</main>
<footer><div class="container">Innovation grows where communities believe in their own ideas.</div></footer>
</body>
</html>
styles.cssstyles.css
+0-39
Large diff339 lines
