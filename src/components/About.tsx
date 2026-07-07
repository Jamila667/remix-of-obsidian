import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Bruce</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Early work - Street photography"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PARSONS SCHOOL OF DESIGN - NEW YORK / USA
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              It may not be obvious, but Bruce studied computer science at MIT, 
              with a minor in visual arts. Preferring lenses to algorithms, 
              he quickly abandoned a promising tech career to study Photography 
              and Visual Storytelling at Parsons School of Design in New York.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "NAMED BY THE<br />
            <span className="text-white underline underline-offset-8">2023 APERTURE AWARDS</span><br />
            AS ONE OF THE TOP TEN<br />
            PHOTOGRAPHERS IN THE WORLD."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            GLOBAL PHOTOGRAPHY<br />
            DIRECTOR RANK
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Bruce spent a little over a year in New York before moving to 
              London as a Junior Photographer for Magnum Photos. He met some 
              incredible people at the legendary agency, and they're still 
              friends to this day.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Magnum Photos Office"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              MAGNUM PHOTOS - LONDON / UK
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Bruce shooting for National Geographic"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SHOOTING FOR NATIONAL GEOGRAPHIC - PATAGONIA / AR<br />
              (2019)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              From London, Bruce moved to Berlin with VII Photo Agency. Where he 
              worked under a great Art Director, Hans Mueller. From there he 
              went on to build a truly global career, first as Staff Photographer 
              then as Creative Director for the likes of National Geographic, 
              Time Magazine, and The New York Times, before finally going 
              independent in 2020.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
