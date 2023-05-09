import React from "react";
import { Section } from "../../components/index.js";
import articlesData from "../../data/articles.js";
import "./Content.css"

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

  return <div className="section-wrapper">{sectionList}</div>;
};

export default Content;
