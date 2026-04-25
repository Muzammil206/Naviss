"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SR from "@/components/ui/SR";

type FilterType = "All" | "Live" | "In Development" | "Completed";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [demoRequestOpen, setDemoRequestOpen] = useState(false);
  const [requestedProject, setRequestedProject] = useState<typeof PROJECTS[0] | null>(null);

  const filtered = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    // Check if project has status field, otherwise default to "Completed"
    const status = "status" in p ? p.status : "Completed";
    return status === filter;
  });

  const handleRequestDemo = (project: typeof PROJECTS[0]) => {
    setRequestedProject(project);
    setDemoRequestOpen(true);
  };

  return (
    <>
      <Nav />

      <main>
        {/* ─── Hero ────────────────────────────────────── */}
        <section className="rule-b bg-obsidian text-linen pt-32 pb-20">
          <div className="wrap">
            <SR>
              <span className="t-label text-verdant block mb-6">002 — Our Work</span>
            </SR>
            <SR delay={80}>
              <h1 className="t-hero mb-8" style={{ lineHeight: 0.88 }}>
                Real solutions.
                <br />
                <em className="text-verdant">Real impact.</em>
              </h1>
            </SR>
            <SR delay={120}>
              <p className="t-body-sm max-w-2xl text-linen/70 mb-8">
                From multi-country data portals serving thousands of users daily to
                real-time environmental monitoring systems — we build geospatial
                platforms that solve actual problems for governments, NGOs, and
                enterprises across West Africa.
              </p>
            </SR>
            <SR delay={160}>
              <div className="flex flex-wrap gap-6 items-center">
                <div>
                  <span className="stat-n text-4xl text-verdant">6</span>
                  <span className="t-label text-linen/50 text-xs ml-2">Projects</span>
                </div>
                <div>
                  <span className="stat-n text-4xl text-verdant">8</span>
                  <span className="t-label text-linen/50 text-xs ml-2">Countries</span>
                </div>
                <div>
                  <span className="stat-n text-4xl text-verdant">50K+</span>
                  <span className="t-label text-linen/50 text-xs ml-2">Daily Users</span>
                </div>
              </div>
            </SR>
          </div>
        </section>

        {/* ─── Filter ──────────────────────────────────── */}
        <section className="py-6 bg-linen rule-b">
          <div className="wrap">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="t-label text-stone text-xs mr-2">Filter by:</span>
              {(["All", "Live", "In Development", "Completed"] as FilterType[]).map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      filter === f
                        ? "bg-verdant text-linen"
                        : "bg-cloud text-stone hover:bg-stone/10"
                    }`}
                  >
                    {f}
                  </button>
                )
              )}
            </div>
          </div>
        </section>

        {/* ─── Projects Grid ───────────────────────────── */}
        <section className="py-16 bg-cloud">
          <div className="wrap">
            <div className="grid md:grid-cols-2 gap-10">
              {filtered.map((project, i) => {
                const status = "status" in project ? project.status : "Completed";
                const liveUrl = "liveUrl" in project ? project.liveUrl : null;
                
                return (
                  <SR key={project.id} delay={i * 80}>
                    <article className="group bg-linen overflow-hidden hover:shadow-2xl transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Status badge */}
                        <div className="absolute top-6 right-6">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                              status === "Live"
                                ? "bg-verdant/90 text-linen"
                                : status === "In Development"
                                ? "bg-blue-500/90 text-linen"
                                : "bg-obsidian/80 text-linen"
                            }`}
                          >
                            {status}
                          </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                          <span className="t-label text-linen/90 text-xs">
                            Click to view details →
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="f-serif font-bold text-2xl text-obsidian leading-tight flex-1">
                            {project.title}
                          </h3>
                        </div>

                        <div className="mb-4">
                          <p className="t-label text-stone text-xs mb-1">Client</p>
                          <p className="f-sans text-obsidian text-sm font-medium">
                            {project.client}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="t-label text-stone text-xs mb-1">Region</p>
                            <p className="f-sans text-obsidian text-sm">
                              {project.region}
                            </p>
                          </div>
                          <div>
                            <p className="t-label text-stone text-xs mb-1">Year</p>
                            <p className="f-sans text-obsidian text-sm">
                              {project.year}
                            </p>
                          </div>
                        </div>

                        <p className="t-body-sm mb-6 line-clamp-3">
                          {project.body}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-cloud text-stone text-xs f-mono"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-2 py-1 text-stone/50 text-xs">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Impact */}
                        <div className="mb-6 p-4 bg-cloud/50 rule-l" style={{ borderLeftWidth: "3px", borderColor: "#1B5E3B" }}>
                          <p className="t-label text-verdant text-xs mb-1">Impact</p>
                          <p className="f-sans text-obsidian text-sm font-medium">
                            {project.impact}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          {liveUrl ? (
                            <>
                              <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 btn-v rounded-full text-center"
                              >
                                View Live Demo
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M1 9L9 1M9 1H3M9 1V7"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </a>
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="px-6 py-3 border-2 border-stone/20 text-stone hover:border-verdant hover:text-verdant transition-colors rounded-full f-sans text-sm font-medium"
                              >
                                Details
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="flex-1 btn-v rounded-full"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => handleRequestDemo(project)}
                                className="btn-o rounded-full"
                              >
                                Request Demo
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  </SR>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="t-body-sm text-stone">
                  No projects match the selected filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────── */}
        <section className="rule-b py-20 bg-linen">
          <div className="wrap max-w-4xl text-center">
            <SR>
              <h2 className="t-h2 text-obsidian mb-6">
                Have a project in mind?
              </h2>
            </SR>
            <SR delay={80}>
              <p className="t-body-sm max-w-2xl mx-auto mb-10">
                Whether you need a custom GIS platform, satellite data analysis, or
                geospatial capacity building — let's discuss how we can help you
                achieve your goals.
              </p>
            </SR>
            <SR delay={120}>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-v rounded-full">
                  Start a Conversation
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:contact@naviss.tech"
                  className="btn-o rounded-full"
                >
                  contact@naviss.tech
                </a>
              </div>
            </SR>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── Project Detail Modal ────────────────────── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestDemo={() => {
            handleRequestDemo(selectedProject);
            setSelectedProject(null);
          }}
        />
      )}

      {/* ─── Demo Request Modal ──────────────────────── */}
      {demoRequestOpen && requestedProject && (
        <DemoRequestModal
          project={requestedProject}
          onClose={() => {
            setDemoRequestOpen(false);
            setRequestedProject(null);
          }}
        />
      )}
    </>
  );
}

