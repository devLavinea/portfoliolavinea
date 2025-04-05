import React, { useState, useEffect } from "react";
import  {BallCanvas}  from "../canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);

  // Função para controlar quais tecnologias são visíveis com base no tamanho da tela
  const updateVisibleTechnologies = () => {
    const isSmallScreen = window.innerWidth <= 768; // Exemplo de breakpoint para telas pequenas
    const filteredTechnologies = technologies.filter((tech) => {
      // Excluir tecnologias comentadas dependendo do tamanho da tela
      if (isSmallScreen) {
        return (
          tech.name === "TypeScript" ||
          tech.name === "Redux Toolkit" ||
          tech.name === "Tailwind CSS" ||
          tech.name === "Node JS" ||
          tech.name === "docker"
        ); // Somente as tecnologias não comentadas vão aparecer
      } else {
        return true; // Em telas maiores, mostrar todas as tecnologias
      }
    });

    setVisibleTechnologies(filteredTechnologies);
  };

  // Efeito para monitorar a largura da tela
  useEffect(() => {
    updateVisibleTechnologies();
    window.addEventListener("resize", updateVisibleTechnologies);

    return () => {
      window.removeEventListener("resize", updateVisibleTechnologies);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {visibleTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
