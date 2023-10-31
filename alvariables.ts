interface QuizQuestions {
    length: any;
    easy: string[];
    intermediate:string[];
    difficult:string[];
  }
  
  let allQuestions: QuizQuestions = {
      easy: [
          `What is the purpose of TypeScript's "tsc" command?`,
          "How do you install TypeScript globally using npm?",
          "Which keyword is used to define a TypeScript interface?",
          "What is the file extension for TypeScript source files?",
          "Which keyword is used to define a variable with an explicit type in TypeScript?",
      ],
      intermediate: [
          "Which TypeScript feature allows you to combine multiple types into one type?",
          "Which TypeScript data type is used to represent a value that may be either a specified type or null or undefined?",
          "What is TypeScript primarily used for?",
          "Which TypeScript feature allows you to define a type that is a union of two or more types?",
          `Which keyword in TypeScript is used to explicitly mark a class member as private?`,
      ],
      difficult: ["TypeScript introduced a concept for handling asynchronous code that is not present in JavaScript. What is it called?",
          "Which TypeScript feature allows you to create a type that can represent a union of multiple types?",
          "Which TypeScript construct allows you to define a contract for the shape of an object?",
          "In TypeScript, which keyword is used to define a class property that should be accessible without creating an instance of the class?",
          `Which TypeScript feature allows you to declare a variable without specifying its type and then infer the type based on its initial value?`,
      ],
      length: undefined
  };
  
  interface QuizChoices {
    easy: string[][];
    intermediate:string[][];
    difficult:string[][];
  }
  
  let allChoices: QuizChoices = {
    easy: [
      [
        "a) To run TypeScript files in a browser",
        "b) To transpile TypeScript code into JavaScript",
        " c) To check for runtime errors in TypeScript code",
        " d) To format TypeScript code for readability",
      ],
      [
        "a) npm install typescript -g",
        " b) npm typescript install -g",
        "c) npm global install typescript",
        "d) npm install -g tsc",
      ],
      ["a) class", "b) interface", "c) type", "d) extends"],
      ["a) .js", "b) .ts", "c) .html", "d) .css"],
      ["a. var", "b. let", "c. const", "d. type"],
    ],
    intermediate:[
      ["a) Type assertion",  "b) Type inference", "c) Type alias","d) Type narrowing"],
      ["a) any","b) object","c) union","d) void"],
      ["a) Server-side programming",
      "b) Front-end web development",
       "c) Data analysis",
       "d) Mobile app development"],
       ["a) Type inference","b) Type assertion", "c) Type alias",
       "d) Type intersection"],
       ["A. public","B. protected","C. private","D. readonly"]
    ],
    difficult:[["A. Promises","B. Async/await","C. Callbacks", "D. Observables"],
    ["A. Intersection Types","B. Discriminated Unions","C. Mapped Types","D. Conditional Types"],
      ["A. Interfaces","B. Classes", "C. Modules","D. Decorators"],
      ["A. static","B. public","C. private", "D. protected"],
      ["A. Type assertions","B. Type aliases","C. Type inference", "D. Type casting"]
  ]
  };
  
  let allRightAnswers: QuizQuestions = {
      easy: [
          "b) To transpile TypeScript code into JavaScript",
          "a) npm install typescript -g",
          "b) interface",
          "b) .ts",
          "b. let",
      ],
      intermediate: ["c) Type alias",
          "c) union",
          "b) Front-end web development",
          "d) Type intersection",
          "C. private"
      ],
      difficult: ["B. Async/await",
          "A. Intersection Types",
          "A. Interfaces",
          "A. static",
          "C. Type inference"
      ],
      length: undefined
  };
  
  
  export {
    allQuestions,
    allRightAnswers,
    allChoices
  }