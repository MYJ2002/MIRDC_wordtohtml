document.getElementById("executeBtn").addEventListener("click", ChangeString8);

function ChangeString8() {
    var NewStringValue = document.getElementById("StringTextBox8").value;
    var lines = NewStringValue.split("\n");
    var string = "";
    var TitleText = [];
    var TitleType = [];

    var CheckText = ["一、","二、","三、","四、","五、","六、","七、","八、","九、","十、"];
    var CheckText2 = ["（一）","（二）","（三）","（四）","（五）","（六）","（七）","（八）","（九）","（十）"];
    var CheckText3 = ["圖1","圖2","圖3","圖4","圖5","圖6","圖7","圖8","圖9","圖10"];

    // 找出標題、子標題、圖片位置
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < CheckText.length; j++) {
            if (lines[i].substr(0,3).indexOf(CheckText[j]) > -1) {
                TitleText.push(i);
                TitleType.push("大");
            }
        }
        for (var j = 0; j < CheckText2.length; j++) {
            if (lines[i].substr(0,4).indexOf(CheckText2[j]) > -1) {
                TitleText.push(i);
                TitleType.push("小");
            }
        }
        for (var j = 0; j < CheckText3.length; j++) {
            if (lines[i].substr(0,4).indexOf(CheckText3[j]) > -1) {
                TitleText.push(i-1);
                TitleType.push("圖");
            }
        }
    }

    // 生成 HTML
    for (var i = 0; i < TitleText.length; i++) {
        if (TitleType[i] === "大") {
            string += `<h1 class="font-bold text-xl mb-2"><span class="text-tiny" style="color:hsl(210, 75%, 60%);">${lines[TitleText[i]]}</span></h1>\n`;
        } else if (TitleType[i] === "小") {
            string += `<p style="text-align:justify; margin-bottom:0.5em;">　　${lines[TitleText[i]]}</p>\n`;
        } else if (TitleType[i] === "圖") {
            string += `<p style="text-align:justify; margin-bottom:0.5em;">　　這裡是圖片 這裡是圖片 這裡是圖片</p>\n`;
        }

        // 處理段落
        var start = TitleText[i] + (TitleType[i] === "圖" ? 2 : 1);
        var end = (i === TitleText.length - 1) ? lines.length : TitleText[i+1];

        for (var j = start; j < end; j++) {
            if (lines[j].trim() !== "") {
                string += `<p style="text-align:justify; margin-bottom:0.5em;">　　${lines[j]}</p>\n`;
            }
        }
    }

    document.getElementById("NewStringBox18").innerHTML = string;
    document.getElementById("NewStringBox17").value = string;
}
