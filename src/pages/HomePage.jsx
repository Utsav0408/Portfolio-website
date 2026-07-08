import { useEffect, useMemo, useRef, useState, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiMail, FiPlay } from 'react-icons/fi'

import { Container } from '../components/ui/Container.jsx'
import { Button } from '../components/ui/Button.jsx'
import { GlassCard } from '../components/ui/GlassCard.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { AnimatedBadge } from '../components/ui/AnimatedBadge.jsx'
import { Timeline } from '../components/ui/Timeline.jsx'
import { SkillCard } from '../components/ui/SkillCard.jsx'
import { ProjectCard } from '../components/ui/ProjectCard.jsx'
import { Modal } from '../components/ui/Modal.jsx'
import profilePortrait from '../assets/profile-portrait.svg'
import {
    site,
    socials,
    stats,
    highlights,
    aboutTimeline,
    education,
    certifications,
    extracurricular,
    skills,
    projectFilters,
    projects,
    experience,
} from '../constants/site.js'
import { fadeUp, staggerContainer, floatingBlob, wordContainer, wordItem } from '../animations/motionVariants.js'
import { animateReveal } from '../animations/gsap.js'
import { scrollToSection } from '../utils/scroll.js'
import { useToast } from '../context/useToast.js'

const HeroScene = lazy(() => import('../components/common/HeroScene.jsx'))

function HeroSection() {
    return (
        <section id="home" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
            <Container className="relative z-10 grid gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28">
                <div className="space-y-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                            <AnimatedBadge>Premium frontend portfolio</AnimatedBadge>
                            <AnimatedBadge>React 19</AnimatedBadge>
                            <AnimatedBadge>GSAP + Motion</AnimatedBadge>
                        </motion.div>

                        <motion.div variants={wordContainer} className="space-y-3">
                            <motion.p variants={wordItem} className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300/90">
                                {site.role}
                            </motion.p>
                            <motion.h1 variants={wordItem} className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl xl:text-[5.6rem]">
                                <span className="block text-gradient">{site.name}</span>
                                {/* <span className="mt-3 block text-balance text-white/90">
                  {site.role}
                </span> */}
                            </motion.h1>
                        </motion.div>

                        <motion.p variants={fadeUp} className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                            {site.headline}
                        </motion.p>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
                        <Button onClick={() => scrollToSection('projects')} size="lg">
                            View projects
                            <FiArrowUpRight />
                        </Button>
                        <Button variant="secondary" size="lg" href={site.resumeUrl} download>
                            Download resume
                            <FiDownload />
                        </Button>
                        <Button variant="ghost" size="lg" href={`mailto:${site.email}`}>
                            Contact
                            <FiMail />
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3 text-sm text-slate-300">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 transition hover:border-white/18 hover:bg-white/10"
                            >
                                <FiArrowUpRight />
                                {social.label}
                            </a>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <GlassCard key={stat.label} className="p-4">
                                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                            </GlassCard>
                        ))}
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div
                        variants={floatingBlob}
                        animate="animate"
                        className="aurora-glow absolute -left-12 top-12 h-56 w-56 opacity-70"
                    />
                    <Suspense
                        fallback={
                            <div className="glass-surface grid h-[420px] place-items-center rounded-[2rem] text-sm text-slate-300 md:h-[540px]">
                                Preparing 3D scene...
                            </div>
                        }
                    >
                        <HeroScene />
                    </Suspense>
                    <div className="absolute -bottom-4 left-4 right-4 grid gap-3 sm:left-auto sm:right-4 sm:max-w-sm">
                        <GlassCard className="p-4 backdrop-blur-2xl">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-sky-300/90">Now exploring</p>
                            <p className="mt-2 text-sm leading-6 text-slate-200">
                                High-end motion systems, command surfaces, and 3D storytelling for modern products.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </Container>

            <div className="absolute inset-x-0 bottom-0 z-0 border-y border-white/8 bg-white/5 py-3 backdrop-blur-xl">
                <Container className="overflow-hidden">
                    <div className="marquee-track gap-8 text-xs font-medium uppercase tracking-[0.34em] text-slate-300/80">
                        <div className="marquee-group">
                            <span>React 19</span>
                            <span>GSAP</span>
                            <span>Framer Motion</span>
                            <span>Three.js</span>
                            <span>Lenis</span>
                            <span>EmailJS</span>
                            <span>Vercel</span>
                        </div>
                        <div className="marquee-group" aria-hidden="true">
                            <span>React 19</span>
                            <span>GSAP</span>
                            <span>Framer Motion</span>
                            <span>Three.js</span>
                            <span>Lenis</span>
                            <span>EmailJS</span>
                            <span>Vercel</span>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

