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
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  { id: "ring", label: "Rings", amount: 120 },
  { id: "necklaces", label: "Necklaces", amount: 100 },
  { id: "bracelets", label: "Bracelets", amount: 124 },
  { id: "earrings", label: "Earrings", amount: 123 },
] as const;

const sizes = [
  { id: "4.0", label: "4.0", amount: 120 },
  { id: "5.0", label: "5.0", amount: 150 },
  { id: "6.0", label: "6.0", amount: 120 },
  { id: "7.0", label: "7.0", amount: 120 },
  { id: "8.0", label: "8.0", amount: 120 },
  { id: "9.0", label: "9.0", amount: 120 },
  { id: "10.0", label: "10.0", amount: 120 },
  { id: "11.0", label: "11.0", amount: 120 },
  { id: "12.0", label: "12.0", amount: 120 },
] as const;

const formSchema = z.object({
  categories: z.array(z.string()),
  priceRange: z.tuple([z.number().int(), z.number().int()]),
  sizes: z.array(z.string()),
});

export default function FilterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      priceRange: [0, 100],
      sizes: [],
    }, // ✅
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit);
        }}
        className="space-y-gap-11 flex flex-col h-full"
      >
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <Accordion
              type="multiple"
              defaultValue={["", "", ""]}
              className="flex flex-col"
            >
              <AccordionItem
                value="Category"
                className="border-t bprder-gray-200"
              >
                <AccordionTrigger className="py-gap-9">
                  <p className="font-text-xl-medium text-gray-950">
                    Categories
                  </p>
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
                                  field.onChange(next); // ReactHookForm updaten. Das Argument muss dem datentyp von form.value entsprechen!
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
              <AccordionItem value="PriceRange" className="border-gray-200">
                <AccordionTrigger className="py-gap-9">
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
                            Price: {field.value[0] ?? 0}€ -{" "}
                            {field.value[1] ?? 100}€
                          </p>
                          <div className="px-1 cursor-pointer">
                            <FormItem>
                              <FormControl>
                                <Slider
                                  step={5}
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
              <AccordionItem value="Size" className="border-gray-200">
                <AccordionTrigger className="py-gap-9">
                  <p className="font-text-xl-medium text-gray-950">Sizes</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-gap-9">
                  {sizes.map((size) => (
                    <FormField
                      key={size.id}
                      control={form.control}
                      name="sizes"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={size.id}
                            className="flex flex-row gap-gap-5 items-center relative"
                          >
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value?.includes(size.id)}
                                onChange={(e) => {
                                  const curr = field.value ?? [];
                                  const isChecked = e.currentTarget.checked;
                                  const newValues = isChecked
                                    ? [...curr, size.id]
                                    : curr.filter(
                                        (elem: string) => elem !== size.id
                                      );
                                  field.onChange(newValues);
                                }}
                                ref={field.ref}
                                className="h-[16px] w-[16px] border-gray-200 text-indigo-200 focus:ring-indigo-200 cursor-pointer"
                              />
                            </FormControl>
                            <FormLabel className="font-text-md-medium text-gray-950">
                              {size.label}
                            </FormLabel>
                            <div className="font-text-md-medium text-gray-500 absolute right-0">
                              ({size.amount})
                            </div>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </div>

        <div className="flex gap-gap-9 mt-auto">
          <Button size={"lg"} variant={"outline"} className="flex-1">
            Reset
          </Button>
          <Button size={"lg"} variant={"fill"} className="flex-1">
            Apply Filter
          </Button>
        </div>

        {/* DEBUG: zeigt live, ob Clicks im Form-State ankommen */}
        {/* <pre className="text-xs bg-black/5 p-2 rounded">
          {JSON.stringify(form.watch(), null, 2)}
        </pre> */}
      </form>
    </Form>
  );
}
