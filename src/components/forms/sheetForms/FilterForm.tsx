"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const categories = [
  { id: "ring", label: "Rings", amount: 120 },
  { id: "necklaces", label: "Necklaces", amount: 100 },
  { id: "bracelets", label: "Bracelets", amount: 124 },
  { id: "earrings", label: "Earrings", amount: 123 },
] as const;

const formSchema = z.object({
  categories: z.array(z.string()),
  priceRange: z.tuple([z.number().int(), z.number().int()]),
});

export default function FilterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { categories: ["ring", "earrings"], priceRange: [0, 100] }, // ✅
  });
  //schreibe dir dinge auf zu den fields! Schreibe ausführlich und sauber!! -> Du willst das ja noch zig mal nutzen!! Auch wenn jetzt gecheckt, später wirst dus vergessen!!
  //besonders das field-object ist von großer bedeutung!!
  //error messages braucht man ja nicht hier! Werte die möglich sind kann ich ja steuern!
  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2"]}
          className="flex flex-col space-y-gap-11"
        >
          <AccordionItem value="item-1" className="border-gray-200">
            <AccordionTrigger className="py-0 mb-gap-9">
              <p className="font-text-xl-medium text-gray-950">Categories</p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-gap-9">
              {/* EIN Field für die Gruppe */}
              {categories.map((category) => (
                <FormField
                  key={category.id}
                  control={form.control}
                  name="categories"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={category.id}
                        className="flex flex-row items-center gap-gap-5 relative"
                      >
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value?.includes(category.id)}
                            onChange={(event) => {
                              const isChecked = event.target.checked; // <-- boolean aus Event
                              const curr = field.value ?? [];
                              const next = isChecked
                                ? [...curr, category.id] // hinzufügen
                                : curr.filter(
                                    (elem: string) => elem !== category.id
                                  ); // entfernen
                              field.onChange(next); // RHF updaten
                            }}
                            ref={field.ref}
                            className="h-[16px] w-[16px] border-gray-200 text-indigo-200 focus:ring-indigo-200 cursor-pointer"
                          />
                        </FormControl>
                        <FormLabel className="font-text-md-medium text-gray-950">
                          {category.label}
                        </FormLabel>
                        <div className="font-text-md-medium text-gray-500 absolute right-0">
                          ({category.amount})
                        </div>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-gray-200">
            <AccordionTrigger className="py-0 mb-gap-9">
              <p className="font-text-xl-medium text-gray-950">
                Filter By Price
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => {
                  return (
                    <div className="flex flex-col space-y-gap-9">
                      <p className="font-text-md-medium text-gray-950">
                        Price: {field.value[0] ?? 0}€ - {field.value[1] ?? 100}€
                      </p>
                      <div className="px-1 cursor-pointer">
                        <FormItem>
                          <FormControl>
                            <Slider
                              min={0}
                              max={100}
                              value={[...(field.value ?? [0, 100])]}
                              onValueChange={([min, max]) => {
                                const newValues = [min, max];
                                field.onChange(newValues);
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      </div>
                    </div>
                  );
                }}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* DEBUG: zeigt live, ob Clicks im Form-State ankommen */}
        {/* <pre className="text-xs bg-black/5 p-2 rounded">
          {JSON.stringify(form.watch(), null, 2)}
        </pre> */}
      </form>
    </Form>
  );
}
