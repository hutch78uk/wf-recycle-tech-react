const Contact = () => {
    const sendEmail = async () => {
        // Send credentials to your PHP script (e.g., using fetch)
        // Handle the response (success or error) accordingly
    };

    return (
        <form onSubmit={sendEmail} method="post" action="check.php">
            <input type="text" name="from_name" placeholder="Name" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight focus:border-wfGreenLight focus-visible:border-wfGreenLight focus-visible:outline-none text-wfGreenLight" />
            <input type="text" name="from_number" placeholder="Phone number" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight text-wfGreenLight" />
            <input type="email" name="from_email" placeholder="Email" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight text-wfGreenLight" />
            <textarea name="message" placeholder="What's on your mind?" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight text-wfGreenLight" />
            <button type="submit" className="block w-full bg-wfGreenLight my-2.5 p-[15px] rounded-md text-white">Submit Enquiry</button>
        </form>
    );
};

export default Contact;