import React, { useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, Plane, Building2, Crown, Users, Globe2, Headphones, FileCheck2, CarFront, BriefcaseBusiness, Check } from "lucide-react";
import { services, destinations, solutions } from "./data";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Corporate Solutions", to: "/corporate-solutions" },
  { label: "Global Network", to: "/global-network" },
  { label: "Contact", to: "/contact" }
];

const icons = [Plane, Building2, Crown, Users, FileCheck2, CarFront, Headphones];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-espresso/95 text-ivory backdrop-blur-md">
      <div className="container-luxury flex h-[76px] items-center justify-between">
        <Link to="/" className="leading-none">
          <span className="block font-display text-[31px] tracking-wide text-champagneLight">AELUSA</span>
          <span className="mt-0.5 block text-[7px] font-medium uppercase tracking-[0.38em] text-ivory/75">International Way</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) =>
              `relative py-2 text-[11px] font-medium transition ${isActive ? "text-champagneLight after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-champagne" : "text-ivory/80 hover:text-ivory"}`
            }>{n.label}</NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">Request Assistance <ArrowRight size={14}/></Link>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded border border-white/15 p-2 lg:hidden" aria-label="Toggle menu">
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-espresso px-5 py-5 lg:hidden">
          <nav className="container-luxury flex flex-col">
            {nav.map(n => <NavLink key={n.to} to={n.to} className="border-b border-white/10 py-4 text-sm text-ivory/90">{n.label}</NavLink>)}
            <Link to="/contact" className="btn-primary mt-5 w-full">Request Assistance <ArrowRight size={14}/></Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return <footer className="bg-[#1B120E] text-ivory/75">
    <div className="container-luxury grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
        <div className="font-display text-4xl text-champagneLight">AELUSA</div>
        <div className="mt-1 text-[8px] uppercase tracking-[.38em]">International Way</div>
        <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/55">Corporate travel and hospitality solutions for forward-thinking businesses.</p>
      </div>
      <div><h4 className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-champagne">Company</h4><div className="space-y-3 text-sm"><Link to="/about" className="block hover:text-champagne">About AELUSA</Link><Link to="/corporate-solutions" className="block hover:text-champagne">Corporate Solutions</Link></div></div>
      <div><h4 className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-champagne">Services</h4><div className="space-y-3 text-sm"><Link to="/services" className="block hover:text-champagne">Corporate Travel</Link><Link to="/services" className="block hover:text-champagne">Hospitality</Link><Link to="/services" className="block hover:text-champagne">Executive Travel</Link></div></div>
      <div><h4 className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-champagne">Contact</h4><div className="space-y-3 text-sm"><p>+91 22 0000 0000</p><p>enquiry@aelusa.com</p><p>Mumbai · Dubai · Singapore</p></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-luxury flex flex-col justify-between gap-3 py-5 text-[11px] text-ivory/40 sm:flex-row"><span>© 2026 AELUSA International Way. All rights reserved.</span><span>Privacy Policy · Terms & Conditions</span></div></div>
  </footer>
}

