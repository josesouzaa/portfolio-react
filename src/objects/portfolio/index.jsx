import React from "react";
import PortfolioCard from "../../components/portfolioCard";
import { usePortfolio } from "../../context/globalContext";
import { PortfolioObject, PortfolioWrapper } from "./styles";

const Portfolio = () => {
  // eslint-disable-next-line no-shadow
  const { Portfolio } = usePortfolio();

  return (
    <PortfolioObject id="portfolio" data-section="portfolio">
      <div className="container">
        <h1>Portfólio</h1>
        <PortfolioWrapper>
          {Portfolio.map((item) => (
            <PortfolioCard
              key={item.titulo}
              title={item.titulo}
              img={item.preview}
              item={item}
            />
          ))}
        </PortfolioWrapper>
      </div>
    </PortfolioObject>
  );
};

export default Portfolio;
