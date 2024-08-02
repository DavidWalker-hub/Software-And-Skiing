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
        <h3>About Me</h3>
        <p>
          Where to begin? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi fugiat dolorum, qui porro illum modi magni dicta earum
          cum saepe sequi illo obcaecati quis vero libero quas praesentium?
          Omnis, possimus? Quibusdam dolorem corrupti sit ad vitae, maxime
          ducimus deleniti natus quas dicta culpa expedita nemo laudantium
          doloremque delectus quis fuga blanditiis quos distinctio! Beatae velit
          minima reprehenderit nisi ipsum corporis! Soluta molestias, corrupti
          laudantium praesentium delectus sequi quia facere vel dolores
          voluptatibus alias explicabo tenetur quas repellat sunt neque impedit
          molestiae optio voluptas? Vitae harum temporibus accusamus quo aut
          impedit. Eaque repudiandae expedita, explicabo deleniti ipsam incidunt
          consequatur minima modi necessitatibus quisquam possimus ea ipsum aut
          similique eius facilis voluptatem assumenda, non sint blanditiis amet,
          nisi quia? Excepturi, expedita. Tenetur.
        </p>
      </div>
    </div>
  );
};

export default HomeProfile;

// import React from "react";
// import { useImage } from "~/hooks/ImageContext";
// import { AdvancedImage } from "@cloudinary/react";

// const HomeProfile: React.FC = () => {
//   const { profileImage } = useImage();
//   return (
//     <div className="p-8 bg-gray-50">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
//         {profileImage && (
//           <div className="w-full lg:col-span-1 flex justify-center">
//             <AdvancedImage
//               style={{ borderRadius: "50%", width: "80%", objectFit: "cover" }}
//               cldImg={profileImage}
//             />
//           </div>
//         )}
//         <div className="lg:col-span-3 p-4">
//           <h3 className="text-3xl font-bold mb-4">About Me</h3>
//           <p className="text-gray-700">
//             {/* Content goes here */}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
//             fugiat dolorum, qui porro illum modi magni dicta earum cum saepe
//             sequi illo obcaecati quis vero libero quas praesentium? Omnis,
//             possimus?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProfile;
