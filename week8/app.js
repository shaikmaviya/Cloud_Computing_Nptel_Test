// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'Which command is used to list all running Docker containers?',
            options: {
                A: 'docker images',
                B: 'docker ps',
                C: 'docker run',
                D: 'docker exec'
            },
            explanation: [
                "A: ❌ Lists all images, not running containers.",
                "B: ✅ Correct. 'docker ps' shows running containers.",
                "C: ❌ 'docker run' starts a container.",
                "D: ❌ 'docker exec' runs a command inside a container."
            ]
        },
        {
            id: 2,
            correctAnswer: 'B',
            text: 'Which of the following is true about Docker volumes?',
            options: {
                A: 'They are temporary and deleted with the container.',
                B: 'They persist data independently of containers.',
                C: 'They cannot be shared between containers.',
                D: 'They are used only for logging.'
            },
            explanation: [
                "A: ❌ Volumes persist beyond the life of a container.",
                "B: ✅ Correct. Volumes allow persistent storage.",
                "C: ❌ Volumes can be shared among containers.",
                "D: ❌ Volumes have many uses, not just logging."
            ]
        },
        {
            id: 3,
            correctAnswer: 'A',
            text: 'Which of the following statements is TRUE?',
            options: {
                A: 'A VM can run multiple containers inside it',
                B: 'A container can run multiple VMs inside it',
                C: 'VMs and containers cannot run together',
                D: 'Containers require hardware virtualization support'
            },
            explanation: [
                "A: ✅ Correct. VMs can host containers.",
                "B: ❌ Containers don’t host VMs.",
                "C: ❌ They can run together.",
                "D: ❌ Containers use OS-level virtualization, not hardware virtualization."
            ]
        },
        {
            id: 4,
            correctAnswer: 'B',
            text: 'Kubernetes is primarily used for:',
            options: {
                A: 'Hypervisor management',
                B: 'Container orchestration',
                C: 'VM migration',
                D: 'Hardware virtualization'
            },
            explanation: [
                "A: ❌ Hypervisors are managed by tools like VMware, not Kubernetes.",
                "B: ✅ Correct. Kubernetes orchestrates containers.",
                "C: ❌ VM migration is unrelated.",
                "D: ❌ Kubernetes does not manage hardware virtualization."
            ]
        },
        {
            id: 5,
            correctAnswer: 'A',
            text: '__________ is an example of a Type 1 (bare-metal) hypervisor that runs directly on the hardware without needing a host OS.',
            options: {
                A: 'VMware ESXi',
                B: 'VirtualBox',
                C: 'Docker',
                D: 'LXC'
            },
            explanation: [
                "A: ✅ Correct. VMware ESXi is a Type 1 hypervisor.",
                "B: ❌ VirtualBox is Type 2 (hosted).",
                "C: ❌ Docker is a container platform, not a hypervisor.",
                "D: ❌ LXC is a container system, not a hypervisor."
            ]
        },
        {
            id: 6,
            correctAnswer: 'C',
            text: 'In Green Cloud architecture, which scheduling strategy would most likely help minimize energy waste?',
            options: {
                A: 'Round Robin Scheduling',
                B: 'First Come First Serve (FCFS)',
                C: 'Energy-Aware VM Consolidation',
                D: 'Randomized Load Distribution'
            },
            explanation: [
                "A: ❌ Round Robin ignores energy usage.",
                "B: ❌ FCFS is simple but not energy-efficient.",
                "C: ✅ Correct. Energy-aware consolidation reduces wasted power.",
                "D: ❌ Randomized distribution is not energy-focused."
            ]
        },
        {
            id: 7,
            correctAnswer: 'A',
            text: 'In a Sensor Cloud, which of the following is the biggest challenge when integrating Wireless Sensor Networks (WSNs) with cloud computing?',
            options: {
                A: 'Lack of virtualization support in sensors',
                B: 'High energy efficiency of WSN nodes',
                C: 'Limited storage requirements of sensors',
                D: 'Sensors are always fault-tolerant'
            },
            explanation: [
                "A: ✅ Correct. Sensors cannot be virtualized easily.",
                "B: ❌ High energy efficiency is good, not a challenge.",
                "C: ❌ Limited storage is manageable.",
                "D: ❌ Sensors are not always fault-tolerant."
            ]
        },
        {
            id: 8,
            correctAnswer: 'B',
            text: 'In an IoT Cloud system, latency-critical applications (like autonomous driving) are difficult to support directly from the cloud because:',
            options: {
                A: 'IoT devices cannot transmit data wirelessly',
                B: 'Cloud servers are usually located far from the devices',
                C: 'IoT Cloud systems do not use virtualization',
                D: 'The cloud cannot store IoT data at large scale'
            },
            explanation: [
                "A: ❌ Devices can transmit wirelessly.",
                "B: ✅ Correct. Long distance causes high latency.",
                "C: ❌ Virtualization is commonly used in IoT clouds.",
                "D: ❌ Cloud storage is sufficient; latency is the main issue."
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
                "A: ❌ Interest in spatial data is growing.",
                "B: ✅ Correct. Massive datasets require heavy computation and storage.",
                "C: ❌ GIS tools are increasingly cloud-compatible.",
                "D: ❌ Standards like OGC still apply."
            ]
        },
        {
            id: 10,
            correctAnswer: 'C',
            text: 'Statement 1: In Sensor Cloud, virtualization of sensor data allows multiple applications to use the same physical sensor infrastructure.\nStatement 2: Without virtualization, each application would require a dedicated sensor network, increasing cost and inefficiency.',
            options: {
                A: 'Statement 1 is True and Statement 2 is False',
                B: 'Statement 2 is True and Statement 1 is False',
                C: 'Both statements are True',
                D: 'Both statements are False'
            },
            explanation: [
                "A: ❌ Both statements are true.",
                "B: ❌ Both statements are true.",
                "C: ✅ Correct. Virtualization improves efficiency.",
                "D: ❌ Incorrect."
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