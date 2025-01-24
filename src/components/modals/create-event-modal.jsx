"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useModal } from '@/hooks/use-modal';


const CreateEventModal = () => {
    const { isOpen, type, onClose } = useModal();

    const isModalOpen = isOpen && type === "create-event-modal";

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black overflow-hidden flex flex-col'>
                <DialogHeader>
                    <DialogTitle className='text-xl flex items-center'>
                        Luo uusi tapahtuma
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className="hidden"></DialogDescription>
                <div className='space-y-1'>
                    <Label className="text-sm">Tapahtuman nimi</Label>
                    <Input type="text" />
                </div>
                <DialogFooter>
                    <Button>Luo tapahtuma</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateEventModal;
