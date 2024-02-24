import aboutPic from '../assets/myself-square.jpg'


function About() {
    return (
        <div className="w-50 mA tc">
            <h1>About Me</h1>
            <div className="flex flex-row items-center" >
            <div>
            <img src={aboutPic} alt="image of charles swayne" className="w-100"></img>
            </div>
            <p className="ma4">
                            I've always found web design fascinating, which inspired me to pursue a career in frontend development. My approach to problem-solving is straightforward yet effective: start, experiment, and iterate. This method has served me well, particularly in my recent project, 'Animal Blog Navigation' on reptichip.com. This project was a culmination of all the web development skills I've acquired so far, and I'm really proud of the outcome. Looking ahead, my goal is to expand my expertise and become a full-stack developer, blending front-end creativity with back-end functionality.
                        </p>
            </div>
            
        </div>
    )
}

export default About