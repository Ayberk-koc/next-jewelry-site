import { z } from "zod";

const pickAddressFormSchema = z.object({
  pickedAddress: z.string("Bitte eine addresse wählen"),
});
type PickAddressFormSchemaValuesType = z.infer<typeof pickAddressFormSchema>;

export { pickAddressFormSchema };
export type { PickAddressFormSchemaValuesType };
