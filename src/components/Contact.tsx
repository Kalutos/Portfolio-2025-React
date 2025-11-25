"use client";

import React, { useState, useEffect, useRef } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  className?: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Informations de contact
  const contactInfo: ContactInfo[] = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "arthurslfpro@gmail.com",
      link: "mailto:arthurslfpro@gmail.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Linkedin",
      value: "@ArthurSelvaFichepain",
      link: "https://www.linkedin.com/in/arthurselvafichepain/",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      ),
      title: "Github",
      value: "@Kalutos",
      link: "https://github.com/Kalutos",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Localisation",
      value: "Paris, France",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulation d'un appel API
      // Remplacez par votre logique d'envoi d'email (ex: EmailJS, API route, etc.)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simuler une réponse positive
      console.log("Formulaire soumis:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [contactsAnimated, setContactsAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setContactsAnimated(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Déclencher l'animation des projets quand on change de filtre
  useEffect(() => {
    if (isVisible) {
      setContactsAnimated(false);
      setTimeout(() => setContactsAnimated(true), 100);
    }
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative min-h-screen bg-[#0a192f] flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
              <span className="text-[#64ffda] font-mono text-lg mr-2">03.</span>
              Contactez-moi
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#64ffda] to-transparent mx-auto" />
            <p className="text-lg text-[#8892b0] max-w-2xl mx-auto mt-4">
              Une idée de projet ? Une question ? N&apos;hésitez pas à me
              contacter. Je serais ravi de discuter avec vous !
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-1">
            {/* Informations de contact */}
            <div className="space-y-6">
              {/* Liste des moyens de contact */}
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0a192f] border border-[#64ffda] rounded-lg flex items-center justify-center text-[#64ffda]">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#ccd6f6]">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#64ffda] hover:text-blue-700 transition-colors duration-200"
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {/* Formulaire de contact */}
              <div className="bg-[#0a192f] border-2 border-[#64ffda] rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-[#ccd6f6] mb-6">
                  Envoyez-moi un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#ccd6f6] mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#112240] border border-[#64ffda]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#ccd6f6] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#112240] border border-[#64ffda]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#ccd6f6] mb-2"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#112240] border border-[#64ffda]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#ccd6f6] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-[#112240] border border-[#64ffda]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                  </div>

                  {/* Messages de statut */}
                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-green-700 font-medium">
                          Message envoyé avec succès !
                        </p>
                      </div>
                      <p className="text-green-600 text-sm mt-1">
                        Je vous répondrai dans les plus brefs délais.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <p className="text-red-700 font-medium">
                          Erreur lors de l&apos;envoi
                        </p>
                      </div>
                      <p className="text-red-600 text-sm mt-1">
                        Veuillez réessayer ou me contacter directement par
                        email.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      !isFormValid || isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#112240] border border-[#64ffda]/30 text-[#ccd6f6] hover:text-[#fff] hover:border-[#64ffda] transform hover:translate-y-[-1px] shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#ccd6f6]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Envoi en cours...
                      </div>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
