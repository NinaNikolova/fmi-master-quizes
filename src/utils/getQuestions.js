export const getQuestions = (selectedQuiz, quizzes) => {
    switch (selectedQuiz) {
        case 'quest1':
            return quizzes.quest1;
        case 'quest2':
            return quizzes.quest2;
        case 'quest3':
            return quizzes.quest3;
        case 'quest4':
            return quizzes.quest4;
        case 'quest5':
            return quizzes.quest5;
        case 'quest6':
            return quizzes.quest6;
        case 'quest7':
            return quizzes.quest7;
        default:
            return [];
    }
};