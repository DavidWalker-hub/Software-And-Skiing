import type { MetaFunction } from "@remix-run/node";
import { AdvancedImage } from "@cloudinary/react";
import HomeProfile from "~/components/HomeProfile";
import { useImage } from "~/hooks/ImageContext";
import WorkSummary from "~/components/WorkSummary";

export const meta: MetaFunction = () => {
  return [
    { title: "WalkerSAS" },
    {
      name: "description",
      content:
        "Profile website for David Walker. Ski instructor by winter and Web developer by Summer",
    },
  ];
};

export type Work = {
  title: string;
  keyPoints: string[];
  season: "summer" | "winter";
};

export const workData: Work[] = [
  {
    title: "Web Development",
    keyPoints: ["Full stack web developer", "Custom websites", "Contract work"],
    season: "summer",
  },
  {
    title: "Ski Instructor",
    keyPoints: [
      "BASI level 4 ski instructor",
      "Private lessons",
      "Group clinics",
    ],
    season: "winter",
  },
];

export default function Index() {
  const { landingPageImage } = useImage();
  return (
    <div className="font-sans w-screen h-screen mt-12">
      {landingPageImage && (
        <AdvancedImage
          style={{
            maxWidth: "100%",
            width: "100%",
            maxHeight: "90%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          cldImg={landingPageImage}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-4 mt-8">
        {workData.map((work) => (
          <WorkSummary key={work.title} work={work} />
        ))}
      </div>
      <HomeProfile />
    </div>
  );
}
