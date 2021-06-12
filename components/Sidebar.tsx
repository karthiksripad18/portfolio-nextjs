import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';

const Sidebar = () => {
    return (
        <div>
            <img className="w-32 h-32 mx-auto rounded-full" src="./profile-pic.jpg" alt="user avatar" />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span>Karthik </span>Sripad
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="name">Download Resume</a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="https://github.com/karthiksripad18">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/karthik-sripad-5a1688145/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/* address */}
            <div className="py-4 my-5 bg-gray-200" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Bengaluru, India</span>
                </div>
                <p className="my-2">karthiksripad18@gmail.com</p>
                <p className="my-2">+91 8095770169</p>
            </div>
            <button onClick={() => window.open('mailto:karthiksripad18@gmail.com')} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email me</button>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Toggle</button>
        </div>
    )
}

export default Sidebar;