function PageHero({ eyebrow="AELUSA INTERNATIONAL WAY", title, text, image }) {
  return <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-espresso pt-28">
    <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="hero-overlay absolute inset-0"/>
    <div className="container-luxury relative z-10 pb-16 sm:pb-20 lg:pb-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display mt-5 max-w-4xl text-5xl text-ivory sm:text-6xl lg:text-7xl">{title}</h1>
      {text && <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/75 sm:text-base">{text}</p>}
    </div>
  </section>
}

function SectionTitle({eyebrow, title, text, dark=false}) {
  return <div className={dark ? "text-ivory" : "text-charcoal"}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
    {text && <p className={`mt-5 max-w-2xl text-sm leading-7 ${dark ? "text-ivory/65" : "text-charcoal/65"}`}>{text}</p>}
  </div>
}

function Home() {
  return <>
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-espresso pt-24 text-ivory sm:min-h-[820px]">
      <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90" alt="Business traveller at an international airport" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="hero-overlay absolute inset-0"/>
      <div className="container-luxury relative z-10 grid items-end gap-12 lg:grid-cols-[1fr_330px]">
        <div className="pb-8 lg:pb-12">
          <p className="eyebrow">Corporate Travel & Hospitality</p>
          <h1 className="display mt-5 max-w-3xl text-6xl sm:text-7xl lg:text-[88px]">Corporate Travel,<br/><span className="text-champagneLight">Managed Beyond</span><br/>Expectations.</h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/75 sm:text-base">Seamless travel and hospitality solutions for modern businesses, executives and corporate teams.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/contact" className="btn-primary">Request Corporate Assistance <ArrowRight size={14}/></Link><Link to="/services" className="btn-secondary">Explore Services</Link></div>
        </div>
        <div className="border-l border-champagne/60 pl-6 pb-10 text-xs uppercase tracking-[.24em] text-ivory/65">Business moves the world.<br/><span className="mt-2 block text-champagneLight">We make it seamless.</span></div>
      </div>
    </section>

    <div className="border-b border-sand bg-ivory">
      <div className="container-luxury grid grid-cols-2 divide-x divide-sand/70 sm:grid-cols-4">
        {[[Plane,"Corporate Travel"],[Crown,"Executive Mobility"],[Building2,"Hospitality"],[Globe2,"Global Coordination"]].map(([I,t])=><div key={t} className="flex items-center justify-center gap-3 px-3 py-5 text-[11px] font-semibold uppercase tracking-[.08em] text-charcoal/75"><I size={19} className="text-champagne"/><span>{t}</span></div>)}
      </div>
    </div>

    <section className="section-pad">
      <div className="container-luxury grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div><SectionTitle eyebrow="About AELUSA" title="Corporate Travel, Simplified." text="We manage business travel requirements from planning and booking to accommodation, transfers and on-trip coordination — so your teams can focus on what matters most: business."/><Link to="/about" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-espresso">Discover AELUSA <ArrowRight size={14} className="text-champagne"/></Link></div>
        <div className="grid gap-3 sm:grid-cols-2"><div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85" className="h-[310px] w-full object-cover" alt="Premium corporate hospitality"/></div><div className="grid grid-cols-2 gap-3"><Metric n="24/7" t="Travel Support"/><Metric n="50+" t="Business Destinations"/><Metric n="100%" t="Business Focus"/><Metric n="01" t="Coordinated Partner"/></div></div>
      </div>
    </section>

    <section className="bg-white py-20 sm:py-24">
      <div className="container-luxury"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionTitle eyebrow="Our Services" title="Comprehensive Solutions"/><Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">View all services <ArrowRight size={14}/></Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><ServiceCard key={s.title} service={s} Icon={icons[i]}/>)}</div></div>
    </section>

    <section className="bg-espresso py-20 sm:py-24">
      <div className="container-luxury grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <SectionTitle dark eyebrow="Designed Around Business" title="Built for time, clarity and continuity." text="AELUSA brings travel requirements together through a single, coordinated corporate experience."/>
        <div className="grid gap-5 sm:grid-cols-2">{["Efficiency","Reliability","Global Coordination","Executive-Level Service"].map((x,i)=><div key={x} className="border-t border-champagne/40 pt-5"><span className="text-xs text-champagne">0{i+1}</span><h3 className="mt-3 font-display text-3xl text-ivory">{x}</h3><p className="mt-2 text-xs leading-6 text-ivory/55">Structured support designed around business travel requirements.</p></div>)}</div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-luxury"><SectionTitle eyebrow="Global Business Travel Network" title="Where business takes you." text="Coordinate travel around key business destinations across India and international markets."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{destinations.map((d,i)=><div key={d} className="group relative h-52 overflow-hidden rounded-sm bg-espresso"><img src={`https://images.unsplash.com/photo-${["1529253355930-48a5c7b6b8c0","1512453979798-5ea266f8880c","1525625293386-3f8f99389edd","1519671482749-fd09be7ccebf","1513635269975-59663e0ac1ad","1539650116574-75c0c6d73f6e"][i]}?auto=format&fit=crop&w=900&q=85`} alt={d} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/15 to-transparent"/><div className="absolute bottom-5 left-5 text-ivory"><div className="font-display text-3xl">{d}</div><div className="text-[9px] uppercase tracking-[.2em] text-champagneLight">Business destination</div></div></div>)}</div></div>
    </section>

    <CTA />
  </>
}

