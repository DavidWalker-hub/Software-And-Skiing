import React from "react";
import { useImage } from "~/hooks/ImageContext";

import { AdvancedImage } from "@cloudinary/react";

const HomeProfile: React.FC = () => {
  const { ProfileImage } = useImage();
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {ProfileImage && (
        <AdvancedImage
          style={{
            maxWidth: "80%",
            width: "80%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          cldImg={ProfileImage}
        />
      )}
    </div>
  );
};

export default HomeProfile;
