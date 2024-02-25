import resumePic from '../assets/images/resume.png'

function Resume(){
    return (
        <>
        <div className="flex flex-column mA">
            <h1 className="tc">Resume</h1>
            <img className="mh7"  src={resumePic}></img>
        </div>

        </>
    )
}

export default Resume