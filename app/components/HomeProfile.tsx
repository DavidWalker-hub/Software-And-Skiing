import React from "react";
import { useImage } from "~/hooks/ImageContext";

import { AdvancedImage } from "@cloudinary/react";

const HomeProfile: React.FC = () => {
  const { profileImage } = useImage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center  gap-4 mt-8 p-8">
      {profileImage && (
        // <div className="w-4/5">
        <AdvancedImage
          style={{
            maxWidth: "80%",
            width: "80%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          cldImg={profileImage}
        />
        // </div>
      )}
      <div className="lg:col-span-3">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p>
          {`Thats me.`} <span className="hidden sm:inline">On the left.</span>
          <span className="sm:hidden inline">Just above.</span>{" "}
          {`Complete with a
          wedding suit and a goggle tan. Not the strongest look I could have
          gone for but I'm not really one for taking lots of photos so we're
          stuck with it for now. Sorry. Lets move on and I'll explain a bit
          about the journey that led me to build this website. After all, skiing
          and software is not your typical combination.`}
        </p>
        <p className="mt-2">
          The question is, where to begin? Attempting to condense a life into a
          few paragraphs is no mean feat.
        </p>
      </div>
    </div>
  );
};

export default HomeProfile;