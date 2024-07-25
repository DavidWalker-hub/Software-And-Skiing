import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity, compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { upscale } from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { ar1X1 } from "@cloudinary/url-gen/qualifiers/aspectRatio";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
// import "dotenv/config";

type ImageContextType = {
  landingPageImage: CloudinaryImage | undefined;
  ProfileImage: CloudinaryImage | undefined;
};

const ImageContext = createContext<ImageContextType>({
  landingPageImage: new CloudinaryImage(),
  ProfileImage: new CloudinaryImage(),
});

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }: { children: JSX.Element }) => {
  const value = useImageStore();
  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

const useImageStore = () => {
  const cld = useMemo(
    () =>
      new Cloudinary({
        cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_NAME },
      }),
    []
  );

  const getLandingPageImage = useCallback(() => {
    const img = cld
      .image("SoftwareAndSkiing/landing-page")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(1920).height(1080))
      .overlay(
        source(
          text(
            "Walker \n Software and Skiing",
            new TextStyle("Roboto", 80)
              .fontWeight("bold")
              .textAlignment("center")
              .letterSpacing(2)
          ).textColor("#fff")
        ).position(new Position().gravity(compass("center")).offsetY(-40))
      )
      .effect(upscale());
    setLandingPageImage(img);

    console.log("img", img);
  }, [cld]);

  const getProfileImage = useCallback(() => {
    const img = cld
      .image("SoftwareAndSkiing/profile")
      .quality("auto")
      .resize(auto().width(500).aspectRatio(ar1X1()).gravity(autoGravity()))
      .roundCorners(max());
    //   .effect(upscale());
    setProfilePageImage(img);
    console.log("img", img);
  }, [cld]);

  useEffect(() => {
    getLandingPageImage();
    getProfileImage();
  }, [cld, getLandingPageImage, getProfileImage]);

  const [landingPageImage, setLandingPageImage] = useState<CloudinaryImage>();
  const [ProfileImage, setProfilePageImage] = useState<CloudinaryImage>();

  return {
    landingPageImage,
    ProfileImage,
  };
};
