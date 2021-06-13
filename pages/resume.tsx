import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
    return (
        <div className="px-6 py-2 dark:bg-dark-100">
            {/* Education and Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="flex items-center my-2 text-lg font-bold">
                            Kammavari Sangham Institute of Technology
                        </h5>
                        <p>
                            2014 - 2018
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 font-bold text-md">
                           Scientific Games India (Frontend Developer)
                        </h5>
                        <p>
                            December 2020 - Present
                        </p>
                    </div>
                    <div>
                        <h5 className="my-2 font-bold text-md">
                            Icube Consulting Services (Frontend Developer)
                        </h5>
                        <p>
                            July 2018 - November 2020
                        </p>
                    </div>
                </div>
            </div>
            {/* Languages & tools */}
            <div className="grid gap-6 mt-3 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map((language, i) => <Bar data={language} key={i} />)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools</h5>
                    <div className="my-2">
                        {
                            tools.map((tool, i) => <Bar data={tool} key={i} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume;
