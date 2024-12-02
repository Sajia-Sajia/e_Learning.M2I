import React, { useState } from "react";
import Sidebar from "./Sidebar2";
import Topbar from "../etudiant/topBar";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
} from "@mui/material";
import { motion } from "framer-motion";
import "./QuizPage.css";

const QuizPage = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const subjects = [
    {
      name: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "Java",
      image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      name: "PHP",
      image: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
    },
    {
      name: "C",
      image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      name: "Python",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
  ];

  const quizData = {
    JavaScript: [
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape",
      },
      {
        question: "What is the keyword for declaring a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
      },
    ],
    Java: [
      {
        question: "Which is a valid keyword in Java?",
        options: ["interface", "string", "Float", "unsigned"],
        answer: "interface",
      },
    ],
    PHP: [
      {
        question: "What does PHP stand for?",
        options: [
          "Personal Home Page",
          "Private Hypertext Processor",
          "PHP Hypertext Preprocessor",
          "Programming Home Page",
        ],
        answer: "PHP Hypertext Preprocessor",
      },
    ],
  };

  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setNumberOfQuestions(0); // Réinitialisation du nombre de questions
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  const handleOptionSelect = (selectedOption) => {
    const currentQuestion =
      quizData[selectedSubject]?.[currentQuestionIndex] || null;

    if (currentQuestion && selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (
      currentQuestionIndex + 1 <
      Math.min(quizData[selectedSubject]?.length || 0, numberOfQuestions)
    ) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
      setShowAlert(true); // Afficher l'alert
    }
  };

  const handleBackToSubjects = () => {
    setSelectedSubject("");
    setShowQuiz(false);
  };

  return (
    <div className="container-fluid p-0">
      <Topbar />
      <div className="row no-gutters">
        <div className="col-md-2 col-12 position-fixed" style={{ height: "100vh", zIndex: 1000 }}>
          <Sidebar />
        </div>
        <div className="col-md-10 offset-md-2 col-12">
          <Box sx={{ padding: "30px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Typography variant="h4" gutterBottom>
              Quiz Platform
            </Typography>

            {!selectedSubject && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Select a subject to start the quiz:
                </Typography>
                <Grid container spacing={3} mt={2}>
                  {subjects.map((subject) => (
                    <Grid item xs={12} sm={6} md={4} key={subject.name}>
                      <Card
                        sx={{
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          "&:hover": { transform: "scale(1.05)" },
                          transition: "0.3s",
                        }}
                        onClick={() => handleSubjectSelection(subject.name)}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={subject.image}
                          alt={subject.name}
                        />
                        <CardContent>
                          <Typography variant="h6" textAlign="center">
                            {subject.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {selectedSubject && !showQuiz && (
              <Box mt={3}>
                <Typography variant="h5" gutterBottom>
                  Selected Subject: {selectedSubject}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Select the number of questions:
                </Typography>
                <Slider
                  value={numberOfQuestions}
                  onChange={(e, value) => setNumberOfQuestions(value)}
                  step={1}
                  marks
                  min={1}
                  max={quizData[selectedSubject]?.length || 0}
                  valueLabelDisplay="on"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={startQuiz}
                  disabled={numberOfQuestions === 0}
                  sx={{ mt: 3 }}
                >
                  Start Quiz
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleBackToSubjects}
                  sx={{ mt: 3, ml: 2 }}
                >
                  Back to Subjects
                </Button>
              </Box>
            )}

            {showQuiz && !showResults && (
              <Box>
                <Typography variant="h6">
                  Question {currentQuestionIndex + 1} of {numberOfQuestions}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {quizData[selectedSubject]?.[currentQuestionIndex]?.question}
                </Typography>
                <RadioGroup>
                  {quizData[selectedSubject]?.[currentQuestionIndex]?.options.map(
                    (option, index) => (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                        onClick={() => handleOptionSelect(option)}
                      />
                    )
                  )}
                </RadioGroup>
              </Box>
            )}

          {showAlert && (
  <motion.div
    initial={{ opacity: 0, y: "100%" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="quiz-results-container"
  >
    <div className="quiz-results">
      {/* Confetti Animation */}
      <div className="confetti"></div>
      
      {/* Quiz Result Text */}
      {score === numberOfQuestions ? (
        // حالة النجاح
        <>
          <Typography variant="h5" className="success">
            🎉 Quiz Completed! 🎉
          </Typography>
          <Typography variant="h6">
            Your score: {score} / {numberOfQuestions}
          </Typography>
        </>
      ) : (
        // حالة الفشل
        <>
          <Typography variant="h5" className="failed">
            Oops! Try Again 😅
          </Typography>
          <Typography variant="h6">
            Your score: {score} / {numberOfQuestions}
          </Typography>
        </>
      )}

      {/* Back Button */}
      <Button
        className="back-btn"
        onClick={() => {
          setShowAlert(false);
          setShowResults(false);
          handleBackToSubjects();
        }}
      >
        Back to Subjects
      </Button>
    </div>
  </motion.div>
)}

          </Box>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