function Metric({n,t}) { return <div className="flex flex-col justify-center border border-sand/70 bg-white px-5 py-7"><span className="font-display text-4xl text-espresso">{n}</span><span className="mt-2 text-[10px] uppercase tracking-[.15em] text-charcoal/55">{t}</span></div> }
function ServiceCard({service, Icon}) { return <Link to="/services" className="luxury-card group"><div className="relative h-52 overflow-hidden"><img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-espresso/15"/></div><div className="p-5"><Icon size={20} className="text-champagne"/><h3 className="mt-4 font-display text-2xl">{service.title}</h3><p className="mt-2 text-xs leading-6 text-charcoal/60">{service.text}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">Explore <ArrowRight size={13}/></span></div></Link> }
function CTA() { return <section className="relative overflow-hidden bg-espresso py-20 text-ivory"><img src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1800&q=85" className="absolute inset-0 h-full w-full object-cover opacity-35" alt="Aircraft wing at sunset"/><div className="absolute inset-0 bg-espresso/65"/><div className="container-luxury relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="eyebrow">Ready to get started?</p><h2 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">Let's simplify your corporate travel.</h2></div><Link to="/contact" className="btn-primary shrink-0">Request Consultation <ArrowRight size={14}/></Link></div></section> }

function About() {
  return <><PageHero title="A Global Approach to Corporate Travel." text="AELUSA is positioned as a corporate travel and hospitality management partner, built around business requirements and executive-level service." image="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section-pad"><div className="container-luxury grid gap-14 lg:grid-cols-2"><SectionTitle eyebrow="Who We Are" title="Built around trust, precision and a global outlook." text="Our approach brings travel, accommodation, mobility and hospitality requirements into one organised experience for businesses and their people."/><div className="space-y-9">{[["Mission","Make corporate travel easier to plan, coordinate and manage."],["Vision","Create a higher standard for business travel and hospitality management."],["Approach","Listen first, coordinate carefully and keep communication clear throughout the journey."]].map(([a,b])=><div key={a} className="border-t border-sand pt-6"><h3 className="font-display text-3xl">{a}</h3><p className="mt-2 text-sm leading-7 text-charcoal/60">{b}</p></div>)}</div></div></section>
    <section className="bg-white py-20"><div className="container-luxury grid gap-8 md:grid-cols-3">{["Professional","International","Discreet"].map((x,i)=><div key={x} className="border border-sand/70 p-8"><span className="text-xs text-champagne">0{i+1}</span><h3 className="mt-8 font-display text-4xl">{x}</h3><p className="mt-3 text-sm leading-7 text-charcoal/60">A consistent service mindset across corporate travel requirements.</p></div>)}</div></section><CTA/></>
}

function Services() {
  return <><PageHero title="Everything Your Business Needs to Travel Better." text="Corporate travel and hospitality services designed to work together." image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section-pad"><div className="container-luxury grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><ServiceCard key={s.title} service={s} Icon={icons[i]}/>)}</div></section><CTA/></>
}

