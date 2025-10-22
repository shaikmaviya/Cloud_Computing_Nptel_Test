// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'What does a cloud SLA typically NOT include?',
            options: {
                'A': 'Availability guarantee',
                'B': 'Encryption algorithm details',
                'C': 'Performance metrics',
                'D': 'Penalty clauses'
            },
            explanation: [
                "☁️ SLA Basics",
                "A: ❌ Availability guarantee is standard in SLAs.",
                "B: ✅ Correct. Encryption algorithm details are security-specific, not SLA content.",
                "C: ❌ Performance metrics are always included.",
                "D: ❌ Penalty clauses are also part of SLAs."
            ]
        },
        {
            id: 2,
            correctAnswer: 'C',
            text: 'A multilevel SLA includes which of the following?',
            options: {
                'A': 'Only service-specific agreements',
                'B': 'Multiple SLAs signed by different providers',
                'C': 'Corporate, customer, and service levels',
                'D': 'Only client-specific requirements'
            },
            explanation: [
                "📑 Multilevel SLA",
                "A: ❌ Not only service-specific.",
                "B: ❌ Multiple providers is not the definition.",
                "C: ✅ Correct. Multilevel SLA covers corporate, customer, and service levels.",
                "D: ❌ Too narrow."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'Which of the following is a typical metric included in a cloud SLA?',
            options: {
                'A': "Customer's project schedule",
                'B': 'Developer salary',
                'C': 'Uptime percentage',
                'D': 'IP address of the cloud provider'
            },
            explanation: [
                "📊 SLA Metrics",
                "A: ❌ Customer schedules are irrelevant.",
                "B: ❌ Developer salary is not included.",
                "C: ✅ Correct. Uptime percentage is a core SLA metric.",
                "D: ❌ IP address is not an SLA metric."
            ]
        },
        {
            id: 4,
            correctAnswer: 'C',
            text: 'Which of the following statements is TRUE regarding Cloud and Web Service SLAs?',
            options: {
                'A': 'Cloud SLAs cannot apply to SaaS applications',
                'B': 'Web Service SLAs are only applicable to internal systems',
                'C': 'Web Service SLAs are narrower in scope than Cloud SLAs',
                'D': 'Cloud SLAs are always written by customers, not providers'
            },
            explanation: [
                "🌐 SLA Scope",
                "A: ❌ SaaS can also have cloud SLAs.",
                "B: ❌ Web Service SLAs are not just internal.",
                "C: ✅ Correct. Web Service SLAs are narrower compared to Cloud SLAs.",
                "D: ❌ SLAs are typically written by providers."
            ]
        },
        {
            id: 5,
            correctAnswer: 'C',
            text: 'A cloud service is guaranteed to handle 10,000 requests/hour with 99.5% success. How many failed requests per hour are acceptable under SLA?',
            options: {
                'A': '5',
                'B': '10',
                'C': '50',
                'D': '500'
            },
            explanation: [
                "🧮 SLA Calculation",
                "10,000 × (100% - 99.5%) = 50 failures allowed.",
                "A: ❌ 5 is too low.",
                "B: ❌ 10 is too low.",
                "C: ✅ Correct. 50 failures acceptable.",
                "D: ❌ 500 is too high."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'Which characteristic is most unique to parallel databases and not shared with traditional relational databases in cloud environments?',
            options: {
                'A': 'Support for SQL',
                'B': 'Multi-node distributed query execution',
                'C': 'Transaction rollback',
                'D': 'Normalized schema usage'
            },
            explanation: [
                "💾 Parallel DB Feature",
                "A: ❌ SQL support is common to both.",
                "B: ✅ Correct. Parallel DBs uniquely support multi-node distributed execution.",
                "C: ❌ Rollback exists in both.",
                "D: ❌ Normalized schemas exist in both."
            ]
        },
        {
            id: 7,
            correctAnswer: 'B',
            text: 'You are designing a big data pipeline that processes video files using a cloud-native distributed file system. Which of the following choices is most suitable for scalable storage and parallel processing?',
            options: {
                'A': 'Amazon Aurora',
                'B': 'Google Cloud Storage (with Hadoop connector)',
                'C': 'AWS Lambda',
                'D': 'Azure SQL Database'
            },
            explanation: [
                "🎥 Big Data Pipeline",
                "A: ❌ Aurora is relational DB, not scalable file system.",
                "B: ✅ Correct. GCS with Hadoop connector supports scalable storage and parallel processing.",
                "C: ❌ Lambda is for serverless functions, not storage.",
                "D: ❌ Azure SQL is relational DB, not parallel file storage."
            ]
        },

        {
            id: 8,
            correctAnswer: 'C',
            text: 'Which of the following is not supported in MapReduce-based systems for iterative algorithms like machine learning or graph processing?',
            options: {
                'A': 'Data must be reloaded from disk in each iteration',
                'B': 'Mappers and reducers cannot share memory between iterations',
                'C': 'It supports pipelined execution between stages',
                'D': 'High overhead due to repeated job initialization'
            },
            explanation: [
                "🗂️ MapReduce Limitations 🔍",
                "A: ❌ True for MapReduce - data is reloaded each iteration.",
                "B: ❌ Correct behavior - memory cannot be shared between iterations.",
                "C: ✅ Incorrect statement - MapReduce does NOT support pipelined execution, it is batch-based.",
                "D: ❌ True - high overhead due to job initialization."
            ]
        },

        {
            id: 9,
            correctAnswer: 'B',
            text: 'A MapReduce job is processing 1 TB of input data. The “map” output is 500 GB, and the final “reduce” output is 50 GB. If the shuffle and sort phase fails due to insufficient disk I/O, which phase is affected and why?',
            options: {
                'A': 'Map phase, because it processes raw data',
                'B': 'Reduce phase, because it merges map outputs',
                'C': 'Input split phase, because files are not split',
                'D': 'Combiner phase, because data isn’t reduced locally'
            },
            explanation: [
                "🔄 Shuffle & Sort in MapReduce 📦",
                "A: ❌ Map phase processes raw input, not affected by shuffle failure.",
                "B: ✅ Correct. Shuffle and sort happen before Reduce; reduce phase is directly affected.",
                "C: ❌ Input split is done at the beginning, not related to shuffle/sort.",
                "D: ❌ Combiner is optional and local, not responsible for shuffle/sort."
            ]
        },

        {
            id: 10,
            correctAnswer: 'B',
            text: 'In an OpenStack deployment, if a compute node can support up to 100 virtual CPUs (vCPUs), and the overcommit ratio for CPU is set to 1.5:1, what is the total number of vCPUs that can be allocated?',
            options: {
                'A': '100',
                'B': '150',
                'C': '66',
                'D': '200'
            },
            explanation: [
                "⚙️ OpenStack vCPU Allocation 🔢",
                "A: ❌ 100 - This ignores the overcommit ratio.",
                "B: ✅ 150 - Correct. 100 × 1.5 = 150 vCPUs can be allocated.",
                "C: ❌ 66 - Incorrect, not related to overcommit calculation.",
                "D: ❌ 200 - Overcommit ratio is only 1.5:1, not 2:1."
            ]
        }

    ],

};

