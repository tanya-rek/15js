function showTheme() {

    let optionColor = document.getElementById('color').value;
    console.log(optionColor)
    let background = document.getElementById('background');

    

    switch (optionColor) {
        case "0":
            background.classList.remove('dark', 'green', 'pink', 'orange');
            background.classList.add('default');
            break;
        case "1":
            background.classList.remove('default', 'green', 'pink', 'orange');
            background.classList.add('dark');
            break;
        case "2":
            background.classList.remove('dark', 'default', 'pink', 'orange');
            background.classList.add('green');
            console.log("rrt")
            break;
        case "3":
            background.classList.remove('dark', 'green', 'default', 'orange');
            background.classList.add('pink');
            break;
        case "4":
            background.classList.remove('dark', 'green', 'pink', 'default');
            background.classList.add('orange');
            break;
    }
}