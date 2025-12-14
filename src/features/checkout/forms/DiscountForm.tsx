"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../../components/ui/form";

function InputWithButtonFormInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const form = useFormContext<DiscountFormValueType>();

  async function handleSendForm() {
    const ok = await form.trigger("couponCode");

    if (ok) {
      //schicke hier ans backend und update preis möglicherweise
      const values = form.getValues();
      console.log(values);
    }
  }

  return (
    <div>
      <Label className="font-text-sm-medium text-gray-500" scale={"xl2"}>
        Enter Discount Code
      </Label>
      <div className="flex items-stretch">
        <Input
          scale={"xl2"}
          className="font-text-md-medium text-gray-950 flex-1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={15}
        ></Input>
        <Button
          type="button"
          variant={"fill"}
          size={"lg"}
          className="font-text-md-medium"
          onClick={handleSendForm}
        >
          APPLY
        </Button>
      </div>
    </div>
  );
}

const DiscountFormSchema = z.object({
  couponCode: z.string().optional(),
});

type DiscountFormValueType = z.infer<typeof DiscountFormSchema>;

export default function DiscountForm() {
  const form = useForm<DiscountFormValueType>({
    resolver: zodResolver(DiscountFormSchema),
  });

  return (
    <Form {...form}>
      <form>
        <FormField
          name="couponCode"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <InputWithButtonFormInput
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
}
