import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import { useImage } from "~/hooks/ImageContext";
import { useSeason } from "~/hooks/SeasonContext";

const Summer: React.FC = () => {
  const { summerImage } = useImage();
  const { currentSeason, nextSeason } = useSeason();
  return (
    <div
      className={`p-8 transition-transform duration-500 ${
        nextSeason === "summer"
          ? currentSeason === nextSeason
            ? "translate-x-0"
            : "-translate-x-full"
          : "-translate-x-full"
      }`}
    >
      <div className="grid grid-cols-2 justify-center gap-24">
        <div className="pl-24">
          <h3 className="text-3xl font-bold mb-4">Web development</h3>
          <p>
            In summer I code Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Suscipit et id, nesciunt, atque minima veniam possimus vero
            assumenda nostrum dicta natus quia distinctio ratione illum eius
            itaque ipsam dignissimos fuga? Praesentium, obcaecati eius. Omnis
            pariatur est, culpa repellat illum cum ratione atque accusantium
            saepe fugit iure optio sapiente. Impedit non amet odit laboriosam
            illo, a rem nulla vel atque officiis? Exercitationem ea nesciunt
            aspernatur reiciendis repellat mollitia obcaecati ut labore, at
            excepturi, doloremque nostrum commodi deleniti ipsum beatae maxime
            aut delectus quia voluptatem amet corporis molestias non nemo
            incidunt! Sed. Sunt, omnis. Optio aliquid impedit, repellat
            molestias voluptatem perferendis quasi sint harum quia, enim sed
            veritatis tempora, quas commodi ullam dolor dolorum consequuntur
            eius possimus soluta aliquam? Amet, vitae ea!
          </p>
        </div>
        {summerImage && (
          <div className="pr-24">
            <AdvancedImage
              style={{
                maxWidth: "100%",
                //   width: "80%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              cldImg={summerImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Summer;
