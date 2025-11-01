import React, { useState } from 'react'

const sampleAbout = [
    {
        id: 1,
        title: 'HTML',
        short: 'Theatre website',
        details: 
            'Created a website for a local theatre, in order to display showtimes and locations.',
        link: '#'
    },
    {
        id: 2,
        title: 'CSS',
        short: 'website styling',
        details:
            'Styled a personal photo gallery using CSS and tailwind',
        link: '#'
    },
    {
        id: 3,
        title: 'JavaScript',
        short: 'Interactive To-Do List',
        details:
            'Developed a dynamic to-do list application that allows users to add, edit, and delete tasks with real-time updates.',
        link: 'innerg-todo-vercel.app'
    },
    {
        id: 4,
        title: 'React',
        short: 'Pokedex app',
        details: 'A pokedx to look up pokemon using React and PokeAPI.',
        link: '#'
    },
    {
        id: 5,
        title: 'SQL',
        short: 'Database Management',
        details:
            'Designed and managed a relational database for a small business to track inventory and sales using SQL.',
        link: '#'
    },
    {
        id: 6,
        title: 'FireStore',
        short: 'Ecommerce web app',
        details:
            'Simple Ecommerce app using fakestore api and firestore, collecting usernames, passwords, orders, etc.',
        link: 'https://github.com/Tsardi/firebase'
    }
]

function AboutCard({ about }) {
    const [flipped, setFlipped] =useState(false)

    const toggle = () => setFlipped(f =>!f)
    const onKeyDown = e => {
        if (e.key === 'Enter' || e.key === ' '){
            e.preventDefault()
            toggle()
        }
    }
    return (
        <div
        className="about-card"
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={onKeyDown}
        >
            <div className={`card-inner ${flipped ? 'is-flipped' : ''}`}>
                <div className="card-face card-front">
                    <h3>{about.title}</h3>
                    <p>{about.short}</p>
                </div>
                <div className="card-face card-back">
                    <h4>Details</h4>
                    <p>{about.details}</p>
                    {about.link && (
                        <p>
                            <a href={about.link} target="_blank" rel="noreferrer">
                                View More
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

function About() {
    return (
        <section id="about" className="section about-section">
            <h1>About</h1>
            <h2>Hi, my name is Terrence Sardin</h2>
            <p>
                I am originally from Chicago where I started building computers and working with Photoshop in high school while attending Perspectives High School of Technology.
                I moved to Kansas after receiving a scholarship to play basketball. After completing a degree in Health and Human Performance, I decided to take my skills to software development.
                Through my certification at Coding Temple, I have gained experience in full-stack development and have worked on several projects that showcase my abilities.
            </p>
            <p>Now I get to bring ideas to fruition using skills like:</p>
            <div className="cards-grid">
                {sampleAbout.map(a => (
                    <AboutCard key={a.id} about={a} />
                ))}
            </div>
                </section>
    )
}

export default About