import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ToolSidebar from './ToolSidebar';
import Breadcrumbs from './Breadcrumbs';
import ContentView from './tools/ContentView';
import { useToolStore } from '@/store/useToolStore';
import { useSidebarStore } from '@/store/useSidebarStore';
import { BookText, ChevronLeft, FileClock, FileUp, Menu, NotebookPen, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useModal } from '@/hooks/use-modal';
import { useState } from 'react';

const Layout = () => {
    const [select, setSelect] = useState('');
    const activeTab = useToolStore((state) => state.activeTab);
    const location = useLocation();
    const setActiveTab = useToolStore(state => state.setActiveTab);
    const { isOpen, toggle, close } = useSidebarStore();
    const { onOpen } = useModal();

    useEffect(() => {
        setActiveTab('johdanto');
        close();
    }, [location.pathname, setActiveTab, close]);

    return (
        <div className="w-full min-h-screen flex justify-center bg-white relative">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={close}
                />
            )}

            <div className="flex w-full max-w-7xl mx-auto">

                <div className={cn(
                    "fixed inset-y-0 left-0 z-40",
                    "lg:relative lg:translate-x-0",
                    "max-md:transition-opacity max-md:duration-200",
                    "md:transform md:transition-transform md:duration-300 max-md:w-full",
                    isOpen ? "max-md:opacity-100 md:translate-x-0" : "max-md:opacity-0 max-md:pointer-events-none md:-translate-x-full",
                    "lg:block"
                )}>
                    <Sidebar />
                </div>

                <main className="flex-1 overflow-y-auto px-6">
                    <div className='flex items-center gap-5 max-md:py-5 max-md:border-b mb-5'>
                        <h1 className="text-xl font-medium text-gray-900 flex items-center gap-2 md:hidden">
                            <BookText />
                            Messuopas
                        </h1>
                        <button
                            onClick={toggle}
                            className="relative max-md:z-50 p-0 !outline-none border-none !bg-white hover:bg-gray-50 lg:hidden max-md:ml-auto"
                        >
                            <Menu className="w-6 h-6 text-black/60" />
                        </button>
                        <Separator orientation="vertical" className="max-md:hidden lg:hidden h-7 bg-black/10" />
                        <Breadcrumbs />
                    </div>
                    <div className='flex items-center gap-2 mb-5'>
                        <Select value={select} onValueChange={setSelect}>
                            <SelectTrigger className="font-normal text-base">
                                <SelectValue className="text-base" placeholder="Valitse tapahtuma" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="1" className="text-base p-3">Helsingin torin messut</SelectItem>
                                <SelectItem value="2" className="text-base p-3">Järvenpän messut</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button onClick={() => onOpen("create-event-modal")} className="bg-green-400 hover:bg-green-500 !text-white border-0">
                            <Plus className='w-4 h-4' />
                        </Button>
                    </div>
                    {select && (
                        <>
                            <div className="space-y-6 my-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-2 gap-4">
                                    <div
                                        className={cn(
                                            "group select-none flex gap-2 p-4 border rounded-lg transition-colors cursor-pointer",
                                            activeTab === 'johdanto'
                                                ? "border-green-500"
                                                : "border-gray-200 hover:border-green-500"
                                        )}
                                        onClick={() => setActiveTab('johdanto')}
                                    >
                                        <BookText className={cn(
                                            'w-5 h-5 transition-colors',
                                            activeTab === 'johdanto' ? 'text-green-500' : 'text-black/70'
                                        )} />
                                        <div>
                                            <h3 className={cn(
                                                "text-lg font-medium mb-2",
                                                activeTab === 'johdanto' ? 'text-green-500' : 'text-gray-800'
                                            )}>Opas</h3>
                                            <p className="text-gray-600">Opas</p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "group select-none flex gap-2 p-4 border rounded-lg transition-colors cursor-pointer",
                                            activeTab === 'notes'
                                                ? "border-green-500"
                                                : "border-gray-200 hover:border-green-500"
                                        )}
                                        onClick={() => setActiveTab('notes')}
                                    >
                                        <NotebookPen className={cn(
                                            'w-5 h-5 transition-colors',
                                            activeTab === 'notes' ? 'text-green-500' : 'text-black/70'
                                        )} />
                                        <div>
                                            <h3 className={cn(
                                                "text-lg font-medium mb-2",
                                                activeTab === 'notes' ? 'text-green-500' : 'text-gray-800'
                                            )}>Muistiinpanot</h3>
                                            <p className="text-gray-600">Lisää ja hallinnoi muistiinpanoja projektiin liittyen</p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "group select-none flex gap-2 p-4 border rounded-lg transition-colors cursor-pointer",
                                            activeTab === 'documents'
                                                ? "border-green-500"
                                                : "border-gray-200 hover:border-green-500"
                                        )}
                                        onClick={() => setActiveTab('documents')}
                                    >
                                        <FileUp className={cn(
                                            'w-5 h-5 transition-colors',
                                            activeTab === 'documents' ? 'text-green-500' : 'text-black/70'
                                        )} />
                                        <div>
                                            <h3 className={cn(
                                                "text-lg font-medium mb-2",
                                                activeTab === 'documents' ? 'text-green-500' : 'text-gray-800'
                                            )}>Liitteet</h3>
                                            <p className="text-gray-600">Lisää ja hallinnoi muistiinpanoja projektiin liittyen</p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "group select-none flex gap-2 p-4 border rounded-lg transition-colors cursor-pointer",
                                            activeTab === 'history'
                                                ? "border-green-500"
                                                : "border-gray-200 hover:border-green-500"
                                        )}
                                        onClick={() => setActiveTab('history')}
                                    >
                                        <FileClock className={cn(
                                            'w-5 h-5 transition-colors',
                                            activeTab === 'history' ? 'text-green-500' : 'text-black/70'
                                        )} />
                                        <div>
                                            <h3 className={cn(
                                                "text-lg font-medium mb-2",
                                                activeTab === 'history' ? 'text-green-500' : 'text-gray-800'
                                            )}>Historia</h3>
                                            <p className="text-gray-600">Lisää ja hallinnoi muistiinpanoja projektiin liittyen</p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "group select-none flex gap-2 p-4 border rounded-lg transition-colors cursor-pointer",
                                            activeTab === 'todo'
                                                ? "border-green-500"
                                                : "border-gray-200 hover:border-green-500"
                                        )}
                                        onClick={() => setActiveTab('todo')}
                                    >
                                        <FileClock className={cn(
                                            'w-5 h-5 transition-colors',
                                            activeTab === 'todo' ? 'text-green-500' : 'text-black/70'
                                        )} />
                                        <div>
                                            <h3 className={cn(
                                                "text-lg font-medium mb-2",
                                                activeTab === 'todo' ? 'text-green-500' : 'text-gray-800'
                                            )}>Tehtävä lista</h3>
                                            <p className="text-gray-600">Lisää ja hallinnoi tehtäviä projektiin liittyen</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Separator className="mb-6" />
                        </>
                    )}
                    <ContentView />
                </main>

                {/* <ToolSidebar /> */}
            </div>
        </div>
    );
};

export default Layout;
