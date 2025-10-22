// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'D',
            text: 'What is/are the main difference(s) between virtualization and dual boot?',
            options: {
                'A': 'No difference between dual boot and virtualization.',
                'B': 'In virtualization, operating systems are not isolated from each other, but not in dual boot.',
                'C': 'In a dual boot, both operating systems run simultaneously, but not in virtualization.',
                'D': 'In virtualization, both operating systems run simultaneously, but not in dual boot.'
            },
            explanation: [
                "💻 Virtualization vs Dual Boot 🖥️",
                "A: ❌ No difference - Incorrect. There are fundamental differences in operation.",
                "B: ❌ OS isolation - Incorrect. Virtualization provides isolation between OSes.",
                "C: ❌ Dual boot simultaneity - Incorrect. In dual boot, only one OS runs at a time.",
                "D: ✅ Virtualization allows multiple OSes to run simultaneously 🖥️🖥️, unlike dual boot which runs one OS at a time."
            ]
        },
        {
            id: 2,
            correctAnswer: 'A',
            text: 'Ubuntu Enterprise Cloud (UEC) is an example of',
            options: {
                'A': 'Private Cloud',
                'B': 'Public Cloud',
                'C': 'Hybrid Cloud',
                'D': 'Community Cloud'
            },
            explanation: [
                "☁️ Cloud Deployment Models 🏢",
                "A: ✅ Private Cloud - UEC is designed for exclusive use by a single organization 🔒.",
                "B: ❌ Public Cloud - Shared with multiple users, not applicable here.",
                "C: ❌ Hybrid Cloud - Combines private and public clouds, UEC alone is not hybrid.",
                "D: ❌ Community Cloud - Shared by a specific community, not UEC."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'Organization should consider – (i) Network Dependency and (ii) Risks from multi-tenancy while thinking of deploying an outsourced private cloud.',
            options: {
                'A': 'Only (i) is true',
                'B': 'Only (ii) is true',
                'C': 'Both (i) and (ii)',
                'D': 'None of (i) and (ii) are true'
            },
            explanation: [
                "🔒 Outsourced Private Cloud Considerations ⚠️",
                "A: ❌ Only (i) - Incorrect. Both network dependency and multi-tenancy risks matter.",
                "B: ❌ Only (ii) - Incorrect. Network dependency also matters.",
                "C: ✅ Both (i) and (ii) - Correct. Organizations must consider both factors for security and performance.",
                "D: ❌ None - Incorrect. Both points are important."
            ]
        },
        {
            id: 4,
            correctAnswer: 'B',
            text: 'Which of the following is/are XML parser API(s)?',
            options: {
                'A': 'XaaS (Anything as a Service)',
                'B': 'DOM (Document Object Model)',
                'C': 'CLI (Command Line Interface)',
                'D': 'SLA (Service Level Agreement)'
            },
            explanation: [
                "📄 XML Parser APIs 🖥️",
                "A: ❌ XaaS - Not an XML parser API, refers to a cloud service model.",
                "B: ✅ DOM - Correct. Document Object Model is used to parse and manipulate XML documents.",
                "C: ❌ CLI - Command Line Interface, not an XML parser API.",
                "D: ❌ SLA - Service Level Agreement, unrelated to XML parsing."
            ]
        },
        {
            id: 5,
            correctAnswer: 'A',
            text: 'The public cloud has a risk of multi-tenancy.',
            options: {
                'A': 'True',
                'B': 'False'
            },
            explanation: [
                "☁️ Public Cloud Risk ⚠️",
                "A: ✅ True - Public clouds share resources among multiple tenants, creating potential multi-tenancy risks.",
                "B: ❌ False - Incorrect. Multi-tenancy risk exists in public clouds."
            ]
        },
        {
            id: 6,
            correctAnswer: 'D',
            text: 'In cloud computing, the Hypervisor is also known as',
            options: {
                'A': 'Cluster Manager',
                'B': 'Virtual Machine Handler',
                'C': 'Virtual Machine Manager',
                'D': 'Virtual Machine Monitor'
            },
            explanation: [
                "🖥️ Hypervisor Explained ⚙️",
                "A: ❌ Cluster Manager - Not a hypervisor.",
                "B: ❌ Virtual Machine Handler - Incorrect terminology.",
                "C: ❌ Virtual Machine Manager - Close, but not precise.",
                "D: ✅ Virtual Machine Monitor - Correct. Hypervisor manages multiple virtual machines."
            ]
        },
        {
            id: 7,
            correctAnswer: 'A',
            text: 'Speed and flexibility are the two disadvantages of hardware-assisted virtualization.',
            options: {
                'A': 'True',
                'B': 'False'
            },
            explanation: [
                "💻 Hardware-Assisted Virtualization ⚡",
                "A: ✅ True - Correct. In some contexts, hardware-assisted virtualization can introduce overhead affecting speed and flexibility.",
                "B: ❌ False - Incorrect. There are certain trade-offs despite advantages."
            ]
        },

        {
            id: 8,
            correctAnswer: ['A','B', 'C'], // multiple correct
            text: 'The following problems are addressed through Web services:',
            options: {
                'A': 'Firewall',
                'B': 'Interoperability',
                'C': 'Complexity',
                'D': 'Speed'
            },
            explanation: [
                "🌐 Web Services Benefits ⚙️",
                "A: ❌ Firewall - Not directly addressed by web services.",
                "B: ✅ Interoperability - Web services allow different systems to communicate.",
                "C: ✅ Complexity - Web services simplify integration of distributed systems.",
                "D: ❌ Speed - Not a primary problem addressed."
            ]
        },
        {
            id: 9,
            correctAnswer: 'D',
            text: 'A web service can be discovered using',
            options: {
                'A': 'SMS',
                'B': 'HTTP',
                'C': 'SMTP',
                'D': 'UDDI'
            },
            explanation: [
                "🔍 Discovering Web Services 📡",
                "A: ❌ SMS - Incorrect, not used for discovery.",
                "B: ❌ HTTP - Transport protocol, not discovery.",
                "C: ❌ SMTP - Email protocol, not discovery.",
                "D: ✅ UDDI - Universal Description, Discovery, and Integration registry is used to discover web services."
            ]
        },
        {
            id: 10,
            correctAnswer: 'C',
            text: 'Service-Oriented Architecture (SOA) consists of relationships between:',
            options: {
                'A': 'Two entities (a service provider and a requestor)',
                'B': 'Two entities (a service provider and a broker)',
                'C': 'Three entities (a service provider, a service requestor, and a broker)',
                'D': 'Three entities (a service provider, a service requestor, and a hypervisor)'
            },
            explanation: [
                "🛠️ SOA Entities Explained 📡",
                "A: ❌ Only provider and requestor - Missing broker.",
                "B: ❌ Provider and broker - Missing requestor.",
                "C: ✅ Provider, requestor, and broker - Correct. These three entities form SOA interactions.",
                "D: ❌ Hypervisor - Incorrect, unrelated."
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