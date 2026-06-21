import React from 'react'
import './skills.css'
import UiDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png';
import Machine from '../../assets/machine-learning.png';
import Dsa from '../../assets/dsa.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I build responsive web applications, solve algorithmic problems, and continuously explore new technologies to improve my software development skills.</span>
        
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>Designing modern, responsive, and user-friendly websites that deliver seamless digital experiences.</p>
            </div>
            </div>

        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Machine} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Machine Learning</h2>
                <p>Building machine learning models to solve real-world problems using data-driven approaches.</p>
            </div>
            </div>

        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Dsa} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Problem Solving</h2>
                <p>Solved 200+ coding problems on LeetCode, focusing on efficient algorithms and optimized solutions.</p>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Skills;