// Example: Print explanation line by line for Q1


// Store user answers
let userAnswers = {};
let quizSubmitted = false;

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing quiz...');
    initializeQuiz();
});

function initializeQuiz() {
    console.log('Initializing quiz...');

    // Reset state
    userAnswers = {};
    quizSubmitted = false;

    quizData.questions.forEach(question => {
        const inputs = document.querySelectorAll(`input[name="question${question.id}"]`);

        inputs.forEach(input => {
            input.addEventListener('change', function () {
                const isMultiple = Array.isArray(question.correctAnswer);
                handleAnswerSelection(question.id, this.value, isMultiple);
                updateSelectedOptionStyling(question.id, this, isMultiple);
            });
        });
    });


    // Add event listener to submit button with multiple approaches for reliability
    const submitButton = document.getElementById('submit-quiz');
    if (submitButton) {
        console.log('Submit button found, adding event listener...');

        // Remove any existing event listeners
        submitButton.removeEventListener('click', handleQuizSubmission);

        // Add click event listener
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Submit button clicked!');
            handleQuizSubmission();
        });

        // Also add event listener for Enter key
        submitButton.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Submit button activated via keyboard!');
                handleQuizSubmission();
            }
        });
    } else {
        console.error('Submit button not found!');
    }

    // Add event listener to retake button
    const retakeButton = document.getElementById('retake-quiz');
    if (retakeButton) {
        console.log('Retake button found, adding event listener...');
        retakeButton.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Retake button clicked!');
            handleQuizRetake();
        });
    }

    // Add click handlers for options to improve UX
    addOptionClickHandlers();

    console.log('Quiz initialization complete.');
}

