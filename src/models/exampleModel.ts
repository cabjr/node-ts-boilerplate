import { randomUUID } from "crypto";

export interface Example {
    id: string;
    attribute: string;
  }
  
  let examples: Example[] = [
    {
        'id': '3e3fa3d5-eb6a-40ad-b1f1-5c7e5c62466a',
        'attribute': 'example1'
    },
    {
        'id': '0f5f8b75-ba57-463b-a4a9-4600bb83e4f8',
        'attribute': 'example2'
    },
    {
        'id': '9c51ee60-8243-4b08-88ad-76ed8c491dd5',
        'attribute': 'example3'
    },
  ];
  
  // A mock function to simulate user creation in a database
  export const createExample = (user: Example): Example => {
    const newExample = {
      ...user,
      id: randomUUID(),
    };
    examples.push(newExample);
    return newExample;
  };
  
  // Mock function to simulate retrieving users from a database
  export const getExamples = (): Example[] => {
    return examples;
  };
  
  // Mock function to simulate retrieving a single user from a database
  export const getExample = (id: string): Example | undefined => {
    return examples.find(example => example.id === id);
  };
  