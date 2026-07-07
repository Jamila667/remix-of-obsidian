import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Photographer & Creative Director',
    company: 'National Geographic',
    location: 'Washington D.C.',
    period: '2020 — Present',
    description: 'Leading visual storytelling projects across five continents. Responsible for conceptualizing and executing long-form documentary series, managing a team of 8 photographers, and establishing visual guidelines for flagship publications.',
    skills: ['Documentary Photography', 'Team Leadership', 'Art Direction', 'Visual Storytelling', 'Project Management'],
  },
  {
    title: 'Staff Photographer',
    company: 'The New York Times',
    location: 'New York, NY',
    period: '2018 — 2020',
    description: 'Covered breaking news, features, and editorial assignments for print and digital platforms. Specialized in portrait photography and human interest stories. Work featured on front page 47 times.',
    skills: ['Editorial Photography', 'Breaking News', 'Portrait Photography', 'Deadline Management', 'Photo Editing'],
  },
  {
    title: 'Creative Director',
    company: 'Time Magazine',
    location: 'New York, NY',
    period: '2016 — 2018',
    description: 'Oversaw visual direction for special issues and cover stories. Collaborated with editors to develop compelling visual narratives. Managed relationships with contributing photographers worldwide.',
    skills: ['Creative Direction', 'Visual Strategy', 'Team Coordination', 'Brand Identity', 'Magazine Publishing'],
  },
  {
    title: 'Staff Photographer',
    company: 'VII Photo Agency',
    location: 'Berlin, Germany',
    period: '2014 — 2016',
    description: 'Worked on long-term documentary projects focusing on social issues and human rights. Assignments included coverage in conflict zones and humanitarian crises across Europe and Middle East.',
    skills: ['Documentary', 'Conflict Photography', 'Humanitarian Coverage', 'Long-form Projects', 'Risk Assessment'],
  },
  {
    title: 'Junior Photographer',
    company: 'Magnum Photos',
    location: 'London, UK',
    period: '2012 — 2014',
    description: 'Assisted senior photographers on international assignments. Developed technical skills in both digital and analog photography. First solo exhibition at the agency gallery in 2013.',
    skills: ['Analog Photography', 'Digital Processing', 'Studio Lighting', 'Archive Management', 'Exhibition Curation'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
