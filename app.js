(() => {
    const sections = window.QUIZ_SECTIONS || [];
    const sectionMap = new Map(sections.map((section) => [section.id, section]));

    const state = {
        activeQuizKey: null,
        currentQuestion: 0,
        userAnswers: []
    };

    const el = {
        homeBtn: document.getElementById('home-btn'),
        mainMenu: document.getElementById('main-menu'),
        sectionList: document.getElementById('section-list'),
        quizView: document.getElementById('quiz-view'),
        chapterTitle: document.getElementById('chapter-title'),
        progressFill: document.getElementById('progress-fill'),
        questionNum: document.getElementById('question-num'),
        questionText: document.getElementById('question-text'),
        feedbackArea: document.getElementById('feedback-area'),
        feedbackStatus: document.getElementById('feedback-status'),
        correctAnswerBadge: document.getElementById('correct-answer-badge'),
        feedbackJustification: document.getElementById('feedback-justification'),
        choiceButtons: document.getElementById('choice-buttons'),
        trueBtn: document.getElementById('true-btn'),
        falseBtn: document.getElementById('false-btn'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        restartBtn: document.getElementById('restart-btn')
    };

    function typeset(targets) {
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            window.MathJax.typesetPromise(targets).catch(() => {
                // Ignore render errors to keep quiz usable even if MathJax has a transient issue.
            });
        }
    }

    function getActiveSection() {
        return sectionMap.get(state.activeQuizKey);
    }

    function showMenu() {
        el.mainMenu.classList.remove('hidden');
        el.quizView.classList.add('hidden');
        el.homeBtn.classList.add('hidden');
    }

    function startQuiz(sectionId) {
        const section = sectionMap.get(sectionId);
        if (!section || !section.questions || section.questions.length === 0) {
            return;
        }

        state.activeQuizKey = sectionId;
        state.currentQuestion = 0;
        state.userAnswers = Array(section.questions.length).fill(null);

        el.mainMenu.classList.add('hidden');
        el.quizView.classList.remove('hidden');
        el.homeBtn.classList.remove('hidden');
        el.restartBtn.classList.add('hidden');
        el.prevBtn.classList.remove('hidden');
        el.chapterTitle.innerText = `Practice Quiz: ${section.id} - ${section.title.replace(/^Section\s+\S+:\s*/, '')}`;

        loadQuestion();
    }

    function loadQuestion() {
        const section = getActiveSection();
        if (!section) {
            return;
        }

        const questionData = section.questions[state.currentQuestion];
        el.questionNum.innerText = `Question ${state.currentQuestion + 1} of ${section.questions.length}`;
        el.questionText.innerHTML = questionData.q;
        el.prevBtn.disabled = state.currentQuestion === 0;

        if (state.userAnswers[state.currentQuestion] !== null) {
            showFeedback(state.userAnswers[state.currentQuestion]);
        } else {
            el.feedbackArea.classList.add('hidden');
            el.choiceButtons.classList.remove('hidden');
            el.nextBtn.classList.add('hidden');
        }

        el.progressFill.style.width = `${(state.currentQuestion / section.questions.length) * 100}%`;
        typeset([el.questionText]);
    }

    function checkAnswer(userChoice) {
        state.userAnswers[state.currentQuestion] = userChoice;
        showFeedback(userChoice);
    }

    function showFeedback(userChoice) {
        const section = getActiveSection();
        if (!section) {
            return;
        }

        const questionData = section.questions[state.currentQuestion];
        const isCorrect = userChoice === questionData.a;

        el.choiceButtons.classList.add('hidden');
        el.feedbackArea.classList.remove('hidden');
        el.nextBtn.classList.remove('hidden');

        el.feedbackStatus.innerText = isCorrect ? 'Correct!' : 'Incorrect.';
        el.feedbackStatus.className = isCorrect ? 'text-green-600 font-bold' : 'text-red-600 font-bold';
        el.feedbackArea.className = `mt-6 p-4 rounded-lg border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`;
        el.correctAnswerBadge.innerText = questionData.a ? 'TRUE' : 'FALSE';
        el.correctAnswerBadge.className = `px-2 py-0.5 rounded text-xs font-bold uppercase ${questionData.a ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`;
        el.feedbackJustification.innerHTML = questionData.j;

        typeset([el.feedbackJustification]);
    }

    function nextQuestion() {
        const section = getActiveSection();
        if (!section) {
            return;
        }

        state.currentQuestion += 1;
        if (state.currentQuestion < section.questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function prevQuestion() {
        if (state.currentQuestion > 0) {
            state.currentQuestion -= 1;
            loadQuestion();
        }
    }

    function showResults() {
        const section = getActiveSection();
        if (!section) {
            return;
        }

        const finalScore = state.userAnswers.filter((ans, idx) => ans === section.questions[idx].a).length;
        const percent = Math.round((finalScore / section.questions.length) * 100);

        el.progressFill.style.width = '100%';
        el.questionText.innerHTML = `Quiz Complete! Score: ${finalScore} / ${section.questions.length} (${percent}%)`;
        el.feedbackArea.classList.add('hidden');
        el.nextBtn.classList.add('hidden');
        el.choiceButtons.classList.add('hidden');
        el.restartBtn.classList.remove('hidden');
    }

    function resetQuiz() {
        if (state.activeQuizKey) {
            startQuiz(state.activeQuizKey);
        }
    }

    function createSectionButton(section) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.sectionId = section.id;
        button.className = 'group p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition text-left';

        if (section.highlight === 'emerald') {
            button.className = 'group p-5 rounded-xl border border-emerald-200 bg-emerald-50/30 shadow-sm hover:border-emerald-500 transition text-left';
        }

        const title = document.createElement('h3');
        title.className = section.highlight === 'emerald'
            ? 'font-bold text-emerald-800 group-hover:text-emerald-600'
            : 'font-bold text-slate-800 group-hover:text-blue-600';
        title.textContent = section.title;

        button.appendChild(title);

        if (section.badge) {
            const badge = document.createElement('p');
            badge.className = section.highlight === 'emerald'
                ? 'text-xs text-emerald-600 mt-1 uppercase tracking-wider font-semibold'
                : 'text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold';
            badge.textContent = section.badge;
            button.appendChild(badge);
        }

        return button;
    }

    function renderSectionMenu() {
        el.sectionList.innerHTML = '';

        sections.forEach((section) => {
            el.sectionList.appendChild(createSectionButton(section));
        });
    }

    function registerEvents() {
        el.homeBtn.addEventListener('click', showMenu);
        el.trueBtn.addEventListener('click', () => checkAnswer(true));
        el.falseBtn.addEventListener('click', () => checkAnswer(false));
        el.prevBtn.addEventListener('click', prevQuestion);
        el.nextBtn.addEventListener('click', nextQuestion);
        el.restartBtn.addEventListener('click', resetQuiz);

        el.sectionList.addEventListener('click', (event) => {
            const button = event.target.closest('button[data-section-id]');
            if (!button) {
                return;
            }
            startQuiz(button.dataset.sectionId);
        });
    }

    function init() {
        renderSectionMenu();
        registerEvents();
        showMenu();
    }

    window.addEventListener('DOMContentLoaded', init);
})();
