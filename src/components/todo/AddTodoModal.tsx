import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

const onSubmit = (e:FormEvent) =>{
  console.log('kaj hosse na');
  e.preventDefault()
  console.log(task,description);
}

  return (
    // <Dialog>
    //   <DialogTrigger asChild>
    //   <Button className="bg-primary-gradient">add todo</Button>
    //     </DialogTrigger>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>filter by tsk</DialogTitle>
    //       <DialogDescription>
    //         This action cannot be undone. This will permanently delete your
    //         account and remove your data from our servers.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <form onSubmit={onSubmit}>
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="task" className="text-right">
    //           Task
    //         </Label>
    //         <Input
    //         onBlur={(e)=>setTask(e.target.value)}
    //           id="task"
    //           defaultValue="Pedro Duarte"
    //           className="col-span-3"
    //         />
    //       </div>
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="description" className="text-right">
    //           Description
    //         </Label>
    //         <Input
    //         onBlur={(e)=>setDescription(e.target.value)}
    //           id="description"
    //           defaultValue="@peduarte"
    //           className="col-span-3"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex justify-end">
    //       <DialogClose asChild>
    //       <Button type="submit">Save changes</Button>
    //       </DialogClose>
          
    //     </div>
    //     </form>
    //   </DialogContent>
    // </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
        </div>
        <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
