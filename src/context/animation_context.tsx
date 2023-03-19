"use client"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface IAnimationContextProps {
  rotateAnimation: number;
  setRotateAnimation: Dispatch<SetStateAction<number>>;
}
interface IAnimationContextParams {
  children: React.ReactNode;
}
export const AnimationContext = createContext({} as IAnimationContextProps);

export const AnimationContextProvider = ({
  children,
}: IAnimationContextParams) => {
  const [rotateAnimation, setRotateAnimation] = useState<number>(90);
  const changeRotate = () =>{
    // if(rotateAnimation === 90){
    //   setRotateAnimation(-180)
    // }
    // setRotateAnimation()
  }
  return (
    <AnimationContext.Provider value={{ rotateAnimation, setRotateAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
