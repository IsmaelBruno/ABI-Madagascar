"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Network,
  Send,
  Sun,
  Users,
  X,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const email = "razafindratsimbabrunoismael@gmail.com";

const services = [
  {
    icon: BarChart3,
    title: "Analyse de données",
    description: "Tableaux de bord, indicateurs et rapports",
    tariff: "Data Analyst junior · 60 €/h Europe · 24 €/h Madagascar",
    index: "01",
  },
  {
    icon: Database,
    title: "Ingénierie de données",
    description: "Pipelines, bases de données, automatisation",
    tariff: "10 €/h · 75 €/jour · Projet selon contexte",
    index: "02",
  },
  {
    icon: BrainCircuit,
    title: "Science des données",
    description: "Modèles prédictifs et IA appliquée",
    tariff: "Sur devis",
    index: "03",
  },
];

const externalMarkets = [
  "PME, startups et ETI",
  "Grands comptes et ESN",
  "Sous-traitance et missions en régie",
];

const localMarkets = ["Banques", "Télécoms", "Administrations"];

const priceOffers = [
  {
    number: "01",
    category: "ANALYSE DE DONNÉES",
    title: "Data Analyst junior",
    price: "60 €",
    unit: "/ heure · Europe",
    detail: "24 €/h à Madagascar",
    theme: "navy",
    icon: BarChart3,
  },
  {
    number: "02",
    category: "INGÉNIERIE DE DONNÉES",
    title: "Pipelines & bases de données",
    price: "10 €",
    unit: "/ heure",
    detail: "75 €/jour · projet selon contexte",
    theme: "sage",
    icon: Database,
  },
  {
    number: "03",
    category: "SCIENCE DES DONNÉES",
    title: "Modèles prédictifs & IA",
    price: "Sur devis",
    unit: "",
    detail: "Devis gratuit",
    theme: "paper",
    icon: BrainCircuit,
  },
  {
    number: "04",
    category: "CONSULTATION",
    title: "Conseil data",
    price: "20 €",
    unit: "/ heure",
    detail: "120 €/jour · devis gratuit",
    theme: "paper",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    category: "MAINTENANCE",
    title: "Maintenance data",
    price: "20 €",
    unit: "/ heure",
    detail: "Forfait projet à partir de 2 100 € · après devis",
    theme: "yellow",
    icon: Layers3,
  },
  {
    number: "06",
    category: "RÉGIE",
    title: "Mission en régie",
    price: "30 €",
    unit: "/ heure",
    detail: "Forfait établi selon les jours facturés",
    theme: "navy",
    icon: Users,
  },
];

const roadmap = [
  {
    number: "01",
    title: "Démarrer",
    description:
      "Le CTO assure la production data, le front office gère les clients. Plateforme, Upwork, Fiverr.",
  },
  {
    number: "02",
    title: "Structurer",
    description:
      "Recrutement de l’analyste, de l’ingénieur et du scientifique de données : équipe de 6.",
  },
  {
    number: "03",
    title: "Grandir",
    description:
      "Siège propre financé par nos profits, norme ISO 27001 à viser.",
  },
];

const team = [
  {
    role: "CEO",
    title: "Fondateur",
    description: "Stratégie et gestion",
    icon: BriefcaseBusiness,
  },
  {
    role: "Front office",
    title: "Business manager et developer",
    description: "Prospection, clients, comptes, missions en régie.",
    icon: Users,
  },
  {
    role: "CTO · Head of Data",
    title: "Cofondateur",
    description:
      "Assure seul la production data au début, puis recrute les profils data.",
    icon: Layers3,
  },
];

