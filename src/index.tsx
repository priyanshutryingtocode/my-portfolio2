/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profilePic from './assets/profile-pic.png';


const DEVELOPER_NAME = 'Priyanshu Srivastava';
const ABOUT_PLACEHOLDER = 'I am a passionate full-stack developer specializing in crafting elegant, high-performance web applications. With a strong foundation in modern technologies like React and Node.js, and a keen grasp of modern AI and ML applications, I excel at building scalable solutions that deliver exceptional user experiences. I am always looking forward to tackling new challenges and pushing the boundaries of what\'s possible on the web.';

const EDUCATION = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    university: 'Indian Institute of Information Technology, Sri City',
    duration: 'August 2023 - Present',
    details: [
      'Current CGPA: 8.54',
      'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming',
    ],
  },
];

const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
];

const PROJECTS = [

  {
    title: 'AI Order Assistance Chatbot',
    description: 'A chatbot that leverages Gemini, Langchain and Supabase to access order details for a E-commerce platform, providing real-time assistance to customers, deployed via Streamlit.',
    tags: ['Python', 'Supabase', 'Langchain'],
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    liveUrl: 'https://chatbotproject-4vsvmq4kgebnur4cootjn7.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/ChatbotProject',
  },
  {
    title: 'Student Management System',
    description: 'A simple terminal-based Student Management System built using C++, allowing CRUD operations on student records with data persistence using file handling.',
    tags: ['C++', 'File-Handling', 'OOP'],
    image: 'https://beams360.com/wp-content/uploads/2024/08/School-Management-system-02-1170x580.jpg',
    liveUrl: '',
    githubUrl: 'https://github.com/priyanshutryingtocode/Student-Management-System',
  },
  {
    title: 'Handoff Simulator',
    description: 'A network handoff simulator that models the transition of a mobile device between different network cells, analyzing performance metrics such as signal strength and latency during handoffs.',
    tags: ['Python', 'Streamlit', 'Matplotlib'],
    image: 'data:image/png;base64,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',
    liveUrl: 'https://handoff-simulator-7011.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Handoff-Simulator',
  },
  {
    title: 'Congestion Prediction in VLSI',
    description: 'An implementation of congestion prediction in VLSI design using deep learning techniques to optimize routing and placement for improved chip performance.',
    tags: ['Python', 'Deep-Learning', 'Image-Processing'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrBdzPoSXaXF7SfBHBAXxZZLTi0VIQ3okmQ&s',
    liveUrl: '',
    githubUrl: 'https://github.com/priyanshutryingtocode/Implementation-of-Deep-Learning-for-Congestion-Prediction-in-VLSI',
  },
  {
    title: 'Asteroid Class Prediction',
    description: 'An asteroid class prediction project that utilizes machine learning algorithms to classify asteroids based on their physical and orbital characteristics.',
    tags: ['Python', 'Machine-Learning', 'Data-Science'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGQWgLcFT_A597orPrySGf3MdTDPM68FSQg&s',
    liveUrl: '',
    githubUrl: 'https://github.com/priyanshutryingtocode/Asteroid-Class-Prediction',
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time weather updates and forecasts using data from a public API, deployed on Render using Docker containers.',
    tags: ['Python', 'Docker', 'Development'],
    image: 'data:image/jpeg;base64,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',
    liveUrl: 'https://weatherapp-82c3.onrender.com/',
    githubUrl: 'https://github.com/priyanshutryingtocode/WeatherApp',
  },
  {
    title: 'Chat3PO',
    description: 'An online chatroom application built using Flask and Socket.IO, allowing real-time communication between users, along with a chatbot powered by Gemini API, based on C3PO from Star Wars.',
    tags: ['Python', 'Generative-AI', 'Development'],
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFRUXGBUWFxUXFRgXGhcYFhgXFhcXFxUYHSggGholGxcWITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQGy0lHR8rLS0rLS0tLS0tKy0tLSstLS0rLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAwQFBgcCAf/EAFAQAAEDAQQECAgJCgUDBQAAAAEAAhEDBBIhMQUGQVEHEyIyYXGBkRdUk6GxwdHSFEJSYnKCkuHwFiMzNERTY3OishUkJXTCNYTxQ2SDo7P/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAeEQEBAAMBAAMBAQAAAAAAAAAAAQIREiEDMVETQf/aAAwDAQACEQMRAD8Aw5CEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIL43g2ef2lvkz7ykm8D1QjC1s8mfeV0otxCs9B+C5zKu1wjI/BDU22to/wDiPvJO0cEz2x/m2mf4R95bOHApnbaWUDuV3UmMY54MH+Mt8mfeXLuDJ4/aW+TPvLV3Ugfx6QkKtAhTqrxGWHg1f4y3yZ95cP4OHj9ob9g+1ae9ib1GEKdU4jNDweu8Yb9g+1eDg/d4w37B9q0WpTSNxOqcRQDwfu8Yb9g+1efkA79+37B9qvj1xinVOIpA4P3eMN+wfaprRXBA6uy822sBGBbxRkf1KfDHKV0LaKlFxf8AFAN4DaPar1TiKx4DqnjrPIu95e+A6p46zyLvfWjDWSn8/uHtXf5RU/n9w9qds8M28B1Tx1nkXe+jwHVPHWeRd760o6ws3P8AN7UflCzc/wA3tTs4Zr4DqnjrPIu99HgOqeOs8i731pX5RM3P83tXn5QN+S/ze1Ozhm3gNqeOs8i730eA6p46zyLvfWknWBgiQ4SYxgdW1d1dOBvOY8TiMserFO4cMy8B1Tx1nkXe+jwHVPHWeRd7y0n8oWbn+b2rk6yM3P8AN7U7OGceA6p46zyLveXL+BF4BJtzABiTxTveWkjWJp2P83tTDSelDXBpsLgBi7pxwCdkwZHW4PCCQLS0jfxZHmvJL8gHeMN+wfar/UoOCRLCp1WuIo44P3/v2/YPtXXg9d4w37B9qvLU4Y1OqcRnw4PHeMN+wfalW8Gzz+0N8mfeWgUqGKespp1TiM3ZwYvP7S3yZ95d+Cx/jLfJn3lp1OmlmsTqnEZd4KX+NN8mfeXY4Jqh/am+TPvLV6VDCXJdo3DD8d6u6cRk1PgfqEx8Lb5I+8lPA1U8cZ5I+8taYz8fcu1d04iqUcwpuhXChKWaf01htKNqLx71UbPrGZcHAckgEgxnlnngpyyWzjACMjhjgZV2mjuqQkQSDhiMcD2Lm2uLYjNObEyQHHpwQN6lJpywO4pnVpEZhTNWkDmm77OY3j8bU0ISpSTaqFK1qeJ2dCY1KeKgZ8WumU054tI12nZkilmMAxJCDbPkd+/7k2EpMgBTYsOr9Si55Y+m3lGWGMj8nqVmGi6P7pncs7pvIOAKu+itONdTHGOuuyM4Xo2haxrGUp//AIbR/dM+yF7/AIZS/dN+yFwNK0v3je8JO02ltVpp06rW3sHPkchpzPXGA61q5STdT0poyz2ateLGMcGuLTydojLeMVM0aNNggNa3qACZ6P0YyjRLKEDAkOJvS6OcTt2LPq2qVvrVCahxky51QR14SY7F8/LO5Zbtb1K0+vZ6bxDmNcNxAKqmsrKFmh5eBeP6JwvtcRtDcxGGIj1I0PqvaaAF21wZBLbpc2N0OPqVP4Q6pqW1zZwY1rR0YXj5yVcbukml3sFKz1WhwpsnaBBjpB2jpTk6Mo/umfZCz/Uu2PpVxSJ5LjgPnbMdgIEH6u5XbS+mBRaYBL4wEYT0n8ZL1YfJvyplKitZq1GkOLpsYHnEkAcke0qvttV0CMANm87SU1tFdznFziSSZJKTGKu1kSjbSx4nLr9RSTqY2YpBiCxxOHmRXYppSmxLBhgLoMVHdNicsYvKbN6dU6kCAMd5QKU6O/AJw2PiielNqbSTiVKUmiMFYlpnxLjmnDW9K8tryAIKTp2iA0b/AGqhU4YrnjUlpK0hjL5BIG7pwHnKgDrASTdaIyxk5dIUtBTzCesTKnmE+Aw71lVDoieN6x/aMFdtWj+YbOaofGOa510sIJEgy0zEYHsV81e/QtPX6VUhzpHGClLK10MIy249J2JO35DrS1ncbgCK8t9Q3o3fcnnHCMMxmmFr2JyWNAJGZCQIuZekgYKPqsgqWscwD8XGfUkAWm9eGJOHQcUDCiyXCBOIwXelbKGkRhIkjcu7Efzg+l61IaTpSJwwQVd7di7ZRTp1HEr2tZzdnZKwOabWjErqlbIcCWtIBwa4AgjtTcrlrCVVaJZaFnqUuMZQpukEht1okgc3oM4LMbfaKj3OdxRacQWEBgadwAmY6fSrLoTSD6BgubDyBDiQAflEjJQVurca17TWNMB5q4TiZOEgZGVz+fLyRfix9uzfVrSNpovEVXCXD83mDkACOnf0qY4QdarbSqcRQbc6QJLssj8UROPRnKiNGWt9e10zmGGRI53FNdUaDG8tjtT+z2qtVea9Vt++HBl4ckgYENGyCQe9eTWrut3GW6IaM1ntVMgl7yZEse5zwRtHKJjsUJb7a59WpWeZLiTPogdAw7FMNpupsuWhrTVc5oaWyDLiAIG2QYVJt9bl1GAxDngdME95Xb48d2s56xSGjdLRWaRmHA9oM49y0fWapAYQJxLXCcpAcOrae1ZBoGieNBJyHrAWv60UwKNMiC7kNMfNa8+hw71rOc/LjpiXcV2pdKSNJL02TgU6fYbrGneu4Y0wn1koy4DeQO9JNp4qQstVjXtDjBMQIknHOBjHSqHOk7I1jWgbzimClNM1QQ2N5UM2pirR1pDSlCztvVqrWdZxPU0YnsC4s2mg63fBLmHFcaXl0TzYaB9bzLINbmzabQdvGVPMStG0eJ01H/tge4U1dOfW16tIAEARB/GKLLVdgMYXtrdIXtDmhG3Ns9JnzBeUWAgGPxKLXkF1Q5oRTLTxPEP7PSFTLK0BsH8bvNCuWsBig89X9wVANpqYxxYjZLj0qVLVup84J8qtpnTzKJDQZdtjGPvTalriNru9h9QQ3ClTVmrsg87J0c7oI345q16HbUFMCoOVmTIxMnYMMo71W6et7NrmedvpVrsFVzmBzm3Sdk7FCObfkO1K2bmhJ27Z2pWzc0KqTtOxODl2KG0dokWe8A9zg916DGBgAx1qYdkepB5SfyYSTDn1rig516IFy7M7b0nCN0elJPtQa9rCHS8uAIEgXRPKOxAi190uduk92K90dpLjmtqBpEtMgmYhxHqSVc8mp9F/oKa6rfoKfU7+9yIk7RGBGe3zJwx007sbZSFoOU/jJctqnjGMGRY9x+qWgekqKRq0sU3tBIgDDapK2CIO2YTO0QSDvEdoUoj6rZa6SSYPoKYsptqNBOIwI/8AO5Tws4y3+tVKy2gU6bsb9y8C0YmWyC2N+C4fNLcfG8L6nNGWypTZVdQpkXGXnVBiWNLm3nNG3CQdwk74ktDcIVhFE0q9M8kuIAYHB5JJJDSeSZJw9Cr+rev9KzNqOdZq954a2XNFyBMA4iBjuKgrDoU1Kj6ly7TvOcBsxM3QPk+lc5hPekvt8WWx234Ra6NZzRTY6tT4qmI5LZgF29xHd3qna1WS5WqUwJBcXDvOamqduAtdLcxzSeuZ/wCPnUVrDVvVb52kj1r0fDNVjMtqtYHvqtazAy0AbDJyO4YFavrK29TpkHBpLbpbBkgG8DMEQB3qucGGizDqztgwkbXexoJ7VN6ctgc/ixhcA5IMwTnj2R9Vc99fLb+L9SRFWein1sqAtaAMtvYuGtw3JhZrS5z6zXGQx4DegXQV6A4pDEJOz1YN7a95PZeut/pDUtSzC8oUORTnMBnoCDj/ABY174uxxby2d/4hJU+cmeiRjXMjGqctmLhB6cPOn1IcpVGRa2/rNo/mVPSVoujv+uf9p6mLOtbv1m0fzKnpK0XR/wD1z/tPUxacovFpyC7oc0KMsNmrM4w1qvGXnktwgNbjDQFKUOao6k7VsSVjtTXOdTAMsuzIgG9MQdowStq2IoMETGJET0AmPSe9FNNPWc1KD2NbeJAEYY4jeqg3VW0EDAjCDymY9JzV5tLy1pIF4jGN6rbtb6fyqQ+uPUUSszqPJJJxJXkK9N1Zp7h3Lp2g6VIB1wTOGGSbY5qI1e0JBbUqjHAtYdnSenoWjtVWZUH4B9ifi3vu3iTGXN+5Z23JpI22ZG5L2bmhQb9Ik5yexOGWt4ZexjdAnuVVIVyZ9CcPyPUq47Sz3EANM5SY9AK6raVqglsTsyEFBO0TgkqZz61E1LfVaG4TImAB3Yr2hbKhIyE7IUDPS2nWUHBoaalRxwYMTB3j1KUsFQkSWBhgckbJM7NqiKOg7lb4QDJh94GSS5xbBBJMQL3epOlfwgBVDq1/FTSwW2nVqE0yTxcsJjkm9BIB2nAZIdSc9pZUjEGbstwOzOck10abobSplgABhjSCYBxMZ7cTvRUraHEjHf5o9spnIhpBBBc4yDhBO9Oa9mL6Za6cRiBI7JGKj7TZ7xYxwwbiAMByYAEbRj5lmiQFQbwqZRuC0WlrIul94QcCSIcRIGZaSrHaGTTfcMuAMY7RjCploZUbUbXuXKb+Q+8YMtN4PAjKSRjvXPOWyxvGyJTTFpo8VSY15FQuL3xzbjWiJ6ZOzeorQ14km8YJMbIaMz2nCOgoFJtSsHtuuN0gtLsMvpCZ6Ny7rkyGtddbEXQAe7b3rjjZJpfUnV1Uqiz/AAsRDybsHlQDF67EQccioJ1Mve1pGM4+vqVjq6x1jRp0XN5DGhrSBGAGEt39IT7UqwU61V1pqxcoAPkmAXE8gE7QS04dB6FufJcYxYtNWzmy2KnTkte/EgOLTjDjMboa37SgKZ/OEyLzmthpOJuudJ6uUF1aafGcY15ceXjLi7GGuJa4nDE4RA3AJoyialwuEXSHNMQQevzLp8WPMSpzGNx78YUabVSZVNMvPGPh0HAGBHJXLLa6/cvsnY3CcZjDsPcUjb7AKpAqNBhwIIJBHURkuiJVma6oH82w5m609sBcMZBAxw3mT2le2b9Ez6DfQFVQlTWJgq8TUp8VOIdAgzkZ2g71L0RimVt0RTr0gKgJI5rpxb92Cd6LsXFtDbxcBkTnG6URj+tv61af5lT0laPo8/64f9r6mKvad1GtdWvWqMawte97m8sDBxJEgqe0pou3Mt/wuzUmPHFtZDnNEiAHDEgjIYrTnJpea3rStDJQjNIVjTDqtI03TBZLX9oLdiVo6UOAAI+rKm3VI2idu8x1LuicAo21W1zSA7ry9i4Gk+mOwpsSlZpkEHfPSs+0rq0KlQvY8MnEi7OO0jHb7Vb69uc0AkjHoUcag3hTaWbMtWtKPrueHRyQ3IRBMqbtNC8AOlVnUZuNQ4yQyZ6yrVWeBEz2GEpDZlh6E4fZxEFK0XUjh/dPrS5YzIQOpRUd8Gb0JHS1uo2enerPDGEhoJBxOJgAdAKk3WotMQCN8QvbVTp1mXalNr2nNrwHDuIVRTKettiL2ta9ziSGiKbokmBiQN6aaS15s7Kj2cVUcWuc0nkgS0kGJM5hRWtWg6Nmt9lbQYWNqOY4tvEgHjAOTOIHQqhpU/n6x/i1f73LUjncrGiawa5ig6mwULxdSZVkviL84YNOUKc0LbTWpUqxaGl4mAZAxIzWb68fpqP+2of8lf8AVX9Vsv0G+tSzxqW7WG8BmM9xXReBs7ykapyXjrrQSSAAMyYA6ycFlso4i9huM+ZZ5qF+naf4Vp89oHsWg2Ka199EX20wJOLQXOMBrZGJwzyUZqfqDaKNSambWPZyYIPGVS+ZLtkBLnjJ6zZ6lmu9fpCb12coHcCO8j2K22fVkbb3ePRCWGrFPMl3f9y5X5Z+VrcUmtUuNc6JgExvgTCp1Tj3PJe++IMAkCCd2AB2BaJr7o8UaNMUxAcbrjtwEiSqQH1KRBaDIF7AZE7ROyAMlifL1PGtGLmUz8VoOWUZYZptYaLjVu1iHNE3Z+Luh2fnT22aSDwXuLXEjHE55Znb0lc0bdRcGgsOcYVpw+iI9Ct9n0m/SliszKhuVKt0F7gXufzWyYOJ3ZJpoi33abqNN7iHBrni87i5mJLci4YR1KW0jSo3Rdplp2u39hTV1MPo0w3OKkAZNGYJAHQT2KY2T7WrNZ6AYwN3Z9e0pMHm96Vs1oa9sgzECSCB35JG9yoOBGwiOqF3llZ0cWPIkDHHrS/GHb6EhZckq71qjoZhFl/RM+i30Bcg4hFkP5pn0W+gKjqz80dQTqhTJTOzN5OJ/AS9Nx3YYfegkqbCcoPafYlRSI2ecKOpV4JGOUyl2WiHYuzylArXoTmD3SkG2cA/cU4q2t0Zr2lWkSZPb6lUNq1AHckfgY3KRfaWgZSuWhrsbrR2YoprUs14RuTf4Cpjim9PYT6kk6m35ZHaPWmkUfUo41fqf8lYbceb1quaisgVfqY/aVgt55vWVCEGc4dYT9toBddAM7+/2JhS5w6wn1OiAZ2qK4tDsY3BdML7wxN2AubTn2JzTyHUFRn2urf9SsfWw/8A2fcs+0gfztU/PqHvc5aHrj/1Sxjop/8A6OWc2s8up9J/pK3i45/af17/AFin/t6Hocr/AKrj/LWX+Wz0Kga+frQ/k0B/SVftBPIslBoGJos5U5C7iB09PWsZXUaw9yp/pHSgpPAuh93EicPoyMZG1V+3W51V95+zmtGAb9Eb+nM71zaW4kfjuSNKnOzzj2rG3RoWrWm7PSstKm94a41ZdgcA2Xi9A+aO9Wyx6bs13jDXpgOOF54blAyMHMFQerNFlyz03NbLaVR7gQDynFt2Z+bUPcnOj9DWK1Uy8URz3S5stkzJgtOIBMdi5Zfe2anbRpEi6aVM1QcZYRAG+cj1DFDdIfKpvHVdd/S0l3mVVt2ga9hmvYnuc3N9F3KkbwNvp6VMaE1ps1paA5zWVNtN+GPzScD6Vn7Z061jbRr2aqC4EAE4HFrgOThmDOEdKyGtRNRr6NFuMkk45cp0b+aCY3xvWqa86OvWdzmtktEgmDdjE4nGCJGG/JUPQ9kDqEUnA1XXiSBLxME8jnCLreUwOMAYDbys1XXD6VfSuin3GNypBwF8HEuAF4EbMXSAdxSdo0ZSABpB4gOMudN4jYbwAxO6O1Wi161WpkULXRpV6JJDKj23uiRVacHD7Q2qNo1aHGBoslUydtQObjudAkZbV1uVJFdszKlRhzMOgGDjIM7NhHnU1Y6D7tJ1yHRBaWnGcDyRjvWhUtG2Ok1tW0PuEQ5tHFsFuIPFhxdnlkqlpm1U+MaaV+4+/wA9oBkG8CACZBJInq3LGWdrU1tpeq2i7llosqNBcGk7DF4l0A9qe1tC0Xf+m0dQj0LrQryaFKc7jJG43RgelR+ldbaNGpxMPqVcOQwTiRIEnM47JWcZHPd2jNN6C4thqUwIbBcMeaMz0wMexQ1tstSnU4tzRFzjQ4GZaDDsOgx3hWW1azclwq2O0ta4ETxd4QRBnJVfSOslGdHvJcHN5FSWmLtWmLxnaJErt8eVnn2vpMHEL2xfomfRb6AqzV0gaVV3F8y86GnKJMdRhTeiNIMexrBg4AAg9G7evRLKHtmyS9M4JvReIyx3pSm7DtVDmivCwE9RkIouz616Myg6ePOfUvaLXTIm7HnXLzglaD4Hf37ECdRx27Ce5dU64ENIOO1FoOARTpAgE5/egXLwMCc8lGkp/UZMHcZUe7NBXdRzhV+p/wAlO274vaofU2zvYyoXNIDi2JETAOztUtbzi3t9SVCdHnDrUlKjaPOHWn8qKStJx7E7pnAdQTK0Z9icA4BUUTW0/wCrWQfNp/3vWc1uc7rd6StB1mP+sWboYz01SqlojQVa0uimwkTi84NHWfUMVqOOU9PNemn4WeinRH9AV1s1QCzUG7W02dGN0D1pzbNGUWVnVYFSs5rWcqC2mGgAhg+UYxdsyG1SOr2rtS01A50BgPKBOI2g3TmCPvXHLPfkdccde1HtszalLjQMQYcDkCciBuO/v2JpZ6gBlzogSIjAjrVr4R7TSp02Wai1oNKXvdei4COYY5xedh3TuWbfCi7ADnA+g+tc57trYGma5e94cZIbtymSB5wth0brRTY6hZ6VImkGspmpldN0DAHMA5nr7cVsdIm8TkX/ANoGHmKndD2qpSph1R5LQG4Zxe6T0kDsT5L54km/trVk15slR/F3nMxgOeIa7tnDthU7hGtNE12tpNaHtE1HNwkmCAYzIG3pUFb6F5pqtaW72kQetRznXsdo9CxPfTmRYdBa5V7OQ1x42ltpuxw23Ts6skabsdOu4VdHkkky6zzcqMOd6n8odDZj0VoBKXyDLXHDI5Ho6iulxlPpdNEtrFj3Wuk+4yL1Z1PlObIbFVhwqwTng4AEg7FJaVslKmWCyOYL7S+80hz7oxMEDksjNziegE4KAoa82gWd9B4FQuaWh7swCIMj42G/zqP0HXfRe6mbKKr6gDQx4eHbxgIlpwJG2As3BP8AUxomleqE3GNY3F9or4gboBwLujGc+Tseu0vo2k8vipaas84jCYguAMAZblH6U0TaXfnLY4NY1jnCm1zRdAGEUxgBJAnFVSvTDcRMOEgOi8B84DIn2LOOOO9X2tWpfSGs9oqOPFONGmCSKdLkgdZEElM6Nrrtfxwc4PdPLk3jv5S70fRAZJ2p/a7WKdMOAa7LDb2AbVcvyRZF11T1uFUcXW5NUA8qAGvgT2O6OhU7WHS7PgFBsctlcO2ZNdUbiq9pbTtUh4ZTwa1rpwdmQJGyMx1hVzStuqXLpyvknrvOJ88rWGG2bqLfp1t6qXAc4NMDfdbPnlc2CxvOIwzIPVmT0BNNC6avPFB1IucbxBETgciDEDpnYpvSdeGsDGkMfm/Y8NJEM+YDOPxonKEls8a1/p1oe08bTvjmhzwDvumJjvT5jgFH6CrtLDSAAu5AYSCc4Tu0U8F3ZPAuwcVG0C5oJOI3J1ZrU12Az6VQ5JwSlJoIHQZSMrtmX49CDutkEpZ+akH5JWzHBAsVFOzUpKjHnFBm/hTf4q3yh91I1+Ex7o/yzRH8Q+6qChdeY4d1fWcJTwZ+DN8ofdS3hSf4q3yh91Z4hTmHdaA/hOef2ZvlD7q7HCk/xVvlD7qzxCcw7q11tcg+1C1Os4Ja0BrOMMSL2JN2TzslJ0+ExzW3WWVjAMBdeQGjoAbgqChLjKdVdqXCE4Ek2dpPxeWYad8Xcfapyjwy1adHiqNkYx0GKhqF5vHN5lovHr86y1Cn88fwudq0aQ1yfVADqeE3ncskvdtLnRmmo1ldJIpgDY0HADdkoFCfzx/F7yTzNZCG3eL+M53PPxiTGXTCcWXXB7QQ6mHgwYLjh5sVWUJfixv+HeS8t4Rn3bps7Tsm+fYo9muTgZFEdV8+xVZCn8sPw7yaZZ+FSi1jWHRNndAALi8ySBEk3NqVocLVFhluiLOD/MJ9LFlyE/lh+M9Vo2neFIWgscLBSpuaZltQ8obiLo3Kc8Ozr1//AA6leiL3GmY3TcyWOoV/nj+HVbBaOHaq4H/I0wSCATVcYn6vmVKtWur6ji51ISfnk+eFVEJ/PH8Xqrl+XrrobxDYHzzj5l5+Xbv3Dftn2KnIT+eP4d5LZU11cWOZxDRejEOOwzu6+9RNq0457bpaBiTnvno6VEoSYYz6OqnPyjd8iDjJDoJGJiYwzU5a+EapVpMZUohz2QA/jCOSMALt2Mo7lR0J/PH8O6t9n15cxwe2iJBnnnEHMHBSdThRef2VvlD7qz1CvMOq0E8J7vFW+UPupHwjux/yzcf4h91URCvMOq0ClwoVBgbO09bzPfCUPCm+CPgrYP8AFPm5OaztCcw7rRTwqP8AFW+UPur1nCs8fsrfKH3VnKFOYd1pHhYf4q3yh91IHhQf4s3yh91Z8hOYd0IQhaZCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQf/9k=',
    liveUrl: 'https://chat3po.onrender.com/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Chat3PO',
  },
  
];

const WORK_EXPERIENCE = [
  {
    title: 'AI/ML Development Intern',
    company: 'HCLTech',
    duration: 'May 2025 - June 2025',
    description: [
      'Worked with a team of 5 engineers in the Engineering domain, and contributed to various projects.',
      'Utilized Large Language Models (LLMs) to extract key information using RAG based techniques.',
      'Trained and evaluated various machine learning models to improve performance and accuracy.',
    ],
  },
];

const VOLUNTEERING = [

  {
    role: 'Game Development Core Member',
    organization: 'IOTA',
    duration: 'August 2024 - May 2025'
  },
  {
    role: 'Design Lead',
    organization: 'Matrix',
    duration: 'August 2025 - Present'
  },
  {
    role: 'Design Core Member',
    organization: 'Nirvana',
    duration: 'October 2024 - May 2025'
  },
  {
    role: 'Design Core Member',
    organization: 'f/Stops',
    duration: 'September 2024 - May 2025'
  }
];



const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsOnScreen(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isOnScreen] as const;
};



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About content={ABOUT_PLACEHOLDER} />
        <Education /> {/* Corrected placement */}
        <Skills />
        <WorkExperience />
        <Volunteering />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


// --- LAYOUT COMPONENTS ---
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;

    if (targetElement) {
      const headerElement = document.querySelector('.header') as HTMLElement;
      const headerOffset = headerElement ? headerElement.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo" onClick={handleLogoClick}>{DEVELOPER_NAME}</a>
        <nav className={isMenuOpen ? 'mobile-nav is-open' : 'mobile-nav'}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#education" onClick={handleNavClick}>Education</a> {/* Added Education link */}
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#volunteering" onClick={handleNavClick}>Volunteering</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        <button className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

interface SectionProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  // Memoize the options object to prevent re-running the hook's effect on every render
  const options = useMemo(() => ({ threshold: 0.2 }), []);
  const [ref, isOnScreen] = useOnScreen(options);

  return (
    <section ref={ref} id={id} className={`${className} section ${isOnScreen ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="social-links">
        <a href="https://github.com/priyanshutryingtocode" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12,2A10,10,0,0,0,2,12c0,4.42,2.87,8.17,6.84,9.5.5.09.68-.22.68-.48s0-.85,0-1.67c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61,1,.07,1.53,1.03,1.53,1.03.89,1.53,2.34,1.09,2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95,0-1.09.39-1.99,1.03-2.69-.1-.25-.45-1.27.1-2.65,0,0,.84-.27,2.75,1.02.79-.22,1.65-.33,2.5-.33s1.71.11,2.5.33c1.91-1.29,2.75-1.02,2.75-1.02.551.38.2,2.4.1,2.65.64.7,1.03,1.6,1.03,2.69,0,3.85-2.34,4.7-4.57,4.94.36.31.68.92.68,1.85,0,1.34,0,2.42,0,2.75,0,.27.18.58.69.48A10,10,0,0,0,22,12,10,10,0,0,0,12,2Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-srivastava-523783290/" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.447,20.452H17.06V14.5c0-1.42-.028-3.25-1.98-3.25-1.98,0-2.285,1.55-2.285,3.149V20.452H9.412V8.987h3.297v1.5h.046c.457-.86,1.566-1.758,3.25-1.758,3.479,0,4.122,2.29,4.122,5.267V20.452ZM5.337,7.433a2.062,2.062,0,1,1,2.063-2.062A2.063,2.063,0,0,1,5.337,7.433ZM6.994,20.452H3.68V8.987H6.994V20.452ZM22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2Z"/></svg>
        </a>
        <a href="https://leetcode.com/u/Priyanshu7011/" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="24" height="24"><path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/></svg>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {DEVELOPER_NAME}. All Rights Reserved.</p>
    </div>
  </footer>
);


// --- PAGE SECTIONS ---
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div className="container">
        <h1 className="hero-title">Full Stack Developer & AI-ML Enthusiast</h1>
        <p className="hero-subtitle">I design and build beautiful, responsive, and robust web applications, along with convenient and modern AI-ML projects</p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
    </section>
  );
};

const About: React.FC<{ content: string }> = ({ content }) => (
  <Section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt={DEVELOPER_NAME} />
        </div>
        <div className="about-text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </Section>
);
const Education = () => (
  <Section id="education" className="education">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {EDUCATION.map((edu, index) => ( // Corrected here
          <div className="education-card" key={index}>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-university">{edu.university} | {edu.duration}</p>
            <ul className="education-details">
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" className="skills">
    <div className="container">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="skills-grid">
        {SKILLS.map((skill, index) => (
          <div className="skill-card" key={skill.name} style={{ transitionDelay: `${index * 5}ms` }}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const WorkExperience = () => (
  <Section id="experience" className="experience">
    <div className="container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {WORK_EXPERIENCE.map((job, index) => (
          <div className="experience-card" key={index} style={{ transitionDelay: `${index * 10}ms` }}>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company} | {job.duration}</p>
            <ul className="job-description">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Volunteering = () => (
  <Section id="volunteering" className="volunteering">
    <div className="container">
      <h2 className="section-title">Volunteering & Leadership</h2>
      <div className="volunteering-list">
        {VOLUNTEERING.map((activity, index) => (
          <div className="volunteering-card" key={index} style={{ transitionDelay: `${index * 10}ms` }}>
            <h3 className="activity-role">{activity.role}</h3>
            <p className="activity-organization">{activity.organization} | {activity.duration}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);


const Projects = () => (
  <Section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div className="project-card" key={index} style={{ transitionDelay: `${index * 10}ms` }}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="project-links">
                <a href={project.liveUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
      e.currentTarget.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <Section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required disabled={status === 'submitting'} />
            <input type="email" name="email" placeholder="Your Email" required disabled={status === 'submitting'} />
          </div>
          <textarea name="message" placeholder="Your Message" rows={6} required disabled={status === 'submitting'}></textarea>
          <button type="submit" className="btn btn-primary" disabled={status !== 'idle'}>
            {status === 'submitting' && 'Sending...'}
            {status === 'idle' && 'Send Message'}
            {status === 'submitted' && 'Message Sent!'}
          </button>
          {status === 'submitted' && <p className="form-success-message">Thanks for reaching out! I'll get back to you soon.</p>}
        </form>
      </div>
    </Section>
  );
};


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}