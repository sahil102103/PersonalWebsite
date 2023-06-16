/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Financial Advisor and ATM Finder (First prize winner)",
    description:
      "Won first place at a Major League Hacking Hackathon against 85+ teams by creating a web app to help people with financials based on their bank balance (Using OpenAI and Capital One's API's) and find ATMs near them.",
    url: "https://github.com/sahil10210/capitalOneHack.git",
  },
  {
    title: "MathGPT (Featured in Northeastern News)",
    description:
      "Attended a hackathon and created a web app that uses OpenAI's Davinci -- 003 to solve math problems. This was a group project for a Harvard AR/VR hackathon.",
    url: "https://github.com/sahil102103/mathsGPT.git",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and software engineering abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "War Card Game",
    description:
      "Created from an online tutorial, recreated the famous cardgame 'War' in Apple's programming language: Swift.",
    url: "",
  },
  {
    title: "Punch Activated Flamethrower",
    description:
      "A fun side project to create a punch activated flamethrower using an Arduino, accelerometer, and an Arc Lighter. Self-taught mechanical and electrical engineering concepts for its creation",
    url: "",
  },
  {
    title: "Java Maze Game (BFS/ DFS & Player controls)",
    description:
      "The Java Maze Game challenges players with intricate mazes, while also showcasing the workings of Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms. The mazes are uniquely generated using Kruskal's and Dijkstra's Algorithm.",
    url: "https://github.com/sahil102103/Maze",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