function subscribeTheme(onChange) {
  window.addEventListener("abi-theme-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("abi-theme-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getThemeSnapshot() {
  const savedTheme = window.localStorage.getItem("abi-mdg-theme");
  return (
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

function getServerThemeSnapshot() {
  return "light";
}

function Reveal({ children, className, delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function ServiceFlow() {
  const graphicRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reduceMotion || !graphicRef.current) return;

      const paths = graphicRef.current.querySelectorAll(".abi-flow-path:not(.abi-flow-path--base)");
      const nodes = graphicRef.current.querySelectorAll(".abi-flow-node");

      gsap.set(paths, {
        strokeDasharray: (index, target) => target.getTotalLength(),
        strokeDashoffset: (index, target) => target.getTotalLength(),
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: graphicRef.current,
            start: "top 78%",
            once: true,
          },
        })
        .to(paths, {
          strokeDashoffset: 0,
          duration: 1.15,
          stagger: 0.18,
          ease: "power2.inOut",
        })
        .fromTo(
          nodes,
          { autoAlpha: 0, scale: 0.86, transformOrigin: "center" },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.13,
            ease: "back.out(1.6)",
          },
          "-=0.55",
        );
    },
    { scope: graphicRef, dependencies: [reduceMotion], revertOnUpdate: true },
  );

  return (
    <div
      className="abi-flow-visual"
      ref={graphicRef}
      role="img"
      aria-label="Illustration des trois services : analyse, ingénierie et science des données"
    >
      <div className="abi-flow-label">NOS SERVICES / 03</div>
      <svg viewBox="0 0 760 330" aria-hidden="true">
        <defs>
          <linearGradient id="abi-flow-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="#d2a376" />
            <stop offset="0.52" stopColor="#e9ddc9" />
            <stop offset="1" stopColor="#a4c9c4" />
          </linearGradient>
          <filter id="abi-flow-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="abi-flow-path abi-flow-path--base" d="M92 164 C205 164 192 76 320 76 S428 254 550 254 S612 164 675 164" />
        <path className="abi-flow-path" d="M92 164 C205 164 192 76 320 76" />
        <path className="abi-flow-path" d="M320 76 C428 76 428 254 550 254" />
        <path className="abi-flow-path" d="M550 254 C612 254 612 164 675 164" />
        <g className="abi-flow-node abi-flow-node--source">
          <circle cx="92" cy="164" r="37" />
          <text x="92" y="160">DONNÉES</text>
          <text className="abi-flow-sub" x="92" y="177">TRAITEMENT</text>
        </g>
        <g className="abi-flow-node abi-flow-node--service">
          <circle cx="320" cy="76" r="42" />
          <text x="320" y="72">ANALYSE</text>
          <text className="abi-flow-sub" x="320" y="89">TABLEAUX · RAPPORTS</text>
        </g>
        <g className="abi-flow-node abi-flow-node--service">
          <circle cx="550" cy="254" r="42" />
          <text x="550" y="250">INGÉNIERIE</text>
          <text className="abi-flow-sub" x="550" y="267">PIPELINES · BASES</text>
        </g>
        <g className="abi-flow-node abi-flow-node--output">
          <circle cx="675" cy="164" r="37" />
          <text x="675" y="160">SCIENCE</text>
          <text className="abi-flow-sub" x="675" y="177">IA APPLIQUÉE</text>
        </g>
      </svg>
      <div className="abi-flow-foot">
        <span>ANALYSE DE DONNÉES</span>
        <span>INGÉNIERIE DE DONNÉES</span>
        <span>SCIENCE DES DONNÉES</span>
      </div>
    </div>
  );
}

function submitContact(event) {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const name = fields.get("name");
  const company = fields.get("company");
  const sender = fields.get("email");
  const service = fields.get("service");
  const message = fields.get("message");
  const body = [
    `Nom : ${name}`,
    `Entreprise : ${company || "Non précisée"}`,
    `E-mail : ${sender}`,
    `Service : ${service}`,
    "",
    message,
  ].join("\n");
  const subject = encodeURIComponent(`Demande de contact · ${service}`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

export default function LandingPage() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("abi-mdg-theme", nextTheme);
    window.dispatchEvent(new Event("abi-theme-change"));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="abi-site" data-abi-theme={theme}>
      <a className="abi-skip-link" href="#contenu">Aller au contenu</a>
      <header className="abi-header">
        <nav className="abi-nav abi-container" aria-label="Navigation principale">
          <a className="abi-brand" href="#accueil" onClick={closeMenu} aria-label="ABI-MDG, accueil">
            <span className="abi-brand-monogram">ABI<span>—</span>MDG</span>
          </a>
          <div className={`abi-nav-links${menuOpen ? " is-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#marches" onClick={closeMenu}>Marchés</a>
            <a href="#tarifs" onClick={closeMenu}>Tarifs</a>
            <a href="#temoignages" onClick={closeMenu}>Témoignages</a>
            <a className="abi-mobile-contact" href="#contact" onClick={closeMenu}>
              Nous contacter <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="abi-nav-actions">
            <button
              className="abi-theme-button"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
              title={theme === "dark" ? "Thème clair" : "Thème sombre"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a className="abi-nav-cta" href="#contact">Nous contacter <ArrowUpRight size={14} /></a>
            <button
              className="abi-menu-button"
              type="button"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="contenu">
        <section className="abi-hero" id="accueil">
          <div className="abi-hero-meta">
            <span>ESN · TRAITEMENT DE DONNÉES</span>
            <span>ANTANANARIVO · MADAGASCAR</span>
            <span>100 % TÉLÉTRAVAIL</span>
          </div>
          <div className="abi-hero-portals">
            <motion.article
              className="abi-portal abi-portal--international"
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="abi-portal-kicker">01 / MARCHÉ EXTÉRIEUR</span>
              <div className="abi-portal-main">
                <p className="abi-portal-overline">Marché extérieur d’abord</p>
                <h1>Vos données.<br />Vos décisions.</h1>
                <p>Des experts à distance qui transforment vos données en décisions, pour des clients à l’international comme sur le marché local.</p>
                <a className="abi-button abi-button--portal-light" href="#services">
                  Découvrir nos services <ArrowRight size={15} />
                </a>
              </div>
              <div className="abi-portal-footer"><span>CLIENTS À L’INTERNATIONAL</span><ArrowUpRight size={15} /></div>
            </motion.article>
            <motion.article
              className="abi-portal abi-portal--local"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="abi-portal-kicker">02 / MARCHÉ LOCAL</span>
              <div className="abi-portal-main">
                <p className="abi-portal-overline">Marché local bienvenu</p>
                <h2>Une expertise<br />data, ici.</h2>
                <p>Banques, télécoms, administrations.</p>
                <a className="abi-button abi-button--portal-dark" href="#contact">
                  Parlons de vos besoins <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="abi-portal-footer"><span>MADAGASCAR · À DISTANCE</span><Globe2 size={16} /></div>
            </motion.article>
          </div>
          <p className="abi-hero-bottomnote"><ArrowDown size={13} /> DÉCOUVRIR ABI-MDG</p>
        </section>

        <section className="abi-positioning" aria-label="Marchés et organisation">
          <div className="abi-container abi-positioning-inner">
            <span className="abi-section-kicker">ABI-MDG / ESN</span>
            <p>Marché extérieur d’abord <i /> Marché local bienvenu <i /> 100 % télétravail</p>
            <span className="abi-positioning-icon"><Network size={18} /></span>
          </div>
        </section>

        <section className="abi-section abi-services" id="services">
          <div className="abi-container">
            <Reveal className="abi-section-intro">
              <div>
                <p className="abi-section-kicker"><span>01</span> NOS 3 SERVICES</p>
                <h2>Le traitement<br />de données, <em>à distance.</em></h2>
              </div>
              <p className="abi-section-lede">
                Une entreprise de services du numérique spécialisée dans le traitement de données.
              </p>
            </Reveal>

            <div className="abi-service-grid">
              {services.map(({ icon: Icon, title, description, tariff, index }, i) => (
                <Reveal className="abi-service-wrap" key={index} delay={i * 0.1}>
                  <article className="abi-service-card">
                    <div className="abi-service-top">
                      <span>{index} / 03</span>
                      <Icon size={22} strokeWidth={1.4} />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className="abi-service-tariff">{tariff}</span>
                    <a href="#contact" aria-label={`Nous contacter pour ${title}`}>
                      <ArrowUpRight size={17} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="abi-flow-reveal" delay={0.12}>
              <ServiceFlow />
            </Reveal>
          </div>
        </section>

        <section className="abi-why">
          <div className="abi-container">
            <Reveal className="abi-section-intro">
              <div>
                <p className="abi-section-kicker"><span>02</span> POURQUOI ABI-MDG</p>
                <h2>Une structure pensée<br /><em>pour vos marchés.</em></h2>
              </div>
              <p className="abi-section-lede">
                Des points de repère issus de notre projet d’entreprise : une ESN à distance, tournée vers l’international et ouverte au marché local.
              </p>
            </Reveal>
            <div className="abi-why-grid">
              <Reveal className="abi-why-card">
                <span className="abi-why-icon"><Globe2 size={20} /></span>
                <strong>02</strong>
                <h3>Marchés</h3>
                <p>Marché extérieur d’abord. Marché local bienvenu.</p>
              </Reveal>
              <Reveal className="abi-why-card" delay={0.1}>
                <span className="abi-why-icon"><Layers3 size={20} /></span>
                <strong>03</strong>
                <h3>Services data</h3>
                <p>Analyse, ingénierie et science des données.</p>
              </Reveal>
              <Reveal className="abi-why-card" delay={0.2}>
                <span className="abi-why-icon"><Network size={20} /></span>
                <strong>100<span>%</span></strong>
                <h3>Télétravail</h3>
                <p>Une organisation à distance, depuis Madagascar.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="abi-markets" id="marches">
          <div className="abi-container">
            <Reveal className="abi-section-intro abi-market-intro">
              <div>
                <p className="abi-section-kicker"><span>03</span> NOS CIBLES</p>
                <h2>À distance,<br /><em>à l’international.</em></h2>
              </div>
              <Globe2 className="abi-market-globe" size={76} strokeWidth={0.8} />
            </Reveal>
            <div className="abi-market-grid">
              <Reveal className="abi-market-card abi-market-card--global">
                <div className="abi-market-card-top">
                  <span className="abi-market-icon"><Globe2 size={19} /></span>
                  <span>01 / MARCHÉ EXTÉRIEUR</span>
                </div>
                <h3>Marché extérieur</h3>
                <ul>
                  {externalMarkets.map((market) => (
                    <li key={market}><span><ArrowUpRight size={14} /></span>{market}</li>
                  ))}
                </ul>
                <div className="abi-market-stamp">MARCHÉ EXTÉRIEUR</div>
              </Reveal>
              <Reveal className="abi-market-card abi-market-card--local" delay={0.12}>
                <div className="abi-market-card-top">
                  <span className="abi-market-icon"><Network size={19} /></span>
                  <span>02 / MARCHÉ LOCAL</span>
                </div>
                <h3>Marché local</h3>
                <ul>
                  {localMarkets.map((market) => (
                    <li key={market}><span><ArrowUpRight size={14} /></span>{market}</li>
                  ))}
                </ul>
                <div className="abi-market-stamp">MADAGASCAR</div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="abi-pricing" id="tarifs">
          <div className="abi-container">
            <Reveal className="abi-section-intro">
              <div>
                <p className="abi-section-kicker"><span>04</span> NOS TARIFS</p>
                <h2>Des formats clairs.<br /><em>Des devis gratuits.</em></h2>
              </div>
              <p className="abi-section-lede">
                Analyse, ingénierie, science des données, conseil, maintenance et régie.
              </p>
            </Reveal>
            <div className="abi-price-grid">
              {priceOffers.map(({ number, category, title, price, unit, detail, theme: cardTheme, icon: Icon }, index) => (
                <Reveal className={`abi-price-tile abi-price-tile--${cardTheme}`} key={number} delay={index * 0.06}>
                  <div className="abi-price-tile-top">
                    <span>{number} / {category}</span>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3>{title}</h3>
                  <div className="abi-price-tile-value">
                    <strong>{price}</strong>
                    {unit && <span>{unit}</span>}
                  </div>
                  <p>{detail}</p>
                  <a href="#contact">Demander un devis <ArrowUpRight size={14} /></a>
                </Reveal>
              ))}
            </div>
            <p className="abi-pricing-note">Devis gratuits. Les tarifs par projet sont établis selon le contexte et les jours facturés.</p>
          </div>
        </section>

        <section className="abi-section abi-organization" id="organisation">
          <div className="abi-container">
            <Reveal className="abi-section-intro">
              <div>
                <p className="abi-section-kicker"><span>05</span> ÉQUIPE ET BUSINESS PLAN</p>
                <h2>Une structure légère<br />qui grandit <em>avec les profits.</em></h2>
              </div>
              <p className="abi-section-lede">
                Une organisation pensée pour démarrer, structurer l’équipe data et grandir.
              </p>
            </Reveal>

            <div className="abi-team-layout">
              <div className="abi-team-list">
                {team.map(({ role, title, description, icon: Icon }, index) => (
                  <Reveal className="abi-team-card" key={role} delay={index * 0.08}>
                    <span className="abi-team-icon"><Icon size={19} strokeWidth={1.5} /></span>
                    <div>
                      <span className="abi-team-role">{role}</span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    <span className="abi-team-index">0{index + 1}</span>
                  </Reveal>
                ))}
              </div>
              <Reveal className="abi-team-scale">
                <div className="abi-scale-heading">
                  <span>ÉQUIPE DATA</span>
                  <span>AVEC LA CROISSANCE</span>
                </div>
                <div className="abi-scale-numbers">
                  <div><strong>3</strong><span>MINIMUM<br />PERSONNES</span></div>
                  <span className="abi-scale-arrow"><ArrowRight size={18} /></span>
                  <div><strong>6</strong><span>CIBLE<br />PERSONNES</span></div>
                </div>
                <div className="abi-scale-roles">
                  <span>Analyste</span><span>Ingénieur</span><span>Scientifique de données</span>
                </div>
                <p>Les 3 profils data arrivent avec la croissance : analyste, ingénieur et scientifique de données.</p>
              </Reveal>
            </div>

            <div className="abi-roadmap-heading">
              <span className="abi-section-kicker">BUSINESS PLAN EN 3 ÉTAPES</span>
              <span className="abi-roadmap-rule" />
            </div>
            <div className="abi-roadmap-grid">
              {roadmap.map(({ number, title, description }, index) => (
                <Reveal className="abi-roadmap-card" key={number} delay={index * 0.1}>
                  <span className="abi-roadmap-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="abi-testimonials" id="temoignages">
          <div className="abi-container abi-testimonials-grid">
            <Reveal className="abi-testimonials-copy">
              <p className="abi-section-kicker"><span>06</span> TÉMOIGNAGES</p>
              <h2>La parole à<br /><em>nos clients.</em></h2>
              <p>Les témoignages seront publiés ici après réception et validation des retours clients. Aucun avis fictif n’est affiché.</p>
              <a className="abi-contact-email" href={`mailto:${email}?subject=${encodeURIComponent("Témoignage client ABI-MDG")}`}>
                <Mail size={16} /> Partager un témoignage <ArrowUpRight size={14} />
              </a>
            </Reveal>
            <Reveal className="abi-testimonial-visual" delay={0.12}>
              <a
                className="abi-testimonial-photo-link"
                href="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir la photo d’illustration Unsplash dans un nouvel onglet"
              >
                <Image
                  src="/images/team-work-unsplash.jpg"
                  alt="Illustration d’une équipe en réunion, photo Unsplash — ne représente pas un client ABI-MDG"
                  fill
                  sizes="(max-width: 680px) 100vw, 52vw"
                  className="abi-testimonial-photo"
                />
                <span className="abi-photo-credit">PHOTO D’ILLUSTRATION · UNSPLASH ↗</span>
              </a>
              <div className="abi-testimonial-placeholder">
                <span>AVIS CLIENT</span>
                <strong>Témoignages à venir</strong>
                <p>Les avis seront ajoutés avec l’accord de leurs auteurs.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="abi-standards">
          <div className="abi-container abi-standards-inner">
            <Reveal className="abi-standards-copy">
              <p className="abi-section-kicker"><span>07</span> STANDARDS À VISER</p>
              <h2>Grandir avec<br /><em>des repères.</em></h2>
              <p>Les certifications citées sont des objectifs à viser dans le business plan.</p>
            </Reveal>
            <div className="abi-standard-list">
              <Reveal className="abi-standard"><span>01</span><strong>ISO/IEC 27001</strong><small>Sécurité de l’information · à viser</small></Reveal>
              <Reveal className="abi-standard" delay={0.1}><span>02</span><strong>ISO/IEC 27701</strong><small>Vie privée</small></Reveal>
              <Reveal className="abi-standard" delay={0.2}><span>03</span><strong>ISO 8000</strong><small>Qualité des données</small></Reveal>
            </div>
          </div>
        </section>

        <section className="abi-platforms">
          <div className="abi-container abi-platforms-inner">
            <div>
              <p className="abi-section-kicker"><span>08</span> OÙ NOUS TROUVER</p>
              <h2>Notre plateforme</h2>
            </div>
            <div className="abi-platform-chips" aria-label="Plateformes">
              <span>Upwork</span>
              <span>Fiverr</span>
              <span>LinkedIn</span>
            </div>
            <p className="abi-platform-note">Portfolio visible sur chaque plateforme</p>
          </div>
        </section>

        <section className="abi-contact" id="contact">
          <div className="abi-container abi-contact-grid">
            <Reveal className="abi-contact-copy">
              <p className="abi-section-kicker"><span>09</span> CONTACT</p>
              <h2>Transformons vos données<br /><em>en décisions.</em></h2>
              <p>Des experts à distance qui transforment vos données en décisions, pour des clients à l’international comme sur le marché local.</p>
              <a className="abi-contact-email" href={`mailto:${email}`}>
                <Mail size={17} /> {email} <ArrowUpRight size={15} />
              </a>
              <div className="abi-contact-tags">
                <span>Marché extérieur d’abord</span>
                <span>Marché local bienvenu</span>
                <span>100 % télétravail</span>
              </div>
            </Reveal>
            <Reveal className="abi-contact-form-wrap" delay={0.1}>
              <form className="abi-contact-form" onSubmit={submitContact}>
                <div className="abi-form-heading">
                  <span>ÉCRIVEZ-NOUS</span>
                  <Send size={17} />
                </div>
                <label>
                  <span>Nom</span>
                  <input name="name" autoComplete="name" placeholder="Votre nom" required />
                </label>
                <label>
                  <span>Entreprise <i>OPTIONNEL</i></span>
                  <input name="company" autoComplete="organization" placeholder="Nom de l’entreprise" />
                </label>
                <label>
                  <span>E-mail professionnel</span>
                  <input name="email" type="email" autoComplete="email" placeholder="nom@entreprise.com" required />
                </label>
                <label>
                  <span>Service</span>
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Choisir un service</option>
                    {priceOffers.map(({ title }) => <option key={title} value={title}>{title}</option>)}
                  </select>
                </label>
                <label>
                  <span>Votre message</span>
                  <textarea name="message" rows={3} placeholder="Décrivez votre besoin..." required />
                </label>
                <button className="abi-button abi-button--submit" type="submit">
                  Préparer mon message <ArrowUpRight size={15} />
                </button>
                <p className="abi-form-note">Le formulaire prépare un courriel à envoyer depuis votre messagerie.</p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="abi-footer">
        <div className="abi-container abi-footer-top">
          <a className="abi-brand" href="#accueil">
            <span className="abi-brand-monogram">ABI<span>—</span>MDG</span>
          </a>
          <p>Une entreprise de services du numérique spécialisée dans le traitement de données.</p>
          <a className="abi-footer-back" href="#accueil">Retour en haut <ArrowUpRight size={15} /></a>
        </div>
        <div className="abi-container abi-footer-bottom">
          <span>ABI-MDG · Madagascar</span>
          <span>Marché extérieur d’abord · Marché local bienvenu</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </footer>
      <div className="abi-floating-actions" aria-label="Raccourcis">
        <a href={`mailto:${email}`} aria-label="Écrire à ABI-MDG"><MessageCircle size={19} /></a>
        <a href="#accueil" aria-label="Retour en haut"><ArrowUp size={17} /></a>
      </div>
    </div>
  );
}
