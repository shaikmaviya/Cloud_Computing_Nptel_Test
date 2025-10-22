// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'D',
            text: 'Which of the following does not fall(s) under the typical "essential characteristics" of cloud computing?',
            options: {
                'A': 'Resource Pooling',
                'B': 'Measured Service',
                'C': 'Rapid Elasticity',
                'D': 'Latency'
            },
            explanation: [
                "☁️ Cloud Computing Essentials 💻",
                "A: Resource Pooling ✅ - Cloud shares resources (servers, storage) dynamically among users 🍕, saving cost and improving efficiency.",
                "B: Measured Service ✅ - Usage is tracked & billed; you pay only for what you consume 💰, like a smart utility meter 🚰.",
                "C: Rapid Elasticity ✅ - Resources scale up or down automatically 🪄✨ to handle demand spikes or drops seamlessly.",
                "D: Latency ❌ - Just network delay ⚡, not a defining cloud feature; it affects performance but isn’t core to cloud computing."
            ],

        },
        {
            id: 2,
            correctAnswer: 'C',
            text: '"Google Docs" app is an example of',
            options: {
                'A': 'PaaS',
                'B': 'IaaS',
                'C': 'SaaS',
                'D': 'FaaS'
            },
            explanation: [
                "A: PaaS ❌ - Platform for developers to build apps, not end-user software.",
                "B: IaaS ❌ - Provides cloud infrastructure; users manage VMs, storage, not apps.",
                "C: SaaS ✅ - Software hosted by Google, accessed via browser, no infrastructure management.",
                "D: FaaS ❌ - Serverless functions triggered by code, not full user apps like Google Docs."
            ]
        },
        {
            id: 3,
            correctAnswer: ['D'], // Multiple correct options
            text: 'Which of the following is/are public cloud platform(s)?',
            options: {
                'A': 'Windows Server Hyper-V',
                'B': 'Google Cloud Interconnect',
                'C': 'Amazon Virtual Private Cloud',
                'D': 'Microsoft Azure'
            },
            explanation: [
                "A: Windows Server Hyper-V ❌ - Just a virtualization platform, not a public cloud.",
                "B: Google Cloud Interconnect ❌ - Part of Google Cloud public cloud services.",
                "C: Amazon Virtual Private Cloud ❌ - A VPC is a private network within AWS, not the whole public cloud.",
                "D: Microsoft Azure ✅ - Microsoft’s public cloud platform for services and apps."
            ]
        },


        {
            id: 4,
            correctAnswer: 'A', // True
            text: 'VM technology allows multiple virtual machines to run on a single physical system or on a cluster of physical systems.',
            options: {
                'A': 'True',
                'B': 'False'
            },
            explanation: [
                "A: True ✅ - Virtualization lets multiple VMs run on one physical system or cluster, each with its own OS and resources.",
                "B: False ❌ - Incorrect; VM technology specifically enables multiple independent virtual machines on shared hardware."
            ]
        },


        {
            id: 5,
            correctAnswer: 'C', // Both (i) and (ii)
            text: 'A distributed system is typically preferred when the task is: i) Data-intensive; ii) Computing-intensive',
            options: {
                'A': 'Only (i)',
                'B': 'Only (ii)',
                'C': 'Both (i) and (ii)',
                'D': 'Neither (i) nor (ii)'
            },
            explanation: [
                "A: Only (i) ❌ - Incorrect; distributed systems handle more than just data-intensive tasks.",
                "B: Only (ii) ❌ - Incorrect; they are not limited to computing-intensive tasks alone.",
                "C: Both (i) and (ii) ✅ - Correct; distributed systems handle large-scale data and high computational workloads across multiple machines.",
                "D: Neither (i) nor (ii) ❌ - Incorrect; distributed systems are specifically designed for these tasks."
            ]
        },

        {
            id: 6,
            correctAnswer: 'B', // False
            text: 'For less data-intensive applications, horizontal scale-out elasticity is the ideal solution.',
            options: {
                'A': 'True',
                'B': 'False'
            },
            explanation: [
                "A: True ❌ - Incorrect; horizontal scaling is not ideal for less data-intensive applications alone.",
                "B: False ✅ - Correct; horizontal scaling adds more machines to handle increased load efficiently when needed."
            ]
        },


        {
            id: 7,
            correctAnswer: 'C', // XaaS
            text: 'The combination of Service-Oriented Architecture and Cloud Computing realizes to _______.',
            options: {
                'A': 'FTP',
                'B': 'SNTP',
                'C': 'XaaS',
                'D': 'FaaS'
            },
            explanation: [
                "A: FTP ❌ - Incorrect; FTP is a file transfer protocol, not related to SOA or cloud services.",
                "B: SNTP ❌ - Incorrect; SNTP is a time protocol, unrelated to cloud service models.",
                "C: XaaS ✅ - Correct; SOA + Cloud Computing enables Anything as a Service, including SaaS, PaaS, IaaS, etc.",
                "D: FaaS ❌ - Incorrect; FaaS is Function as a Service, which is just one specific service type."
            ]
        },

        {
            id: 8,
            correctAnswer: ['A', 'C'], // Multiple correct options
            text: 'What is/are the typical requirement(s) of a Cloud Service Provider (CSP)?',
            options: {
                'A': 'Increase agility',
                'B': 'Increase cost',
                'C': 'Increase Productivity',
                'D': 'Decrease cost'
            },
            explanation: [
                "A: Increase agility ✅ - Correct; CSPs provide flexible resources on demand to enhance agility.",
                "B: Increase cost ❌ - Incorrect; CSPs aim to optimize or reduce costs, not increase them.",
                "C: Increase Productivity ✅ - Correct; scalable cloud services help improve productivity for users.",
                "D: Decrease cost ❌ - Incorrect; while reducing cost is good for customers, it's a result, not a primary requirement for CSPs."
            ]
        },


        {
            id: 9,
            correctAnswer: 'C', // Both (i) and (ii)
            text: 'PaaS (Platform as a Service) brings the benefits: (i) Creation of software (ii) integration of web services and databases. Select correct option(s):',
            options: {
                'A': 'Only (i)',
                'B': 'Only (ii)',
                'C': 'Both (i) and (ii)',
                'D': 'Neither (i) nor (ii)'
            },
            explanation: [
                "A: Only (i) ❌ - Incorrect; PaaS also enables integration of web services and databases.",
                "B: Only (ii) ❌ - Incorrect; PaaS also supports software creation.",
                "C: Both (i) and (ii) ✅ - Correct; PaaS provides tools for software creation and integration with web services/databases.",
                "D: Neither (i) nor (ii) ❌ - Incorrect; both benefits are valid for PaaS."
            ]
        },

        {
            id: 10,
            correctAnswer: 'B', // Cluster
            text: 'A _____ is a distributed computer system that consists of a collection of interconnected stand-alone computers working together as an integrated computing resource.',
            options: {
                'A': 'Grid',
                'B': 'Cluster',
                'C': 'Cloud',
                'D': 'Node'
            },
            explanation: [
                "A: Grid ❌ - Incorrect; a grid connects geographically distributed computers for large tasks, not tightly coupled like a cluster.",
                "B: Cluster ✅ - Correct; a cluster is a collection of interconnected stand-alone computers acting as a single system for performance and reliability.",
                "C: Cloud ❌ - Incorrect; cloud is a service model, not a specific collection of computers.",
                "D: Node ❌ - Incorrect; a node is a single computer within a cluster, not the entire system."
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