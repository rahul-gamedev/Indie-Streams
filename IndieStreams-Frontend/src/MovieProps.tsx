import { ReactNode } from "react";

export default interface movieProps {
  id: string;
  title: string | undefined;
  description: string | undefined;
  movieUrl: string | undefined;
  posterUrl: string | undefined;
  children: ReactNode | null;
}
