// Quiz data with exactly 10 questions
const quizData = {
    questions: [
        {
            id: 1,
            correctAnswer: 'B',
            text: 'Modification of data in transit is considered as an attack on',
            options: {
                A: 'Confidentiality',
                B: 'Integrity',
                C: 'Availability',
                D: 'Authenticity'
            },
            explanation: [
                "A: ❌ Confidentiality protects data secrecy; modification is not a confidentiality attack.",
                "B: ✅ Integrity ensures data is not altered in transit. Modification violates integrity.",
                "C: ❌ Availability ensures resources are accessible; not relevant here.",
                "D: ❌ Authenticity ensures identity verification; modifying data does not attack authenticity."
            ]
        },
        {
            id: 2,
            correctAnswer: 'A',
            text: 'A phishing attack is mainly an attack on',
            options: {
                A: 'Confidentiality',
                B: 'Availability',
                C: 'Integrity',
                D: 'Authenticity'
            },
            explanation: [
                "A: ✅ Correct. Phishing steals sensitive information, breaching confidentiality.",
                "B: ❌ Wrong. Availability is not affected.",
                "C: ❌ Wrong. Integrity is not directly affected.",
                "D: ❌ Wrong. Authenticity may be indirectly affected, but primary target is confidentiality."
            ]
        },
        {
            id: 3,
            correctAnswer: 'C',
            text: 'Which of the following attacks is NOT passive?',
            options: {
                A: 'Eavesdropping',
                B: 'Snooping',
                C: 'Masquerading',
                D: 'Traffic Analysis'
            },
            explanation: [
                "A: ❌ Passive attack, attacker only listens.",
                "B: ❌ Passive attack, attacker monitors traffic.",
                "C: ✅ Active attack. Masquerading involves pretending to be someone else and altering data.",
                "D: ❌ Passive attack, attacker analyzes traffic patterns."
            ]
        },
        {
            id: 4,
            correctAnswer: 'C',
            text: 'Denial-of-Service (DoS) is an example of',
            options: {
                A: 'Disruption',
                B: 'Disclosure',
                C: 'Usurpation',
                D: 'Deception'
            },
            explanation: [
                "A: ❌ Wrong. Disruption involves temporary service interruptions; DoS may cause unavailability but is more about resource takeover in this context.",
                "B: ❌ Wrong. Disclosure involves leaking sensitive information, which DoS does not do.",
                "C: ✅ Correct. Usurpation is unauthorized control of resources, which aligns with DoS attacks that take over server capacity to prevent legitimate access.",
                "D: ❌ Wrong. Deception involves tricking systems or users, not controlling resources as DoS does."
            ]
        },

        {
            id: 5,
            correctAnswer: 'C',
            text: 'Which step involves actively testing systems for security weaknesses?',
            options: {
                A: 'Reconnaissance',
                B: 'Vulnerability scanning',
                C: 'Penetration testing',
                D: 'Post-attack investigation'
            },
            explanation: [
                "A: ❌ Reconnaissance collects information passively.",
                "B: ❌ Vulnerability scanning identifies weaknesses automatically.",
                "C: ✅ Penetration testing actively exploits vulnerabilities to check defenses.",
                "D: ❌ Post-attack investigation is after the attack, not proactive testing."
            ]
        },
        {
            id: 6,
            correctAnswer: 'A',
            text: 'Reconnaissance in network security is the phase where attackers or testers collect information about the target system.',
            options: {
                A: 'True',
                B: 'False'
            },
            explanation: [
                "A: ✅ Correct. Reconnaissance is about gathering information before an attack.",
                "B: ❌ Wrong. This statement is true, so False is incorrect."
            ]
        },
        {
            id: 7,
            correctAnswer: 'C',
            text: 'Statement I: Authentication is the process of verifying the identity of a user or system. Statement II: Non-repudiation ensures that a sender cannot deny sending a message.',
            options: {
                A: 'Statement I TRUE, Statement II FALSE',
                B: 'Statement I FALSE, Statement II TRUE',
                C: 'Both statements TRUE',
                D: 'Both statements FALSE'
            },
            explanation: [
                "A: ❌ Wrong. Statement II is true.",
                "B: ❌ Wrong. Statement I is true.",
                "C: ✅ Both statements are correct.",
                "D: ❌ Wrong. Both statements are not false."
            ]
        },
        {
            id: 8,
            correctAnswer: 'B',
            text: 'A company wants full control over OS, runtime, storage but no server management. Best cloud service model?',
            options: {
                A: 'SaaS',
                B: 'IaaS',
                C: 'PaaS',
                D: 'DaaS'
            },
            explanation: [
                "A: ❌ SaaS: Fully managed apps; user doesn't manage OS or storage.",
                "B: ✅ IaaS: Provides virtual servers, storage, networking; user manages OS/runtime but not hardware.",
                "C: ❌ PaaS: Provides managed platform; user can't fully control OS.",
                "D: ❌ DaaS: Desktop-as-a-Service, virtual desktop; not suitable for custom ML model."
            ]
        },
        {
            id: 9,
            correctAnswer: 'A',
            text: 'A healthcare company must follow HIPAA guidelines when storing patient data in cloud. Example of which security risk?',
            options: {
                A: 'Regulatory Compliance & Audit',
                B: 'Data Location',
                C: 'Recovery',
                D: 'Investigative Support'
            },
            explanation: [
                "A: ✅ Correct. HIPAA rules are regulatory compliance requirements.",
                "B: ❌ Data location is separate; HIPAA may restrict certain regions, but main issue is compliance.",
                "C: ❌ Recovery deals with disaster recovery, not HIPAA compliance.",
                "D: ❌ Investigative support is about logging and forensics; not directly HIPAA compliance."
            ]
        },
        {
            id: 10,
            correctAnswer: 'A',
            text: 'Vendor lock-in is most directly associated with which long-term viability challenge?',
            options: {
                A: 'Difficulty in migrating data to another provider',
                B: 'Unauthorized data disclosure',
                C: 'Increased regulatory audits',
                D: 'Privileged user misuse'
            },
            explanation: [
                "A: ✅ Correct. Vendor lock-in means difficulty moving data or apps to another provider.",
                "B: ❌ Wrong. Unauthorized disclosure is data breach, not lock-in.",
                "C: ❌ Wrong. Regulatory audits are compliance issues, not vendor lock-in.",
                "D: ❌ Wrong. Privileged misuse is insider threat, unrelated to lock-in."
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