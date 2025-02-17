import React, { useEffect, useState } from 'react';
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

const Layout = () => {
    const [select, setSelect] = useState('');
    const [isToolsOpen, setIsToolsOpen] = useState(false);
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
            {/* Fixed Tools Button */}
            <div className="fixed right-2 top-1/2 max-md:right-8 max-md:top-8 -translate-y-1/2 z-50">
                <div className="relative">
                    <Button
                        onClick={() => setIsToolsOpen(!isToolsOpen)}
                        className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-full w-12 h-12 max-md:w-10 max-md:h-10 flex items-center justify-center shadow-lg transition-all duration-300 md:translate-x-0 translate-x-6 relative"
                    >
                        <ChevronLeft
                            className={cn(
                                'w-8 h-8 transition-transform duration-300 absolute md:static md:translate-x-0',
                                isToolsOpen ? 'rotate-180' : ''
                            )}
                        />
                    </Button>

                    <div className={cn(
                        "absolute right-full max-md:right-[70%]  top-0  max-md:mr-0 mr-2 bg-white rounded-lg shadow-lg border p-2 w-64",
                        "transform transition-all duration-300 origin-right",
                        isToolsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                    )}>
                        <Select value={select} onValueChange={setSelect}>
                            <SelectTrigger className="font-normal text-base mb-2">
                                <SelectValue className="text-base" placeholder="Valitse tapahtuma" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1" className="text-base p-3">Helsingin torin messut</SelectItem>
                                <SelectItem value="2" className="text-base p-3">Järvenpän messut</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="space-y-1">
                            {[
                                { id: 'johdanto', icon: BookText, label: 'Opas' },
                                { id: 'notes', icon: NotebookPen, label: 'Muistiinpanot' },
                                { id: 'documents', icon: FileUp, label: 'Liitteet' },
                                { id: 'history', icon: FileClock, label: 'Historia' },
                                { id: 'todo', icon: NotebookPen, label: 'Tehtävä lista' }
                            ].map((tool) => (
                                <button
                                    key={tool.id}
                                    onClick={() => {
                                        setActiveTab(tool.id);
                                        setIsToolsOpen(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-2 p-2 rounded-md transition-colors",
                                        activeTab === tool.id
                                            ? "bg-green-50 text-green-500"
                                            : "hover:bg-gray-50 text-gray-700"
                                    )}
                                >
                                    <tool.icon className="w-4 h-4" />
                                    <span>{tool.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

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

                <main className="flex-1 overflow-y-auto px-6 relative">
                    <div className='flex items-center gap-5 max-md:py-5 max-md:border-b mb-5'>
                        {/* <h1 className="text-xl font-medium text-gray-900 flex items-center gap-2 md:hidden">
                            <BookText />
                            Messuopas
                        </h1> */}
                        <button
                            onClick={toggle}
                            className="relative max-md:z-50 p-0 !outline-none border-none !bg-white hover:bg-gray-50 lg:hidden"
                        >
                            <Menu className="w-6 h-6 text-black/60" />
                        </button>
                        <Separator orientation="vertical" className="max-md:hidden lg:hidden h-7 bg-black/10" />
                        <Breadcrumbs />
                    </div>
                    {/* <div className='flex items-center gap-2 mb-5'>
                        <Button onClick={() => onOpen("create-event-modal")} className="bg-green-400 hover:bg-green-500 !text-white border-0">
                            <Plus className='w-4 h-4' />
                        </Button>
                    </div> */}
                    <ContentView />
                </main>

                {/* <ToolSidebar /> */}
            </div>
        </div>
    );
};

export default Layout;
