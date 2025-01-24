import { BookOpenText, PencilRuler, FileClock } from "lucide-react";
import { Button } from "./ui/button";
import { useToolStore } from "@/store/useToolStore";
import { cn } from "@/lib/utils";

const ToolSidebar = () => {
    const { activeTab, setActiveTab } = useToolStore();

    const tabs = [
        { id: 'johdanto', icon: BookOpenText, label: 'Johdanto' },
        { id: 'tyokalut', icon: PencilRuler, label: 'Työkalut' },
        { id: 'historia', icon: FileClock, label: 'Historia' }
    ];

    return (
        <div className="max-md:hidden px-5 py-5 flex max-w-[250px] w-full flex-col gap-3 border-l border-gray-200">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <Button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "justify-start gap-2 bg-transparent text-black/90 hover:bg-gray-100 !outline-none !border-none",
                            activeTab === tab.id && "bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800"
                        )}
                    >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                    </Button>
                );
            })}
        </div>
    );
};

export default ToolSidebar;