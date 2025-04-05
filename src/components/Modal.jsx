import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HiX } from "react-icons/hi";


const data = {
  devburguer: {
    name: "devburguer",
    site: "https://devburguer-psi.vercel.app/",
  },
  manoelserra: {
    name: "manoelserra",
    site: "https://arquitetomanoelserra.vercel.app/",
  },
  consultora: {
    name: "consultora",
    site: "https://consultorahyundai.vercel.app/",
  },
  restaurantefood: {
    name: "restaurantefood",
    site: "https://restaurantefood.vercel.app/",
  },
};

const Project = () => {
  const { id } = useParams();
  const info = data[id];

  // Adicione o estado do modal
  const [isModalOpen, setIsModalOpen] = useState(true); // Inicializa o modal como aberto

  // Função para fechar o modal e voltar à página anterior
  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
    window.history.back(); // Volta para a página anterior
  };

  return (
    <>
      {isModalOpen && (
        <div className="block">
          <div className="fixed z-30 w-full h-full bg-black opacity-80 top-0 left-0 rounded-2xl"></div>

          <div className="fixed z-40 md:w-[94vw] md:h-[94vh] w-[96vw] h-[94vh] border-[#3945ef] border-2 md:top-[3vh] md:left-[2vw] top-[3vh] left-[2vw] rounded-2xl overflow-hidden">
            <div className="w-full h-15 bg-black border-b-2 border-[#3945ef] flex items-center justify-end div-5 rounded-t-2xl">
              <div className="flex items-center justify-between w-full md:w-[98%] text-white">
                <a
                  className="underline  text-[14px] md:text-[18px]"
                  href={info.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.site}
                </a>
                <HiX className="text-3xl cursor-pointer" onClick={closeModal} />
              </div>
            </div>

            {/* Container de rolagem com altura fixada e overflow */}
            <div className="h-[calc(100%-60px)] w-full rounded-b-2xl">
              <div className="w-full h-full">
                {/* Substituindo a imagem pelo iframe */}
                <iframe
                  className="w-full h-full"
                  src={info.site} // Usando a URL do site a partir do item
                  title={info.name} // Um título descritivo para acessibilidade
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
