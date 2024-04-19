async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
  }

let text = "";

window.onload = function() {
    document.getElementById('data_block').addEventListener("keyup", function(){
        let ntext = document.getElementById('data_block').value;
        if(ntext !== text){
            text = ntext;
            digestMessage(text)
            .then((res) => {
                document.getElementById('output_block').value = res;
            })
        }
    })
}