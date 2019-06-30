/* ТЕСТ */

/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
* */

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса


const questions = [
    {
        questionName: 'question 1',
        answers: ['answer 1_1', 'answer 1_2', 'answer 1_3'],
        correctAnswersIndexes: [1]
    },
    {
        questionName: 'question 2',
        answers: ['answer 2_1', 'answer 2_2', 'answer 2_3'],
        correctAnswersIndexes: [2]
    },
    {
        questionName: 'question 3',
        answers: ['answer 3_1', 'answer 3_2', 'answer 3_3'],
        correctAnswersIndexes: [1, 2]
    }
];


const findCorrectAnswer = answerToValidate => {
    let correctAnswers = questions.map(question =>
        question.correctAnswersIndexes.map(answerIndex => {
            return question.answers[answerIndex];
        })
    );

    return correctAnswers.some(answer => {
        return answer.includes(answerToValidate);
    });
};

const app = {
    questions,
    testName: 'Тест по программированию',
    buttonName: 'Проверить',
    render() {
        const main = this.newEl('main');
        const testName = this.newEl('h1');
        testName.textContent = this.testName;
        const questionsList = this.newEl('ol');
        this.questions.forEach(question => {
            const li = this.newEl('li');
            const questionHeader = this.newEl('h3');
            questionHeader.textContent = question.questionName;
            const answers = this.newEl('ul');
            question.answers.forEach((answer, answerIndex) => {
                answers.innerHTML += this.renderAnswer(answer, answerIndex);
            });

            li.appendChild(questionHeader);
            li.appendChild(answers);
            questionsList.appendChild(li);
        });

        main.appendChild(testName);
        main.appendChild(questionsList);
        document.body.appendChild(main);
        const button = this.newEl('button');
        button.textContent = this.buttonName;
        main.appendChild(button);
    },
    renderAnswer(answer, answerIndex) {
        const uniqId = `uniq_${Math.random()}_${answerIndex}`;
        return `
        <li>
            <input type="checkbox" id="${uniqId}">
            <label for="${uniqId}">${answer}</label>
        </li>
        `
    },
    newEl(elName) {
        return document.createElement(elName);
    }
};

app.render();



const newButton = document.createElement('button');
newButton.textContent = 'Узнать ответы';
document.body.appendChild(newButton);
newButton.onclick = function () {
    const allAnswer = document.body.querySelectorAll('label');
    [...allAnswer].forEach( answer => {
        const span = document.createElement('span');
        let yourAnswer = answer.textContent;
        let labelStatus = findCorrectAnswer(yourAnswer) ? 'CORRECT' : 'INCORRECT';
        span.textContent = labelStatus;
        answer.parentElement.insertBefore(span, answer);

    });
    console.log(allAnswer);

};


