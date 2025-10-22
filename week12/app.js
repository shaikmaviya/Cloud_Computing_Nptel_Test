// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'In a Spatial Cloud Computing environment, which service characteristic ensures that geospatial applications can dynamically scale based on varying workloads such as real-time satellite image processing?',
            options: {
                A: 'Resource Pooling',
                B: 'Rapid Elasticity',
                C: 'Broad Network Access',
                D: 'Measured Service'
            },
            explanation: [
                "A: ❌ Incorrect. Resource pooling helps share resources but does not ensure dynamic scaling.",
                "B: ✅ Correct. Rapid elasticity allows the system to scale up/down based on workload.",
                "C: ❌ Incorrect. Broad network access provides connectivity, not dynamic scaling.",
                "D: ❌ Incorrect. Measured service is for usage tracking, not scaling."
            ]
        },
        {
            id: 2,
            correctAnswer: 'C',
            text: 'Which deployment model is most suitable for a government-academic spatial cloud collaboration aimed at environmental monitoring with shared but secure resources?',
            options: {
                A: 'Public Cloud',
                B: 'Private Cloud',
                C: 'Community Cloud',
                D: 'Hybrid Cloud'
            },
            explanation: [
                "A: ❌ Incorrect. Public cloud is open for general use, lacks control for government-academic collaboration.",
                "B: ❌ Incorrect. Private cloud is restricted to one organization.",
                "C: ✅ Correct. Community cloud allows multiple organizations with shared, secure resources.",
                "D: ❌ Incorrect. Hybrid cloud is a mix of public and private, not specifically community-focused."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'Which of the following is a major challenge of spatial cloud computing in terms of data management?',
            options: {
                A: 'Lack of virtualization support',
                B: 'High storage cost of structured data',
                C: 'Handling large-scale heterogeneous geospatial datasets',
                D: 'Limited access to network and compute nodes'
            },
            explanation: [
                "A: ❌ Incorrect. Virtualization is generally supported in modern spatial clouds.",
                "B: ❌ Incorrect. Storage cost is a concern but not the main challenge.",
                "C: ✅ Correct. Managing diverse, large-scale geospatial datasets is a primary challenge.",
                "D: ❌ Incorrect. Access limitations may exist but are not the main challenge."
            ]
        },
        {
            id: 4,
            correctAnswer: 'D',
            text: 'Which is a major challenge for Mobile Cloud Computing in 4G networks that is significantly reduced in 5G?',
            options: {
                A: 'High deployment cost of cloud servers',
                B: 'Limited device battery capacity',
                C: 'Lack of virtualization technologies',
                D: 'High round-trip latency between devices and cloud servers'
            },
            explanation: [
                "A: ❌ Incorrect. Deployment cost is not the major difference between 4G and 5G.",
                "B: ❌ Incorrect. Battery limitations remain but 5G is more energy-efficient.",
                "C: ❌ Incorrect. Virtualization is not specific to 4G/5G differences.",
                "D: ✅ Correct. 5G reduces latency, which was a key limitation in 4G MCC."
            ]
        },
        {
            id: 5,
            correctAnswer: 'A',
            text: 'In MCC with 5G, which combination best explains enhanced Quality of Experience (QoE) for mobile users?',
            options: {
                A: 'Higher bandwidth + Network slicing + Mobile edge computing',
                B: 'Centralized processing + Increased resource pooling + Lower battery drain',
                C: 'Virtualization + Cloud-only data storage + Broad network access',
                D: 'None of these'
            },
            explanation: [
                "A: ✅ Correct. These 5G features improve QoE by offering high speed, dedicated slices, and edge computing.",
                "B: ❌ Incorrect. Centralized processing is not ideal for QoE in MCC.",
                "C: ❌ Incorrect. Cloud-only storage and virtualization alone do not enhance QoE significantly.",
                "D: ❌ Incorrect. Option A provides the correct combination."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'Which 5G feature combined with MCC is most critical for disaster management and real-time public safety applications?',
            options: {
                A: 'Broad Network Access',
                B: 'Massive Machine-Type Communications (mMTC)',
                C: 'Shared Cloud Storage',
                D: 'On-demand self-service'
            },
            explanation: [
                "A: ❌ Incorrect. Broad access is general but not critical for disaster scenarios.",
                "B: ✅ Correct. mMTC enables massive IoT device connectivity for real-time disaster monitoring.",
                "C: ❌ Incorrect. Shared storage helps data storage but is not the main feature.",
                "D: ❌ Incorrect. On-demand self-service is general cloud functionality, not disaster-specific."
            ]
        },
        {
            id: 7,
            correctAnswer: 'B',
            text: 'In an ITS environment, Vehicle-to-Infrastructure (V2I) communication mainly supports:',
            options: {
                A: 'Social media connectivity inside cars',
                B: 'Vehicles sharing information with road infrastructure like traffic lights and signals',
                C: 'Streaming services for passengers',
                D: 'Offline navigation'
            },
            explanation: [
                "A: ❌ Incorrect. V2I is not for social media.",
                "B: ✅ Correct. V2I enables vehicles to interact with road infrastructure for safety and traffic optimization.",
                "C: ❌ Incorrect. Streaming services are not V2I primary function.",
                "D: ❌ Incorrect. Offline navigation is independent of V2I."
            ]
        },
        {
            id: 8,
            correctAnswer: 'B',
            text: 'In a Cyber-Physical System (CPS) integrated with cloud computing, what is the primary role of the cloud layer?',
            options: {
                A: 'Direct control of physical devices without feedback',
                B: 'Storage, processing, and analysis of sensor-generated data for decision-making',
                C: 'Only providing network connectivity between CPS components',
                D: 'Replacing all local controllers with a single centralized controller'
            },
            explanation: [
                "A: ❌ Incorrect. Direct control without feedback is unsafe and impractical.",
                "B: ✅ Correct. The cloud layer processes sensor data and supports decision-making in CPS.",
                "C: ❌ Incorrect. Network connectivity alone is insufficient for CPS functionality.",
                "D: ❌ Incorrect. CPS maintains local controllers for responsiveness."
            ]
        },
        {
            id: 9,
            correctAnswer: 'B',
            text: 'Mobility Analytics in Smart Cities primarily helps to:',
            options: {
                A: 'Reduce cloud storage costs',
                B: 'Improve traffic flow and transportation planning',
                C: 'Replace all physical traffic sensors',
                D: 'Increase vehicle ownership'
            },
            explanation: [
                "A: ❌ Incorrect. Analytics may optimize storage but main goal is traffic improvement.",
                "B: ✅ Correct. Mobility analytics is used to plan and optimize transportation and traffic flow.",
                "C: ❌ Incorrect. Physical sensors are often still used; analytics complements them.",
                "D: ❌ Incorrect. Analytics does not aim to increase vehicle ownership."
            ]
        },
        {
            id: 10,
            correctAnswer: 'B',
            text: '5G Enhanced Mobile Broadband (eMBB) reduces _______ by providing faster and more uniform data rates.',
            options: {
                A: 'network congestion',
                B: 'cost-per-bit for data transmission',
                C: 'connectivity for IoT devices',
                D: 'power efficiency'
            },
            explanation: [
                "A: ❌ Incorrect. While eMBB improves throughput, network congestion reduction is a side effect, not the main target.",
                "B: ✅ Correct. eMBB provides faster and more uniform data rates, effectively reducing the cost-per-bit for data transmission.",
                "C: ❌ Incorrect. Connectivity for IoT devices is supported, but not the primary purpose of eMBB.",
                "D: ❌ Incorrect. Power efficiency is improved but is not the main focus of eMBB."
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