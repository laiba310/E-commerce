import Image from "next/image";
import React from 'react';
import Header from "@/components/header";

export function Resume() {
  return (
        <div>
            <Header />

            <div className="hea6">Resume</div>

            <div id="content" className="page-contenttt">
      <div className="row">
        <div className="block-title">
          <h2>Education</h2>
        </div>

        <div id="timeline_1" className="timeline">
          
            <div className="timeline-item">
                <div className="timeline-circle">2024</div>
                <div className="timeline-content">
                    <h5 className="item-period">Currently Enrolled</h5>
                    <h4 className="item-title">Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse</h4>
                    <p>This immersive program equips me with in-depth knowledge of the latest advancements in artificial intelligence, Web 3.0, and the metaverse, enhancing my expertise and preparing me for future industry demands.</p>
                </div>
            </div> 
            <div className="timeline-item">
                <div className="timeline-circle">2024</div>
                <div className="timeline-content">
                    <h5 className="item-period">Intermediate Completed</h5>
                    <h4 className="item-title">St Patrick's College</h4>
                    <p>My studies at St. Patrick's College provided me with a strong academic foundation, focusing on analytical skills and a deeper understanding of science and technology, setting a solid path for my future educational pursuits.</p>
                </div>
            </div> 

           
            <div className="timeline-item">
                <div className="timeline-circle">2022</div>
                <div className="timeline-content">
                    <h5 className="item-period">Schooling Completed</h5>
                    <h4 className="item-title">The Smart School</h4>
                    <p>My journey at The Smart School developed my passion for learning, emphasizing academic excellence and character development, which motivated my pursuit of higher education in tech-related fields.</p>
                </div>
          </div>
        </div>
      </div>
    </div>


    <div className="col-xs-12 col-sm-6">
      <div className="block-titlee">
        <h2>Coding Skills</h2>
      </div>

      <div className="skills">
        <div className="skill">
          <p>HTML / CSS <span>100%</span></p>
          <div className="progress">
            <div className="progress-bar" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="skill">
          <p>C++ <span>95%</span></p>
          <div className="progress">
            <div className="progress-bar" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className="skill">
          <p>Node.js <span>60%</span></p>
          <div className="progress">
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </div>
          
        </div>

      <div className="skill">
          <p>TypeScript <span>75%</span></p>
          <div className="progress">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
          
        </div>
      </div>
    </div>
    </div>

  )}
  export default Resume;
