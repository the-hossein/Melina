import React from "react";
import { FlexBetween, Section } from "../../../styles/globalStyled";
import ProductInfo from "./ProductInfo";
import ProductSlider from "./ProductSlider";
import Similar from "./Similar";
import { ProductContainer } from "./styleProduct";

const Product = ({ datas,similar }) => {
  const images = [];

  if (datas !== null && datas.imageFile1) {
    images.push({ src: datas.imageFile1.filePath, id: datas.id });
  }
  if (datas !== null && datas.imageFile2) {
    images.push({ src: datas.imageFile2.filePath, id: datas.id });
  }
  if (datas !== null && datas.imageFile3) {
    images.push({ src: datas.imageFile3.filePath, id: datas.id });
  }
  if (datas !== null && datas.imageFile4) {
    images.push({ src: datas.imageFile4.filePath, id: datas.id });
  }
  if (datas !== null && datas.imageFile5) {
    images.push({ src: datas.imageFile5.filePath, id: datas.id });
  }
  if (datas !== null && datas.imageFile6) {
    images.push({ src: datas.imageFile6.filePath, id: datas.id });
  }
  return (
    <Section>
      <ProductContainer>
        <FlexBetween className="productContent">
          <div className="col-lg-5 col-md-10 col-12 ">
            <ProductInfo data={datas} />
            <Similar data={similar}/>
          </div>
          <div className="col-lg-7 col-md-12 col-12 fixed">
            <ProductSlider images={images} />
          </div>
        </FlexBetween>
      </ProductContainer>
    </Section>
  );
};

export default Product;
