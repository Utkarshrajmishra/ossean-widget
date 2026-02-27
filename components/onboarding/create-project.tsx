"use client";

import { formAction } from "@/actions/onboarding-action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useActionState, useEffect, useState } from "react";

const AddProjectDialog = () => {
 const [loading, setLoading]=useState<boolean>(false)
  const [state, action, pending] = useActionState(formAction, {
    values: { name: "", url: "" },
    message: {},
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      createProject();
    }
  }, [state.success]);

  const createProject = () => {
    console.log("Hello World");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>

      <DialogContent className="w-[350px] p-4.5 font-sans border border-neutral-300">
        <form action={action} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle className="text-neutral-700">Add Website</DialogTitle>
            <DialogDescription>
              Add your website name and URL here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-4">
            <Field className="gap-1.5">
              <Label htmlFor="name">Website Name</Label>
              <div>
              <Input
                id="name"
                name="name"
                placeholder="Acme Corp."
                defaultValue={state?.values?.name}
              />
              {state?.message?.name && (
                <p className="text-sm text-red-500">{state.message.name[0]}</p>
              )}
              </div>
            </Field>

            <Field className="gap-1.5">
              <Label htmlFor="url">Website URL</Label>
              <div>
              <Input
                id="url"
                name="url" 
                placeholder="https://acme.com"
                defaultValue={state?.values?.url}
              />
              {state?.message?.url && (
                <p className="text-sm text-red-500">{state.message.url[0]}</p>
              )}
              </div>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <Button type="submit" className="bg-neutral-800" disabled={pending}>
              {pending ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectDialog;
