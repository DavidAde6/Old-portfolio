function Projects() {
  // OPTIMIZE CODE WHEN U HAVE TIME!!!
  window.addEventListener("scroll", () => {
    const project1 = document.getElementById("id-1")!;
    const images = document.getElementsByClassName("divjustify");
    const rect1 = images[0].getBoundingClientRect();
    const project2 = document.getElementById("id-2")!;
    const rect2 = images[1].getBoundingClientRect();
    const project3 = document.getElementById("id-3")!;
    const rect3 = images[2].getBoundingClientRect();
    const project4 = document.getElementById("id-4")!;
    const rect4 = images[3].getBoundingClientRect();
    const project5 = document.getElementById("id-5")!;
    const rect5 = images[4].getBoundingClientRect();
    // BRO USE THE PROJECT IMAGE TO CHECK INSTEAD
    if (rect5.top <= 0 && rect5.bottom >= 0) {
      project4.classList.remove("fixed");
      project4.classList.add("relative");
      project5.classList.remove("relative");
      project5.classList.add("fixed");
      project3.classList.remove("fixed");
      project3.classList.add("relative");
    } else if (rect4.top <= 0 && rect4.bottom >= 0) {
      project3.classList.remove("fixed");
      project3.classList.add("relative");
      project2.classList.remove("fixed");
      project2.classList.add("relative");
      project4.classList.remove("relative");
      project4.classList.add("fixed");
      project5.classList.remove("fixed");
      project5.classList.add("relative");
    } else if (rect3.top <= 0 && rect3.bottom >= 0) {
      project2.classList.remove("fixed");
      project2.classList.add("relative");
      project3.classList.remove("relative");
      project3.classList.add("fixed");
      project4.classList.remove("fixed");
      project4.classList.add("relative");
      project5.classList.remove("fixed");
      project5.classList.add("relative");
    } else if (rect2.top <= 0 && rect2.bottom >= 0) {
      project1.classList.remove("fixed");
      project1.classList.add("relative");
      project2.classList.remove("relative");
      project2.classList.add("fixed");
      project3.classList.remove("fixed");
      project3.classList.add("relative");
      project4.classList.remove("fixed");
      project4.classList.add("relative");
    } else if (rect1.top <= 0 && rect1.bottom >= 0) {
      project1.classList.remove("relative");
      project1.classList.add("fixed");
      project2.classList.remove("fixed");
      project2.classList.add("relative");
      project3.classList.remove("fixed");
      project3.classList.add("relative");
    } else {
      project1.classList.remove("fixed");
      project1.classList.add("relative");
      project5.classList.remove("fixed");
      project5.classList.add("relative");
    }
  });
  return (
    /**
     *  There's a LOT of potential with the Copernicus Sentinel satellites (which are free to access from the ESA) and figuring out how to do useful stuff related to ecology. Lots of biologists have spearheaded some of this, but they often don't have the software skills to make their results easy to use, or e.g. churn it through some ML model to predict something.
     *  )
     */

    <>
      <div className="projectSlide">
        <div className="relative" id="id-1">
          <h1 className="projectHeader">01</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Atmospheric NO2 Forecasting</h1>
            <div className="frameworkImgContainer">
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/tensorflow.png"
                alt="Tensorflow"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/earth-engine-logo.png"
                alt="Google Earth Engine"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/esa.png"
                alt="European Space Agency"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/pandas-logo.png"
                alt="Pandas"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/numpy-logo.png"
                alt="Numpy"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/python.jpg"
                alt="Python"
              />
            </div>
            <div className="projectParagraph">
              <p>
                Leveraged Google Earth Engines geospatial processing
                capabilities to model and predict the atmospheric concentration
                of NO2 in Ottawa, using Sentinel 5P Satallite data, Long Short
                Term Memory Neural Networks with Tensorflow, and Pandas and
                Numpy for data preprocessing.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/DavidAde6/Sentinel-5P-NO2-Prediction/blob/main/LSTM_NO2Prediction_Sentinel5P.ipynb"
            className="projectLink"
          >
            <button className="projectLinkButton">Link</button>
          </a>
        </div>
        <div className="hidden">
          <h1 className="projectHeader">01</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Atmospheric NO2 Forecasting</h1>
            <div className="frameworkImgContainer">
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/tensorflow.png"
                alt="Tensorflow"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/earth-engine-logo.png"
                alt="Google Earth Engine"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/esa.png"
                alt="European Space Agency"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/pandas-logo.png"
                alt="Pandas"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/numpy-logo.png"
                alt="Numpy"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/python.jpg"
                alt="Python"
              />
            </div>
            <div className="projectParagraph">
              <p>
                Leveraged Google Earth Engines geospatial processing
                capabilities to model and predict the atmospheric concentration
                of NO2 in Ottawa, using Sentinel 5P Satallite data, Long Short
                Term Memory Neural Networks with Tensorflow, and Pandas and
                Numpy for data preprocessing.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/DavidAde6/Sentinel-5P-NO2-Prediction/blob/main/LSTM_NO2Prediction_Sentinel5P.ipynb"
            className="projectLink"
          >
            <button className="projectLinkButton">Link</button>
          </a>
        </div>
        <div className="divjustify"></div>
        <div className="projectImage">
          <img
            className="scrollingImage"
            src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/AirPollution.png"
            alt=""
          />
        </div>
      </div>

      <div className="projectSlide">
        <div className="relative" id="id-2">
          <h1 className="projectHeader">02</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Interactive Pathfinding</h1>
            <div className="frameworkImgContainer">
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
            </div>
            <div className="projectParagraph">
              <p>
                Simple project using AI techniques and neural networks to create
                an interactive pathfinding visualizer on a grid. Designed mainly
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
        <div className="hidden">
          <h1 className="projectHeader">02</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Interactive Pathfinding</h1>
            <div className="frameworkImgContainer">
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
            </div>
            <div className="projectParagraph">
              <p>
                Simple project using AI techniques and neural networks to create
                an interactive pathfinding visualizer on a grid. Designed mainly
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
        <div className="divjustify"></div>
        <div className="projectImage">
          <img
            className="scrollingImage"
            src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Pathfinding.png"
            alt=""
          />
        </div>
      </div>

      <div className="projectSlide">
        <div className="relative" id="id-3">
          <h1 className="projectHeader">03</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Personal Portfolio</h1>
            <div className="frameworkImgContainer">
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
            </div>
            <div className="projectParagraph">
              <p>
                Fully responsive website designed primarily using React and its
                frameworks. Leveraged Git and version control to track changes.
                Additionally built using Typescript, HTML and CSS.
              </p>
            </div>
          </div>
          <a href="" className="projectLink">
            <button className="projectLinkButton">U here</button>
          </a>
        </div>
        <div className="hidden">
          <h1 className="projectHeader">03</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Personal Portfolio</h1>
            <div className="frameworkImgContainer">
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
            </div>
            <div className="projectParagraph">
              <p>
                Fully responsive website designed primarily using React and its
                frameworks. Leveraged Git and version control to track changes.
                Additionally built using Typescript, HTML and CSS.
              </p>
            </div>
          </div>
          <a href="" className="projectLink">
            <button className="projectLinkButton">U here</button>
          </a>
        </div>
        <div className="divjustify"></div>
        <div className="projectImage">
          <img
            className="scrollingImage"
            src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/PersonalPortfolio.png"
            alt=""
          />
        </div>
      </div>

      <div className="projectSlide">
        <div className="relative" id="id-4">
          <h1 className="projectHeader">04</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Fluct</h1>
            <div className="frameworkImgContainer">
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/python.jpg"
                alt="Python"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/openai.png"
                alt="OpenAI"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/html-logo.png"
                alt="HTML"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/css-logo.png"
                alt="CSS"
              />
            </div>
            <div className="projectParagraph">
              <p>
                A B2B Solution allowing business owners to properly streamline
                their workflows, making it more efficient. Business owners are
                easily able to identify weaknesses, trends, and further concerns
                with our user friendly UI.
              </p>
            </div>
          </div>
          <a href="https://davidade6.github.io/" className="projectLink">
            <button className="projectLinkButton">UNAVAILABLE</button>
          </a>
        </div>
        <div className="hidden">
          <h1 className="projectHeader">04</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Fluct</h1>
            <div className="frameworkImgContainer">
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/python.jpg"
                alt="Python"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/openai.png"
                alt="OpenAI"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/html-logo.png"
                alt="HTML"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/css-logo.png"
                alt="CSS"
              />
            </div>
            <div className="projectParagraph">
              <p>
                A B2B Solution allowing business owners to properly streamline
                their workflows, making it more efficient. Business owners are
                easily able to identify weaknesses, trends, and further concerns
                with our user friendly UI.
              </p>
            </div>
          </div>
          <a href="https://davidade6.github.io/" className="projectLink">
            <button className="projectLinkButton">UNAVAILABLE</button>
          </a>
        </div>
        <div className="divjustify"></div>
        <div className="projectImage">
          <img
            className="scrollingImage"
            src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/Fluct.png"
            alt=""
          />
        </div>
      </div>

      <div className="projectSlide">
        <div className="relative" id="id-5">
          <h1 className="projectHeader">05</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Game Development (Unity)</h1>
            <div className="frameworkImgContainer">
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/cpp-logo.png"
                alt="C++"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/blender.png"
                alt="Blender"
              />
            </div>
            <div className="projectParagraph">
              <p>
                Aided with the scripting of a unity game project using C++.
                Collaborated with a team of developers to build a game on unity,
                as well as designing 3d models on blender.
              </p>
            </div>
          </div>
          <a href="" className="projectLink">
            <button className="projectLinkButton">UNAVAILABLE</button>
          </a>
        </div>
        <div className="hidden">
          <h1 className="projectHeader">05</h1>
          <div className="projectBody">
            <h1 className="projectTitle">Game Development (Unity)</h1>
            <div className="frameworkImgContainer">
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/cpp-logo.png"
                alt="C++"
              />
              <img
                className="display-img"
                src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/blender.png"
                alt="Blender"
              />
            </div>
            <div className="projectParagraph">
              <p>
                Aided with the scripting of a unity game project using C++.
                Collaborated with a team of developers to build a game on unity,
                as well as designing 3d models on blender.
              </p>
            </div>
          </div>
          <a href="" className="projectLink">
            <button className="projectLinkButton">UNAVAILABLE</button>
          </a>
        </div>
        <div className="divjustify"></div>
        <div className="projectImage">
          <img
            className="scrollingImage"
            src="https://raw.githubusercontent.com/DavidAde6/DavidAde6.github.io/main/src/assets/images/RobloxGame.png"
            alt=""
          />
        </div>
      </div>

      <div className="projectSlide">
        <div className="relative">
          <div className="projectBody"></div>
        </div>
        <div style={{ height: "100vh" }} className="divjustify"></div>
      </div>
    </>
  );
}

export default Projects;
