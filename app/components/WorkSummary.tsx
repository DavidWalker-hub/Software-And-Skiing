import { Link } from "@remix-run/react";
import React from "react";
import { useSeason } from "~/hooks/SeasonContext";
import { Work } from "~/routes/_index";

interface Props {
  work: Work;
}

const WorkSummary: React.FC<Props> = ({ work }) => {
  const { handleLinkNavigation } = useSeason();
  return (
    <Link
      to={`/work/${work.season}`}
      onClick={() => handleLinkNavigation(work.season)}
      className="border rounded-md m-8 w-3/4 sm:w-1/2 md:w-3/4 lg:w-1/2 shadow hover:shadow-lg transition ease transform duration-300"
    >
      <h3 className="text-xl font-bold p-2 bg-slate-500 text-white">
        {work.title}
      </h3>
      <ul className="list-disc p-6  pl-10">
        {work.keyPoints.map((point, i) => (
          <li key={`${point}-${i}`}>{point}</li>
        ))}
      </ul>
    </Link>
  );
};

export default WorkSummary;
