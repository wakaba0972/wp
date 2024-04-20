function hash() {
    let text = document.getElementById('data_block').value;
    digestMessage(text)
    .then((res) => {
        document.getElementById('output_block').value = res;
    })
}

window.onload = hash();