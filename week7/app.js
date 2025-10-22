// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'C',
            text: 'Which of the following is a major challenge in Mobile Cloud Computing?',
            options: {
                A: 'Low demand for mobile applications',
                B: 'Unlimited local resources in mobile devices',
                C: 'Network latency and dependency',
                D: 'Elimination of Mobile Internet services'
            },
            explanation: [
                "🌐 Mobile Cloud Computing Challenge",
                "A: ❌ Mobile app demand is increasing, not a challenge.",
                "B: ❌ Mobile devices have limited resources.",
                "C: ✅ Correct. Network latency and dependency are major MCC challenges.",
                "D: ❌ Internet services are required, not eliminated."
            ]
        },
        {
            id: 2,
            correctAnswer: 'B',
            text: 'When MCC enables a user to access mobile apps and data from anywhere, it reflects which cloud characteristic?',
            options: {
                A: 'Elasticity',
                B: 'Location independence',
                C: 'On-demand self-service',
                D: 'Resource pooling'
            },
            explanation: [
                "☁️ Cloud Characteristics",
                "A: ❌ Elasticity means auto-scaling resources.",
                "B: ✅ Correct. MCC enables location-independent access.",
                "C: ❌ On-demand self-service refers to user control of resources.",
                "D: ❌ Resource pooling relates to multi-tenancy."
            ]
        },
        {
            id: 3,
            correctAnswer: 'B',
            text: 'In dynamic routine offloading, the decision of whether to execute a task locally or in the cloud depends primarily on:',
            options: {
                A: 'Fixed pre-programmed instructions in the mobile device',
                B: 'Real-time context parameters such as network bandwidth, latency, and device battery level',
                C: 'The number of installed mobile applications',
                D: 'Cloud provider’s billing cycle'
            },
            explanation: [
                "⚙️ Offloading Decisions",
                "A: ❌ Not fixed; it’s dynamic.",
                "B: ✅ Correct. Real-time parameters determine execution location.",
                "C: ❌ Installed apps don’t affect offloading.",
                "D: ❌ Billing cycle is unrelated."
            ]
        },
        {
            id: 4,
            correctAnswer: 'A',
            text: 'The main purpose of a cloudlet in Mobile Cloud Computing is to:',
            options: {
                A: 'Act as a small-scale data center close to mobile users',
                B: 'Replace all cloud servers globally',
                C: 'Increase the storage capacity of mobile devices directly',
                D: 'Remove the need for wireless connectivity'
            },
            explanation: [
                "☁️ Cloudlet Purpose",
                "A: ✅ Correct. Cloudlets reduce latency by being closer to users.",
                "B: ❌ They complement, not replace, cloud servers.",
                "C: ❌ They process, not store mobile data.",
                "D: ❌ Connectivity is still needed."
            ]
        },
        {
            id: 5,
            correctAnswer: 'B',
            text: 'Which of the following is a major security concern in Mobile Cloud Computing (MCC)?',
            options: {
                A: 'Unlimited battery consumption',
                B: 'Data confidentiality and privacy during transmission',
                C: 'Increasing device size',
                D: 'Lack of mobile applications'
            },
            explanation: [
                "🔒 Security in MCC",
                "A: ❌ Battery use is a technical issue, not a security one.",
                "B: ✅ Correct. Data privacy and confidentiality are key challenges.",
                "C: ❌ Device size is unrelated.",
                "D: ❌ Mobile apps are abundant."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'Which of the following is a key advantage of Fog Computing over Cloud Computing?',
            options: {
                A: 'Higher centralization of resources',
                B: 'Better support for real-time applications like healthcare monitoring and autonomous vehicles',
                C: 'Infinite storage capacity',
                D: 'Removal of network infrastructure'
            },
            explanation: [
                "🌫️ Fog vs Cloud",
                "A: ❌ Fog is decentralized, not centralized.",
                "B: ✅ Correct. Fog supports low-latency real-time applications.",
                "C: ❌ Storage is limited, not infinite.",
                "D: ❌ Fog still depends on network connections."
            ]
        },
        {
            id: 7,
            correctAnswer: 'D',
            text: 'In Fog Computing, data is usually processed at',
            options: {
                A: 'Central cloud data centers only',
                B: 'Satellites orbiting the earth',
                C: 'Only on end-user mobile devices',
                D: 'Edge devices or intermediate nodes such as routers, gateways, or local servers'
            },
            explanation: [
                "💡 Fog Data Processing",
                "A: ❌ Fog reduces reliance on central clouds.",
                "B: ❌ Satellites are not used for Fog processing.",
                "C: ❌ Processing occurs beyond the mobile device.",
                "D: ✅ Correct. Fog computing processes data at the edge."
            ]
        },
        {
            id: 8,
            correctAnswer: 'C',
            text: 'Statement 1: Geospatial Cloud Computing enables large-scale spatial data analysis by leveraging distributed computing resources. Statement 2: Traditional desktop GIS systems alone are sufficient to handle petabyte-scale remote sensing data efficiently.',
            options: {
                A: 'Both statements are true, and Statement 2 is the correct explanation of Statement 1',
                B: 'Both statements are true, but Statement 2 is not the correct explanation of Statement 1',
                C: 'Statement 1 is true, but Statement 2 is false',
                D: 'Statement 1 is false, but Statement 2 is true'
            },
            explanation: [
                "🗺️ Geospatial Cloud Analysis",
                "A: ❌ Statement 2 is incorrect.",
                "B: ❌ Statement 2 is false, so cannot be correct explanation.",
                "C: ✅ Correct. Cloud enables big spatial data processing; desktop GIS cannot handle petabyte-scale data.",
                "D: ❌ Statement 1 is true."
            ]
        },
        {
            id: 9,
            correctAnswer: 'B',
            text: 'In Geospatial Cloud Computing, the biggest challenge when processing satellite imagery and spatial big data is:',
            options: {
                A: 'Lack of interest in geospatial data',
                B: 'High computational demand and storage requirements for large-scale raster/vector datasets',
                C: 'The inability of GIS tools to run on cloud platforms',
                D: 'Elimination of spatial data standards like OGC'
            },
            explanation: [
                "🛰️ Geospatial Cloud Challenges",
                "A: ❌ Interest in spatial data is growing.",
                "B: ✅ Correct. Massive datasets require heavy computation and storage.",
                "C: ❌ GIS tools are increasingly cloud-compatible.",
                "D: ❌ Standards like OGC still apply."
            ]
        },
        {
            id: 10,
            correctAnswer: 'B',
            text: 'In an IoT-enabled smart healthcare system, which combination is most critical to ensure real-time patient monitoring with minimal delay?',
            options: {
                A: 'Cloud computing + Batch processing',
                B: 'Fog/Edge computing + Low-latency communication (e.g., 5G)',
                C: 'Local device storage + Periodic manual uploads',
                D: 'Satellite communication + High latency networks'
            },
            explanation: [
                "❤️ Smart Healthcare IoT",
                "A: ❌ Batch processing causes delay.",
                "B: ✅ Correct. Fog/Edge + 5G ensures real-time response.",
                "C: ❌ Manual uploads are not real-time.",
                "D: ❌ High-latency links are unsuitable."
            ]
        }
    ]

};



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