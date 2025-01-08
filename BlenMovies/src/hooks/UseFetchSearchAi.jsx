import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

import {GoogleGenerativeAI} from "@google/generative-ai";
import { json } from 'react-router-dom';

export default function UseFetchSearchAi(promt) {
  const genAI = new GoogleGenerativeAI('AIzaSyD7MhKo11uedyPqMNahHf-GIHxrAaCY6Us');

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Provide a list of movies and TV series in JSON format without ```json or the other ``` or anything just simply the json file, including the movie/series title, type (movie or tv), and year of release. Use the following structure: Do not include any additional text or explanations. or answer I Don't Know This movie",
});

const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
  const getTodos = async () => {
    const parts = [
      { text: "Find Movies/Series " + promt },
      { text: "" },
  ];

  
   const result= await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
  });
  const jsonResult1 = await result.response.text()
  const jsonResult =jsonResult1.replace(/```json|```/g, '')
  try {
    console.log(jsonResult)
    // Parse the JSON string
    return  JSON.parse(jsonResult);
    
  } catch (error) {
    throw new Error('The response is not JSON');
  }
 
  }

  return useQuery({ 
    queryKey: ['SearchMoviesRecomendation', promt], 
    queryFn: getTodos,
    enabled: false,  // Disable automatic fetching
    refetchOnMount: false,
    refetchOnWindowFocus: false 
  })
}
