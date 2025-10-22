// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'Which migration technique typically results in shorter downtime but may have a longer migration time?',
            options: {
                A: 'Cold migration',
                B: 'Pre-copy migration',
                C: 'Post-copy migration',
                D: 'Hybrid migration'
            },
            explanation: [
                "A: ❌ Cold migration has long downtime because VM must be powered off.",
                "B: ✅ Correct. Pre-copy migration minimizes downtime by copying memory pages while VM is running.",
                "C: ❌ Post-copy migration reduces total migration time but may have downtime spikes.",
                "D: ❌ Hybrid combines techniques but is not the standard answer here."
            ]
        },
        {
            id: 2,
            correctAnswer: 'B',
            text: 'Which migration type is most prone to network failure risks?',
            options: {
                A: 'Pre-copy migration',
                B: 'Post-copy migration',
                C: 'Hybrid migration',
                D: 'Cold migration'
            },
            explanation: [
                "A: ❌ Pre-copy is more resilient to network issues.",
                "B: ✅ Correct. Post-copy sends VM state after powering on the VM, so network failure can disrupt it.",
                "C: ❌ Hybrid migration balances pre-copy and post-copy, reducing failure risk.",
                "D: ❌ Cold migration happens offline, so network issues do not affect it."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'Which migration technique is more energy-efficient in fog computing?',
            options: {
                A: 'Pre-copy',
                B: 'Post-copy',
                C: 'Hybrid migration',
                D: 'Cold migration'
            },
            explanation: [
                "A: ❌ Pre-copy may consume more energy due to repeated memory page transfers.",
                "B: ❌ Post-copy may require extra network traffic, consuming more energy.",
                "C: ✅ Correct. Hybrid migration combines pre-copy and post-copy to optimize energy usage and reduce downtime in fog computing.",
                "D: ❌ Cold migration requires stopping the VM, which is less efficient."
            ]
        },

        {
            id: 4,
            correctAnswer: 'B',
            text: 'In cloud platforms (like AWS, GCP, Azure), Docker Engine is primarily responsible for:',
            options: {
                A: 'Automatically scaling container clusters.',
                B: 'Running and managing individual containers on VM instances.',
                C: 'Replacing Kubernetes for container orchestration.',
                D: 'Providing multi-cloud identity management.'
            },
            explanation: [
                "A: ❌ Scaling is handled by orchestrators like Kubernetes.",
                "B: ✅ Correct. Docker Engine runs and manages containers on VMs.",
                "C: ❌ Docker Engine is not a full orchestrator.",
                "D: ❌ Identity management is handled by cloud services, not Docker."
            ]
        },
        {
            id: 5,
            correctAnswer: 'B',
            text: 'The central service that stores and distributes Docker images is called ___________.',
            options: {
                A: 'Docker Swarm',
                B: 'Docker Hub',
                C: 'Docker Engine',
                D: 'Docker Daemon'
            },
            explanation: [
                "A: ❌ Swarm is for orchestrating containers.",
                "B: ✅ Correct. Docker Hub stores and distributes images.",
                "C: ❌ Docker Engine runs containers locally.",
                "D: ❌ Docker Daemon is part of the engine, not the registry."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'Docker volumes are deleted automatically when the container using them is removed.',
            options: {
                A: 'True',
                B: 'False'
            },
            explanation: [
                "A: ❌ Named volumes persist after container removal.",
                "B: ✅ Correct. Docker volumes are designed to persist independently of containers unless explicitly removed."
            ]
        },
        {
            id: 7,
            correctAnswer: 'A',
            text: 'Statement 1: Docker networking allows containers to communicate with each other and the host. Statement 2: By default, containers are launched in host network mode.',
            options: {
                A: 'Only statement 1 is true',
                B: 'Only statement 2 is true',
                C: 'Both statement 1 and 2 are true',
                D: 'Both the statements are false'
            },
            explanation: [
                "A: ✅ Correct. Docker networking enables container communication. By default, containers use bridge network, not host mode.",
                "B: ❌ False. Default is bridge network.",
                "C: ❌ Only statement 1 is correct.",
                "D: ❌ Statement 1 is true."
            ]
        },
        {
            id: 8,
            correctAnswer: 'B',
            text: 'By default, Docker pulls all images from a private registry.',
            options: {
                A: 'True',
                B: 'False'
            },
            explanation: [
                "A: ❌ False. Docker pulls from the public Docker Hub by default.",
                "B: ✅ Correct."
            ]
        },
        {
            id: 9,
            correctAnswer: 'B',
            text: 'If a VM has 128 GB memory and the migration channel supports 4 MB/sec, what is the total migration time and downtime for non-live VM migration?',
            options: {
                A: '8 hours, 8 hours',
                B: '9 hours, 9 hours',
                C: '10 hours, 10 hours',
                D: '11 hours, 11 hours'
            },
            explanation: [
                "Step 1: Convert 128 GB to MB → 128 × 1024 = 131072 MB",
                "Step 2: Calculate time in seconds → Time = Memory / Bandwidth = 131072 ÷ 4 = 32768 seconds",
                "Step 3: Convert seconds to hours → 32768 ÷ 3600 ≈ 9.1 hours (~9 hours)",
                "Step 4: In non-live migration, downtime = total migration time → 9 hours",

                "Option A: 8 hours → ❌ Underestimates total time; bandwidth and size calculation give ~9 hours",
                "Option B: 9 hours → ✅ Correct",
                "Option C: 10 hours → ❌ Overestimates the migration time; not matching the calculation",
                "Option D: 11 hours → ❌ Overestimates even more; calculation shows ~9 hours"
            ]
        },

        {
            id: 10,
            correctAnswer: 'C',
            text: 'During live migration, storage migration is required if:',
            options: {
                A: 'Both source and destination hosts use shared storage',
                B: 'Destination host has faster CPU',
                C: "Destination host does not have access to the VM's disk",
                D: 'Migration occurs within the same physical server'
            },
            explanation: [
                "A: ❌ Shared storage means no migration of disk needed.",
                "B: ❌ CPU speed does not dictate storage migration.",
                "C: ✅ Correct. If destination cannot access VM disk, it must be migrated.",
                "D: ❌ Same server migration may not require storage transfer."
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