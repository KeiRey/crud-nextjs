"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import store from "@/store";
import { Provider } from "react-redux";
import '@mantine/core/styles.css';
import { FooterSocial } from "./partial/Footer";
import { HeaderTabs } from "./partial/Header";
interface LayoutsProps {
  children: ReactNode;
}

function Layouts({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 20,
    });
  }, []);
  return (
    <Provider store={store}>
      <HeaderTabs/>
      <main className="no-scrollbar w-full flex justify-center scroll-smooth transition-all duration-300">
        <div className="lg:min-h-screen lg:max-w-[1000px] w-full px-2 md:px-0">
          {children}
        </div>
      </main>
      <FooterSocial/>
    </Provider>
  );
}
export default Layouts;
