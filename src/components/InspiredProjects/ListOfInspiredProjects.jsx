import React from "react";
import InspiredProjects from "./InspiredProjects";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-grid-carousel";

const inspiredProjectsItem = [
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png",
    title: "Social Media Design",
    author: "by fernandobengua",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c15f6b22da97be41a8878e753a1a16c2-863645391592368980.489561/AF1BF970-07CA-454B-8AF1-2F3E06838C8B",
    title: "Logo Design",
    author: "by burno_malagrino",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png",
    title: "Logo Design",
    author: "by eveeelin",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png",
    title: "Web & Mobile Design",
    author: "by skydesigner",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg",
    title: "Portralts & Caricatures",
    author: "by noneyn",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg",
    title: "Packaging Design",
    author: "by mijalzagier",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg",
    title: "Flyer Design",
    author: "by spickex",
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png",
    avatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg",
    title: "Animated GIFs",
    author: "by lamonastudio",
  },
];

const ListOfInspiredProjects = () => {
  return (
    <Box sx={{ background: "#F5F5F5",paddingTop:{md:'5rem',xs:'2rem'},paddingBottom:{md:'5rem',xs:'2rem'}, marginTop:'3rem', marginBottom:'3rem'}}>
      <Box sx={{marginLeft:{md:'7rem'},marginRight:{md:'7rem'}}}> 
      <Carousel cols={4} rows={1} loop={true} hideArrow={false}>
        {inspiredProjectsItem.map((data, index) => {
          return (
            <Carousel.Item key={index}>
              <InspiredProjects key={index} data={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      </Box>
    </Box>
  );
};

export default ListOfInspiredProjects;
