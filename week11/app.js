// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'In a Dew computing architecture, the "dew layer" primarily enables:',
            options: {
                A: 'Centralized computation in remote cloud data centers',
                B: 'Execution of services at the local device level with intermittent cloud connectivity',
                C: 'Resource pooling across multiple public clouds',
                D: 'High-performance computing for scientific simulations'
            },
            explanation: [
                "A: ❌ Incorrect. Dew computing is not centralized; it focuses on local execution.",
                "B: ✅ Correct. The dew layer allows services to run locally with occasional cloud sync.",
                "C: ❌ Incorrect. Resource pooling is a cloud/fog concept, not dew layer.",
                "D: ❌ Incorrect. HPC is not the focus of dew computing."
            ]
        },
        {
            id: 2,
            correctAnswer: 'C',
            text: 'Which of the following is a key differentiator of Dew computing compared to Fog computing?',
            options: {
                A: 'Dew computing always requires 24/7 cloud connectivity',
                B: 'Fog computing is strictly user-centric, while Dew computing is infrastructure-centric',
                C: 'Dew computing emphasizes offline-first functionality, while Fog computing emphasizes network-level resource management',
                D: 'Both Dew and Fog computing only function with 5G support'
            },
            explanation: [
                "A: ❌ Incorrect. Dew computing supports offline-first operation.",
                "B: ❌ Incorrect. Dew is user-centric; fog is network/infrastructure-centric.",
                "C: ✅ Correct. Dew computing is offline-first; fog focuses on managing network-level resources.",
                "D: ❌ Incorrect. Neither requires 5G exclusively."
            ]
        },
        {
            id: 3,
            correctAnswer: 'A',
            text: 'Dew computing extends the concept of:',
            options: {
                A: 'SaaS to Local + Cloud',
                B: 'PaaS to Serverless execution',
                C: 'IaaS to Multi-Cloud Migration',
                D: 'DaaS to GPU Virtualization'
            },
            explanation: [
                "A: ✅ Correct. Dew computing extends SaaS from cloud to local device + cloud hybrid execution.",
                "B: ❌ Incorrect. PaaS to Serverless is unrelated to Dew computing.",
                "C: ❌ Incorrect. Multi-cloud migration is not the focus of Dew computing.",
                "D: ❌ Incorrect. DaaS/GPU virtualization is unrelated."
            ]
        },
        {
            id: 4,
            correctAnswer: 'C',
            text: 'Which of the following is a limitation of Dew computing in mission-critical systems?',
            options: {
                A: 'Lack of support for offline operations',
                B: 'Increased dependency on edge gateways',
                C: 'Potential inconsistency during synchronization with the cloud',
                D: 'Inability to function without fog nodes'
            },
            explanation: [
                "A: ❌ Incorrect. Dew supports offline operations.",
                "B: ❌ Incorrect. Dew reduces dependency on edge gateways.",
                "C: ✅ Correct. Offline-first dew operations may cause inconsistencies when syncing with the cloud.",
                "D: ❌ Incorrect. Dew can operate independently of fog nodes."
            ]
        },
        {
            id: 5,
            correctAnswer: 'C',
            text: 'In serverless computing, billing granularity is typically based on:',
            options: {
                A: 'Number of concurrent requests handled per second',
                B: 'Total server uptime hours per month',
                C: 'Execution time and allocated memory per function invocation',
                D: 'Reserved virtual machine cores assigned to the application'
            },
            explanation: [
                "A: ❌ Incorrect. Billing is not per concurrent requests.",
                "B: ❌ Incorrect. Server uptime is irrelevant in serverless billing.",
                "C: ✅ Correct. Billing is based on function execution duration and memory allocated.",
                "D: ❌ Incorrect. Reserved VM cores apply to IaaS, not serverless."
            ]
        },
        {
            id: 6,
            correctAnswer: 'C',
            text: 'How does serverless computing primarily achieve scalability?',
            options: {
                A: 'By allocating additional dedicated VMs to the application',
                B: 'Through manual configuration of load balancers',
                C: 'By automatically spawning and terminating stateless function instances in response to events',
                D: 'By migrating workloads between private and public clouds'
            },
            explanation: [
                "A: ❌ Incorrect. Serverless does not rely on dedicated VMs.",
                "B: ❌ Incorrect. Manual load balancing is not serverless.",
                "C: ✅ Correct. Stateless functions auto-scale in response to events.",
                "D: ❌ Incorrect. Migration is unrelated to automatic serverless scaling."
            ]
        },
        {
            id: 7,
            correctAnswer: 'D',
            text: 'Which of the following best explains why state management is a challenge in FaaS?',
            options: {
                A: "Functions are deployed in containers that don't support persistent memory",
                B: "FaaS strictly enforces sequential execution of events",
                C: "Functions must maintain state within the allocated VM only",
                D: "State persistence requires external services like databases or object stores"
            },
            explanation: [
                "A: ❌ Incorrect. Containers can run FaaS but don't inherently persist state.",
                "B: ❌ Incorrect. Sequential execution is not required in FaaS.",
                "C: ❌ Incorrect. State is not tied to allocated VMs alone.",
                "D: ✅ Correct. Persistent state requires external storage like databases or object stores."
            ]
        },
        {
            id: 8,
            correctAnswer: 'C',
            text: 'Which of the following is the most significant performance challenge in Function-as-a-Service platforms?',
            options: {
                A: 'High provisioning costs of virtual machines',
                B: 'Vendor lock-in due to proprietary APIs',
                C: 'Cold start latency during function invocation',
                D: 'Inability to scale horizontally'
            },
            explanation: [
                "A: ❌ Incorrect. Provisioning cost is minor compared to cold start.",
                "B: ❌ Incorrect. Vendor lock-in is a portability concern, not performance.",
                "C: ✅ Correct. Cold starts cause latency during first invocation of functions.",
                "D: ❌ Incorrect. FaaS scales horizontally automatically; this is not the main challenge."
            ]
        },
        {
            id: 9,
            correctAnswer: 'C',
            text: 'What is the maximum execution timeout allowed for a single AWS Lambda function invocation (as of current limits)?',
            options: {
                A: '5 minutes',
                B: '10 minutes',
                C: '15 minutes',
                D: '30 minutes'
            },
            explanation: [
                "A: ❌ Incorrect. AWS Lambda supports more than 5 minutes.",
                "B: ❌ Incorrect. 10 minutes is below the max limit.",
                "C: ✅ Correct. Maximum allowed timeout is 15 minutes per invocation.",
                "D: ❌ Incorrect. 30 minutes exceeds current Lambda timeout limits."
            ]
        },
        {
            id: 10,
            correctAnswer: 'C',
            text: 'A cloud provider decides to implement server consolidation to improve sustainability. The main risk that needs to be managed is:',
            options: {
                A: 'Increased carbon offset costs',
                B: 'Higher latency due to network congestion',
                C: 'Performance degradation and resource contention when multiple VMs share the same physical server',
                D: 'Reduced data replication across availability zones'
            },
            explanation: [
                "A: ❌ Incorrect. Carbon offset is not a direct risk of server consolidation.",
                "B: ❌ Incorrect. Latency may vary but is secondary.",
                "C: ✅ Correct. Consolidating VMs increases risk of performance issues and resource contention.",
                "D: ❌ Incorrect. Data replication reduction is not a direct effect of server consolidation."
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