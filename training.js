const exercises = {
    // Легкий уровень
    "present-simple": {
        title: "Present Simple",
        content: `
            <p class="question">Заполните пропуски правильной формой глагола:</p>
            <div class="word-blanks">
                <div>She usually <span class="blank" data-answer="drinks">______</span> (drink) coffee in the morning.</div>
                <div>They <span class="blank" data-answer="don't like">______</span> (not/like) spicy food.</div>
                <div><span class="blank" data-answer="Does">______</span> he <span class="blank" data-answer="play">______</span> (play) tennis every weekend?</div>
            </div>
            
            <div class="options">
                <div class="option" draggable="true">drinks</div>
                <div class="option" draggable="true">don't like</div>
                <div class="option" draggable="true">Does</div>
                <div class="option" draggable="true">play</div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "past-simple": {
        title: "Past Simple",
        content: `
            <p class="question">Выберите правильную форму глагола:</p>
            <div class="question">
                1. Yesterday, I ______ to the cinema.
                <div class="options">
                    <div class="option" data-correct="true">went</div>
                    <div class="option">go</div>
                    <div class="option">goed</div>
                </div>
            </div>
            <div class="question">
                2. She ______ her homework last night.
                <div class="options">
                    <div class="option">do</div>
                    <div class="option" data-correct="true">did</div>
                    <div class="option">does</div>
                </div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "future-simple": {
        title: "Future Simple",
        content: `
            <p class="question">Составьте правильное предложение:</p>
            <div class="word-order">
                <div class="word-slot" data-word="I"></div>
                <div class="word-slot" data-word="will"></div>
                <div class="word-slot" data-word="call"></div>
                <div class="word-slot" data-word="you"></div>
                <div class="word-slot" data-word="tomorrow"></div>
            </div>
            
            <div class="options">
                <div class="option" draggable="true">I</div>
                <div class="option" draggable="true">will</div>
                <div class="option" draggable="true">call</div>
                <div class="option" draggable="true">you</div>
                <div class="option" draggable="true">tomorrow</div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "present-continuous": {
        title: "Present Continuous",
        content: `
            <p class="question">Заполните пропуски:</p>
            <div class="word-blanks">
                <div>They <span class="blank" data-answer="are playing">______</span> (play) football now.</div>
                <div>She <span class="blank" data-answer="is not studying">______</span> (not/study) at the moment.</div>
                <div><span class="blank" data-answer="Is">______</span> it <span class="blank" data-answer="raining">______</span> (rain) outside?</div>
            </div>
            
            <div class="options">
                <div class="option" draggable="true">are playing</div>
                <div class="option" draggable="true">is not studying</div>
                <div class="option" draggable="true">Is</div>
                <div class="option" draggable="true">raining</div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },

"present-simple-passive": {
title: "Present Simple Passive",
content: `
    <p class="question">Преобразуйте предложения в пассивный залог:</p>
    <div class="word-blanks">
        <div>They build houses. → Houses <span class="blank" data-answer="are built">______</span>.</div>
        <div>She writes letters. → Letters <span class="blank" data-answer="are written">______</span>.</div>
        <div>Do they speak English? → <span class="blank" data-answer="Is English spoken">______</span>?</div>
    </div>
    
    <div class="options">
        <div class="option" draggable="true">are built</div>
        <div class="option" draggable="true">are written</div>
        <div class="option" draggable="true">Is English spoken</div>
        <div class="option" draggable="true">built</div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"future-simple-passive": {
title: "Future Simple Passive",
content: `
    <p class="question">Заполните пропуски:</p>
    <div class="word-blanks">
        <div>The letter <span class="blank" data-answer="will be sent">______</span> (send) tomorrow.</div>
        <div>The project <span class="blank" data-answer="will not be finished">______</span> (not/finish) next week.</div>
        <div><span class="blank" data-answer="Will the meeting be held">______</span> (hold) on Friday?</div>
    </div>
    
    <div class="options">
        <div class="option" draggable="true">will be sent</div>
        <div class="option" draggable="true">will not be finished</div>
        <div class="option" draggable="true">Will the meeting be held</div>
        <div class="option" draggable="true">will sent</div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"ordinal-numerals": {
title: "Ordinal Numerals",
content: `
    <p class="question">Выберите правильный порядковый номер:</p>
    <div class="question">
        1. 5th
        <div class="options">
            <div class="option" data-correct="true">fifth</div>
            <div class="option">fiveth</div>
            <div class="option">five</div>
        </div>
    </div>
    <div class="question">
        2. 12th
        <div class="options">
            <div class="option">twelveth</div>
            <div class="option" data-correct="true">twelfth</div>
            <div class="option">twelve</div>
        </div>
    </div>
    <div class="question">
        3. 3rd
        <div class="options">
            <div class="option">third</div>
            <div class="option" data-correct="true">third</div>
            <div class="option">three</div>
        </div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"degree-of-adjectives": {
title: "Degree of Adjectives",
content: `
    <p class="question">Образуйте правильную степень сравнения:</p>
    <div class="word-blanks">
        <div>This is <span class="blank" data-answer="the tallest">______</span> (tall) building in the city.</div>
        <div>My car is <span class="blank" data-answer="more expensive">______</span> (expensive) than yours.</div>
        <div>This test is <span class="blank" data-answer="the most difficult">______</span> (difficult) of all.</div>
    </div>
    
    <div class="options">
        <div class="option" draggable="true">the tallest</div>
        <div class="option" draggable="true">more expensive</div>
        <div class="option" draggable="true">the most difficult</div>
        <div class="option" draggable="true">taller</div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"general-questions": {
title: "General Questions",
content: `
    <p class="question">Составьте общие вопросы:</p>
    <div class="word-order">
        <div class="word-slot" data-word="Do"></div>
        <div class="word-slot" data-word="you"></div>
        <div class="word-slot" data-word="like"></div>
        <div class="word-slot" data-word="pizza"></div>
        <div class="word-slot" data-word="?"></div>
    </div>
    <div class="word-order">
        <div class="word-slot" data-word="Is"></div>
        <div class="word-slot" data-word="she"></div>
        <div class="word-slot" data-word="a"></div>
        <div class="word-slot" data-word="doctor"></div>
        <div class="word-slot" data-word="?"></div>
    </div>
    
    <div class="options">
        <div class="option" draggable="true">Do</div>
        <div class="option" draggable="true">you</div>
        <div class="option" draggable="true">like</div>
        <div class="option" draggable="true">pizza</div>
        <div class="option" draggable="true">?</div>
        <div class="option" draggable="true">Is</div>
        <div class="option" draggable="true">she</div>
        <div class="option" draggable="true">a</div>
        <div class="option" draggable="true">doctor</div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"there-is-are": {
title: "There is, There are",
content: `
    <p class="question">Выберите правильный вариант:</p>
    <div class="question">
        1. ______ a book on the table.
        <div class="options">
            <div class="option" data-correct="true">There is</div>
            <div class="option">There are</div>
            <div class="option">It is</div>
        </div>
    </div>
    <div class="question">
        2. ______ many students in the class.
        <div class="options">
            <div class="option">There is</div>
            <div class="option" data-correct="true">There are</div>
            <div class="option">They are</div>
        </div>
    </div>
    <div class="question">
        3. ______ any milk in the fridge?
        <div class="options">
            <div class="option" data-correct="true">Is there</div>
            <div class="option">Are there</div>
            <div class="option">There is</div>
        </div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"used-to": {
title: "Used to",
content: `
    <p class="question">Заполните пропуски:</p>
    <div class="word-blanks">
        <div>I <span class="blank" data-answer="used to play">______</span> (play) tennis when I was young.</div>
        <div>She <span class="blank" data-answer="did not use to like">______</span> (not/like) coffee.</div>
        <div><span class="blank" data-answer="Did you use to live">______</span> (live) in London?</div>
    </div>
    
    <div class="options">
        <div class="option" draggable="true">used to play</div>
        <div class="option" draggable="true">did not use to like</div>
        <div class="option" draggable="true">Did you use to live</div>
        <div class="option" draggable="true">use to play</div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},
"going-to": {
title: "To be going to",
content: `
    <p class="question">Составьте предложения:</p>
    <div class="word-order">
        <div class="word-slot" data-word="I"></div>
        <div class="word-slot" data-word="am"></div>
        <div class="word-slot" data-word="going"></div>
        <div class="word-slot" data-word="to"></div>
        <div class="word-slot" data-word="visit"></div>
        <div class="word-slot" data-word="my"></div>
        <div class="word-slot" data-word="grandparents"></div>
        <div class="word-slot" data-word="tomorrow"></div>
        <div class="word-slot" data-word="."></div>
    </div>
    
    <div class="options">
        <div class="option" draggable="true">I</div>
        <div class="option" draggable="true">am</div>
        <div class="option" draggable="true">going</div>
        <div class="option" draggable="true">to</div>
        <div class="option" draggable="true">visit</div>
        <div class="option" draggable="true">my</div>
        <div class="option" draggable="true">grandparents</div>
        <div class="option" draggable="true">tomorrow</div>
        <div class="option" draggable="true">.</div>
    </div>
    <button class="check-btn">Проверить</button>
    <div class="result"></div>
`
},

    
    // Средний уровень
    "present-perfect": {
        title: "Present Perfect",
        content: `
            <p class="question">Выберите правильный вариант:</p>
            <div class="question">
                1. She ______ to Paris three times.
                <div class="options">
                    <div class="option" data-correct="true">has been</div>
                    <div class="option">was</div>
                    <div class="option">have been</div>
                </div>
            </div>
            <div class="question">
                2. How long ______ you ______ your friend?
                <div class="options">
                    <div class="option" data-correct="true">have / known</div>
                    <div class="option">did / know</div>
                    <div class="option">do / know</div>
                </div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "irregular-verbs": {
        title: "Irregular Verbs",
        content: `
            <p class="question">Выберите правильные формы неправильных глаголов:</p>
            <div class="question">
                1. Past simple of "see"
                <div class="options">
                    <div class="option">seed</div>
                    <div class="option" data-correct="true">saw</div>
                    <div class="option">seen</div>
                </div>
            </div>
            <div class="question">
                2. Past participle of "go"
                <div class="options">
                    <div class="option">goed</div>
                    <div class="option">went</div>
                    <div class="option" data-correct="true">gone</div>
                </div>
            </div>
            <div class="question">
                3. Past simple of "write"
                <div class="options">
                    <div class="option" data-correct="true">wrote</div>
                    <div class="option">writed</div>
                    <div class="option">written</div>
                </div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "modal-verbs": {
        title: "Modal Verbs",
        content: `
            <p class="question">Заполните пропуски модальными глаголами:</p>
            <div class="word-blanks">
                <div>You <span class="blank" data-answer="must">______</span> stop at the red light.</div>
                <div>She <span class="blank" data-answer="can">______</span> speak three languages.</div>
                <div>They <span class="blank" data-answer="should">______</span> see a doctor.</div>
            </div>
            
            <div class="options">
                <div class="option" draggable="true">must</div>
                <div class="option" draggable="true">can</div>
                <div class="option" draggable="true">should</div>
                <div class="option" draggable="true">might</div>
                <div class="option" draggable="true">could</div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },

"past-continuous": {
title: "Past Continuous",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. I ______ TV when she called.
    <div class="options">
        <div class="option" data-correct="true">was watching</div>
        <div class="option">watched</div>
        <div class="option">am watching</div>
    </div>
</div>
<div class="question">
    2. They ______ football at 5 PM yesterday.
    <div class="options">
        <div class="option">play</div>
        <div class="option" data-correct="true">were playing</div>
        <div class="option">played</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"future-continuous": {
title: "Future Continuous",
content: `
<p class="question">Заполните пропуски:</p>
<div class="word-blanks">
    <div>This time tomorrow, I <span class="blank" data-answer="will be flying">______</span> to London.</div>
    <div>At 8 PM tonight, she <span class="blank" data-answer="will be studying">______</span> for the exam.</div>
</div>
<div class="options">
    <div class="option" draggable="true">will be flying</div>
    <div class="option" draggable="true">will be studying</div>
    <div class="option" draggable="true">will fly</div>
    <div class="option" draggable="true">will study</div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"past-perfect": {
title: "Past Perfect",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. She ______ the movie before we arrived.
    <div class="options">
        <div class="option">saw</div>
        <div class="option" data-correct="true">had seen</div>
        <div class="option">has seen</div>
    </div>
</div>
<div class="question">
    2. They left after they ______ dinner.
    <div class="options">
        <div class="option" data-correct="true">had finished</div>
        <div class="option">finished</div>
        <div class="option">have finished</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"future-perfect": {
title: "Future Perfect",
content: `
<p class="question">Заполните пропуски:</p>
<div class="word-blanks">
    <div>By next year, I <span class="blank" data-answer="will have graduated">______</span> from university.</div>
    <div>They ______ the project by Friday.
        <div class="options">
            <div class="option" data-correct="true">will have completed</div>
            <div class="option">will complete</div>
            <div class="option">completed</div>
        </div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"present-perfect-continuous": {
title: "Present Perfect Continuous",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. He ______ for two hours.
    <div class="options">
        <div class="option">has waited</div>
        <div class="option" data-correct="true">has been waiting</div>
        <div class="option">is waiting</div>
    </div>
</div>
<div class="question">
    2. How long ______ you ______ English?
    <div class="options">
        <div class="option" data-correct="true">have / been learning</div>
        <div class="option">are / learning</div>
        <div class="option">do / learn</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"past-perfect-continuous": {
title: "Past Perfect Continuous",
content: `
<p class="question">Заполните пропуски:</p>
<div class="word-blanks">
    <div>She was tired because she <span class="blank" data-answer="had been working">______</span> all day.</div>
    <div>They ______ for hours before the concert started.
        <div class="options">
            <div class="option" data-correct="true">had been waiting</div>
            <div class="option">were waiting</div>
            <div class="option">waited</div>
        </div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"future-in-the-past": {
title: "Future in the Past",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. She said she ______ later.
    <div class="options">
        <div class="option">will come</div>
        <div class="option" data-correct="true">would come</div>
        <div class="option">comes</div>
    </div>
</div>
<div class="question">
    2. We knew they ______ us.
    <div class="options">
        <div class="option" data-correct="true">would help</div>
        <div class="option">will help</div>
        <div class="option">helped</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"past-simple-passive": {
title: "Past Simple Passive",
content: `
<p class="question">Перестройте предложения в пассивный залог:</p>
<div class="word-blanks">
    <div>They built this house in 1990 → This house <span class="blank" data-answer="was built">______</span> in 1990.</div>
    <div>Shakespeare wrote Hamlet → Hamlet <span class="blank" data-answer="was written">______</span> by Shakespeare.</div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"present-perfect-passive": {
title: "Present Perfect Passive",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. The documents ______.
    <div class="options">
        <div class="option">have signed</div>
        <div class="option" data-correct="true">have been signed</div>
        <div class="option">has been signed</div>
    </div>
</div>
<div class="question">
    2. The rooms ______ yet.
    <div class="options">
        <div class="option">haven't cleaned</div>
        <div class="option" data-correct="true">haven't been cleaned</div>
        <div class="option">hasn't been cleaned</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"order-of-adjectives": {
title: "Order of Adjectives",
content: `
<p class="question">Расставьте прилагательные в правильном порядке:</p>
<div class="word-blanks">
    <div>a (wooden / round / beautiful) table → 
        <span class="blank" data-answer="beautiful round wooden">______</span> table</div>
    <div>an (German / old / luxury) car → 
        <span class="blank" data-answer="old luxury German">______</span> car</div>
</div>
<div class="options">
    <div class="option" draggable="true">beautiful round wooden</div>
    <div class="option" draggable="true">round beautiful wooden</div>
    <div class="option" draggable="true">old luxury German</div>
    <div class="option" draggable="true">luxury old German</div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"wh-questions": {
title: "Wh-questions",
content: `
<p class="question">Составьте правильные вопросы:</p>
<div class="word-blanks">
    <div>______ did you go? → I went to Paris. 
        <div class="options">
            <div class="option" data-correct="true">Where</div>
            <div class="option">When</div>
            <div class="option">Why</div>
        </div>
    </div>
    <div>______ are you crying? → Because I'm sad.
        <div class="options">
            <div class="option">How</div>
            <div class="option" data-correct="true">Why</div>
            <div class="option">Who</div>
        </div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
    
    // Сложный уровень
    "conditional-clauses": {
        title: "Conditional Clauses",
        content: `
            <p class="question">Составьте правильное предложение:</p>
            <div class="word-order">
                <div class="word-slot" data-word="If"></div>
                <div class="word-slot" data-word="he"></div>
                <div class="word-slot" data-word="had"></div>
                <div class="word-slot" data-word="studied"></div>
                <div class="word-slot" data-word="harder"></div>
                <div class="word-slot" data-word="he"></div>
                <div class="word-slot" data-word="would"></div>
                <div class="word-slot" data-word="have"></div>
                <div class="word-slot" data-word="passed"></div>
                <div class="word-slot" data-word="the"></div>
                <div class="word-slot" data-word="exam"></div>
            </div>
            
            <div class="options">
                <div class="option" draggable="true">If</div>
                <div class="option" draggable="true">he</div>
                <div class="option" draggable="true">had</div>
                <div class="option" draggable="true">studied</div>
                <div class="option" draggable="true">harder</div>
                <div class="option" draggable="true">he</div>
                <div class="option" draggable="true">would</div>
                <div class="option" draggable="true">have</div>
                <div class="option" draggable="true">passed</div>
                <div class="option" draggable="true">the</div>
                <div class="option" draggable="true">exam</div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "phrasal-verbs": {
        title: "Phrasal Verbs",
        content: `
            <p class="question">Выберите правильный фразовый глагол:</p>
            <div class="question">
                1. Please ______ the light when you leave.
                <div class="options">
                    <div class="option">turn up</div>
                    <div class="option" data-correct="true">turn off</div>
                    <div class="option">turn down</div>
                </div>
            </div>
            <div class="question">
                2. We need to ______ the meeting until next week.
                <div class="options">
                    <div class="option">put down</div>
                    <div class="option" data-correct="true">put off</div>
                    <div class="option">put on</div>
                </div>
            </div>
            <div class="question">
                3. Can you ______ the radio? I can't hear it.
                <div class="options">
                    <div class="option" data-correct="true">turn up</div>
                    <div class="option">turn out</div>
                    <div class="option">turn over</div>
                </div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    "indirect-speech": {
        title: "Indirect Speech",
        content: `
            <p class="question">Преобразуйте прямую речь в косвенную:</p>
            <div class="word-blanks">
                <div>She said, "I am reading a book." → She said that <span class="blank" data-answer="she was reading a book">______</span>.</div>
                <div>He asked, "Where do you live?" → He asked <span class="blank" data-answer="where I lived">______</span>.</div>
                <div>They said, "We will come tomorrow." → They said that <span class="blank" data-answer="they would come the next day">______</span>.</div>
            </div>
            
            <div class="options">
                <div class="option" draggable="true">she was reading a book</div>
                <div class="option" draggable="true">where I lived</div>
                <div class="option" draggable="true">they would come the next day</div>
                <div class="option" draggable="true">she is reading a book</div>
                <div class="option" draggable="true">where I live</div>
            </div>
            <button class="check-btn">Проверить</button>
            <div class="result"></div>
        `
    },
    // Дополненные упражнения для сложного уровня
"future-perfect-continuous": {
title: "Future Perfect Continuous",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. By 2025, they ______ for 10 years.
    <div class="options">
        <div class="option">will work</div>
        <div class="option" data-correct="true">will have been working</div>
        <div class="option">have been working</div>
    </div>
</div>
<div class="question">
    2. She ______ her thesis for six months by June.
    <div class="options">
        <div class="option" data-correct="true">will have been writing</div>
        <div class="option">will write</div>
        <div class="option">has been writing</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"present-continuous-passive": {
title: "Present Continuous Passive",
content: `
<p class="question">Перестройте предложения в пассивный залог:</p>
<div class="word-blanks">
    <div>They are building a new bridge → A new bridge <span class="blank" data-answer="is being built">______</span>.</div>
    <div>He is interviewing candidates → Candidates <span class="blank" data-answer="are being interviewed">______</span>.</div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"past-continuous-passive": {
title: "Past Continuous Passive",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. The car ______ when the accident happened.
    <div class="options">
        <div class="option">was repaired</div>
        <div class="option" data-correct="true">was being repaired</div>
        <div class="option">were repairing</div>
    </div>
</div>
<div class="question">
    2. The documents ______ during the meeting.
    <div class="options">
        <div class="option" data-correct="true">were being discussed</div>
        <div class="option">was discussed</div>
        <div class="option">discussed</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"past-perfect-passive": {
title: "Past Perfect Passive",
content: `
<p class="question">Перестройте предложения в пассивный залог:</p>
<div class="word-blanks">
    <div>They had completed the project → The project <span class="blank" data-answer="had been completed">______</span>.</div>
    <div>Someone had stolen the painting → The painting <span class="blank" data-answer="had been stolen">______</span>.</div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"future-perfect-passive": {
title: "Future Perfect Passive",
content: `
<p class="question">Заполните пропуски:</p>
<div class="word-blanks">
    <div>By tomorrow, the report ______.
        <div class="options">
            <div class="option">will be finished</div>
            <div class="option" data-correct="true">will have been finished</div>
            <div class="option">has been finished</div>
        </div>
    </div>
    <div>All preparations ______ by 6 PM.
        <div class="options">
            <div class="option" data-correct="true">will have been completed</div>
            <div class="option">will complete</div>
            <div class="option">are completed</div>
        </div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"sequence-of-tenses": {
title: "Sequence of Tenses",
content: `
<p class="question">Выберите правильный вариант согласования времен:</p>
<div class="question">
    1. She said she ______ to Paris the previous year.
    <div class="options">
        <div class="option" data-correct="true">had gone</div>
        <div class="option">went</div>
        <div class="option">has gone</div>
    </div>
</div>
<div class="question">
    2. He knows that they ______ here tomorrow.
    <div class="options">
        <div class="option">will be</div>
        <div class="option" data-correct="true">would be</div>
        <div class="option">are</div>
    </div>
</div>
<div class="question">
    3. I thought you ______ the rules.
    <div class="options">
        <div class="option" data-correct="true">knew</div>
        <div class="option">know</div>
        <div class="option">had known</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
"all-grammar-review": {
title: "All Grammar Review",
content: `
<p class="question">Выберите правильный вариант:</p>
<div class="question">
    1. If I ______ you, I would reconsider.
    <div class="options">
        <div class="option">am</div>
        <div class="option" data-correct="true">were</div>
        <div class="option">would be</div>
    </div>
</div>
<div class="question">
    2. The package ______ by the time we arrived.
    <div class="options">
        <div class="option">was delivered</div>
        <div class="option" data-correct="true">had been delivered</div>
        <div class="option">delivered</div>
    </div>
</div>
<div class="question">
    3. She ______ for three hours when I called.
    <div class="options">
        <div class="option">studied</div>
        <div class="option" data-correct="true">had been studying</div>
        <div class="option">was studied</div>
    </div>
</div>
<div class="question">
    4. By next month, I ______ here for five years.
    <div class="options">
        <div class="option">work</div>
        <div class="option">will work</div>
        <div class="option" data-correct="true">will have been working</div>
    </div>
</div>
<button class="check-btn">Проверить</button>
<div class="result"></div>
`
},
};

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
       
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

document.querySelectorAll('.topic-item').forEach(item => {
    item.addEventListener('click', () => {
        const topicId = item.getAttribute('data-topic');
        const level = item.classList.contains('easy') ? 'easy' : 
                     item.classList.contains('medium') ? 'medium' : 'hard';
        
        const exercisesContainer = document.getElementById(`${level}-exercises`);
        exercisesContainer.classList.add('active');
        
        exercisesContainer.innerHTML = '';
        
        const exercise = exercises[topicId];
        if (exercise) {
            const exerciseElement = document.createElement('div');
            exerciseElement.className = 'exercise';
            
            let levelClass = 'level-easy';
            let levelText = 'Легко';
            if (level === 'medium') {
                levelClass = 'level-medium';
                levelText = 'Средне';
            } else if (level === 'hard') {
                levelClass = 'level-hard';
                levelText = 'Сложно';
            }
            
            exerciseElement.innerHTML = `
                <span class="level-indicator ${levelClass}">${levelText}</span>
                <h3>${exercise.title}</h3>
                <div class="exercise-content">
                    ${exercise.content}
                </div>
                <div class="controls">
                    <button class="secondary" id="prevTopic">Предыдущая тема</button>
                    <button id="nextTopic">Следующая тема</button>
                </div>
            `;
            
            exercisesContainer.appendChild(exerciseElement);
            
            initExercise(exerciseElement);
            
            exerciseElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function initExercise(exerciseElement) {
    const options = exerciseElement.querySelectorAll('.option');
    const slots = exerciseElement.querySelectorAll('.word-slot');
    const blanks = exerciseElement.querySelectorAll('.blank');
    let draggedItem = null;
    
    options.forEach(option => {
        option.addEventListener('dragstart', function(e) {
            draggedItem = this;
            this.style.opacity = '0.4';
            e.dataTransfer.setData('text/plain', this.textContent);
        });
        
        option.addEventListener('dragend', function() {
            this.style.opacity = '1';
        });
    });
    
    const dropElements = [...slots, ...blanks];
    dropElements.forEach(element => {
        element.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.backgroundColor = '#e9ecef';
        });
        
        element.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });
        
        element.addEventListener('dragleave', function() {
            this.style.backgroundColor = '';
        });
        
        element.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.backgroundColor = '';
            
            if (draggedItem) {
                if (this.classList.contains('blank')) {
                    this.textContent = draggedItem.textContent;
                    this.setAttribute('data-filled', 'true');
                } 
                else if (this.classList.contains('word-slot')) {
                    this.textContent = draggedItem.textContent;
                    this.setAttribute('data-filled', 'true');
                    this.style.borderStyle = 'solid';
                }
            }
        });
    });

    const checkBtn = exerciseElement.querySelector('.check-btn');
    if (checkBtn) {
        checkBtn.addEventListener('click', function() {
            const resultDiv = exerciseElement.querySelector('.result');
            resultDiv.style.display = 'block';
            
            let allCorrect = true;
            
            const blanks = exerciseElement.querySelectorAll('.blank');
            blanks.forEach(blank => {
                const userAnswer = blank.textContent.trim();
                const correctAnswer = blank.getAttribute('data-answer');
                
                if (userAnswer === correctAnswer) {
                    blank.style.color = '#155724';
                    blank.style.borderBottomColor = '#28a745';
                } else {
                    blank.style.color = '#721c24';
                    blank.style.borderBottomColor = '#dc3545';
                    allCorrect = false;
                }
            });
            
            const optionGroups = exerciseElement.querySelectorAll('.options');
            optionGroups.forEach(group => {
                const options = group.querySelectorAll('.option');
                options.forEach(option => {
                    if (option.hasAttribute('data-correct')) {
                        if (option.classList.contains('selected')) {
                            option.style.backgroundColor = '#d4edda';
                        } else {
                            allCorrect = false;
                        }
                    }
                });
            });
            
            if (allCorrect) {
                resultDiv.className = 'result correct';
                resultDiv.innerHTML = '✓ Отлично! Все ответы правильные!';
            } else {
                resultDiv.className = 'result incorrect';
                resultDiv.innerHTML = '✗ Есть ошибки. Проверьте ответы.';
            }
        });
    }
    
    exerciseElement.querySelectorAll('.option').forEach(option => {
        if (!option.draggable) {
            option.addEventListener('click', function() {
                const group = this.closest('.options');
                group.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                this.classList.add('selected');
            });
        }
    });

    const prevBtn = exerciseElement.querySelector('#prevTopic');
    const nextBtn = exerciseElement.querySelector('#nextTopic');
    
    if (prevBtn) prevBtn.addEventListener('click', () => alert('Навигация по темам будет реализована в будущем'));
    if (nextBtn) nextBtn.addEventListener('click', () => alert('Навигация по темам будет реализована в будущем'));
}