function CorporateSolutions() {
  return <><PageHero title="Corporate Solutions, Built Around Your Business." text="Choose a travel structure around the way your people, leadership and teams actually move." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section-pad"><div className="container-luxury"><SectionTitle eyebrow="Corporate Solutions" title="One partner. Different business requirements."/><div className="mt-10 divide-y divide-sand border-y border-sand">{solutions.map(([a,b],i)=><div key={a} className="grid gap-4 py-8 sm:grid-cols-[100px_1fr_2fr] sm:items-center"><span className="text-xs font-semibold tracking-widest text-champagne">0{i+1}</span><h3 className="font-display text-3xl">{a}</h3><p className="text-sm leading-7 text-charcoal/60">{b}</p></div>)}</div></div></section><CTA/></>
}

function GlobalNetwork() {
  return <><PageHero eyebrow="Global Business Travel Network" title="Connecting Business Hubs Worldwide." text="A business-focused network view — not a tourism destination guide." image="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section-pad"><div className="container-luxury"><div className="grid gap-10 lg:grid-cols-[1fr_.8fr]"><div className="relative min-h-[470px] overflow-hidden rounded-sm bg-[#e8dfd3] p-7"><div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(#8f7b65 1px, transparent 1px)",backgroundSize:"28px 28px"}}/><div className="relative flex h-full items-center justify-center"><Globe2 size={240} strokeWidth={.6} className="text-champagne/70"/><div className="absolute inset-x-0 bottom-8 text-center font-display text-3xl">Global Business Travel Network</div></div></div><div><SectionTitle eyebrow="Key Markets" title="Business destinations that matter." text="AELUSA's interface can present priority markets while keeping the experience focused on corporate mobility."/><div className="mt-8 grid grid-cols-2 gap-3">{destinations.map(d=><div key={d} className="border border-sand bg-white p-5"><span className="text-xs text-champagne">•</span><div className="mt-2 font-display text-2xl">{d}</div><div className="mt-1 text-[9px] uppercase tracking-widest text-charcoal/45">Business market</div></div>)}</div></div></div></div></section><CTA/></>
}

function Contact() {
  return <><PageHero eyebrow="Corporate Assistance" title="Let's Plan Your Next Business Journey." text="Tell us what your business travel requirement looks like and our team can coordinate the next steps." image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section-pad"><div className="container-luxury grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><SectionTitle eyebrow="Get in Touch" title="Tell us where business takes you."/><div className="mt-9 space-y-5 text-sm text-charcoal/65"><p><strong className="text-charcoal">Email</strong><br/>enquiry@aelusa.com</p><p><strong className="text-charcoal">Phone</strong><br/>+91 22 0000 0000</p><p><strong className="text-charcoal">Office</strong><br/>Mumbai, India</p><p><strong className="text-charcoal">Business Hours</strong><br/>Mon–Sat · 9:00 AM–6:00 PM</p></div></div><form onSubmit={e=>e.preventDefault()} className="grid gap-5 rounded-sm border border-sand bg-white p-6 sm:grid-cols-2 sm:p-9"><Field label="Full Name" required/><Field label="Company Name" required/><Field label="Business Email" type="email" required/><Field label="Phone Number" required/><Field label="Destination"/><Field label="Number of Travellers"/><Field label="Travel Date" type="date"/><Field label="Travel Requirement"/><label className="sm:col-span-2"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-charcoal/60">Additional Requirements</span><textarea rows="5" className="w-full resize-none rounded-sm border border-sand bg-ivory/40 px-4 py-3 text-sm outline-none transition focus:border-champagne" placeholder="Tell us about your travel, accommodation, transfer or hospitality needs..."/></label><button className="btn-primary sm:col-span-2">Submit Travel Request <ArrowRight size={14}/></button></form></div></section></>
}
function Field({label,type="text",required=false}) { return <label><span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-charcoal/60">{label}{required && " *"}</span><input required={required} type={type} className="w-full rounded-sm border border-sand bg-ivory/40 px-4 py-3 text-sm outline-none transition focus:border-champagne"/></label> }

function App() {
  return <div className="min-h-screen bg-ivory"><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/corporate-solutions" element={<CorporateSolutions/>}/><Route path="/global-network" element={<GlobalNetwork/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/></div>
}
export default App;