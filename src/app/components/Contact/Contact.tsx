'use client'

import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRightCircle } from 'lucide-react'
import WhatsAppButton from './whatsapp-button'
import Swal from 'sweetalert2'

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
        Swal.fire({
          title: '¡Éxito!',
          text: 'Mensaje enviado con éxito',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc2626',
          color: '#ffffff',
          backdrop: `
            rgba(0,0,0,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        setStatus({ success: true, message: "" })
      } else {
        throw new Error(result.error || "Algo salió mal")
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setStatus({ success: false, message: "Algo salió mal, por favor intenta de nuevo más tarde." })
    }
  }

  return (
    <section id="contacto" className="lg:py-16">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">Contáctame</h2>
          <p className="text-red-200 text-xl md:text-2xl lg:text-2xl tracking-wide leading-relaxed">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              className="group inline-flex items-center justify-center w-full px-6 py-3 text-lg md:text-xl font-semibold rounded bg-gradient-to-r from-black to-red-600/50 text-white border border-white/50 hover:from-red-600/50 hover:to-black transition duration-300 animate__animated animate__fadeIn animate__delay-2s"
            >
              <span className="inline-flex items-center">
                <span className="relative overflow-hidden mr-3">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                    {buttonText}
                  </span>
                  <span className="absolute top-full left-0 inline-block transition-transform duration-500 group-hover:-translate-y-full">
                    {buttonText}
                  </span>
                </span>
                <ArrowRightCircle className="transition-transform duration-300 group-hover:translate-x-1" size={24} />
              </span>
            </motion.button>
          </form>
          {status.message && (
            <p className={`mt-6 text-center text-lg ${status.success ? "text-white" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
        </motion.div>
        <div className="mt-12 lg:mt-16 text-center">
          <WhatsAppButton phoneNumber="+543435048422" message="Hola, estoy interesado en tus servicios." />
        </div>
      </div>
    </section>
  )
}