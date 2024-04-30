function About() {
  return (
    <section id="about" className="hidden h-gr1 w-full text-white justify-center items-center text-center">
      <div className="flex w-gr2 h-full flex-col items-center">
        <h2 className="text-gr3 md:text-gr2 border-b p-0 m-1 max-w-fit">About</h2>
        <p className="text-gr4 md:text-gr3 overflow-y-auto p-2">
          &quot;Golden Ratio Calculator&quot; is your go-to app for precise font size selection
          in web development. Easily input your largest or smallest font size and
          calculate in either direction, ensuring harmonious typography based on
          the golden ratio principle. Simplify your design process and achieve pixel-perfect
          results with this indispensable tool.
        </p>
      </div>
      <div className="w-gr1 border-l h-full flex flex-col items-center">
        <h2 className="text-gr3 md:text-gr2 border-b p-0 m-1 max-w-fit">What is &quot;The Golden Ratio&quot;?</h2>
        <p className="text-gr4 md:text-gr3 overflow-y-auto p-2">
          The golden ratio, often denoted by the Greek letter phi (φ), is a mathematical
          concept that represents a special ratio found in nature, art, and design. It&apos;s
          approximately equal to 1.618033988749895. In design and aesthetics, the golden ratio
          is believed to create aesthetically pleasing proportions. When applied to typography,
          it helps determine font sizes that appear visually balanced and harmonious to the
          human eye.
        </p>
      </div>
    </section>
  );
}

export default About;
