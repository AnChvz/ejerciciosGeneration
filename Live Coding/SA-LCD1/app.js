function bigWords(wordPrincipal, arrWords) {
    return arrWords.filter(word => word.length > wordPrincipal.length);
}
function printArray(arr) {
    const ul = document.getElementById('wordList');
    ul.innerHTML = ''; 
    arr.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        ul.appendChild(li);
    });
}
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const array=bigWords('bocina', myArray);
printArray(array);
