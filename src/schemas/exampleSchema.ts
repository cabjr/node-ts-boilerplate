import { z } from 'zod';

const exampleSchema = z.object({
  id: z.string(),
  attribute: z.string(),
});

export default exampleSchema;
