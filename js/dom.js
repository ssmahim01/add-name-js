document.getElementById('btn-click').addEventListener('click', function(){
    let input_field = document.getElementById('input-field');
    const heading = document.getElementById('change-text');
    heading.innerText = input_field.value;
    input_field.value = '';
    heading.style.color = 'green';
    heading.style.fontWeight = 'bold';
});