function AboutSection() {
    return (
        <section id="about" className="relative py-20 sm:py-24">
            <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
                    <SectionHeading
                        eyebrow="About"
                        title="A product-minded engineer with a designer's taste for detail."
                        description={site.shortIntro}
                    />
                    <GlassCard className="mt-8 overflow-hidden p-0">
                        <div className="bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(168,85,247,0.16))] p-6">
                            <div className="flex items-start gap-5">
                                <img
                                    src={profilePortrait}
                                    alt="Abstract portrait illustration"
                                    className="h-24 w-24 rounded-[1.5rem] border border-white/12 bg-white/6 object-cover shadow-2xl"
                                />
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">Profile</p>
                                    <h3 className="mt-2 text-2xl font-semibold text-white">{site.name}</h3>
                                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">
                                        {site.shortIntro}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-3 border-t border-white/10 p-6 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm leading-6 text-slate-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>

                <div className="space-y-6">
                    <SectionHeading
                        eyebrow="Timeline"
                        title="A concise trajectory shaped by product rigor and visual ambition."
                    />
                    <Timeline items={aboutTimeline} />
                    <div className="grid gap-4 sm:grid-cols-2">
                        {highlights.map((highlight) => (
                            <GlassCard key={highlight} className="p-5">
                                <p className="text-sm leading-7 text-slate-300">{highlight}</p>
                            </GlassCard>
                        ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {education.map((entry) => (
                            <GlassCard key={entry.school} className="p-5">
                                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Education</p>
                                <h3 className="mt-3 text-xl font-semibold text-white">{entry.school}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{entry.detail}</p>
                            </GlassCard>
                        ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {certifications.map((item) => (
                            <GlassCard key={item} className="p-5">
                                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Certification</p>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
                            </GlassCard>
                        ))}
                        {extracurricular.map((item) => (
                            <GlassCard key={item} className="p-5">
                                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Beyond work</p>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('Frontend')
    const skillGroups = useMemo(() => skills.filter((group) => group.category === activeCategory), [activeCategory])

    return (
        <section id="skills" className="relative py-20 sm:py-24">
            <Container>
                <SectionHeading
                    eyebrow="Skills"
                    title="A modular toolkit tuned for premium frontend delivery."
                    description="Each category is intentionally curated to cover product interfaces, systems work, and the infrastructure around them."
                />
                <div className="mt-8 flex flex-wrap gap-2">
                    {skills.map((group) => (
                        <button
                            key={group.category}
                            type="button"
                            onClick={() => setActiveCategory(group.category)}
                            className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === group.category
                                ? 'border-white/14 bg-white text-slate-950'
                                : 'border-white/10 bg-white/6 text-slate-300 hover:border-white/18 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {group.category}
                        </button>
                    ))}
                </div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
                >
                    {skillGroups[0].items.map((item) => (
                        <SkillCard key={item.name} item={item} />
                    ))}
                </motion.div>
            </Container>
        </section>
    )
}

function ProjectsSection() {
    const [query, setQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()

        return projects.filter((project) => {
            const matchesFilter = activeFilter === 'All' || project.category === activeFilter
            const matchesQuery =
                !normalizedQuery ||
                [project.title, project.summary, project.description, ...project.stack].join(' ').toLowerCase().includes(normalizedQuery)

            return matchesFilter && matchesQuery
        })
    }, [activeFilter, query])

    return (
        <section id="projects" className="relative py-20 sm:py-24">
            <Container>
                <SectionHeading
                    eyebrow="Projects"
                    title="Selected work that blends product logic with visual ambition."
                    description="Search the case studies, filter by category, and open the modal for a deeper look at each concept."
                />

                <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-2">
                        {projectFilters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter
                                    ? 'border-white/14 bg-white text-slate-950'
                                    : 'border-white/10 bg-white/6 text-slate-300 hover:border-white/18 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <label className="glass-surface flex items-center gap-3 rounded-full px-4 py-3 text-sm text-slate-300">
                        <FiPlay className="text-sky-300" />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search projects"
                            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                    </label>
                </div>

                <div className="mt-8 grid gap-4 xl:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} onOpen={setSelectedProject} />
                    ))}
                </div>
            </Container>

            <Modal
                open={Boolean(selectedProject)}
                title={selectedProject?.title ?? ''}
                onClose={() => setSelectedProject(null)}
                footer={
                    selectedProject ? (
                        <div className="flex flex-wrap gap-3">
                            <Button type="button" onClick={() => scrollToSection('contact')}>
                                Discuss project
                                <FiArrowUpRight />
                            </Button>
                            <Button variant="secondary" type="button" onClick={() => scrollToSection('contact')}>
                                Contact
                            </Button>
                        </div>
                    ) : null
                }
            >
                {selectedProject ? (
                    <div className="space-y-6">
                        <div className={`rounded-[1.75rem] bg-gradient-to-br ${selectedProject.accent} p-6`}>
                            <div className="grid gap-3 sm:grid-cols-3">
                                {selectedProject.frames.map((frame) => (
                                    <div key={frame} className="rounded-2xl border border-white/12 bg-slate-950/24 px-4 py-4 text-sm text-white backdrop-blur-2xl">
                                        {frame}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-sm leading-7 text-slate-300">{selectedProject.description}</p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {selectedProject.details.map((detail) => (
                                <GlassCard key={detail} className="p-4">
                                    <p className="text-sm leading-7 text-slate-300">{detail}</p>
                                </GlassCard>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.stack.map((tech) => (
                                <span key={tech} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-slate-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ) : null}
            </Modal>
        </section>
    )
}

function ExperienceSection() {
    return (
        <section id="experience" className="relative py-20 sm:py-24">
            <Container>
                <SectionHeading
                    eyebrow="Experience"
                    title="Leadership, craft, and execution across product and brand layers."
                    description="The timeline below highlights the scope of work that shaped the way this portfolio is built."
                />
                <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <Timeline items={experience} />
                    <div className="space-y-4">
                        <GlassCard className="p-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">Approach</p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">Motion should support clarity, not obscure it.</h3>
                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                Every animation in this portfolio exists to improve hierarchy, momentum, or feedback. Nothing moves without a reason.
                            </p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">Focus areas</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['System design', 'Performance', 'Accessibility', '3D scenes', 'Team enablement', 'Brand expression'].map((item) => (
                                    <span key={item} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-slate-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Container>
        </section>
    )
}

function ContactSection() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState('idle')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const name = String(formData.get('name') || '').trim()
        const email = String(formData.get('email') || '').trim()
        const message = String(formData.get('message') || '').trim()

        if (!name || !email || !message) {
            toast({
                title: 'Missing required fields',
                message: 'Please complete your name, email, and message before sending.',
                tone: 'warning',
            })
            return
        }

        setIsSubmitting(true)

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS environment variables are missing.')
            }

            const emailjs = await import('@emailjs/browser')
            await emailjs.default.sendForm(serviceId, templateId, form, { publicKey })

            form.reset()
            setFormStatus('success')
            toast({
                title: 'Message sent',
                message: 'Your note is on its way. Expect a reply soon.',
                tone: 'success',
            })
        } catch (error) {
            console.error(error)
            setFormStatus('error')
            toast({
                title: 'Email setup required',
                message: 'Add EmailJS environment variables to enable sending from the form.',
                tone: 'error',
            })
        } finally {
            setIsSubmitting(false)
            window.setTimeout(() => setFormStatus('idle'), 1800)
        }
    }

    return (
        <section id="contact" className="relative py-20 sm:py-24">
            <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                    <SectionHeading
                        eyebrow="Contact"
                        title="Let's design something that feels worth remembering."
                        description="This form is wired for EmailJS and includes accessible validation plus success feedback."
                    />
                    <div className="mt-8 space-y-4">
                        <GlassCard className="p-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">Location</p>
                            <p className="mt-3 text-lg font-medium text-white">{site.location}</p>
                            <p className="mt-2 text-sm text-slate-300">{site.email}</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">Availability</p>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                Open to select consulting, product design, and frontend leadership opportunities.
                            </p>
                        </GlassCard>
                    </div>
                </div>

                <GlassCard className="overflow-hidden p-0">
                    <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 text-sm text-slate-200">
                                <span>Name</span>
                                <input
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500"
                                />
                            </label>
                            <label className="space-y-2 text-sm text-slate-200">
                                <span>Email</span>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@company.com"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500"
                                />
                            </label>
                        </div>
                        <label className="space-y-2 text-sm text-slate-200">
                            <span>Subject</span>
                            <input
                                name="subject"
                                placeholder="Project inquiry"
                                className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500"
                            />
                        </label>
                        <label className="space-y-2 text-sm text-slate-200">
                            <span>Message</span>
                            <textarea
                                name="message"
                                required
                                rows="7"
                                placeholder="Tell me about the product, scope, and timeline."
                                className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500"
                            />
                        </label>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send message'}
                                <FiMail />
                            </Button>
                            <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                                {formStatus === 'success' ? 'Message delivered' : formStatus === 'error' ? 'Check email setup' : 'All fields required'}
                            </p>
                        </div>
                    </form>
                </GlassCard>
            </Container>
        </section>
    )
}

export default function HomePage() {
    const rootRef = useRef(null)

    useEffect(() => {
        return animateReveal(rootRef.current)
    }, [])

    return (
        <>
            <Helmet>
                <title>Utsav Rai</title>
                <meta
                    name="description"
                    content="A premium portfolio experience with immersive motion, 3D scenes, and carefully crafted product storytelling."
                />
            </Helmet>

            <div ref={rootRef} data-gsap-root>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </div>
        </>
    )
}