// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'In Azure SQL Database, which of the following provides built-in geo-replication and is designed for mission-critical workloads?',
            options: {
                'A': 'Basic Tier',
                'B': 'Business Critical Tier',
                'C': 'Hyperscale Tier',
                'D': 'Standard Tier'
            },
            explanation: [
                "💾 Azure SQL Tiers Overview",
                "A: ❌ Basic Tier is for small, non-critical workloads.",
                "B: ✅ Correct. Business Critical Tier offers high availability and built-in geo-replication for mission-critical applications.",
                "C: ❌ Hyperscale focuses on scaling, not geo-replication.",
                "D: ❌ Standard Tier offers moderate performance without replication."
            ]
        },
        {
            id: 2,
            correctAnswer: 'C',
            text: 'You have 2 VMs in different Azure Availability Zones in the same region. Which of the following is true about the setup?',
            options: {
                'A': 'They are not protected against data center failure',
                'B': 'They share the same power source',
                'C': 'They are in separate physical locations',
                'D': 'They cannot communicate over a private IP'
            },
            explanation: [
                "🏗️ Azure Availability Zones",
                "A: ❌ Incorrect — zones protect against data center failure.",
                "B: ❌ Each zone has independent power and cooling.",
                "C: ✅ Correct. Availability Zones are separate physical data centers within a region.",
                "D: ❌ VMs can communicate privately within the same region."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'What is the maximum number of deployment slots available in the Azure App Service Premium plan (P1v3 and higher)?',
            options: {
                'A': '2',
                'B': '5',
                'C': '20',
                'D': '10'
            },
            explanation: [
                "🚀 Azure App Service Deployment Slots",
                "A: ❌ Basic tiers support fewer slots.",
                "B: ❌ 5 slots are for Standard tier.",
                "C: ✅ Correct. Premium plan (P1v3 and above) supports up to 20 deployment slots.",
                "D: ❌ 10 slots are for older Premium SKUs."
            ]
        },
        {
            id: 4,
            correctAnswer: 'C',
            text: 'Which built-in security feature helps automatically enforce HTTPS connections for all Azure App Service web apps?',
            options: {
                'A': 'Azure Firewall',
                'B': 'Application Gateway',
                'C': 'HTTPS Only setting',
                'D': 'Azure Key Vault'
            },
            explanation: [
                "🔐 HTTPS Enforcement in App Service",
                "A: ❌ Azure Firewall filters traffic but doesn’t enforce HTTPS.",
                "B: ❌ Application Gateway can do SSL offload but not force HTTPS in App Service itself.",
                "C: ✅ Correct. The 'HTTPS Only' setting automatically redirects all HTTP requests to HTTPS.",
                "D: ❌ Key Vault stores certificates but doesn’t enforce HTTPS."
            ]
        },
        {
            id: 5,
            correctAnswer: 'D',
            text: 'Which GCP service is best suited for hosting a NoSQL database with horizontal scalability and global replication?',
            options: {
                'A': 'Cloud SQL',
                'B': 'BigQuery',
                'C': 'Cloud Spanner',
                'D': 'Firestore'
            },
            explanation: [
                "🌎 GCP NoSQL Databases",
                "A: ❌ Cloud SQL is relational, not NoSQL.",
                "B: ❌ BigQuery is for analytics, not transactional NoSQL workloads.",
                "C: ❌ Cloud Spanner is relational (distributed SQL).",
                "D: ✅ Correct. Firestore is a globally scalable NoSQL database with automatic replication."
            ]
        },
        {
            id: 6,
            correctAnswer: 'B',
            text: 'The OpenStack service responsible for block storage is called _____.',
            options: {
                'A': 'Horizon',
                'B': 'Cinder',
                'C': 'Neutron',
                'D': 'Swift'
            },
            explanation: [
                "💾 OpenStack Core Services",
                "A: ❌ Horizon is the dashboard UI.",
                "B: ✅ Correct. Cinder provides block storage (like volumes).",
                "C: ❌ Neutron handles networking.",
                "D: ❌ Swift is for object storage."
            ]
        },
        {
            id: 7,
            correctAnswer: 'C',
            text: '________ is the GCP service that helps manage Kubernetes clusters.',
            options: {
                'A': 'Cloud Functions',
                'B': 'App Engine',
                'C': 'GKE',
                'D': 'Cloud Build'
            },
            explanation: [
                "☸️ GCP Container Management",
                "A: ❌ Cloud Functions is for serverless code execution.",
                "B: ❌ App Engine is for managed app hosting.",
                "C: ✅ Correct. GKE (Google Kubernetes Engine) manages Kubernetes clusters.",
                "D: ❌ Cloud Build is for CI/CD pipelines."
            ]
        },
        {
            id: 8,
            correctAnswer: 'D',
            text: 'You are designing a multi-region data analytics pipeline on GCP. You want to ensure durable, low-latency storage for massive structured logs and provide real-time dashboarding and alerts. What is the best set of GCP services to use?',
            options: {
                'A': 'Cloud Storage + Dataflow + Looker',
                'B': 'Bigtable + Pub/Sub + Cloud Monitoring',
                'C': 'Firestore + Data Studio + Cloud Functions',
                'D': 'BigQuery + Pub/Sub + Data Studio'
            },
            explanation: [
                "📊 GCP Analytics Pipeline Design",
                "A: ❌ Cloud Storage isn’t ideal for low-latency structured data.",
                "B: ❌ Correct. Bigtable (low latency) + Pub/Sub (streaming) + Cloud Monitoring (alerts) is ideal for real-time pipelines.",
                "C: ❌ Firestore is not optimized for heavy analytics workloads.",
                "D: ✅ BigQuery is for batch analytics, not real-time dashboards."
            ]
        },
        {
            id: 9,
            correctAnswer: 'B',
            text: 'You deploy two versions (v1, v2) of your App Engine service. You want 70% of traffic to go to v1 and 30% to v2. Which command should you use?',
            options: {
                'A': 'gcloud app deploy --split-traffic=70:v1,30:v2',
                'B': 'gcloud app services set-traffic --splits v1=0.7,v2=0.3',
                'C': 'gcloud app versions set-traffic --service=default --splits=0.7:v1,0.3:v2',
                'D': 'gcloud app set-traffic --splits=v1:70,v2:30'
            },
            explanation: [
                "☁️ App Engine Traffic Splitting",
                "A: ❌ Invalid syntax for split-traffic.",
                "B: ✅ Correct. This is the right gcloud command to set version traffic split.",
                "C: ❌ Wrong order and syntax.",
                "D: ❌ Not a valid gcloud command."
            ]
        },
        {
            id: 10,
            correctAnswer: 'B',
            text: "A tenant in OpenStack complains that their VMs can't reach the internet. What is the MOST LIKELY root cause?",
            options: {
                'A': 'Glance image is corrupted',
                'B': 'Neutron router not configured',
                'C': 'Nova scheduler is down',
                'D': 'Heat orchestration failed'
            },
            explanation: [
                "🌐 OpenStack Networking Troubleshooting",
                "A: ❌ Glance handles images, not connectivity.",
                "B: ✅ Correct. Neutron provides networking and routers — without configuration, VMs can’t reach the internet.",
                "C: ❌ Nova scheduler affects VM placement, not networking.",
                "D: ❌ Heat orchestration is for automation, not routing."
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