import React from 'react'
import './works.css'
import Todo from '../../assets/todo.jpg'
import Netflix from '../../assets/netflix.jpg'
import Music from '../../assets/music.png'
import Budget from '../../assets/budget.png'
import Coming from '../../assets/coming.jpg'
import Weather from '../../assets/weather.png'
const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
    <div className="project">
      <a href="https://github.com/viratsingh97/Budget_Advisor_virat_singh"><img src={Budget} alt="Budget Tracker" className="worksImg" /></a>
        
        <p>Expense Tracker</p>
    </div>

    <div className="project">
      <a href="https://soundora-music-webapp.onrender.com/">
                  <img src={Music} alt="Music Player" className="worksImg" />

      </a>
        <p>Music Player</p>
    </div>

    <div className="project">
      <a href="https://github.com/viratsingh97/weather-App">
              <img src={Weather} alt="Weather App" className="worksImg" />

      </a>
        <p>Weather App</p>
    </div>

    <div className="project">
      <a href="https://github.com/viratsingh97/TODO-App">
                <img src={Todo} alt="Todo App" className="worksImg" />

      </a>
        <p>Todo App</p>
    </div>

    <div className="project">
      <a href="https://cerulean-sprinkles-02c0b6.netlify.app/">
                <img src={Netflix} alt="Netflix Clone" className="worksImg" />

      </a>
        <p>Netflix Clone</p>
    </div>

    <div className="project">
        <img src={Coming} alt="Coming Soon" className="worksImg" />
        <p>Coming Soon</p>
    </div>
</div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works
