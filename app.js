let val = 0;

function test() {
    if (val < 10) {
        val += 2;
        let nDiv = document.createElement("div");
        nDiv.innerHTML += val + "<br>";
        document.body.append(nDiv);
        test();
    }
}
test();