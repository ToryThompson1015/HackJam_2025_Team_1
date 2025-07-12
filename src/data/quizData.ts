
import { QuizData } from '../types/quiz';

export const quizData: QuizData = {
  categories: [
    {
      name: "AWS",
      questions: [
        {
          id: "aws-100",
          text: "What does S3 stand for in AWS?",
          options: [
            "Simple Storage Service",
            "Secure Server Solution",
            "Scalable System Service",
            "Standard Storage System"
          ],
          correctAnswer: "Simple Storage Service",
          points: 100,
          category: "AWS"
        },
        {
          id: "aws-200",
          text: "Which AWS service is used for content delivery?",
          options: [
            "CloudFront",
            "Route 53",
            "ElastiCache",
            "API Gateway"
          ],
          correctAnswer: "CloudFront",
          points: 200,
          category: "AWS"
        },
        {
          id: "aws-300",
          text: "What is the maximum execution time for AWS Lambda functions?",
          options: [
            "5 minutes",
            "10 minutes",
            "15 minutes",
            "30 minutes"
          ],
          correctAnswer: "15 minutes",
          points: 300,
          category: "AWS"
        },
        {
          id: "aws-400",
          text: "Which AWS service provides managed NoSQL database?",
          options: [
            "RDS",
            "DynamoDB",
            "Redshift",
            "Aurora"
          ],
          correctAnswer: "DynamoDB",
          points: 400,
          category: "AWS"
        },
        {
          id: "aws-500",
          text: "What is AWS's container orchestration service?",
          options: [
            "ECS",
            "ECR",
            "EKS",
            "Both ECS and EKS"
          ],
          correctAnswer: "Both ECS and EKS",
          points: 500,
          category: "AWS"
        }
      ]
    },
    {
      name: "Cybersecurity",
      questions: [
        {
          id: "cyber-100",
          text: "What does CIA stand for in cybersecurity?",
          options: [
            "Confidentiality, Integrity, Availability",
            "Central Intelligence Agency",
            "Computer Information Access",
            "Cyber Intelligence Analysis"
          ],
          correctAnswer: "Confidentiality, Integrity, Availability",
          points: 100,
          category: "Cybersecurity"
        },
        {
          id: "cyber-200",
          text: "Which type of attack involves deceiving users into revealing sensitive information?",
          options: [
            "DDoS",
            "Phishing",
            "Malware",
            "SQL Injection"
          ],
          correctAnswer: "Phishing",
          points: 200,
          category: "Cybersecurity"
        },
        {
          id: "cyber-300",
          text: "What is the purpose of a firewall?",
          options: [
            "To encrypt data",
            "To monitor and control network traffic",
            "To create backups",
            "To scan for viruses"
          ],
          correctAnswer: "To monitor and control network traffic",
          points: 300,
          category: "Cybersecurity"
        },
        {
          id: "cyber-400",
          text: "Which encryption standard is commonly used for wireless networks?",
          options: [
            "WEP",
            "WPA",
            "WPA2",
            "WPA3"
          ],
          correctAnswer: "WPA3",
          points: 400,
          category: "Cybersecurity"
        },
        {
          id: "cyber-500",
          text: "What is a zero-day vulnerability?",
          options: [
            "A vulnerability that takes zero days to exploit",
            "A vulnerability discovered but not yet patched",
            "A vulnerability that causes zero damage",
            "A vulnerability in day-zero systems"
          ],
          correctAnswer: "A vulnerability discovered but not yet patched",
          points: 500,
          category: "Cybersecurity"
        }
      ]
    },
    {
      name: "Python",
      questions: [
        {
          id: "python-100",
          text: "What is the correct way to create a list in Python?",
          options: [
            "list = []",
            "list = {}",
            "list = ()",
            "list = <>"
          ],
          correctAnswer: "list = []",
          points: 100,
          category: "Python"
        },
        {
          id: "python-200",
          text: "Which keyword is used to define a function in Python?",
          options: [
            "function",
            "def",
            "func",
            "define"
          ],
          correctAnswer: "def",
          points: 200,
          category: "Python"
        },
        {
          id: "python-300",
          text: "What does 'pip' stand for in Python?",
          options: [
            "Python Installation Package",
            "Pip Installs Packages",
            "Python Interface Protocol",
            "Package Installation Program"
          ],
          correctAnswer: "Pip Installs Packages",
          points: 300,
          category: "Python"
        },
        {
          id: "python-400",
          text: "Which Python library is commonly used for data analysis?",
          options: [
            "NumPy",
            "Pandas",
            "Matplotlib",
            "All of the above"
          ],
          correctAnswer: "All of the above",
          points: 400,
          category: "Python"
        },
        {
          id: "python-500",
          text: "What is a Python decorator?",
          options: [
            "A design pattern",
            "A function that modifies another function",
            "A type of loop",
            "A data structure"
          ],
          correctAnswer: "A function that modifies another function",
          points: 500,
          category: "Python"
        }
      ]
    },
    {
      name: "Java",
      questions: [
        {
          id: "java-100",
          text: "What does JVM stand for?",
          options: [
            "Java Virtual Machine",
            "Java Variable Method",
            "Java Version Manager",
            "Java Visual Model"
          ],
          correctAnswer: "Java Virtual Machine",
          points: 100,
          category: "Java"
        },
        {
          id: "java-200",
          text: "Which keyword is used to inherit a class in Java?",
          options: [
            "inherits",
            "extends",
            "implements",
            "super"
          ],
          correctAnswer: "extends",
          points: 200,
          category: "Java"
        },
        {
          id: "java-300",
          text: "What is the size of an int in Java?",
          options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "8 bits"
          ],
          correctAnswer: "32 bits",
          points: 300,
          category: "Java"
        },
        {
          id: "java-400",
          text: "Which collection class allows duplicate elements?",
          options: [
            "Set",
            "Map",
            "List",
            "Queue"
          ],
          correctAnswer: "List",
          points: 400,
          category: "Java"
        },
        {
          id: "java-500",
          text: "What is the difference between == and .equals() in Java?",
          options: [
            "No difference",
            "== compares references, .equals() compares content",
            "== compares content, .equals() compares references",
            "Both compare references"
          ],
          correctAnswer: "== compares references, .equals() compares content",
          points: 500,
          category: "Java"
        }
      ]
    },
    {
      name: "AI",
      questions: [
        {
          id: "ai-100",
          text: "What does AI stand for?",
          options: [
            "Artificial Intelligence",
            "Automated Integration",
            "Advanced Interface",
            "Application Intelligence"
          ],
          correctAnswer: "Artificial Intelligence",
          points: 100,
          category: "AI"
        },
        {
          id: "ai-200",
          text: "Which type of learning uses labeled training data?",
          options: [
            "Unsupervised Learning",
            "Supervised Learning",
            "Reinforcement Learning",
            "Deep Learning"
          ],
          correctAnswer: "Supervised Learning",
          points: 200,
          category: "AI"
        },
        {
          id: "ai-300",
          text: "What is a neural network?",
          options: [
            "A computer network",
            "A model inspired by the human brain",
            "A type of database",
            "A programming language"
          ],
          correctAnswer: "A model inspired by the human brain",
          points: 300,
          category: "AI"
        },
        {
          id: "ai-400",
          text: "Which algorithm is commonly used for classification?",
          options: [
            "Linear Regression",
            "K-Means",
            "Random Forest",
            "DBSCAN"
          ],
          correctAnswer: "Random Forest",
          points: 400,
          category: "AI"
        },
        {
          id: "ai-500",
          text: "What is overfitting in machine learning?",
          options: [
            "Model performs well on training data but poorly on new data",
            "Model performs poorly on all data",
            "Model is too simple",
            "Model has too few parameters"
          ],
          correctAnswer: "Model performs well on training data but poorly on new data",
          points: 500,
          category: "AI"
        }
      ]
    },
    {
      name: "Data Engineering",
      questions: [
        {
          id: "data-100",
          text: "What is ETL?",
          options: [
            "Extract, Transform, Load",
            "Execute, Test, Launch",
            "Evaluate, Track, Learn",
            "Export, Transfer, Link"
          ],
          correctAnswer: "Extract, Transform, Load",
          points: 100,
          category: "Data Engineering"
        },
        {
          id: "data-200",
          text: "Which database is best for handling big data?",
          options: [
            "MySQL",
            "PostgreSQL",
            "Apache Hadoop",
            "SQLite"
          ],
          correctAnswer: "Apache Hadoop",
          points: 200,
          category: "Data Engineering"
        },
        {
          id: "data-300",
          text: "What is Apache Spark used for?",
          options: [
            "Web development",
            "Large-scale data processing",
            "Mobile apps",
            "Network security"
          ],
          correctAnswer: "Large-scale data processing",
          points: 300,
          category: "Data Engineering"
        },
        {
          id: "data-400",
          text: "What is a data pipeline?",
          options: [
            "A series of data processing steps",
            "A type of database",
            "A networking protocol",
            "A programming language"
          ],
          correctAnswer: "A series of data processing steps",
          points: 400,
          category: "Data Engineering"
        },
        {
          id: "data-500",
          text: "Which format is commonly used for streaming data?",
          options: [
            "CSV",
            "JSON",
            "Apache Kafka",
            "XML"
          ],
          correctAnswer: "Apache Kafka",
          points: 500,
          category: "Data Engineering"
        }
      ]
    },
    {
      name: "Crypto",
      questions: [
        {
          id: "crypto-100",
          text: "What does blockchain provide?",
          options: [
            "Centralized control",
            "Distributed ledger",
            "Single point of failure",
            "Mutable records"
          ],
          correctAnswer: "Distributed ledger",
          points: 100,
          category: "Crypto"
        },
        {
          id: "crypto-200",
          text: "What is Bitcoin?",
          options: [
            "A company",
            "A cryptocurrency",
            "A programming language",
            "A database"
          ],
          correctAnswer: "A cryptocurrency",
          points: 200,
          category: "Crypto"
        },
        {
          id: "crypto-300",
          text: "What is mining in cryptocurrency?",
          options: [
            "Physical excavation",
            "Validating transactions and creating new blocks",
            "Stealing coins",
            "Trading currencies"
          ],
          correctAnswer: "Validating transactions and creating new blocks",
          points: 300,
          category: "Crypto"
        },
        {
          id: "crypto-400",
          text: "What is a smart contract?",
          options: [
            "A legal document",
            "Self-executing contract with terms in code",
            "A trading algorithm",
            "A type of wallet"
          ],
          correctAnswer: "Self-executing contract with terms in code",
          points: 400,
          category: "Crypto"
        },
        {
          id: "crypto-500",
          text: "What consensus mechanism does Bitcoin use?",
          options: [
            "Proof of Stake",
            "Proof of Work",
            "Delegated Proof of Stake",
            "Proof of Authority"
          ],
          correctAnswer: "Proof of Work",
          points: 500,
          category: "Crypto"
        }
      ]
    }
  ]
};
