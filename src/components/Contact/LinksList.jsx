import { FaLinkedinIn, FaMedium, FaGithub } from 'react-icons/fa6';

function LinksList() {
  return (
    <ul className="text-gr3 w-full flex flex-col items-center text-black gap-4 my-4">
      <li className="w-gr1 border rounded-full p-2 bg-gradient-to-r from-gold to-mikadoYellow border-black">
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center relative"
          href="https://www.linkedin.com/in/tomas-esquivel-dev/"
        >
          <FaLinkedinIn className="size-10 self-start md:absolute left-1" />
          Linkedin
        </a>
      </li>
      <li className="w-gr1 border rounded-full p-2 bg-gradient-to-r from-gold to-mikadoYellow border-black">
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center relative"
          href="https://medium.com/@tomasesquivel"
        >
          <FaMedium className="size-10 self-start md:absolute left-1" />
          Medium
        </a>
      </li>
      <li className="w-gr1 border rounded-full p-2 bg-gradient-to-r from-gold to-mikadoYellow border-black">
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center relative"
          href="https://github.com/tomasesquivelgc"
        >
          <FaGithub className="size-10 self-start md:absolute left-1" />
          GitHub
        </a>
      </li>
    </ul>
  );
}

export default LinksList;
