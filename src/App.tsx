import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  Globe2,
  BookOpen,
  Check,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Compass,
  FileCheck2,
  Plane,
  Leaf,
  Plus,
} from "lucide-react";
import "./App.css";

const whatsapp = "https://wa.me/16479520964";
const services = [
  {
    icon: Compass,
    number: "01",
    title: "Find your right fit",
    text: "Explore schools and programs that match your interests, academic background, and ambitions.",
  },
  {
    icon: FileCheck2,
    number: "02",
    title: "Apply with confidence",
    text: "Get personal support with your application, documents, and admission requirements.",
  },
  {
    icon: Plane,
    number: "03",
    title: "Arrive ready to thrive",
    text: "Plan your next steps with pre-departure guidance and a clearer picture of student life in Canada.",
  },
];
const pathways = [
  {
    category: "A STRONG FOUNDATION",
    title: "Schools & Pathway Programs",
    description:
      "Build your academic foundation and prepare for your next chapter.",
    tag: "Secondary & preparatory",
    icon: BookOpen,
  },
  {
    category: "LEARN BY DOING",
    title: "Colleges & Career Programs",
    description:
      "Turn your interests into practical skills for the future you want.",
    tag: "Diplomas & certificates",
    icon: Compass,
  },
  {
    category: "GO FURTHER",
    title: "Universities & Higher Education",
    description:
      "Discover undergraduate and graduate opportunities that inspire you.",
    tag: "Bachelor’s & master’s",
    icon: GraduationCap,
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="CanRise Education and Immigration home"
    >
      <span className="brand-icon">
        <Leaf size={29} strokeWidth={1.7} />
      </span>
      <span>
        <span className="brand-name" translate="no">
          CanRise<span className="brand-dot">.</span>
        </span>
        <span className="brand-subtitle">EDUCATION & IMMIGRATION</span>
      </span>
    </a>
  );
}

