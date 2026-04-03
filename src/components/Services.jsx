import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'API REST (Spring Boot)' },
  { title: 'Architecture MVC/DAO' },
  { title: 'UI/UX (React/Tailwind)' },
  { title: 'Systèmes de Gestion' },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="p-4 border-2 border-red-600 bg-white rounded-full text-center text-[#0A0A1B]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          {service.title}
        </motion.div>
      ))}
    </div>
  );
};

export default Services;