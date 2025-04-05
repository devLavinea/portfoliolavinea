import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import  {EarthCanvas}  from "../canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Lavinea Souza",
          from_email: form.email,
          to_email: "lavinea2411@gmail.com",
          message: form.message,
          phone: form.phone,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado. Entrarei em contato com você assim que possível.");
          setForm({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Erro ao enviar email:", error);
          alert("Ahh, algo deu errado. Por favor, tente novamente.");
        }
      );
  };

  return (
    <div className="w-[100vw]  lg:h-[85vh] h-[130vh] md:h-[100vh]  flex items-center justify-center">
      <section className=" w-[96vw]  h-[98%] lg:w-[90vw] lg:h-[95%] flex flex-col md:items-center lg:flex-row-reverse gap-10 lg:gap-0 overflow-hidden">
        {/* Canvas do planeta */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 h-[480px] w-full lg:h-[98%] md:h-[600px] "
        >
          <EarthCanvas />
        </motion.div>

        {/* Formulário de contato */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-secondary mb-15px  rounded-2xl p-6 md:w-[550px] w-full" // Ajuste para largura fixa de 300px
        >
          <p className={`pl-pr-20px ${styles.sectionSubText}`}>Entre em contato</p>
          <h3 className={`pl-pr-20px ${styles.sectionHeadText}`}>Contato.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 pl-pr-20px flex flex-col gap-5"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu nome</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="   Qual o seu nome?"
                className="bg-quaternary h-[35px]  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu telefone</span>
              <input
                type="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="   Qual o seu telefone para contato?"
                className="bg-quaternary h-[35px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="   Qual é o seu email?"
                className="bg-quaternary h-[35px]  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Sua mensagem</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="   O que você quer dizer?"
                className="bg-quaternary  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="cursor-pointer bg-secondary  rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
