import Blop8 from "../imgs/blops/blop8.svg";

const Project = (props) => {
  return (
    <div className="w-full border border-gray-300 rounded-lg px-6 py-2  hover:border-black active:border-black mb-8 max-w-3xl ">
      <p className="text-sm text-gray-700 -ml-4 mb-2">{props.type}</p>
      <p className="text-xl -ml-4 mb-2">{props.title}</p>
      <ul className="list-outside list-disc">
        {props.bullets.map((bullet) => (
          <li className="mb-1">{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-start gap-y-4 gap-x-4 pt-2 -ml-3 ">
        {props.links.map((link) => (
          <a className="underline text-lg" href={link[1]} target="_blank">
            {link[0]}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-start gap-y-4 gap-x-2 pt-4 -ml-4 -mr-4  ">
        {props.tags.map((tag) => (
          <p className="py-1 px-4 text-base rounded-3xl bg-amber-400">{tag}</p>
        ))}
      </div>
    </div>
  );
};
export default Project;
