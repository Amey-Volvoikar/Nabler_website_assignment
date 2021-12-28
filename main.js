const prodContainer = document.querySelector('#products');

const loadData = async () => {
    const res = await fetch ('data.json');
    const data = await res.json();
    console.log(data.products);
    // debugger
    let template = '';
    data.products.forEach(element => {
        template += `
        <div><h2>${element.title}</h2></div>
        `
        console.log(template);
    });

    prodContainer.innerHTML = template;
}

window.addEventListener ('DOMContentLoaded', () => loadData());