const currentYear = new Date().getFullYear();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryReady, setEnquiryReady] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    const protectDraft = (event: BeforeUnloadEvent) => {
      if (dirty) event.preventDefault();
    };
    window.addEventListener("beforeunload", protectDraft);
    return () => window.removeEventListener("beforeunload", protectDraft);
  }, [dirty]);

  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello CanRise! I’d like to enquire about studying in Canada.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nInterested in: ${data.get("interest")}\n\n${data.get("message") || "Please help me explore my options."}`;
    const url = `${whatsapp}?text=${encodeURIComponent(message)}`;
    setEnquiryReady(url);
    setDirty(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement">
        <span>
          Your next chapter starts in Canada <span aria-hidden="true">✦</span>
        </span>
        <a href="tel:+16479520964">
          <Phone size={13} /> +1 (647) 952-0964
        </a>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            id="mobile-nav"
            aria-label="Main navigation"
            className={menuOpen ? "navigation is-open" : "navigation"}
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Our Services
            </a>
            <a href="#study" onClick={() => setMenuOpen(false)}>
              Study in Canada
            </a>
            <a
              className="mobile-enquiry"
              href="#enquiry"
              onClick={() => setMenuOpen(false)}
            >
              Let’s Talk <ArrowUpRight size={17} />
            </a>
          </nav>
          <a className="button button-dark header-cta" href="#enquiry">
            Let’s Talk <ArrowUpRight size={17} />
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main-content">
        <section id="home" className="hero container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="tiny-leaf">
                <Leaf size={13} />
              </span>{" "}
              BIG DREAMS. CANADIAN POSSIBILITIES.
            </div>
            <h1>
              Your future.
              <br />A little more
              <br />
              <span>Canadian.</span>
              <svg
                className="heading-swish"
                viewBox="0 0 340 16"
                aria-hidden="true"
              >
                <path d="M3 12 Q165 -2 335 7" />
              </svg>
            </h1>
            <p>
              A new country. A world of opportunities. We help you find your
              school, navigate admissions, and take your next big step with
              confidence.
            </p>
            <div className="hero-actions">
              <a href="#enquiry" className="button button-coral">
                Start Your Journey <ArrowUpRight size={19} />
              </a>
              <a href="#study" className="text-link">
                Explore Your Options <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon">
                <Check size={15} />
              </span>
              <span>Personal guidance. Clear steps. Your goals first.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src="/images/toronto.jpg"
                alt="Aerial view of Toronto’s CN Tower, skyline, and waterfront"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
              <div className="image-shade" />
              <div className="location-label">
                <MapPin size={15} /> Toronto, Canada
              </div>
              <div className="image-caption">
                New beginnings.
                <br />
                <em>Endless possibilities.</em>
              </div>
            </div>
            <div className="canada-stamp">
              <Leaf size={30} />
              <span>
                YOUR NEXT
                <br />
                CHAPTER
              </span>
              <span className="stamp-small">CANADA</span>
            </div>
            <div className="future-card">
              <span className="future-icon">
                <GraduationCap size={27} />
              </span>
              <div>
                <strong>Big dreams belong here.</strong>
                <span>Let’s find where you’ll grow.</span>
              </div>
              <ArrowUpRight size={20} />
            </div>
            <span className="visual-spark spark-one" aria-hidden="true">
              ✳
            </span>
            <span className="visual-spark spark-two" aria-hidden="true">
              ✦
            </span>
          </div>
        </section>
        <div className="benefit-strip">
          <div className="container benefit-inner">
            <span className="benefit-intro">
              A fresh start.
              <br />
              <strong>The right support.</strong>
            </span>
            <span>
              <GraduationCap /> Education That Fits You
            </span>
            <span>
              <Globe2 /> Guidance Across Borders
            </span>
            <span>
              <MessageCircle /> Real People, Personal Advice
            </span>
          </div>
        </div>
        <section id="services" className="section container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR AMBITIONS. OUR GUIDANCE.</span>
              <h2>
                Big steps feel smaller
                <br />
                with the right people.
              </h2>
            </div>
            <p>
              From your first question to your next chapter,
              <br className="desktop-break" /> we help you move forward, one
              step at a time.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, text }) => (
              <article className="service-card" key={number}>
                <div className="service-top">
                  <span className="service-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </span>
                  <span className="service-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  href="#enquiry"
                  aria-label={`Enquire about how to ${title.toLowerCase()}`}
                >
                  Let’s Talk <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div className="about-photo">
              <img
                src="/images/graduates.jpg"
                alt="Students attending an education presentation"
                width="700"
                height="550"
                loading="lazy"
              />
              <span className="photo-tag">
                <Leaf size={17} /> Rooted in your potential.
              </span>
            </div>
            <div className="about-copy">
              <span className="eyebrow">MEET CANRISE</span>
              <h2>
                A world of possibilities.
                <br />A partner by your side.
              </h2>
              <p>
                Choosing to study abroad is a big decision. At CanRise Education
                and Immigration, we believe your journey should start with
                someone who listens.
              </p>
              <p>
                We take the time to understand your goals and help you explore
                Canadian education options with clarity, care, and personal
                attention.
              </p>
              <div className="check-list">
                <span>
                  <Check size={17} /> Guidance shaped around your goals
                </span>
                <span>
                  <Check size={17} /> Support through the admissions process
                </span>
                <span>
                  <Check size={17} /> Honest conversations at every step
                </span>
              </div>
              <a href="#enquiry" className="text-link">
                Get to Know Your Options <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section id="study" className="section container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FIND YOUR PLACE IN CANADA</span>
              <h2>
                Different paths.
                <br />
                One bright future.
              </h2>
            </div>
            <p>
              There’s more than one way to get where you want to go.
              <br className="desktop-break" /> Let’s explore the possibilities
              together.
            </p>
          </div>
          <div className="pathway-grid">
            {pathways.map(
              ({ category, title, description, tag, icon: Icon }) => (
                <article className="pathway-card" key={title}>
                  <div className="pathway-art">
                    <Icon size={62} strokeWidth={1} />
                    <span aria-hidden="true">✦</span>
                    <div className="art-circle" />
                  </div>
                  <div className="pathway-content">
                    <span className="eyebrow">{category}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="pathway-bottom">
                      <span>{tag}</span>
                      <a href="#enquiry" aria-label={`Enquire about ${title}`}>
                        <ArrowUpRight size={21} />
                      </a>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
          <p className="study-note">
            Your options depend on your academic profile and each institution’s
            admission requirements. We’ll help you understand the fit.
          </p>
        </section>
        <section className="process-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">FROM “WHAT IF” TO “WHAT’S NEXT”</span>
                <h2>Your journey, made clearer.</h2>
              </div>
              <a className="text-link" href="#enquiry">
                Take the First Step <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="process-grid">
              {[
                [
                  "01",
                  "Let’s get acquainted",
                  "Tell us about yourself, your interests, and where you want to go.",
                ],
                [
                  "02",
                  "Explore your options",
                  "Understand suitable programs, requirements, and your next steps.",
                ],
                [
                  "03",
                  "Bring your plans to life",
                  "Get guidance to prepare your documents and school application.",
                ],
              ].map(([number, title, text]) => (
                <div className="process-item" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="enquiry" className="section container enquiry-grid">
          <div className="enquiry-copy">
            <span className="eyebrow">
              YOUR NEXT CHAPTER STARTS WITH A HELLO
            </span>
            <h2>
              Let’s make
              <br />
              your <em>next move.</em>
            </h2>
            <p>
              Have a question or a big dream? Tell us a little about yourself.
              We’re here to help you figure out what comes next.
            </p>
            <a className="contact-phone" href="tel:+16479520964">
              <span>
                <Phone size={22} />
              </span>
              <div>
                <small>GIVE US A CALL</small>
                <strong>+1 (647) 952-0964</strong>
              </div>
              <ArrowUpRight size={22} />
            </a>
            <div className="enquiry-decoration" aria-hidden="true">
              <Globe2 size={100} strokeWidth={0.65} />
              <span>
                A little courage.
                <br />A whole new world.
              </span>
              <Plus size={24} />
            </div>
          </div>
          <form
            className="enquiry-form"
            onSubmit={sendEnquiry}
            onChange={() => {
              setDirty(true);
              setEnquiryReady(null);
            }}
          >
            <h3>Tell us about your plans.</h3>
            <p>We’d love to hear where you want to go.</p>
            <div className="form-row">
              <label htmlFor="name">
                Full Name <span>*</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Alex Taylor…"
                  required
                  maxLength={100}
                />
              </label>
              <label htmlFor="email">
                Email Address <span>*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="e.g. alex@email.com…"
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor="phone">
                Phone Number
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. +1 647 555 0123…"
                  maxLength={30}
                />
              </label>
              <label htmlFor="interest">
                I’m Interested In <span>*</span>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  required
                  autoComplete="off"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Schools & Pathway Programs</option>
                  <option>Colleges & Career Programs</option>
                  <option>Universities & Higher Education</option>
                  <option>General Enquiry</option>
                </select>
              </label>
            </div>
            <label htmlFor="message">
              How Can We Help?
              <textarea
                id="message"
                name="message"
                rows={3}
                autoComplete="off"
                placeholder="Share your goals or ask us a question…"
                maxLength={2000}
              />
            </label>
            <label className="consent">
              <input name="consent" type="checkbox" required />{" "}
              <span>
                I agree to share these details with CanRise via WhatsApp so the
                team can respond to my enquiry.
              </span>
            </label>
            <button type="submit" className="button button-dark">
              Send Enquiry via WhatsApp <ArrowUpRight size={18} />
            </button>
            <p className="form-footnote">
              Opens WhatsApp with your details. Review and tap send there.
            </p>
            <div aria-live="polite">
              {enquiryReady && (
                <p className="form-status">
                  Your enquiry is ready in WhatsApp. If it didn’t open,{" "}
                  <a href={enquiryReady} target="_blank" rel="noreferrer">
                    open your enquiry here <ArrowUpRight size={13} />
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </section>
      </main>
      <footer>
        <div className="container footer-top">
          <Brand light />
          <p>
            Helping your ambitions
            <br />
            find a home in Canada.
          </p>
          <a href="tel:+16479520964">
            +1 (647) 952-0964 <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {currentYear} CanRise Education and Immigration.</span>
          <span>
            Made for new beginnings. <Leaf size={13} />
          </span>
        </div>
      </footer>
    </>
  );
}
export default App;