function handleAnswerSelection(questionId, selectedAnswer, isMultiple = false) {
    if (isMultiple) {
        // Initialize as array if not already
        if (!Array.isArray(userAnswers[questionId])) {
            userAnswers[questionId] = [];
        }

        // Add or remove selection
        const index = userAnswers[questionId].indexOf(selectedAnswer);
        if (index > -1) {
            userAnswers[questionId].splice(index, 1); // remove if already selected
        } else {
            userAnswers[questionId].push(selectedAnswer); // add new selection
        }
    } else {
        userAnswers[questionId] = selectedAnswer;
    }

    console.log('Current answers:', userAnswers);
}


function updateSelectedOptionStyling(questionId, input, isMultiple = false) {
    const allOptions = document.querySelectorAll(`input[name="question${questionId}"]`);

    allOptions.forEach(optionInput => {
        const optionDiv = optionInput.closest('.option');
        if (optionDiv) optionDiv.classList.remove('selected');
    });

    if (isMultiple) {
        // Add 'selected' class for all checked checkboxes
        allOptions.forEach(optionInput => {
            if (optionInput.checked) {
                const optionDiv = optionInput.closest('.option');
                if (optionDiv) optionDiv.classList.add('selected');
            }
        });
    } else {
        const selectedOptionDiv = input.closest('.option');
        if (selectedOptionDiv) selectedOptionDiv.classList.add('selected');
    }
}

function addOptionClickHandlers() {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');

        if (radio) {
            option.addEventListener('click', function (e) {
                // If the click wasn't on the radio button itself, trigger it
                if (e.target !== radio) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change'));
                }
            });
        }
    });
}

function handleQuizSubmission() {
    console.log('handleQuizSubmission called');

    if (quizSubmitted) {
        console.log('Quiz already submitted, returning');
        return;
    }

    // Check if all questions are answered
    const totalQuestions = quizData.questions.length;
    const answeredQuestions = Object.keys(userAnswers).length;

    console.log(`Total questions: ${totalQuestions}, Answered: ${answeredQuestions}`);

    if (answeredQuestions < totalQuestions) {
        showIncompleteToast();
        return;
    }

    function showIncompleteToast() {
        const toast = document.getElementById('incomplete-toast');
        if (toast) {
            toast.classList.remove('hidden');
            // Auto-hide after 3 seconds
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    }

    // Toast close button logic
    document.addEventListener('DOMContentLoaded', function () {
        const toast = document.getElementById('incomplete-toast');
        const closeBtn = document.getElementById('toast-close');
        if (closeBtn) {
            closeBtn.onclick = function () {
                if (toast) toast.classList.add('hidden');
            };
        }
    });

    console.log('All questions answered, proceeding with submission...');
    quizSubmitted = true;

    // Calculate results
    const results = calculateResults();
    console.log('Results calculated:', results);

    // Hide quiz form
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.style.display = 'none';
        console.log('Quiz form hidden');
    }

    // Show results
    displayResults(results);
}

