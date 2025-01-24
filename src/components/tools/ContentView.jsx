import React, { useState } from 'react';
import { useToolStore } from '@/store/useToolStore';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, MoreVertical, Plus, Trash, Calendar as CalendarIcon, FileUp } from 'lucide-react';
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

const ToolsContent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tab, setTab] = useState(1);


  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Asiakastapaaminen - ABC Oy',
      content: 'Keskusteltiin uudesta tuotteesta ja sen mahdollisuuksista. Asiakas oli kiinnostunut erityisesti...',
      date: '23.01.2025'
    },
    {
      id: 2,
      title: 'Messuvalmistelut',
      content: 'Tarvittavat materiaalit: esitteet, käyntikortit, roll-up. Muista varata näyttelypöytä ajoissa.',
      date: '23.01.2025'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setNotes([
      {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toLocaleDateString('fi-FI')
      },
      ...notes
    ]);

    setTitle('');
    setContent('');
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setTab(1)}
          className={`px-3 py-2 -mb-px font-medium ${tab === 1
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
            }`}
        >
          Muistiinpanot
        </button>
        <button
          onClick={() => setTab(2)}
          className={`px-3 py-2 -mb-px font-medium ${tab === 2
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
            }`}
        >
          Luo uusi muistiinpano
        </button>
      </div>

      <div className="space-y-4">
        {tab === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white">
            <div>
              <Input
                placeholder="Otsikko"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Kirjoita muistiinpano tähän..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
                Lisää muistiinpano
              </Button>
            </div>
          </form>
        )}
        {tab === 1 && (
          notes.map((note) => (
            <div key={note.id} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-lg text-gray-900">{note.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{note.date}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Edit2 className="h-4 w-4" /> Muokkaa
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="gap-2 text-red-600"
                            onClick={() => handleDelete(note.id)}
                          >
                            <Trash className="h-4 w-4" /> Poista
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <p className="text-gray-600 whitespace-pre-wrap">{note.content}</p>
                </div>
              </div>
            </div>
          ))

        )}
      </div>
    </div>
  );
};

const HistoryContent = () => {
  const [tab, setTab] = useState(1);
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Messutarjous.pdf',
      size: '2.4 MB',
      type: 'PDF',
      uploadedAt: '23.01.2025',
    },
    {
      id: 2,
      name: 'Tuote-esittely.pptx',
      size: '5.1 MB',
      type: 'PPTX',
      uploadedAt: '23.01.2025',
    }
  ]);

  const handleFileUpload = (e) => {
    e.preventDefault();
    // Handle file upload logic here
  };

  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setTab(1)}
          className={`px-3 py-2 -mb-px font-medium ${tab === 1
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
            }`}
        >
          Tiedostot
        </button>
        <button
          onClick={() => setTab(2)}
          className={`px-3 py-2 -mb-px font-medium ${tab === 2
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
            }`}
        >
          Lataa tiedosto
        </button>
      </div>

      {tab === 2 && (
        <div className="space-y-4">
          <div 
            className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer"
            onClick={() => document.querySelector('#fileInput').click()}
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileUpload}
              multiple
            />
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="bg-green-50 p-3 rounded-full">
                  <Plus className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Lataa tiedostoja</h3>
              <p className="text-sm text-gray-500">
                Raahaa ja pudota tiedostot tähän tai klikkaa ladataksesi
              </p>
            </div>
          </div>
        </div>
      )}

      {tab === 1 && (
        <div className="space-y-3">
          {files.map((file) => (
            <div key={file.id} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded">
                    <FileUp className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{file.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.uploadedAt}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <FileUp className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <FileUp className="h-4 w-4" /> Lataa
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="gap-2 text-red-600" 
                        onClick={() => handleDelete(file.id)}
                      >
                        <Trash className="h-4 w-4" /> Poista
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TodoContent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();
  const [tab, setTab] = useState(1);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Soita asiakkaalle',
      description: 'Keskustele uudesta tarjouksesta ja sovi tapaaminen',
      status: 'pending',
      dueDate: '2025-01-25',
      createdAt: '23.01.2025'
    },
    {
      id: 2,
      title: 'Valmistele esitysmateriaali',
      description: 'Tee PowerPoint-esitys tuotteesta ABC messuja varten',
      status: 'completed',
      dueDate: '2025-01-24',
      createdAt: '23.01.2025'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setTodos([
      {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        status: 'pending',
        dueDate: date,
        createdAt: new Date().toLocaleDateString('fi-FI')
      },
      ...todos
    ]);

    setTitle('');
    setDescription('');
    setDate(undefined);
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' }
        : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setTab(1)}
          className={`px-3 py-2 -mb-px font-medium ${tab === 1
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
            }`}
        >
          Muistiinpanot
        </button>
        <button
          onClick={() => setTab(2)}
          className={`px-3 py-2 -mb-px font-medium ${tab === 2
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
            }`}
        >
          Luo uusi muistiinpano
        </button>

      </div>
      {tab === 1 && (
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={cn(
                "bg-white p-4 rounded-lg border transition-colors",
                todo.status === 'completed' ? 'border-green-200 bg-green-50' : 'border-gray-200'
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "mt-1 flex-shrink-0 w-5 h-5 border-2 rounded-full cursor-pointer transition-colors",
                    todo.status === 'completed'
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-green-500'
                  )}
                  onClick={() => toggleStatus(todo.id)}
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={cn(
                      "font-medium text-lg",
                      todo.status === 'completed' ? 'text-green-800 line-through' : 'text-gray-900'
                    )}>
                      {todo.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {new Date(todo.dueDate).toLocaleDateString('fi-FI')}
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Edit2 className="h-4 w-4" /> Muokkaa
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="gap-2 text-red-600"
                            onClick={() => handleDelete(todo.id)}
                          >
                            <Trash className="h-4 w-4" /> Poista
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  {todo.description && (
                    <p className={cn(
                      "text-sm whitespace-pre-wrap",
                      todo.status === 'completed' ? 'text-green-700 line-through' : 'text-gray-600'
                    )}>
                      {todo.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {tab === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white">
          <div className="space-y-4">
            <Input
              placeholder="Tehtävän nimi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
 
            />
            <Textarea
              placeholder="Tehtävän kuvaus..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px] resize-none"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Valitse päivämäärä</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Lisää tehtävä
            </Button>
          </div>
        </form>
      )}


    </div>
  );
};

const ContentView = () => {
  const activeTab = useToolStore((state) => state.activeTab);

  return (
    <div>
      {activeTab === 'johdanto' && <Outlet />}
      {activeTab === 'notes' && <ToolsContent />}
      {activeTab === 'documents' && <HistoryContent />}
      {activeTab === 'todo' && <TodoContent />}
    </div>
  );
};

export default ContentView;
