function About() {
  return (
    <div id="about" className="hidden h-gr1 w-full text-white justify-center items-center text-center">
      <div className="flex w-gr2 h-full flex-col">
        <div className="h-gr2 w-full border-b flex flex-col items-center">
          <h2 className="text-gr3 md:text-gr2 border-b p-0 m-1 max-w-fit">About</h2>
          <p className="text-gr4 md:text-gr3">lorem ipsum</p>
        </div>
        <div className="h-gr1 w-full"></div>
      </div>
      <div className="w-gr1 border-l h-full"></div>
    </div>
  );
}

export default About;