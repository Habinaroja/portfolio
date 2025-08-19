
import { GoogleGenAI, Type } from "@google/genai";
import type { PortfolioContent } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const schema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "A professional summary for the portfolio.",
    },
    projectDescriptions: {
      type: Type.ARRAY,
      description: "An array of project descriptions.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "The original title of the project."
          },
          description: {
            type: Type.STRING,
            description: "A concise, 2-3 sentence technical description for the project."
          }
        },
        required: ["title", "description"],
      }
    }
  },
  required: ["summary", "projectDescriptions"],
};


export const generatePortfolioContent = async (): Promise<PortfolioContent> => {
    const prompt = `
    You are a professional technical writer specializing in creating compelling portfolio content for software developers. Based on the following JSON data, generate a professional summary and a concise, impressive description for each project.

    **Input Data:**
    {
      "name": "Habina Roja N",
      "position": "Software Developer",
      "skills": ["Java", "Machine Learning", "HTML", "CSS", "SQL", "Python", "UI/UX Design"],
      "projects": [
        "Image-based OTP verification in Android mobile application",
        "Leaf classification using decision tree algorithm in machine learning project",
        "Handwritten recognition using SVM algorithm",
        "Car purchase prediction using K-Nearest Neighbour Algorithm"
      ]
    }

    **Instructions:**
    1.  **Summary:** Write a professional summary (around 3-4 sentences) highlighting the developer's skills and passion for technology. Mention their versatility across web development, machine learning, and design.
    2.  **Project Descriptions:** For each project title from the input data, write a 2-3 sentence description. Each description should:
        -   Briefly explain the project's purpose.
        -   Mention the key technology or algorithm used.
        -   Focus on the project's outcome or application.

    **Output Format:**
    Return ONLY a valid JSON object that strictly adheres to the provided schema.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: schema,
        },
    });
    
    const text = response.text.trim();
    try {
        const parsedJson = JSON.parse(text);
        return parsedJson as PortfolioContent;
    } catch (e) {
        console.error("Failed to parse Gemini response:", text);
        throw new Error("Received invalid JSON from Gemini API.");
    }
};
