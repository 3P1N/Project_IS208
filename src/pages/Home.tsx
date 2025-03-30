import React from "react";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[148px] pt-8 md:pt-[95px] gap-8 md:gap-0">
      <div className="flex flex-col items-start gap-[35px] md:gap-[75px]">
        <div className="flex flex-col items-start gap-7">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              <span className="text-black">Great </span>
              <span className="text-purple-500">Product</span>
              <span className="text-black"> is</span>
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              <span className="text-black">built by great </span>
              <span className="text-purple-500">team</span>
            </h2>
          </div>

          <p className="w-full md:w-[531px] text-center md:text-left font-paragraphs-default-lg font-[number:var(--paragraphs-default-lg-font-weight)] text-graygray-700 text-[length:var(--paragraphs-default-lg-font-size)] tracking-[var(--paragraphs-default-lg-letter-spacing)] leading-[var(--paragraphs-default-lg-line-height)] [font-style:var(--paragraphs-default-lg-font-style)]">
          Chúng tôi giúp xây dựng và quản lý đội ngũ phát triển đẳng cấp thế giới để hiện thực hóa tầm nhìn của bạn
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start w-full md:w-auto">
        <div className="relative w-full md:w-[614px] h-[300px] md:h-[546px] bg-[url(/web-development-1.png)] bg-cover bg-center bg-no-repeat" />
      </div>
    </section>
  );
};