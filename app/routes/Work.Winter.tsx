import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import { useImage } from "~/hooks/ImageContext";
import { useSeason } from "~/hooks/SeasonContext";

const Winter: React.FC = () => {
  const { skiingImage } = useImage();
  const { currentSeason, nextSeason } = useSeason();
  return (
    <>
      <div
        className={`p-8 transition-transform duration-500 transform ${
          nextSeason === "winter"
            ? currentSeason === nextSeason
              ? "translate-x-0"
              : "translate-x-full"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-center">
          {skiingImage && (
            <div className="p-24">
              <AdvancedImage
                style={{
                  maxWidth: "100%",
                  //   width: "80%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                cldImg={skiingImage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Winter;
