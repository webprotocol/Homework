var m_Red = 0;
var m_Blue = 0;
var m_Green = 0;

var m_Message = false;
var m_MessageCode = 0;

function GetString() {
    return String = document.getElementById("m_String");
}

function Textlog( value ) {
    m_MessageCode++;
    setTimeout( function() { SetFontSize( 32, m_MessageCode ) } , 50);
    m_Alert.innerHTML = value;
    m_Alert.style['font-size'] = "32px";
}

function SetFontSize( size, MessageCode ) {
    if ( m_MessageCode == MessageCode ) {
        size -= 0.05;
        m_Alert.style['font-size'] = size + "px";
        if ( size < 16 ) {
            setTimeout( function() { Expire( MessageCode ) }, 2500 );
        }
        else {
            setTimeout( function() { SetFontSize( size, MessageCode ) }, 2 );
        }
    }
}

function Expire(MessageCode) {
    if ( MessageCode == m_MessageCode ) {
        m_Alert.innerHTML = "";
    }
}

function ChangeFontType(value) {
    var String = GetString();
    switch(value) {
        case "0": // 굴림
            String.style['font-family'] = '굴림';
            Textlog("폰트 스타일을 굴림 으로 변경");
            break;
        case "1": // 풍선
            String.style['font-family'] = '풍선';
            Textlog("폰트 스타일을 풍선 으로 변경");
            break;
        case "2": // 양재
            String.style['font-family'] = '양재';
            Textlog("폰트 스타일을 양재 로 변경");
            break;
        default: // 굴림
            String.style['font-family'] = '굴림';
            Textlog("폰트 스타일을 기본서식(굴림) 으로 변경");
            break;
    }
}

function ChangeFontSize(value) {
    var string = GetString();
        string.style['font-size'] = value + "px";
    Textlog("폰트 사이즈를 " + value + "픽셀로 변경합니다.");
}

function ChangeFontStyle(value) {
    var string = GetString();
        string.style['font-style'] = value;
    Textlog("폰트의 스타일을 " + value + "모드로 변경합니다.");
}

function ChangeFontWeight(value) {
    var string = GetString();
        string.style['font-weight'] = value;
    Textlog("폰트의 굵기 타입을 " + value + "모드로 변경합니다.");
}


function ChangeColorRed(value) {
	m_Red = value;
	RedValue.innerHTML =  leftPad(m_Red,2);
	InvalidateProperties();
}

function ChangeColorGreen(value) {
	m_Green = value;
	GreenValue.innerHTML = leftPad(m_Green,2);
	InvalidateProperties();
}

function ChangeColorBlue(value) {
	m_Blue = value;
	BlueValue.innerHTML = leftPad(m_Blue,2);
	InvalidateProperties();
}

function InvalidateProperties() {
	var string = GetString();
    var ColorCode = leftPad(Number(m_Red).toString(16),2) + leftPad(Number(m_Blue).toString(16),2) + leftPad(Number(m_Green).toString(16),2);
    string.style['color'] = "rgb(" + m_Red + "," + m_Green + "," + m_Blue + ")";
    Textlog("글씨의 색상을 #" + RedValue.innerHTML + GreenValue.innerHTML + BlueValue.innerHTML + "으로 변경합니다.");
}


function leftPad(number, targetLength) {

    var output = Number(number).toString(16);

    while (output.length < targetLength) {
        output = '0' + output;
    }

    return output;
}

function CssCheck() {
    var CSS_String = document.getElementById("m_Customs");
    m_HeadCSS.innerHTML = "#m_String { " + CSS_String.value + "}";
    
    console.log(m_HeadCSS.innerHTML);
}

function CssCheck2() {
    var CSS_String = document.getElementById("m_Customs2").value;
    var words = CSS_String.split(' ');
    console.log("Length of words :" + words.length);

    for ( var i = 0; i < words.length; i++ ) {
        var Is_Color = false;
        var Is_Size = false;
        if ( words[i].length == 4 || words[i].length == 7 ) {
            if ( Left(words[i], 1 ) == "#" ) {
                Is_Color = true;
                m_String.style['font-color'] = "#" + words[i];
            }
        }
        if ( Right(words[i], 2 ) == "px" ) {
            Is_Size = true;
            m_String.style['font-size'] = words[i];
        }

        if ( !Is_Color && !Is_Size ) {
            switch( words[i] ) {
                case "Gulim" :
                case "굴림" :
                    m_String.style['font-family'] = '굴림';
                    break;
                case "serif" :
                case "세리프" :
                    m_String.style['font-family'] = 'serif';
                    break;
                case "풍선" :
                    m_String.style['font-family'] = '풍선';
                    break;
                case "양재": // 양재
                    m_String.style['font-family'] = '양재';
                    break;
                case "italic" :
                    console.log("Italic Matched!")
                    m_String.style['font-style'] = "italic";
                    break;
                case "bold" :
                    m_String.style['font-weight'] = "bold";
                    break;
            }
        }
    }
}

function Left(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0,n);
}

function Right(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}