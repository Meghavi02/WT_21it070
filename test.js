function showmsg(){
    const name = document.getElementById("idNameInput").value;
    let msgstr = `Welcome to CHARUSAT , ${name}`;
    document.getElementById("idmsg").textContent = msgstr;
}