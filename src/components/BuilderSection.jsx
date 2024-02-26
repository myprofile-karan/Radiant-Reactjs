import React from "react";
import BuilderComponent from "./BuilderComponent";

const BuilderSection = () => {
  return (
    <div>
      <BuilderComponent
        count="1"
        img="./assets/cup.png"
        bestChoice="Best choice"
        wiproHeading1="WixPro 72-Inch Responsive Website Builder"
        para1="- Comprehensive Digital Platform Creation Tool, Streamlined Design
        Interface for Professional Websites and Online Stores (Black/Blue)"
        wiproHeading2="Main highlights"
        para2="[What You Get]: Receive the WixPro website builder suite, access
        to premium design templates, an extensive library of widgets and
        apps, and detailed step-by-step guides."
        rating="9.8"
        comment="Exceptional"
        starimg="./assets/star9.8.png"
      />

      <BuilderComponent
        count="2"
        img="./assets/diamond.png"
        bestChoice="Best choice"
        wiproHeading1="SiteCraft 68-Inch Ultimate Web Design Studio-"
        para1="Advanced Site Creation Toolkit, Intuitive
        Drag-and-Drop Editor for Dynamic Websites and
        E-commerce Platforms (Green/White)"
        wiproHeading2="Main highlights"
        para2="[What You Get]: Gain access to the SiteCraft
        design studio, featuring a robust selection of
        design elements, SEO optimization tools, and
        e-commerce integrations."
        rating="9.5"
        comment="Excellent"
        starimg="./assets/star9.3.png"
      />

      <BuilderComponent
        count="3"
        wiproHeading1="WixPro 72-Inch Responsive Website Builder"
        para1="- Comprehensive Digital Platform Creation Tool, Streamlined Design
        Interface for Professional Websites and Online Stores (Black/Blue)"
        wiproHeading2="Main highlights"
        para2="[What You Get]: Receive the WixPro website builder suite, access
        to premium design templates, an extensive library of widgets and
        apps, and detailed step-by-step guides."
        rating="9.3"
        comment="Exceptional"
        starimg="./assets/star9.3.png"
      />

      <BuilderComponent
        count="4"
        imgTitle="CDK"
        wiproHeading1="CDK Responsive Builder:"
        para1="An extensive library of widgets and apps, and detailed step-by-step guides"
        off="26% off"
        wiproHeading2="Main highlights"
        rating="9.1"
        comment="Very Good"
        starimg="./assets/star9.1.png"
      />
    </div>
  );
};

export default BuilderSection;
