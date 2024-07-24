import type { MetaFunction } from "@remix-run/node";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import { upscale } from "@cloudinary/url-gen/actions/effect";
import HomeProfile from "~/components/HomeProfile";

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
  const cld = new Cloudinary({ cloud: { cloudName: "dwski90" } });

  const img = cld
    .image("SoftwareAndSkiing/landing-page")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(1920).height(1080))
    .effect(upscale());
  return (
    <div className="font-sans w-screen h-screen mt-12">
      {/* <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul> */}
      <AdvancedImage
        style={{
          maxWidth: "100%",
          width: "100%",
          maxHeight: "90%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        cldImg={img}
      />
      <HomeProfile />
    </div>
  );
}
