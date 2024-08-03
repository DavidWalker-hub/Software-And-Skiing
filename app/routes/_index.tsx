import type { MetaFunction } from "@remix-run/node";
import { AdvancedImage } from "@cloudinary/react";
import HomeProfile from "~/components/HomeProfile";
import { useImage } from "~/hooks/ImageContext";

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
      <HomeProfile />
    </div>
  );
}
