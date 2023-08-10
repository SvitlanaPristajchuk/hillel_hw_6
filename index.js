hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

//Об'єднати масиви destination, native, hero в спільний масив rainbow.
//rainbow = [...destination, ...native, ...hero]

rainbow = destination.concat(native, hero)
console.log(rainbow)

//Зробити реверс елементів отриманого масиву rainbow.
newRainbow = rainbow.reverse()
console.log(newRainbow) // ['Ivan', 'of', 'York', 'in', 'Poltava' ]

//Змінити/додати елементи масиву rainbow так, щоб в результаті отримати масив вигляду ['Richard','Of','York','Gave','Battle','In','Vain'];

newRainbow = newRainbow.slice(1, 4)
console.log(newRainbow)

newRainbow.push('Vain')
console.log(newRainbow)
newRainbow.unshift('Richard')

console.log(newRainbow) //'richard' 'of', 'york', 'in 'vain'

newRainbow.splice(3, 0, 'Gave', 'Battle')
console.log(newRainbow) //['Richard','Of','York','Gave','Battle','In','Vain']


rainList = newRainbow.join(`</li><li>`);

document.write(`
<li>
${newRainbow}
</li>

`)