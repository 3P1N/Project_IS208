import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";
import { LanguageSwitcher } from "../../components/ui/language-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  // Navigation menu items
  const navItems = [
    { label: t('nav.home'), active: true },
    { label: t('nav.aboutUs'), active: false },
    { label: t('nav.project'), active: false },
    { label: t('nav.timeline'), active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] min-h-screen relative flex flex-col">
        {/* Navigation Bar */}
        <header className="w-full h-auto relative">
          <div className="flex w-full flex-col md:flex-row h-auto md:h-[72px] items-center justify-between px-4 md:px-6 py-4 md:py-2.5 bg-basewhite shadow-shadow-nav-shadown">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="font-['Rubik_Bubbles',Helvetica] font-normal text-black text-2xl md:text-3xl">
                PMIT
              </h1>
            </div>

            <NavigationMenu className="mb-4 md:mb-0">
              <NavigationMenuList className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink className="font-['Inter',Helvetica] font-bold text-graygray-700 text-base leading-[25px]">
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex gap-4 items-center">
              <LanguageSwitcher />
              <Button className="px-[25px] py-3.5 rounded-[5px] w-full md:w-auto [background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)]">
                <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-graygray-50 text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] whitespace-nowrap [font-style:var(--button-text-btn-lg-font-style)]">
                  {t('nav.contactUs')}
                </span>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[148px] pt-8 md:pt-[95px] gap-8 md:gap-0">
          <div className="flex flex-col items-start gap-[35px] md:gap-[75px]">
            <div className="flex flex-col items-start gap-7">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                  <span className="text-black">{t('hero.title1')} </span>
                  <span className="text-purple-500">{t('hero.title2')}</span>
                  <span className="text-black"> {t('hero.title3')}</span>
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                  <span className="text-black">{t('hero.title4')} </span>
                  <span className="text-purple-500">{t('hero.title5')}</span>
                </h2>
              </div>

              <p className="w-full md:w-[531px] text-center md:text-left font-paragraphs-default-lg font-[number:var(--paragraphs-default-lg-font-weight)] text-graygray-700 text-[length:var(--paragraphs-default-lg-font-size)] tracking-[var(--paragraphs-default-lg-letter-spacing)] leading-[var(--paragraphs-default-lg-line-height)] [font-style:var(--paragraphs-default-lg-font-style)]">
                {t('hero.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="relative w-full md:w-[614px] h-[300px] md:h-[546px] bg-[url(/web-development-1.png)] bg-cover bg-center bg-no-repeat" />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto bg-gray-900 text-white py-12 px-4 md:px-[148px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-['Rubik_Bubbles',Helvetica] text-2xl">PMIT</h3>
              <p className="text-gray-400 text-sm">
                {t('footer.companyDesc')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t('footer.services')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.webDev')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.mobileDev')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.cloudSolutions')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.devOps')}</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t('footer.contactUs')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('footer.email')}</li>
                <li>{t('footer.phone')}</li>
                <li>{t('footer.address')}</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};