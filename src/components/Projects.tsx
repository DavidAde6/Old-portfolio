function Projects() {
  return (
    /**
     *     Have on the left (the languages and frameworks used), and date of release. Number and title, link. On right, description, and several images
     *  Perosnal Portfolio
     *  Advanced Video Analysis
     *  Titanic Survival Estimator https://web.stanford.edu/class/archive/cs/cs109/cs109.1166/problem12.html
     *  Roblox Game
     *  Lake & Water Optimisation for Commercial Purposes (Rivers, lakes & marine) https://sentinels.copernicus.eu/web/success-stories/list
     * (
     *  There's a LOT of potential with the Copernicus Sentinel satellites (which are free to access from the ESA) and figuring out how to do useful stuff related to ecology. Lots of biologists have spearheaded some of this, but they often don't have the software skills to make their results easy to use, or e.g. churn it through some ML model to predict something.
     *  )
     */

    <>
      <div className="projectSlide">
        <div className="projectContents">
          <h1>Project 1</h1>
          <div>
            <h1>Personal Portfolio</h1>
            <img
              className="display-img"
              src="../src/assets/images/React.png"
              alt="React"
            />
            <img
              className="display-img"
              src="src/assets/images/Typescript_logo.png"
              alt="TypeScript"
            />
            <img
              className="display-img"
              src="src/assets/images/css-logo.png"
              alt="CSS"
            />
            <img
              className="display-img"
              src="src/assets/images/html-logo.png"
              alt="HTML"
            />
            <p>
              Fully responsive website designed primarily using React, with the
              help of popular frameworks like framer-motion and
              styled-components.
            </p>
            <p>
              Completely hosted on github, I am able to leverage Git and version
              control to speedily and efficiently make chnages
            </p>
            <p>Additionally built using Typescript, HTML and CSS.</p>
          </div>
          <a href="https://davidade6.github.io/">
            <button>Link</button>
          </a>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <h1>Project 2</h1>
          <div>
            <h1>Titanic Survival Estimator</h1>
            <img
              className="display-img"
              src="src/assets/images/PyTorch.png"
              alt="PyTorch"
            />
            <img
              className="display-img"
              src="src/assets/images/numpy-logo.png"
              alt="Numpy"
            />
            <img
              className="display-img"
              src="src/assets/images/pandas-logo.png"
              alt="Pandas"
            />
            <img
              className="display-img"
              src="src/assets/images/Typescript_logo.png"
              alt="TypeScript"
            />
            <img
              className="display-img"
              src="src/assets/images/css-logo.png"
              alt="CSS"
            />
            <img
              className="display-img"
              src="src/assets/images/html-logo.png"
              alt="HTML"
            />
            <p>
              Uses AI Algorithms powered by pytorch, and python data structure
              frameworks like pandas, and numpy to determine whether an
              individual might have survived on the titanic based on their
              information
            </p>
            <p>
              Additionally powered by Typescript on the backend, HTML & CSS on
              the frontend, allowing users to input necessary information
            </p>
            <p>To be released by Jan 1st 2025</p>
          </div>
          <a href="">
            <button>UNAVAILABLE</button>
          </a>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <h1>Project 3</h1>
          <div>
            <h1>
              AI-Powered Lakes & River Path Optimisation for Sustainability
            </h1>
            <img
              className="display-img"
              src="src/assets/images/PyTorch.png"
              alt="PyTorch"
            />
            <img
              className="display-img"
              src="src/assets/images/numpy-logo.png"
              alt="Numpy"
            />
            <img
              className="display-img"
              src="src/assets/images/pandas-logo.png"
              alt="Pandas"
            />
            <p>MORE INFO SOON</p>
          </div>
          <a href="https://davidade6.github.io/">
            <button>UNAVAILABLE</button>
          </a>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <h1>Project 4</h1>
          <div>
            <h1>Fantasy Video Game Development (Roblox)</h1>
            <img
              className="display-img"
              src="src/assets/images/Lua-Logo.png"
              alt="Lua"
            />
            <p>
              Aided with the scripting of a roblox game using LUA. Collaborated
              with a team of developers to build a game on the roblox
              platformss.
            </p>
          </div>
          <a href="https://www.roblox.com/games/16757765700/02">
            <button>Link</button>
          </a>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectSlide">
        <div className="projectContents">
          <h1>Project 5</h1>
          <div>
            <h1>AI Video Analysis</h1>
            <img
              className="display-img"
              src="src/assets/images/PyTorch.png"
              alt="PyTorch"
            />
            <img
              className="display-img"
              src="src/assets/images/numpy-logo.png"
              alt="Numpy"
            />
            <img
              className="display-img"
              src="src/assets/images/pandas-logo.png"
              alt="Pandas"
            />
            <img
              className="display-img"
              src="src/assets/images/React-Logo.png"
              alt="React"
            />
            <img
              className="display-img"
              src="src/assets/images/Typescript_logo.png"
              alt="TypeScript"
            />
            <img
              className="display-img"
              src="src/assets/images/css-logo.png"
              alt="CSS"
            />
            <img
              className="display-img"
              src="src/assets/images/html-logo.png"
              alt="HTML"
            />
            <p>MORE INFO SOON</p>
          </div>
          <a href="">
            <button>UNAVAILABLE</button>
          </a>
        </div>
        <div className="projectImage"></div>
      </div>
    </>
  );
}

export default Projects;
