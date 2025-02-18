"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./search-bar";

// Add fuzzy match helper function
const fuzzyMatch = (text: string, search: string) => {
  return text.toLowerCase().includes(search.toLowerCase());
};

export default function FAQSection({ questions }: { questions: any[] }) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = questions.filter((question) => {
    const matchesQuestion = fuzzyMatch(question.question, searchQuery);
    const matchesAnswer = question.answers.some((answer: any) =>
      fuzzyMatch(answer.content, searchQuery)
    );
    return matchesQuestion || matchesAnswer;
  });

  return (
    <div className="space-y-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredQuestions.map((question, index) => (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <motion.div
            className="p-6 cursor-pointer flex justify-between items-center"
            onClick={() =>
              setOpenQuestion(openQuestion === index ? null : index)
            }
          >
            <h3 className="text-lg font-semibold">{question.question}</h3>
            <motion.div
              animate={{ rotate: openQuestion === index ? 180 : 0 }}
              className="text-2xl"
            >
              ▼
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {openQuestion === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-6 pb-6 space-y-4"
              >
                {question.answers.map((answer: any) => (
                  <motion.div
                    key={answer.id}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <p className="text-gray-600 dark:text-gray-300">
                      {answer.content}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {filteredQuestions.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500 dark:text-gray-400"
        >
          No results found for "{searchQuery}"
        </motion.div>
      )}
    </div>
  );
}
