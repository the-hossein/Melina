import React from "react";
import { MainSection } from "./OurTeamStyle";
import vectorTeam from "../../../public/Assets/team.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import ali from "../../../public/Assets/images/karmaTeam/Ali.jpg";
import hosein from "../../../public/Assets/images/karmaTeam/Hossein.jpg";
import erfan from "../../../public/Assets/images/karmaTeam/Erfan.jpg";
import milad from "../../../public/Assets/images/karmaTeam/Milad.jpg";
import sina from "../../../public/Assets/images/karmaTeam/Sina.jpg";
import parmida from "../../../public/Assets/images/karmaTeam/Parmida.jpg";
import fatemeh from "../../../public/Assets/images/karmaTeam/Fatemeh.jpg";
import fazeleh from "../../../public/Assets/images/karmaTeam/Fazeleh.jpg";
import CardProfile from "./cardProfile/CardProfile";

const karmaTeam = [
  {
    name: "سينا سپهرى",
    nameEn: "Sina Sepehri",
    title: "مدیر عامل کارما",
    titleEn: "Karma General Manager",
    image: sina,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "ميلاد پارسا",
    nameEn: "Milad Parsa",
    title: "مدیر ارشد فناوری",
    titleEn: "CTO, Software Engineer",
    image: milad,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "حسین خسروی",
    nameEn: "Hosein Khosravi",
    title: "برنامه نویس ارشد",
    titleEn: "Senior Programmer",
    image: hosein,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "عرفان حسینی",
    nameEn: "Erfan Hosieni",
    title: "برنامه نویس",
    titleEn: "Programmer",
    image: erfan,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "علی کلایی",
    nameEn: "Ali Kalai",
    title: "امنیت سرور",
    titleEn: "Server security",
    image: ali,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "فاطمه برى داريان",
    nameEn: "Fateme Beri Darian",
    title: "برنامه نویس",
    titleEn: "Programmer",
    image: fatemeh,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "پارميدا پهلوان",
    nameEn: "Parmida Pahlan",
    title: "مدیر آتلیه",
    titleEn: "Atelier Manager",
    image: parmida,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "فاضله زنگنه",
    nameEn: "Fazeleh Zanganeh",
    title: "كارشناس توليد محتوا",
    titleEn: "Content production expert",
    image: fazeleh,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const OurTeam = () => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <MainSection>
      <div className="holder_cardProfile">
        {karmaTeam.map((item, index) => (
          <CardProfile
            key={index}
            name={lang === "fa" ? item.name : item.nameEn}
            text={lang === "fa" ? item.title : item.titleEn}
            img={item.image}
          />
        ))}
      </div>
      <div className="holder_image">
        <Image src={vectorTeam} alt={"team"} />
      </div>
    </MainSection>
  );
};

export default OurTeam;
