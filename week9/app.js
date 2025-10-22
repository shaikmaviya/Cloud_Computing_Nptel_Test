// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'Which of the following best explains the difference between fog computing and edge computing?',
            options: {
                A: 'Edge computing and fog computing are identical, both referring to processing only at IoT devices.',
                B: 'Fog computing extends the cloud closer to the edge network, while edge computing processes data strictly within IoT devices or local gateways.',
                C: 'Edge computing centralizes all computation in the cloud, whereas fog computing distributes computation only in IoT nodes.',
                D: 'Fog computing supports only data storage, while edge computing provides real-time analytics at the edge.'
            },
            explanation: [
                "A: ❌ Fog and edge computing are not identical.",
                "B: ✅ Correct. Fog extends cloud closer to the edge; edge processes locally.",
                "C: ❌ Edge does not centralize computation in the cloud.",
                "D: ❌ Fog supports computation too, not just storage."
            ]
        },
        {
            id: 2,
            correctAnswer: 'B',
            text: 'A smart traffic light system that must process live video feeds to detect congestion is best suited for:',
            options: {
                A: 'Cloud computing',
                B: 'Fog computing',
                C: 'Edge computing',
                D: 'Traditional client-server model'
            },
            explanation: [
                "A: ❌ Cloud computing adds latency for real-time video processing.",
                "B: ✅ Correct. Fog computing processes data closer to devices while handling more computation than edge nodes, ideal for live video feeds.",
                "C: ❌ Edge helps low-latency tasks but may not handle heavier video processing effectively alone.",
                "D: ❌ Traditional client-server cannot handle latency-sensitive IoT applications efficiently."
            ]
        },

        {
            id: 3,
            correctAnswer: 'C',
            text: 'In terms of latency, which order is correct (lowest to highest)?',
            options: {
                A: 'Cloud < Fog < Edge',
                B: 'Fog < Cloud < Edge',
                C: 'Edge < Fog < Cloud',
                D: 'Edge < Cloud < Fog'
            },
            explanation: [
                "A: ❌ Cloud latency is higher than edge or fog.",
                "B: ❌ Fog is faster than cloud, but not faster than edge.",
                "C: ✅ Correct. Edge has lowest latency, then fog, then cloud.",
                "D: ❌ Cloud latency is higher than fog, so this order is incorrect."
            ]
        },
        {
            id: 4,
            correctAnswer: 'B',
            text: 'Which type of scalability is most critical when thousands of IoT devices connect simultaneously to a fog node?',
            options: {
                A: 'Vertical scalability at each fog node',
                B: 'Horizontal scalability across multiple fog nodes',
                C: 'Elasticity in the cloud layer only',
                D: 'Temporal scalability of storage devices'
            },
            explanation: [
                "A: ❌ Vertical scalability helps, but horizontal scaling is more important for many devices.",
                "B: ✅ Correct. Horizontal scalability ensures load is shared across multiple fog nodes.",
                "C: ❌ Cloud elasticity alone cannot solve local bottlenecks.",
                "D: ❌ Temporal scalability of storage is not the main issue for device connections."
            ]
        },
        {
            id: 5,
            correctAnswer: 'B',
            text: 'Which statement best captures the hierarchical control in fog/edge/cloud computing?',
            options: {
                A: 'Edge devices always control fog and cloud resources.',
                B: 'Fog nodes provide intermediate decision-making, while the cloud manages global policies and optimization.',
                C: 'Cloud always directly controls IoT devices without fog involvement.',
                D: 'Hierarchical control is not required in fog computing.'
            },
            explanation: [
                "A: ❌ Edge devices do not control fog or cloud.",
                "B: ✅ Correct. Fog acts as intermediate layer; cloud manages global policies.",
                "C: ❌ Cloud does not bypass fog in hierarchical control.",
                "D: ❌ Hierarchical control is essential for efficiency."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'What is the primary goal of the application placement problem in the Cloud-Fog-Edge framework?',
            options: {
                A: 'To map all applications onto the Cloud servers to maximize computational power.',
                B: 'To find available resources in the network that satisfy application requirements, respect constraints, and optimize the objective, such as maximizing energy consumption.',
                C: 'To place all application components on edge devices to ensure low latency.',
                D: 'To disregard resource capacities and focus solely on network constraints.'
            },
            explanation: [
                "A: ❌ Only using cloud ignores latency and constraints.",
                "B: ✅ Correct. Placement must respect resource constraints and optimize objectives.",
                "C: ❌ Only edge placement may not satisfy all requirements.",
                "D: ❌ Ignoring capacities can lead to failures."
            ]
        },
        {
            id: 7,
            correctAnswer: 'D',
            text: 'Which of the following challenges most directly impacts the efficiency of task offloading in mobile edge computing?',
            options: {
                A: 'Unlimited bandwidth between device and edge servers.',
                B: 'Complete absence of virtualization at the edge.',
                C: 'Availability of infinite computing power in the cloud.',
                D: 'Dynamic variability of wireless network conditions and device mobility'
            },
            explanation: [
                "A: ❌ Unlimited bandwidth is ideal, not a challenge.",
                "B: ❌ Lack of virtualization affects management, not task offloading efficiency directly.",
                "C: ❌ Infinite cloud power is hypothetical, not a real challenge.",
                "D: ✅ Correct. Variability in network and mobility impacts offloading performance."
            ]
        },
        {
            id: 8,
            correctAnswer: 'A',
            text: 'In the context of cloud federation, what role do brokers play?',
            options: {
                A: 'They act as intermediaries that negotiate, discover, and allocate resources across different CSPs.',
                B: 'They replace CSPs entirely by owning all infrastructure.',
                C: 'They prevent interoperability to reduce costs.',
                D: 'They only monitor usage without affecting service delivery.'
            },
            explanation: [
                "A: ✅ Correct. Brokers manage negotiation and allocation across providers.",
                "B: ❌ Brokers do not replace CSPs.",
                "C: ❌ Brokers aim for interoperability, not prevention.",
                "D: ❌ Monitoring alone is insufficient."
            ]
        },
        {
            id: 9,
            correctAnswer: 'B',
            text: 'Which of the following is a major challenge in cloud federation?',
            options: {
                A: 'Unlimited scalability of resources across all CSPs.',
                B: 'Ensuring SLA compliance, interoperability, and trust across heterogeneous providers.',
                C: 'Simplified security management due to single-provider dominance.',
                D: 'Guaranteed uniform pricing models across providers.'
            },
            explanation: [
                "A: ❌ Scalability is desired, not a challenge.",
                "B: ✅ Correct. Managing SLA, interoperability, and trust is complex.",
                "C: ❌ Single-provider dominance is not the challenge here.",
                "D: ❌ Pricing uniformity is rarely guaranteed."
            ]
        },
        {
            id: 10,
            correctAnswer: 'C',
            text: 'Which of the following best describes a Hybrid Cloud Federation?',
            options: {
                A: 'A federation that integrates only public cloud providers into a single pool.',
                B: 'A federation where only private cloud providers collaborate to enhance scalability.',
                C: 'A federation where resources from public and private clouds are combined to provide flexible services while maintaining security and control.',
                D: 'A federation that ignores interoperability and focuses solely on cost optimization.'
            },
            explanation: [
                "A: ❌ Only public clouds is not hybrid.",
                "B: ❌ Only private clouds is not hybrid.",
                "C: ✅ Correct. Hybrid combines public and private cloud resources.",
                "D: ❌ Interoperability is essential, not ignored."
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