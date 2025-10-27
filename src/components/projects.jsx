import React, { useState } from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Pokedex',
    short: 'A small Pokedex app to look up Pokémon and their moves.',
    details:
      'Built with React, JavaScript, and PokeAPI.',
    link: 'https://github.com/Tsardi/Pokedex',
  },
  { 
    id: 2, 
    title: 'Theatre site', 
    short: 'Weather app based on user location.',
    details: 'A weather app using the users location that displays the weather for the current day and future days.',
    link: 'https://github.com/terrencejay/theatre.git' },
  { id: 3, title: 'Rental Property Calculator',
    short: 'Simple rental property calculator using Python.',
    details: 'Calculator app used to complete mathmatical equations. It can help property managers determine cash return for a property.', 
    link: 'https://github.com/terrencejay/rental_property_calc.git' },
]

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped(f => !f)
  const onKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className="project-card"
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className={`card-inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-front">
          <h3>{project.title}</h3>
          <p>{project.short}</p>
        </div>
        <div className="card-face card-back">
          <h4>Details</h4>
          <p>{project.details}</p>
          {project.link && (
            <p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h1>Projects</h1>
      <p>Here are some projects I'm proud of. Click or press Enter on a card to flip it.</p>

      <div className="cards-grid">
        {sampleProjects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
