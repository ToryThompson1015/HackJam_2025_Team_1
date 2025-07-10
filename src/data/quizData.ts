
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
    }
  ]
};
