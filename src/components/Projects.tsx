function Projects() {
  // OPTIMIZE CODE WHEN U HAVE TIME!!!
  window.addEventListener("scroll", () => {
    const project1 = document.getElementById("id-1")!;
    const rect1 = project1.getBoundingClientRect();
    const project2 = document.getElementById("id-2")!;
    const rect2 = project2.getBoundingClientRect();
    const project3 = document.getElementById("id-3")!;
    const rect3 = project3.getBoundingClientRect();
    const project4 = document.getElementById("id-4")!;
    const rect4 = project4.getBoundingClientRect();
    const project5 = document.getElementById("id-5")!;
    const rect5 = project5.getBoundingClientRect();
    const project6 = document.getElementById("id-6")!;
    const rect6 = project6.getBoundingClientRect();
    if (rect6.top <= 0) {
      project5.classList.remove("fixed");
      project6.classList.remove("relative");
      project6.classList.add("fixed");
    } else if (rect5.top <= 0) {
      project4.classList.remove("fixed");
      project5.classList.remove("relative");
      project5.classList.add("fixed");
    } else if (rect4.top <= 0) {
      project3.classList.remove("fixed");
      project4.classList.remove("relative");
      project4.classList.add("fixed");
    } else if (rect3.top <= 0) {
      project2.classList.remove("fixed");
      project3.classList.remove("relative");
      project3.classList.add("fixed");
    } else if (rect2.top <= 0) {
      project1.classList.remove("fixed");
      project2.classList.remove("relative");
      project2.classList.add("fixed");
    } else if (rect1.top <= 0) {
      console.log(rect1.top);
      project1.classList.remove("relative");
      project1.classList.add("fixed");
    }
  });
  return (
    /**
     *  There's a LOT of potential with the Copernicus Sentinel satellites (which are free to access from the ESA) and figuring out how to do useful stuff related to ecology. Lots of biologists have spearheaded some of this, but they often don't have the software skills to make their results easy to use, or e.g. churn it through some ML model to predict something.
     *  )
     */

    <>
      <div className="projectSlide">
        <div className="projectContents">
          <div className="relative" id="id-1">
            <h1 className="projectHeader">01</h1>
            <div className="projectBody">
              <h1 className="projectTitle">Personal Portfolio</h1>
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/React.png"
                alt="React"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Typescript_logo.png"
                alt="TypeScript"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/css-logo.png"
                alt="CSS"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/html-logo.png"
                alt="HTML"
              />
              <div className="projectParagraph">
                <p>
                  Fully responsive website designed primarily using React and
                  its frameworks. Leveraged Git and version control to track
                  changes. Additionally built using Typescript, HTML and CSS.
                </p>
              </div>
            </div>
            <a href="https://davidade6.github.io/" className="projectLink">
              <button className="projectLinkButton">Link</button>
            </a>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <div className="relative" id="id-2">
            <h1 className="projectHeader">02</h1>
            <div className="projectBody">
              <h1 className="projectTitle">Interactive Pathfinding</h1>
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Flask.png"
                alt="Flask"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/PythonAnywhere.png"
                alt="PythonAnywhere"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/python.jpg"
                alt="Python"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/css-logo.png"
                alt="CSS"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/html-logo.png"
                alt="HTML"
              />
              <div className="projectParagraph">
                <p>
                  Used AI techniques and neural networks to create an
                  interactive pathfinding visualizer on a grid. Designed mainly
                  with Python, and HTML & CSS for interface. Flask and
                  PythonAnywhere to host the app.
                </p>
              </div>
            </div>

            <a
              href="https://davidxde.pythonanywhere.com/"
              className="projectLink"
            >
              <button className="projectLinkButton">Link</button>
            </a>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <div className="relative" id="id-3">
            <h1 className="projectHeader">03</h1>
            <div className="projectBody">
              <h1 className="projectTitle">Titanic Survival Estimator</h1>
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/PyTorch.png"
                alt="PyTorch"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/numpy-logo.png"
                alt="Numpy"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/pandas-logo.png"
                alt="Pandas"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Typescript_logo.png"
                alt="TypeScript"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/css-logo.png"
                alt="CSS"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/html-logo.png"
                alt="HTML"
              />
              <div className="projectParagraph">
                <p>
                  Powered by pytorch, and frameworks like pandas, and numpy to
                  determine whether an individual might have survived on the
                  titanic. Built with by Python, Typescript, HTML & CSS
                </p>
              </div>
            </div>
            <a href="" className="projectLink">
              <button className="projectLinkButton">UNAVAILABLE</button>
            </a>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <div className="relative" id="id-4">
            <h1 className="projectHeader">04</h1>
            <div className="projectBody">
              <h1 className="projectTitle">Lakes & River Path Optimisation</h1>
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/PyTorch.png"
                alt="PyTorch"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/numpy-logo.png"
                alt="Numpy"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/pandas-logo.png"
                alt="Pandas"
              />
              <div className="projectParagraph">
                <p>MORE INFO SOON</p>
              </div>
            </div>
            <a href="https://davidade6.github.io/" className="projectLink">
              <button className="projectLinkButton">UNAVAILABLE</button>
            </a>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <div className="relative" id="id-5">
            <h1 className="projectHeader">05</h1>
            <div className="projectBody">
              <h1 className="projectTitle">Game Development (Roblox)</h1>
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Lua-Logo.png"
                alt="Lua"
              />
              <div className="projectParagraph">
                <p>
                  Aided with the scripting of a roblox game using LUA.
                  Collaborated with a team of developers to build a game on the
                  roblox platformss.
                </p>
              </div>
            </div>
            <a
              href="https://www.roblox.com/games/16757765700/02"
              className="projectLink"
            >
              <button className="projectLinkButton">Link</button>
            </a>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <div className="relative" id="id-6">
            <h1 className="projectHeader">06</h1>
            <div className="projectBody">
              <h1 className="projectTitle">AI Video Analysis</h1>
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/PyTorch.png"
                alt="PyTorch"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/numpy-logo.png"
                alt="Numpy"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/pandas-logo.png"
                alt="Pandas"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/React.png"
                alt="React"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Typescript_logo.png"
                alt="TypeScript"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/css-logo.png"
                alt="CSS"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/html-logo.png"
                alt="HTML"
              />
              <div className="projectParagraph">
                <p>MORE INFO SOON</p>
              </div>
            </div>
            <a href="" className="projectLink">
              <button className="projectLinkButton">UNAVAILABLE</button>
            </a>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>
    </>
  );
}

export default Projects;
