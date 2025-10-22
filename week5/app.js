// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'A',
            text: 'In an SLA agreement, a cloud provider promises 98.5% availability. An application runs X hours per day. Over a 30-day month, the total downtime was 11 hours. The SLA is still considered honored. What is the minimum possible value of X?',
            options: {
                'A': 'X is at least 24.44',
                'B': 'X is at most 24.44',
                'C': 'X is exactly 24.44',
                'D': 'Insufficient data'
            },
            explanation: [
                "📊 SLA Calculation",
                "A: ✅ Correct. SLA allows 1.5% downtime: 0.015 * 30 * X ≥ 11 → X ≥ 24.44 hours.",
                "B: ❌ Wrong. X should be at least 24.44, not at most.",
                "C: ❌ Wrong. 24.44 is minimum, not exact.",
                "D: ❌ Wrong. Data is sufficient to calculate X."
            ]
        },
        {
            id: 2,
            correctAnswer: 'C',
            text: 'In a multi-core system, increasing the number of active CPU cores will generally lead to:',
            options: {
                'A': 'A decrease in power consumption',
                'B': 'A constant power consumption',
                'C': 'An increase in power consumption',
                'D': 'No effect on power consumption'
            },
            explanation: [
                "⚡ CPU Power",
                "A: ❌ Wrong. More cores consume more power.",
                "B: ❌ Wrong. Total consumption changes with active cores.",
                "C: ✅ Correct. Activating cores increases total power draw.",
                "D: ❌ Wrong. Hardware uses more energy when active."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'Which economic factor is most impacted when moving from on-premise to cloud infrastructure?',
            options: {
                'A': 'Taxation',
                'B': 'Labor productivity',
                'C': 'Capital expenditure',
                'D': 'Bandwidth consumption'
            },
            explanation: [
                "💰 Cloud Economics",
                "A: ❌ Wrong. Taxes not directly affected by cloud usage.",
                "B: ❌ Wrong. Productivity may improve, but not main economic factor.",
                "C: ✅ Correct. Cloud converts CAPEX (buying servers) to OPEX (pay-per-use).",
                "D: ❌ Wrong. Bandwidth usage may change, but not primary factor."
            ]
        },
        {
         
            id: 4,
            correctAnswer: 'B', // Total physical blocks including replication
            text: 'In Hadoop MapReduce framework, HDFS block size = 64 MB. Files: 64 KB, 65 MB, 127 MB. How many physical HDFS blocks are created (with default replication factor 3)?',
            options: {
                'A': '9',
                'B': '15',
                'C': '6',
                'D': '8'
            },
            explanation: [
                "🗄 HDFS Block Calculation for All Options:",
                "Step 1: Calculate logical blocks per file:",
                "• 64 KB → 1 block (fits in a single block)",
                "• 65 MB → 2 blocks (1 full 64 MB + 1 MB partial)",
                "• 127 MB → 2 blocks (1 full 64 MB + 63 MB partial)",
                "Total logical blocks = 1 + 2 + 2 = 5",
                "Step 2: Apply default replication factor = 3 → Total physical blocks = 5 × 3 = 15",
                "",
                "Option A: 9 ❌ Wrong. Likely miscounted replication or ignored one file.",
                "Option B: 15 ✅ Correct. Logical blocks 5 × replication 3 = 15 physical blocks.",
                "Option C: 6 ❌ Wrong. Possibly only counted 2 of the files incorrectly or miscalculated splits.",
                "Option D: 8 ❌ Wrong. Miscalculation, perhaps confused partial blocks with replication."
            ]
        },

        {
            id: 5,
            correctAnswer: 'A',
            text: 'Which of the following best represents a logical resource in a virtualized environment?',
            options: {
                'A': 'Virtual Machine',
                'B': 'Hard Disk',
                'C': 'RAM',
                'D': 'Network Cable'
            },
            explanation: [
                "🖥 Virtualization Concept",
                "A: ✅ Correct. VM is a logical abstraction of hardware.",
                "B: ❌ Wrong. Physical component, not logical.",
                "C: ❌ Wrong. RAM is physical resource.",
                "D: ❌ Wrong. Network cable is physical hardware."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'Which optional MapReduce component helps reduce the volume of data transferred to the Reducer?',
            options: {
                'A': 'Partitioner',
                'B': 'Combiner',
                'C': 'RecordReader',
                'D': 'OutputFormat'
            },
            explanation: [
                "📦 MapReduce Optimization",
                "A: ❌ Wrong. Partitioner determines reducer assignment.",
                "B: ✅ Correct. Combiner aggregates data locally before sending to reducers.",
                "C: ❌ Wrong. RecordReader reads input data.",
                "D: ❌ Wrong. OutputFormat defines output structure, not data reduction."
            ]
        },
        {
            id: 7,
            correctAnswer: 'D',
            text: 'In virtualized environments, the software layer that allows multiple VMs to share physical hardware is the __________.',
            options: {
                'A': 'Allocator',
                'B': 'Orchestrator',
                'C': 'Container',
                'D': 'Hypervisor'
            },
            explanation: [
                "🖥 Virtualization Layer",
                "A: ❌ Wrong. Allocator allocates resources, not entire VM management.",
                "B: ❌ Wrong. Orchestrator manages VM lifecycle, not hardware virtualization.",
                "C: ❌ Wrong. Container shares OS, not full hardware virtualization.",
                "D: ✅ Correct. Hypervisor enables multiple VMs to share physical hardware."
            ]
        },
        {
            id: 8,
            correctAnswer: 'B',
            text: 'You are designing a multi-region data analytics pipeline on GCP. You want durable, low-latency storage for massive structured logs and real-time dashboarding/alerts. Best services?',
            options: {
                'A': 'Cloud Storage + Dataflow + Looker',
                'B': 'Bigtable + Pub/Sub + Cloud Monitoring',
                'C': 'Firestore + Data Studio + Cloud Functions',
                'D': 'BigQuery + Pub/Sub + Data Studio'
            },
            explanation: [
                "📊 GCP Analytics Pipeline",
                "A: ❌ Wrong. Cloud Storage is batch-oriented.",
                "B: ✅ Correct. Bigtable (low-latency) + Pub/Sub (streaming) + Cloud Monitoring (alerts/dashboards).",
                "C: ❌ Wrong. Firestore not optimized for massive analytics.",
                "D: ❌ Wrong. BigQuery is batch analytics, not real-time."
            ]
        },
        {
            id: 9,
            correctAnswer: 'C',
            text: 'Statement 1: Economies of scale reduce costs per unit.\nStatement 2: Providers pass all savings directly to users.',
            options: {
                'A': 'Both true',
                'B': 'Both false',
                'C': 'Statement 1 true, Statement 2 false',
                'D': 'Statement 1 false, Statement 2 true'
            },
            explanation: [
                "💰 Cloud Economics Statements",
                "A: ❌ Wrong. Savings not fully passed to users.",
                "B: ❌ Wrong. Statement 1 is true.",
                "C: ✅ Correct. Economies of scale reduce costs, but providers keep some margin.",
                "D: ❌ Wrong. Statement 1 is true."
            ]
        },
        {
        
            id: 10,
            correctAnswer: 'A',
            text: 'Average demand = 50 units, baseline cost = 100, time = 10 hrs, peak demand = 120. Max utility premium (U) if cloud cost < owning cost?',
            options: {
                'A': '2.4',
                'B': '2.0',
                'C': '1.8',
                'D': '3.0'
            },
            explanation: [
                "💵 Cloud Cost vs Owning Cost Calculation:",
                "Step 1: Compute owning cost at peak demand: 100 (baseline cost per unit) × 120 (peak demand) = 12,000 units",
                "Step 2: Compute cloud cost formula: Average demand × Time × Utility Premium → 50 × 10 × U = 500 × U",
                "Step 3: Cloud cost < Owning cost → 500 × U < 12,000 → U < 12,000 / 500 → U < 24",
                "Step 4: Normalize U to per-hour scale (divide by 10) → Max U ≈ 2.4",
                "",
                "Option A: 2.4 ✅ Correct. Matches the max allowable utility premium.",
                "Option B: 2.0 ❌ Wrong. Too low, underestimates maximum U.",
                "Option C: 1.8 ❌ Wrong. Too low, conservative value.",
                "Option D: 3.0 ❌ Wrong. Exceeds allowable cloud cost, would make cloud more expensive than owning."
            ]
        },
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