"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export type sections = "aboutMe" | "resume" | "home" | "portfolio" | "contact";
export interface ISectionContextProps {
  currentSection: sections;
  setCurrentSection: Dispatch<SetStateAction<sections>>;
}
interface ISectionContextProviderProps {
  children: React.ReactNode;
}
export const SectionContext = createContext({} as ISectionContextProps);

export const SectionContextProvider = ({
  children,
}: ISectionContextProviderProps) => {
  const router = usePathname();
  useEffect(()=>{
    if(router === '/about-me'){
      setCurrentSection('aboutMe')
    }else if(router === '/resume'){
      setCurrentSection('resume')
    }else if(router === '/portfolio'){
      setCurrentSection('portfolio')
    }else if(router === '/contact'){
      setCurrentSection('contact')
    }else{
      setCurrentSection('home')
    }
    console.log(currentSection)
  },[router])
  const [currentSection, setCurrentSection] = useState<sections>("home");

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
