import './style.css'

let today = 2.6;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <div class="block">
            
            <div class="header">
                <p class="title">Profile activity</p>
                <div class="options">...</div>
            </div>

            <div class="divider"></div>
            
            <p class="total-today">${today}K</p>
            <br/>
                <p class="description">People watched </br>your videos today</p>
            
            <div class="bars">
            <div class="d1"></div>
            <div class="d1"></div>
            <div class="d1"></div>
            <div class="d1"></div>
            <div class="d1"></div>
            <div class="d1"></div>
            <div class="d1"></div>
            </div>
        </div>
    </div>
`