function ProjectModal({
  project,
  onClose,
  onRequestDemo,
}: {
  project: typeof PROJECTS[0];
  onClose: () => void;
  onRequestDemo: () => void;
}) {
  const status = "status" in project ? project.status : "Completed";
  const liveUrl = "liveUrl" in project ? project.liveUrl : null;
  const features = "features" in project ? project.features : null;
  const deliverables = "deliverables" in project ? project.deliverables : null;
  const tech = "tech" in project ? project.tech : null;
  const testimonial = "testimonial" in project ? project.testimonial : null;

  return (
    <div
      className="fixed inset-0 z-[9900] flex items-center justify-center p-6 overflow-y-auto"
      onClick={onClose}
      style={{
        background: "rgba(20,18,16,0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-linen w-full max-w-5xl my-8"
        style={{
          boxShadow: "0 25px 100px rgba(20,18,16,0.5)",
        }}
      >
        {/* Header Image */}
        <div className="relative h-96">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,18,16,0.95) 0%, transparent 70%)",
            }}
          />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-14 h-14 bg-linen/20 backdrop-blur-md border border-linen/30 flex items-center justify-center hover:bg-linen/40 transition-colors"
            aria-label="Close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#F0EEE9"
              strokeWidth="2"
            >
              <path d="M2 2L14 14M14 2L2 14" />
            </svg>
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`px-4 py-2 rounded-full text-xs font-semibold ${
                  status === "Live"
                    ? "bg-verdant text-linen"
                    : status === "In Development"
                    ? "bg-blue-500 text-linen"
                    : "bg-obsidian/80 text-linen"
                }`}
              >
                {status}
              </span>
            </div>
            <h2 className="f-serif font-bold text-4xl text-linen mb-2">
              {project.title}
            </h2>
            <p className="t-label text-verdant text-sm">{project.client}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 max-h-[60vh] overflow-y-auto">
          {/* Meta */}
          <div className="grid grid-cols-3 gap-6 mb-8 pb-8 rule-b">
            <div>
              <p className="t-label text-stone text-xs mb-2">Region</p>
              <p className="f-sans text-obsidian font-medium">{project.region}</p>
            </div>
            <div>
              <p className="t-label text-stone text-xs mb-2">Year</p>
              <p className="f-sans text-obsidian font-medium">{project.year}</p>
            </div>
            <div>
              <p className="t-label text-stone text-xs mb-2">Sector</p>
              <p className="f-sans text-obsidian font-medium">{project.sector}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="t-label text-verdant mb-4">Overview</h3>
            <p className="t-body-sm leading-relaxed">{project.body}</p>
          </div>

          {/* Features */}
          {features && features.length > 0 && (
            <div className="mb-8">
              <h3 className="t-label text-verdant mb-4">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-verdant flex-shrink-0 mt-1">✓</span>
                    <span className="t-body-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deliverables */}
          {deliverables && deliverables.length > 0 && (
            <div className="mb-8">
              <h3 className="t-label text-verdant mb-4">Deliverables</h3>
              <ul className="space-y-3">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-verdant flex-shrink-0 mt-1">→</span>
                    <span className="t-body-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact */}
          <div className="mb-8 p-6 bg-cloud rule-l" style={{ borderLeftWidth: "4px", borderColor: "#1B5E3B" }}>
            <h3 className="t-label text-verdant mb-3">Impact & Outcomes</h3>
            <p className="f-sans text-obsidian font-semibold text-lg">
              {project.impact}
            </p>
          </div>

          {/* Technology */}
          {tech && tech.length > 0 && (
            <div className="mb-8">
              <h3 className="t-label text-verdant mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-2 bg-cloud text-iron f-mono text-sm border border-stone/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="mb-8 p-8 bg-obsidian text-linen">
              <blockquote className="text-lg mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="rule-t pt-4" style={{ borderColor: "rgba(240,238,233,0.2)" }}>
                <p className="f-sans font-semibold">{testimonial.author}</p>
                <p className="t-label text-linen/60 text-xs mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-6 rule-t">
            {liveUrl ? (
              <>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-v rounded-full text-center"
                >
                  View Live Demo
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <button onClick={onClose} className="btn-o rounded-full">
                  Close
                </button>
              </>
            ) : (
              <>
                <button onClick={onRequestDemo} className="flex-1 btn-v rounded-full">
                  Request Demo
                </button>
                <button onClick={onClose} className="btn-o rounded-full">
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoRequestModal({
  project,
  onClose,
}: {
  project: typeof PROJECTS[0];
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled data
    const subject = `Demo Request: ${project.title}`;
    const body = `
Demo Request for: ${project.title}

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim();

    window.location.href = `mailto:contact@naviss.tech?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
        onClick={onClose}
        style={{
          background: "rgba(20,18,16,0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-linen p-10 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 rounded-full bg-verdant/10 flex items-center justify-center mx-auto mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#1B5E3B"
              strokeWidth="3"
            >
              <path d="M6 16l6 6L26 10" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="f-serif font-bold text-2xl text-obsidian mb-4">
            Request Sent!
          </h3>
          <p className="t-body-sm mb-8">
            Your default email client should have opened with a pre-filled message.
            If not, please email us directly at contact@naviss.tech.
          </p>
          <button onClick={onClose} className="btn-v rounded-full w-full">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 overflow-y-auto"
      onClick={onClose}
      style={{
        background: "rgba(20,18,16,0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-linen w-full max-w-2xl my-8"
      >
        {/* Header */}
        <div className="p-8 rule-b bg-cloud">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="f-serif font-bold text-2xl text-obsidian mb-2">
                Request a Demo
              </h3>
              <p className="t-label text-verdant text-sm">{project.title}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-stone/10 transition-colors"
              aria-label="Close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#4A4540"
                strokeWidth="2"
              >
                <path d="M1 1L13 13M13 1L1 13" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="t-label text-stone text-xs block mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-cloud border border-stone/20 f-sans text-obsidian focus:outline-none focus:border-verdant transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="t-label text-stone text-xs block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-cloud border border-stone/20 f-sans text-obsidian focus:outline-none focus:border-verdant transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="t-label text-stone text-xs block mb-2">
              Organization *
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
              className="w-full px-4 py-3 bg-cloud border border-stone/20 f-sans text-obsidian focus:outline-none focus:border-verdant transition-colors"
              placeholder="Your Company/Organization"
            />
          </div>

          <div>
            <label className="t-label text-stone text-xs block mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 bg-cloud border border-stone/20 f-sans text-obsidian focus:outline-none focus:border-verdant transition-colors"
              placeholder="+234 800 000 0000"
            />
          </div>

          <div>
            <label className="t-label text-stone text-xs block mb-2">
              Tell us about your needs
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 bg-cloud border border-stone/20 f-sans text-obsidian focus:outline-none focus:border-verdant transition-colors resize-none"
              placeholder="What would you like to see in the demo? Any specific requirements or questions?"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 btn-v rounded-full">
              Send Request
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-o rounded-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}