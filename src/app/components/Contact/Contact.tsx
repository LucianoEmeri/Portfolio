'use client'

import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import WhatsAppButton from './whatsapp-button';

interface FormDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const formInitialDetails: FormDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
}

export default function Contact() {
  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails)
  const [buttonText, setButtonText] = useState("Enviar")
  const [status, setStatus] = useState({ success: false, message: "" })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setButtonText("Enviando...")

    try {
      const response = await fetch("https://formspree.io/f/xwpedkov", {
        method: "POST",
        body: JSON.stringify(formDetails),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const result = await response.json()

      setFormDetails(formInitialDetails)
      setButtonText("Enviar")

      if (response.ok) {
        setStatus({ success: true, message: "Mensaje enviado con éxito" })
      } else {
        throw new Error(result.error || "Algo salió mal")
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setStatus({ success: false, message: "Algo salió mal, por favor intenta de nuevo más tarde." })
    }
  }

  return (
    <section id="contacto" className="pt-4 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Contáctame</h2>
          <p className="text-red-200 text-xl md:text-2xl tracking-wide leading-relaxed mb-10 text-center">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
          </p>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="Nombre"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-red-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-red-200 placeholder:opacity-80 text-lg"
                />
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Apellido"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-red-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-red-200 placeholder:opacity-80 text-lg"
                />
              </div>
              <input
                type="email"
                value={formDetails.email}
                placeholder="Correo Electrónico"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
                className="w-full px-4 py-3 bg-black bg-opacity-50 border border-red-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-red-200 placeholder:opacity-80 text-lg"
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Teléfono"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="w-full px-4 py-3 bg-black bg-opacity-50 border border-red-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-red-200 placeholder:opacity-80 text-lg"
              />
              <textarea
                rows={5}
                value={formDetails.message}
                placeholder="Mensaje"
                onChange={(e) => onFormUpdate("message", e.target.value)}
                required
                className="w-full px-4 py-3 bg-black bg-opacity-50 border border-red-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-red-200 placeholder:opacity-80 text-lg"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-red-900/50 to-red-600/50 text-white py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out text-xl font-semibold"
              >
              <span className="inline-block transition duration-300 hover:scale-110">
              {buttonText}
              </span>
              </motion.button>
            </form>
            {status.message && (
              <p className={`mt-6 text-center text-lg ${status.success ? "text-white" : "text-red-600"}`}>
                {status.message}
              </p>
            )}
          </motion.div>
        </motion.div>
        <WhatsAppButton phoneNumber="+543435048422" message="Hola, estoy interesado en tus servicios." />
      </div>
    </section>
  )
}