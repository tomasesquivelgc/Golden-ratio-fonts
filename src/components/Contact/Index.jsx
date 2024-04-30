import LinksList from './LinksList';

function Contact() {
  return (
    <section id="contact" className="hidden w-full h-gr1 justify-center items-center text-white text-center">
      <div className="flex w-gr2 h-full flex-col items-center">
        <h2 className="text-gr3 md:text-gr2 border-b p-0 m-1 max-w-fit">Contact</h2>
        <p className="text-gr4 md:text-gr3 overflow-y-auto p-2">
          If you would like to get in touch with me you can reach me at my email address
          or through my social media accounts. I am always open to new opportunities and
          collaborations, so don&apos;t hesitate to contact me.
        </p>
      </div>
      <div className="w-gr1 border-l h-full flex flex-col items-center">
        <h2 className="text-gr3 md:text-gr2 border-b p-0 m-1 max-w-fit">My socials</h2>
        <LinksList />
      </div>
    </section>
  );
}

export default Contact;
