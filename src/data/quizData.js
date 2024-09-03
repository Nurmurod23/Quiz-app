
export const quizData = {
    Frontend: {
      HTML: [
        {
          question: 'What does HTML stand for?',
          options: [
            'HyperText Markup Language',
            'Home Tool Markup Language',
            'Hyperlinks and Text Markup Language',
            'Hyperlinking Text Management Language',
          ],
          answer: 'HyperText Markup Language',
        },
        {
          question: 'Which HTML tag is used to define an unordered list?',
          options: ['<ol>', '<li>', '<ul>', '<list>'],
          answer: '<ul>',
        },
        {
          question: 'What is the correct HTML element for inserting a line break?',
          options: ['<br>', '<break>', '<lb>', '<newline>'],
          answer: '<br>',
        },
      ],
      CSS: [
        {
          question: 'Which property is used to change the background color?',
          options: ['backgroundColor', 'bgColor', 'color', 'background-color'],
          answer: 'background-color',
        },
        {
          question: 'Which CSS property controls the text size?',
          options: ['font-size', 'text-size', 'font-style', 'text-style'],
          answer: 'font-size',
        },
        {
          question: 'What does CSS stand for?',
          options: [
            'Creative Style Sheets',
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Colorful Style Sheets',
          ],
          answer: 'Cascading Style Sheets',
        },
      ],
      JavaScript: [
        {
          question: 'Which company developed JavaScript?',
          options: ['Netscape', 'Mozilla', 'Microsoft', 'Sun Microsystems'],
          answer: 'Netscape',
        },
        {
          question: 'What will the following code return: Boolean(10 > 9)',
          options: ['true', 'false', 'NaN', 'undefined'],
          answer: 'true',
        },
        {
          question: 'How do you declare a JavaScript variable?',
          options: ['variable carName;', 'v carName;', 'var carName;', 'let carName;'],
          answer: 'var carName;',
        },
      ],
      'React.js': [
        {
          question: 'Which method is used to create components in React?',
          options: ['render', 'component', 'createComponent', 'React.createElement'],
          answer: 'React.createElement',
        },
        {
          question: 'What is the correct way to update state in React?',
          options: [
            'this.state.count = 5',
            'this.setState({count: 5})',
            'this.updateState({count: 5})',
            'this.state = {count: 5}',
          ],
          answer: 'this.setState({count: 5})',
        },
        {
          question: 'What is JSX in React?',
          options: [
            'A JavaScript library',
            'A JavaScript extension for writing XML-like code',
            'A React-specific markup language',
            'A database query language',
          ],
          answer: 'A JavaScript extension for writing XML-like code',
        },
      ],
    },
    Backend: {
      'Node.js': [
        {
          question: 'What is Node.js?',
          options: [
            'A frontend framework',
            'A database management system',
            'A JavaScript runtime built on Chromes V8 JavaScript engine',
            'An operating system',
          ],
          answer: 'A JavaScript runtime built on Chromes V8 JavaScript engine',
        },
        {
          question: 'Which of the following is NOT a core module in Node.js?',
          options: ['http', 'fs', 'path', 'react'],
          answer: 'react',
        },
        {
          question: 'How do you include a module in Node.js?',
          options: [
            'import module',
            'require("module")',
            'include module',
            'using module',
          ],
          answer: 'require("module")',
        },
      ],
      Python: [
        {
          question: 'What is Python?',
          options: [
            'A snake species',
            'A high-level programming language',
            'A database system',
            'A web browser',
          ],
          answer: 'A high-level programming language',
        },
        {
          question: 'Which of the following is NOT a valid data type in Python?',
          options: ['int', 'float', 'complex', 'char'],
          answer: 'char',
        },
        {
          question: 'How do you create a function in Python?',
          options: [
            'function myFunction():',
            'def myFunction():',
            'create myFunction():',
            'func myFunction():',
          ],
          answer: 'def myFunction():',
        },
      ],
      'Databases': [
        {
          question: 'What does SQL stand for?',
          options: [
            'Structured Query Language',
            'Simple Query Language',
            'Server Query Language',
            'Structured Question Language',
          ],
          answer: 'Structured Query Language',
        },
        {
          question: 'Which of the following is NOT a type of NoSQL database?',
          options: ['Document stores', 'Key-value stores', 'Graph databases', 'Relational databases'],
          answer: 'Relational databases',
        },
        {
          question: 'What is the primary key in a database?',
          options: [
            'A key that opens the database',
            'The first column in a table',
            'A unique identifier for each record in a table',
            'The most important data in a table',
          ],
          answer: 'A unique identifier for each record in a table',
        },
      ],
    },
  };