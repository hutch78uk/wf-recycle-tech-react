import farrelPomoniOffices from "../assets/images/farrel-pomini-offices.jpg"; 
import pyrolysisPlant from "../assets/images/pyrolysis-plant.jpg"; 
import patented from "../assets/images/patented.png";
import continuousProcess from "../assets/images/continuous-process-lg.jpg"


const OurValue = () => {
    document.title = "WF Recycle-Tech - Our Value";
    return (
        <>
            <section className="section">
                <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px]">
                    <h1 className="text-center text-gray777 mt-2.5 mb-[30px] text-[2.125rem]">Experienced Engineering Team</h1>
                    <p className="text-gray666">One of WF Recycle-Tech&apos;s key sources of added value is through its reliable engineering partners 
                        Farrel Pomini, one of the world&apos;s leading providers of continuous compounding systems with over 100 years&apos; 
                        experience in the polymer industry. Farrel Pomini designs, manufactures and supports world-class continuous 
                        compounding solutions for highly filled, temperature sensitive applications. The company has a rich history of 
                        innovation and are renowned for their reliability and efficiency in delivering robust, long life compounding 
                        machinery to market.</p>
                    <div className="md:grid grid-cols-2 gap-4 mt-5">
                        <div>
                            <p>It is with Farrel Pomini&apos;s experienced engineering capabilities that the WF Recycle-Tech team has thrived with 
                                the emphasis very much on bringing consistent and quality systems to the pyrolysis industry. This is a core focus 
                                for the team as the market is littered with machinery which hasn&apos;t lived up to expectations but with the WF 
                                Recycle-Tech model of keeping its system design simple, using tried and tested technology and with a wealth of 
                                engineering experience at its side, this risk is addressed.</p>
                        </div>
                        <div>
                            <img src={farrelPomoniOffices} alt="Farrel Pomini head offices" />
                        </div> 
                    </div>
                </div>
            </section>
            <section className="section bg-grayLight py-[30px]">
                <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px]">
                    <h1 className="text-center text-gray777 mt-2.5 mb-[30px] text-[2.125rem]">Experienced Engineering Team</h1>
                    <div className="md:grid grid-cols-2 gap-4 mt-5">
                        <div>
                            <p>The WF Recycle-Tech system processes 1.5 tonnes of rubber crumb from End of Life Tyres (ELTs) per hour and has been designed with this specific throughput in mind so that companies can benefit from numerous small scale systems
                            placed strategically in various locations. The advantage being that the customer can benefit from placing facilities closer to various origins for the collection of ELTs as well as potentially housing a system close to third
                            party clients for the sale of the offtakes whether that be for the oil or rCB. This differs from single large scale production facilities which don&apos;t have such flexibility and enables customers to minimise transportation costs.</p>
                        </div>
                        <div>
                            <img src={pyrolysisPlant} alt="A pyrolysis plant" />
                        </div> 
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px]">
                    <h1 className="text-center text-gray777 mt-2.5 mb-[30px] text-[2.125rem]">Unique Patented Process</h1>
                    <div className="md:grid grid-cols-2 gap-4 mt-5">
                        <div>
                            <p>Having had four British patents granted, WF Recycle-Tech are in a strong position with regard to the 
                                safeguarding of its process and unique integration of the system&apos;s components. Such configuration has 
                                enabled us to produce quality outputs from the test runs conducted on our first generation machine and has 
                                led to accredited companies such as Artis acknowledging the unique qualities of the WF Recycle-Tech rCB including a high level particle dispersion
                                prior to any post processing applications.</p>
                        </div>
                        <div>
                            <img src={patented} alt="Patented image" />
                        </div> 
                    </div>
                </div>
            </section>
            <section className="section bg-grayLight py-[30px]">
                <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px]">
                    <h1 className="text-center text-gray777 mt-2.5 mb-[30px] text-[2.125rem]">Continuous & Efficient Operation</h1>
                    <div className="md:grid grid-cols-2 gap-4 mt-5">
                        <div>
                            <p>Unlike many other companies in the industry who proceed with batch operations, the WF Recycle-Tech solution 
                                is a continuous process which allows customers to benefit from high production efficiency levels as well as 
                                reduced manual labour. The system also takes up a very small footprint in relation to most pyrolysis units 
                                with all the core components installed in less than a 20m x 40m area.</p>
                        </div>
                        <div>
                            <img src={continuousProcess} alt="Tyres on a conveyor belt" />
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurValue;