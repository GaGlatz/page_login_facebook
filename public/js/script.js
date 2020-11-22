let amount_topic = 2;

function edit_overflow() {
    let box = document.querySelector('.box__content--overflow');
    let button = document.querySelector('.box__button--overflow');

    if (box.style.height == '18.2rem') {
        box.style.height = 'auto'
        button.textContent = 'ver menos'
    }else {
        box.style.height = '18.2rem'
        button.textContent = 'ver mais'
    }
}

function new_comment() {
    let boxE1 = document.getElementById('box_initial');
    let boxE2 = document.getElementById('box_inputs');

    boxE1.style.display = 'none';
    boxE2.style.display = 'inline-block';
}

function comment() {
    let boxE1 = document.getElementById('box_inputs');
    let boxE2 = document.getElementById('box_return');
    let boxE3 = document.getElementById('box_overlap');

    if (boxE1.style.display == 'inline-block') {
        let title = document.getElementById('subject');
        let content = document.getElementById('comment');
        let user = document.getElementById('user').textContent;

        amount_topic += 1
        createNewComment(title.value, user, content.value,amount_topic);

        boxE1.style.display = 'none';
        boxE2.style.display = 'inline-block';
        boxE3.style.display = 'inline-block';
    } else {
        let title = document.getElementById('subject');
        let content = document.getElementById('comment');

        title.value = ' ';
        content.value = ' ';

        boxE1.style.display = 'inline-block';
        boxE2.style.display = 'none';
        boxE3.style.display = 'none';
    }
}

function answers(amount) {
    let answersE = document.getElementById(`answersE${amount}`);
    let comment = document.getElementById(`comment${amount}`);

    results = parseInt(answersE.textContent.slice(0, -10));

    for (let index = 1; index <= results; index++) {
        let answers = document.getElementById(`answers${index}-comment${amount}`);

        if (answers.style.display == 'none') {
            answers.style.display = 'inline-block';
            comment.style.height = 'auto';
        } else {
            answers.style.display = 'none';
            comment.style.height = '4.5rem';
        } 
    }
}

function like(amount) {
    let add = document.getElementById(`likes${amount}`);

    results = parseInt(add.textContent.slice(0, -6));
    add.textContent = results + 1 + ' Likes';
}

function createNewComment(title, user, content, amount) {
    if (amount == 1) {
        const boxMaster = document.getElementById('box_content');
        let boxE1 = document.createElement('div');
        let titleE1 = document.createElement('p');
        let author = document.createElement('p');
        let bold = document.createElement('strong')
        let comment = document.createElement('p');
        let boxE2 = document.createElement('div');
        let buttonE1 = document.createElement('button');
        let buttonE2 = document.createElement('button');
        let buttonE3 = document.createElement('button');
        let buttonE4 = document.createElement('button');
        let iE1 = document.createElement('i');
        let iE2 = document.createElement('i');
        let boxE3 = document.createElement('div');
        let contentE1 = document.createElement('p');
        let contentE2 = document.createElement('p');
        let contentE3 = document.createElement('p');
        let iconE1 = document.createElement('i');
        let linkE1 = document.createElement('a')

        titleE1.textContent = title;
        bold.textContent = user;
        comment.textContent = content;
        buttonE3.textContent = '0 Likes';
        buttonE4.textContent = '0 Respostas';
        contentE2.textContent = 'Aguardando feedback dos autores';
        linkE1.textContent = 'Editar tópico';

        buttonE1.appendChild(iE1);
        buttonE2.appendChild(iE2);
        boxE2.appendChild(buttonE1);
        boxE2.appendChild(buttonE2);
        boxE2.appendChild(buttonE3);
        boxE2.appendChild(buttonE4);
        author.appendChild(bold);        
        contentE1.appendChild(iconE1);
        contentE3.appendChild(linkE1);
        boxE3.appendChild(contentE1);
        boxE3.appendChild(contentE2);
        boxE3.appendChild(contentE3);
        boxE1.appendChild(titleE1);
        boxE1.appendChild(author);
        boxE1.appendChild(comment);
        boxE1.appendChild(boxE2);
        boxE1.appendChild(boxE3);
        boxMaster.appendChild(boxE1);

        boxE1.setAttribute('class', 'box__topics');
        titleE1.setAttribute('class', 'content__title content__title--box');
        comment.setAttribute('class', 'topic__comment');
        boxE2.setAttribute('class', 'box__button--topic');
        buttonE1.setAttribute('class', 'content__button content__button--topic');
        buttonE2.setAttribute('class', 'content__button');
        buttonE3.setAttribute('class', 'content__button content__button--topic');
        buttonE4.setAttribute('class', 'content__button content__button--topic');
        iE1.setAttribute('class', 'fas fa-ellipsis-v button__icon');
        iE2.setAttribute('class', 'fas fa-heart button__icon');
        boxE3.setAttribute('class', 'box__topics box__topics--overlap');
        iconE1.setAttribute('class', 'fas fa-check-double button__icon');
        linkE1.setAttribute('class', 'box__link');

        buttonE3.setAttribute('id', `likes${amount}`);
        boxE3.setAttribute('id', 'box_overlap');

        buttonE2.setAttribute('onclick', `like(${amount})`);

        boxE3.setAttribute('style', 'display: none;');

        linkE1.setAttribute('href', '#');
    } else {
        const boxMaster = document.getElementById('box_content');
        let boxE1 = document.createElement('div');
        let titleE1 = document.createElement('p');
        let author = document.createElement('p');
        let bold = document.createElement('strong')
        let comment = document.createElement('p');
        let boxE2 = document.createElement('div');
        let buttonE1 = document.createElement('button');
        let buttonE2 = document.createElement('button');
        let buttonE3 = document.createElement('button');
        let buttonE4 = document.createElement('button');
        let iE1 = document.createElement('i');
        let iE2 = document.createElement('i');

        titleE1.textContent = title;
        bold.textContent = user;
        comment.textContent = content;
        buttonE3.textContent = '0 Likes';
        buttonE4.textContent = '0 Respostas';

        buttonE1.appendChild(iE1);
        buttonE2.appendChild(iE2);
        boxE2.appendChild(buttonE1);
        boxE2.appendChild(buttonE2);
        boxE2.appendChild(buttonE3);
        boxE2.appendChild(buttonE4);
        author.appendChild(bold);
        boxE1.appendChild(titleE1);
        boxE1.appendChild(author);
        boxE1.appendChild(comment);
        boxE1.appendChild(boxE2);
        boxMaster.appendChild(boxE1);

        boxE1.setAttribute('class', 'box__topics');
        titleE1.setAttribute('class', 'content__title content__title--box');
        comment.setAttribute('class', 'topic__comment');
        boxE2.setAttribute('class', 'box__button--topic');
        buttonE1.setAttribute('class', 'content__button content__button--topic');
        buttonE2.setAttribute('class', 'content__button');
        buttonE3.setAttribute('class', 'content__button content__button--topic');
        buttonE4.setAttribute('class', 'content__button content__button--topic');
        iE1.setAttribute('class', 'fas fa-ellipsis-v button__icon');
        iE2.setAttribute('class', 'fas fa-heart button__icon');

        buttonE3.setAttribute('id', `likes${amount}`);

        buttonE2.setAttribute('onclick', `like(${amount})`);
    }
}