import React from "react";
import { DollarSign, Users, Clock, Headphones } from "lucide-react";
import type { Feature } from "~/components/FeatureList";

export const eAuditorFeatures: Feature[] = [
  {
    icon: <DollarSign size={24} />,
    title: "Cost Efficient",
    description: "registration process"
  },
  {
    icon: <Users size={24} />,
    title: "100+ Registrations",
    description: "done every month"
  },
  {
    icon: <Clock size={24} />,
    title: "Speedy Delivery",
    description: "of services"
  },
  {
    icon: <Headphones size={24} />,
    title: "Professional Services",
    description: "offered"
  }
]; 