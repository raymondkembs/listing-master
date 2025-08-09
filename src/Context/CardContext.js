import { createContext, useState } from "react";

export const CardContext = createContext();

export const UseContextProvider = ({ children }) => {
  const rawProduct = [
    {
      id: 1,
      name: "Photosnap",
      position: "Senior Frontend Developer",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA only",
      skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
      logo: `${process.env.PUBLIC_URL}/images/insure.svg`,
    },
    {
      id: 2,
      name: "Manage",
      position: "Fullstack Developer",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "Remote",
      skills: ["Fullstack", "Midweight", "Python", "React"],
      logo: `${process.env.PUBLIC_URL}/images/manage.svg`,
    },
    {
      id: 3,
      name: "Account",
      position: "Junior Frontend Developer",
      postedAt: "5d ago",
      contract: "Full Time",
      location: "USA only",
      skills: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
      logo: `${process.env.PUBLIC_URL}/images/account.svg`,
    },
    {
        id: 4,
        name: "MyHome",
        position: "Junior Frontend Developer",
        postedAt: "1w ago",
        contract: "Part Time",
        location: "Remote",
        skills: ["Frontend", "Junior", "CSS", "JavaScript"],
        logo: `${process.env.PUBLIC_URL}/images/myhome.svg`,
    },
    {
        id: 5,
        name: "Loop Studios",
        position: "Software Engineer",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        skills: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
        logo: `${process.env.PUBLIC_URL}/images/loop-studios.svg`,
    },
    {
        id: 6,
        name: "Faceit",
        position: "Junior Backend Developer",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Remote",
        skills: ["Backend", "Junior", "Ruby", "RoR"],
        logo: `${process.env.PUBLIC_URL}/images/faceit.svg`,
    },
    {
        id: 7,
        name: "Shortly",
        position: "Junior Developer",
        postedAt: "3w ago",
        contract: "Part Time",
        location: "Worldwide",
        skills: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
        logo: `${process.env.PUBLIC_URL}/images/shortly.svg`,
    },
    {
        id: 8,
        name: "Insure",
        position: "Junior Frontend Developer",
        postedAt: "1mo ago",
        contract: "Full Time",
        location: "USA only",
        skills: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
        logo: `${process.env.PUBLIC_URL}/images/insure.svg`,
    },
    {
        id: 9,
        name: "Eyecam Co.",
        position: "Product Designer",
        postedAt: "2mo ago",
        contract: "Part Time",
        location: "Remote",
        skills: ["Fullstack", "Midweight", "JavaScript", "Django", "Python"],
        logo: `${process.env.PUBLIC_URL}/images/eyecam-co.svg`,
    },
    {
        id: 10,
        name: "The Air Filter Company",
        position: "Junior Frontend Developer",
        postedAt: "3mo ago",
        contract: "Full Time",
        location: "USA only",
        skills: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
        logo: `${process.env.PUBLIC_URL}/images/the-air-filter-company.svg`,
    },
  ];

  const processedProduct = rawProduct.map((item) => {
    const isNew = item.postedAt === "1d agos" || item.postedAt === "2d agos";
    const isFeatured = item.id === 1 || item.id === 2;
    return {
      ...item,
      new: isNew,
      featured: isFeatured,
    };
  });

  const [product, setProduct] = useState(processedProduct);

  return (
    <CardContext.Provider value={{ product, setProduct }}>
      {children}
    </CardContext.Provider>
  );
};
