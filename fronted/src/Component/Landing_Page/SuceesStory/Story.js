import React from "react";
import { Card,Button } from "antd";
import img1 from "../Menubar_Page/wedding.jpg";
import img2 from "../Menubar_Page/wedding.jpg"; // Example for another image
import img3 from "../Menubar_Page/wedding.jpg"; // Example for another image
import img4 from "../Menubar_Page/wedding.jpg";
import img5 from "../Menubar_Page/wedding.jpg"; // Example for another image
import img6 from "../Menubar_Page/wedding.jpg"; // Example for another image
import Footer from "../../Footer/Footer";
import Testmonial from "../Home_Page/Testmonial";
import '../SuceesStory/Story.css'
const { Meta } = Card;

const images = [
  { src: img1, title: "Europe Street Beat", description: "Mountain views can vary greatly depending on the location, season, and weather. In winter, snow-capped peaks can add a majestic feel, while in summer, the lush greenery can give a more vibrant and inviting atmosphere", readMore: "https://www.instagram.com" },
  { src: img2, title: "City Adventure", description: "Mountain views can vary greatly depending on the location, season, and weather. In winter, snow-capped peaks can add a majestic feel, while in summer, the lush greenery can give a more vibrant and inviting atmosphere" },
  { src: img3, title: "Mountain Views", description: "Mountain views can vary greatly depending on the location, season, and weather. In winter, snow-capped peaks can add a majestic feel, while in summer, the lush greenery can give a more vibrant and inviting atmosphere" },
  { src: img4, title: "Europe Street Beat", description: "Mountain views can vary greatly depending on the location, season, and weather. In winter, snow-capped peaks can add a majestic feel, while in summer, the lush greenery can give a more vibrant and inviting atmosphere" },
  { src: img5, title: "City Adventure", description: "Mountain views can vary greatly depending on the location, season, and weather. In winter, snow-capped peaks can add a majestic feel, while in summer, the lush greenery can give a more vibrant and inviting atmosphere" },
  { src: img6, title: "Mountain Views", description: "Mountain views can vary greatly depending on the location, season, and weather. In winter, snow-capped peaks can add a majestic feel, while in summer, the lush greenery can give a more vibrant and inviting atmosphere" },
];

const Story = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>OUR SUCCESS STORY</h1>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: "20%", margin: "10px" }} // Adjust width to fit 4 items per row
            cover={<img alt="example" src={image.src} />}
          >
            <Meta title={image.title} description={image.description} />
            <div style={{ marginTop: "10px" }}>
              <Button type="link" href={image.readMore} target="_blank">
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
      {/* <Testmonial/> */}
       <Footer/>
    </>
  );
};

export default Story;
