import React from "react";
import { Section } from "../../components/index.js";
import articlesData from "../../data/articles.js";

const Content = () => {
  const sectionList = [];

  articlesData.forEach((articleData, index) => {
    sectionList.push(
      <Section
        key={index}
        title={articleData.title}
        technology={articleData.technology}
        time={articleData.time}
        imageUrl={articleData.imageUrl}
        background={articleData.background}
        color={articleData.color}
      />
    );
  });

  return <div>{sectionList}</div>;
};

export default Content;
