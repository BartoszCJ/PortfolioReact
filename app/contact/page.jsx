"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+48)123 123 123",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Bartosz@email.com;",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Pszczyna",
  },
];

import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";

export const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Formularz kontaktowy</h3>
              <p className="text-white/60">
                Wyślij mi wiadomość jak chceż podjąć współprace.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Imie" />
                <Input type="lastname" placeholder="Nazwisko" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Telefon" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz temat"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Wybierz temat</SelectLabel>
                    <SelectItem value="est">Aplikacja Webowa</SelectItem>
                    <SelectItem value="cst">Grafika 3D</SelectItem>
                    <SelectItem value="mst">Stworzenie Loga</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Tu napisz wiadomość"
              />
              <Button size="md" className="max-w-40">
                Wyślij
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