function calculateResults() {
    let correctAnswers = 0;
    const totalQuestions = quizData.questions.length;
    const questionResults = [];

    quizData.questions.forEach(question => {
        const userAnswer = userAnswers[question.id];
        let isCorrect = false;

        if (Array.isArray(question.correctAnswer)) {
            // Compare arrays for multiple-answer questions
            if (Array.isArray(userAnswer)) {
                const sortedUser = [...userAnswer].sort();
                const sortedCorrect = [...question.correctAnswer].sort();
                isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
            }
        } else {
            isCorrect = userAnswer === question.correctAnswer;
        }

        if (isCorrect) correctAnswers++;

        questionResults.push({
            questionId: question.id,
            questionText: question.text,
            userAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect,
            explanation: question.explanation,
            options: question.options
        });
    });


    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    return {
        correctAnswers,
        totalQuestions,
        percentage,
        questionResults
    };
}

function displayResults(results) {
    console.log('Displaying results...');

    const resultsContainer = document.getElementById('results-container');
    const scoreText = document.getElementById('score-text');
    const percentageText = document.getElementById('percentage-text');
    const resultsBreakdown = document.getElementById('results-breakdown');

    if (!resultsContainer) {
        console.error('Results container not found!');
        return;
    }

    // Update score display
    if (scoreText) {
        scoreText.textContent = `${results.correctAnswers} out of ${results.totalQuestions}`;
        console.log('Score text updated');
    }

    if (percentageText) {
        percentageText.textContent = `(${results.percentage}%)`;
        console.log('Percentage text updated');
    }

    // Generate detailed results
    if (resultsBreakdown) {
        resultsBreakdown.innerHTML = results.questionResults.map(result => {
            const statusClass = result.isCorrect ? 'correct' : 'incorrect';
            const statusText = result.isCorrect ? 'Correct' : 'Incorrect';

            return `
                <div class="result-item ${statusClass}">
                    <div class="result-question-number">${result.questionId})</div>
                    <div class="result-details">
                        <div class="result-status ${statusClass}">
                            ${statusText}
                        </div>
                        <div class="result-question-text">${result.questionText}</div>
                        <div class="result-answers">
                            <div class="result-answer-line your-answer">
                                <strong>Your answer:</strong> ${result.userAnswer}. ${result.options[result.userAnswer]}
                            </div>
                            ${!result.isCorrect ? `
                                <div class="result-answer-line correct-answer">
                                    <strong>Correct answer:</strong> ${result.correctAnswer}. ${result.options[result.correctAnswer]}
                                </div>
                            ` : ''}
                        </div>
                     <div class="explanation">
                        <strong>Explanation:</strong>
                            ${result.explanation.map(line => `<div>${line}</div>`).join('')}
                    </div>

                    </div>
                </div>
            `;
        }).join('');
        console.log('Results breakdown updated');
    }

    // Show results container
    resultsContainer.classList.remove('hidden');
    console.log('Results container shown');

    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
    console.log('Scrolled to results');
}

function handleQuizRetake() {
    console.log('Retaking quiz...');

    // Reset all form inputs
    quizData.questions.forEach(question => {
        const radioButtons = document.querySelectorAll(`input[name="question${question.id}"]`);
        radioButtons.forEach(radio => {
            radio.checked = false;
        });

        // Remove selected styling from all options
        const options = document.querySelectorAll(`input[name="question${question.id}"]`);
        options.forEach(radio => {
            const optionDiv = radio.closest('.option');
            if (optionDiv) {
                optionDiv.classList.remove('selected');
            }
        });
    });

    // Reset state
    userAnswers = {};
    quizSubmitted = false;

    // Hide results container
    const resultsContainer = document.getElementById('results-container');
    if (resultsContainer) {
        resultsContainer.classList.add('hidden');
    }

    // Show quiz form
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.style.display = 'block';
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Quiz retake complete');
}

// Fallback initialization in case DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded...');
} else {
    console.log('Document already loaded, initializing immediately...');
    initializeQuiz();
}