import { useToolStore } from '@/store/useToolStore';
import { BookOpenText, BookText, FileClock, PencilRuler, Search } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';

const Sidebar = () => {
  const location = useLocation();
  const navigation = [
    {
      title: "Messuopas",
      version: "Versio 1.0",
      sections: [
        {
          title: "Johdanto",
          path: "/johdanto"
        },
        {
          title: "1. Myynnillinen asiakashankinta",
          subsections: [
            { title: "1.1 Asiakashankinnan suunnittelu", path: "/myynnillinen-asiakashankinta/asiakashankinnan-suunnittelu" },
            { title: "1.2 Myynnin valmistelu", path: "/myynnillinen-asiakashankinta/myynnin-valmistelu" },
            { title: "1.3 Asiakaskohtaamisten toteutus", path: "/myynnillinen-asiakashankinta/asiakaskohtaamisten-toteutus" }
          ]
        },
        {
          title: "2. VISUAALINEN ILME",
          subsections: [
            { title: "2.1 Messuosasto", path: "/visuaalinen-ilme/messuosasto" },
            { title: "2.2 Brändi", path: "/visuaalinen-ilme/brandi" },
            { title: "2.3 Materiaalit", path: "/visuaalinen-ilme/materiaalit" }
          ]
        },
        {
          title: "3. MARKKINOINTI",
          subsections: [
            { title: "3.1 Somestrategia", path: "/markkinointi/somestrategia" },
            { title: "3.2 Markkinointimateriaalit", path: "/markkinointi/materiaalit" },
            { title: "3.3 Kampanjat", path: "/markkinointi/kampanjat" }
          ]
        },
        {
          title: "4. HENKILÖSTÖ",
          subsections: [
            { title: "4.1 Tiimi", path: "/henkilosto/tiimi" },
            { title: "4.2 Koulutus", path: "/henkilosto/koulutus" }
          ]
        },
        {
          title: "5. SEURANTA",
          subsections: [
            { title: "5.1 Mittarit", path: "/seuranta/mittarit" },
            { title: "5.2 Raportointi", path: "/seuranta/raportointi" }
          ]
        }
      ]
    }
  ];
  const { activeTab, setActiveTab } = useToolStore();

  // const tabs = [
  //   { id: 'johdanto', icon: BookOpenText, label: 'Johdanto' },
  //   { id: 'tyokalut', icon: PencilRuler, label: 'Työkalut' },
  //   { id: 'historia', icon: FileClock, label: 'Historia' }
  // ];
  return (
    <div className="w-[315px] h-screen bg-white overflow-y-auto border-r border-[#eaeaea] max-md:w-full max-md:h-full">
      <div className='flex flex-col items-start border-b gap-2 border-[#eaeaea] p-5 max-md:py-3'>
        <h1 className="text-xl font-medium text-gray-900 flex items-center gap-2">
          <BookText />
          {navigation[0].title}
        </h1>
      </div>

      <nav className="space-y-4">
        <div className='relative my-2 md:hidden px-3'>
          <Search className='absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
          <Input className='text-sm w-full h-full pl-10' type="search" placeholder="Search..." />
        </div>
        {/* <div className='md:hidden flex my-2'>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 gap-2 bg-transparent text-black/90 hover:bg-gray-100 !outline-none !border-none",
                  activeTab === tab.id && "bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800"
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </Button>
            );
          })}
        </div> */}
        {navigation[0].sections.map((section, index) => (
          <div key={index}>
            {section.path ? (
              // <Link
              //   to={section.path}
              //   className={`block text-base px-4 py-2 ${location.pathname === section.path
              //     ? 'text-gray-900'
              //     : 'text-gray-600 hover:bg-gray-100'
              //     } transition-colors`}
              // >
              //   {section.title}
              // </Link>
              <></>
            ) : (
              <>
                <div className="text-sm font-bold text-black/60 px-4 py-2 tracking-wider uppercase">{section.title}</div>
                {section.subsections && (
                  <div className="ml-0">
                    {section.subsections.map((subsection, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subsection.path}
                        className={`block text-base py-3 pl-9 px-4 leading-none font-normal ${location.pathname === subsection.path
                          ? 'bg-green-100 text-green-600 font-semibold border-l-4 border-green-500'
                          : 'text-black/90 hover:bg-gray-100'
                          } transition-colors`}
                      >
                        {subsection.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
