const themeCheckbox = document.getElementById('themeCheckbox')
const themeCheckboxLabel = document.getElementById('themeCheckboxLabel')

const rootStyles = document.documentElement.style;

const lightTheme = {
    "--primary": "crimson",
    "--secondary": "rgb(255, 129, 129)",
    "--dark": "rgb(20, 20, 20)",
    "--light": "white",
    "--dark-soft": "rgba(0,0,0,0.7)",
    "--light-soft": "rgba(255, 255, 255, 0.9)",
    "--shadow": "rgba(255, 255, 255, .3)"
}

const darkTheme = {
    "--primary": "black",
    "--secondary": "rgb(255, 255, 255)",
    "--dark": "rgb(20, 20, 20)",
    "--light": "white",
    "--dark-soft": "rgba(0,0,0,0.7)",
    "--light-soft": "rgba(255, 255, 255, 0.9)",
    "--shadow": "rgba(255, 255, 255, .3)"
}

const changeTheme = theme => {
    Object.keys(theme).forEach(cssVar => { 
        rootStyles.setProperty(cssVar, theme[cssVar])
    })
}

themeCheckbox.addEventListener('change', e => {
    const { checked } = e.target;
    if (checked) {
        themeCheckboxLabel.innerText = 'Dark'
        changeTheme(darkTheme)
    } else if (!checked) {
        themeCheckboxLabel.innerText = 'Light'
        changeTheme(lightTheme)
    };
})