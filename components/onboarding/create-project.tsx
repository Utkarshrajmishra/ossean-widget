"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddProjectDialog=()=>{
    
  return (
    <div >
    <Dialog >
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="w-[350px] font-sans border border-neutral-300">
          <DialogHeader>
            <DialogTitle className="text-neutral-700">Add Website</DialogTitle>
            <DialogDescription>
              Add your website name and URL here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="gap-5">
            <Field className="gap-1.5">
              <Label htmlFor="name">Website Name</Label>
              <Input id="name" name="name" placeholder="Acme Corp." />
            </Field>
            <Field className="gap-1.5">
              <Label htmlFor="url">Website URL</Label>
              <Input id="url" name="username" placeholder="www.acme.com" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            
            <Button type="submit" className="bg-neutral-800">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </div>
  )
}

export default AddProjectDialog