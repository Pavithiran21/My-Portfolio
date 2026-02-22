import React, { useEffect, useState } from 'react';

const leftCodeSnippets = [
  'import React from "react";\nimport { useState } from "react";\n\nconst App = () => {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    fetchData();\n  }, []);\n\n  return (\n    <div className="app">\n      <Header />\n      <Main />\n    </div>\n  );\n};',
  'const express = require("express");\nconst app = express();\n\napp.use(express.json());\n\napp.get("/api/users", (req, res) => {\n  res.json({ users: [] });\n});\n\napp.listen(3000, () => {\n  console.log("Server running");\n});',
  'function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n-1) + fibonacci(n-2);\n}\n\nconst result = fibonacci(10);\nconsole.log(result);\n\nconst arr = [1,2,3,4,5];\nconst doubled = arr.map(x => x * 2);'
];

const rightCodeSnippets = [
  'router.post("/api/data", async (req, res) => {\n  try {\n    const newData = await Data.create(req.body);\n    res.status(201).json(newData);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});',
  'const mongoose = require("mongoose");\n\nconst schema = new mongoose.Schema({\n  name: String,\n  email: String,\n  createdAt: { type: Date, default: Date.now }\n});\n\nmodule.exports = mongoose.model("User", schema);',
  'async function fetchData(url) {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n}\n\nfetchData("/api/users")\n  .then(data => console.log(data))\n  .catch(err => console.error(err));'
];

const floatingCodeSnippets = [
  'npm install\nnpm start\nnpm run build\ngit add .\ngit commit -m "update"\ngit push origin main',
  'docker build -t app .\ndocker run -p 3000:3000 app\nkubectl apply -f deploy.yml\nkubectl get pods\nkubectl logs pod-name',
  'yarn install\nyarn dev\nyarn test\nyarn build\nvercel deploy\nnetlify deploy --prod'
];

// const centerTexts = [
//   'const dev = { code: true };',
//   'function build() { }',
//   'while(alive) { code(); }',
//   'if(coffee) { code(); }',
//   'const skills = [];'
// ];

export const Background = () => {
  const [leftCode, setLeftCode] = useState(0);
  const [rightCode, setRightCode] = useState(0);
  const [floatingCode, setFloatingCode] = useState(0);
  // const [centerText, setCenterText] = useState('');
  const [centerIndex, setCenterIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftCode(prev => (prev + 1) % leftCodeSnippets.length);
    }, 8000);

    const rightInterval = setInterval(() => {
      setRightCode(prev => (prev + 1) % rightCodeSnippets.length);
    }, 10000);

    const floatingInterval = setInterval(() => {
      setFloatingCode(prev => (prev + 1) % floatingCodeSnippets.length);
    }, 6000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
      clearInterval(floatingInterval);
    };
  }, []);

  // useEffect(() => {
  //   const currentText = centerTexts[centerIndex];
    
  //   if (charIndex < currentText.length) {
  //     const timeout = setTimeout(() => {
  //       setCenterText(currentText.slice(0, charIndex + 1));
  //       setCharIndex(charIndex + 1);
  //     }, 150);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     const timeout = setTimeout(() => {
  //       setCenterIndex((centerIndex + 1) % centerTexts.length);
  //       setCharIndex(0);
  //       setCenterText('');
  //     }, 2500);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [charIndex, centerIndex]);

  return (
    <>
      <div className="grid-background"></div>
      <div className="code-lines-left">
        <pre>{leftCodeSnippets[leftCode]}</pre>
      </div>
      <div className="code-lines-right">
        <pre>{rightCodeSnippets[rightCode]}</pre>
      </div>
      <div className="floating-code">
        <pre>{floatingCodeSnippets[floatingCode]}</pre>
      </div>
    </>
  );
};


