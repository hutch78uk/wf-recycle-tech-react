import Contact from "../components/Contact";

export default function ContactUs() {
    document.title = "WF Recycle-Tech - Contact Us";
    return (
        <>
            <section className="section">
                <div className="content-container">
                    <h1 className="h2">Contact WF Recycle-Tech</h1>
                    <div className="md:grid grid-cols-2 gap-4 mt-5">
                        <div>
                            <Contact/>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.7980390649623!2d-0.7722182840647731!3d51.33323443124316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742b07b0cd84ad%3A0x9a8d944a540c7215!2sWF%20Recycle-Tech!5e0!3m2!1sen!2suk!4v1639566981812!5m2!1sen!2suk"
                            aria-hidden="false" 
                            className="w-full h-full min-h-[500px] border border-wfGreenLight relative" 
                            loading="lazy"
                            title="WF Recycle-Tech offices"></iframe>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
}