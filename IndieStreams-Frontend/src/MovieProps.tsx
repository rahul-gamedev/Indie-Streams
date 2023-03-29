import { ReactNode } from "react";

export default interface movieProps {
  title: string;
  description: string;
  movieUrl: string;
  posterUrl: string;
  children: ReactNode | undefined;
}
