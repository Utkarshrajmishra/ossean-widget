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
import { useActionState } from "react";

const AddProjectDialog = () => {
  const [state, action, pending] = useActionState(formAction, {
    values: { name: "", url: "" },
    message: {},
    success:false
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>

      <DialogContent className="w-[350px] font-sans border border-neutral-300">
        <form action={action}>
          <DialogHeader>
            <DialogTitle className="text-neutral-700">Add Website</DialogTitle>
            <DialogDescription>
              Add your website name and URL here.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-5">
            <Field className="gap-1.5">
              <Label htmlFor="name">Website Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Acme Corp."
                defaultValue={state?.values?.name}
              />
              {state?.message?.name && (
                <p className="text-sm text-red-500">{state.message.name[0]}</p>
              )}
            </Field>

            <Field className="gap-1.5">
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                name="url" // ✅ FIXED
                placeholder="https://acme.com"
                defaultValue={state?.values?.url}
              />
              {state?.message?.url && (
                <p className="text-sm text-red-500">{state.message.url[0]}</p>
              )}
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
