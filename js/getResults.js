var cResult = 0;
var cResults = [];
var cResultsSum = 0;
var cIptc = 0;
var cIptcs = [];
var cIptcsSum = 0;

var p = 0;
var q = 0;
var i = 0;
var j = 0;

var td = document.getElementsByTagName("td");

for (i = 0; i <= ((td.length - 18 )/ 12); i = i + 1) {
    j = 18 + 12 * i;
    cResult = td[j].innerHTML;
    cResult = Number(cResult);
	cIptc = td[j-5].innerHTML;
	cIptc = Number(cIptc);
	
    if (cResult === 0) {
        q = q + 1;
    } else if (isNaN(cResult) === true) {
        if (td[j].innerHTML.indexOf("����") > 0) {
            cResult = 85;
        } else if (td[j].innerHTML.indexOf("����") > 0) {
            cResult = 80;
        } else if ((td[j].innerHTML.indexOf("����") > 0) && (td[j].innerHTML.indexOf("��") < 0)) {
            cResult = 70;
        } else {
            cResult = 60;
        }
        cResults.push(cResult);
		cIptcs.push(cIptc);
        p = p + 1;
    } else {
        cResults.push(cResult);
		cIptcs.push(cIptc);
        p = p + 1;
    }
}

if ( (p === 0) && (q === 0) ) {
	alert ("û�в�ѯ���γ̣��������˺����������������æ���������������ϵվ����oyrx@vip.qq.com");
}else{
alert("һ����ѯ��" + (p+q) + "�ſγ̣��������޳ɼ���" + q + "�ţ��гɼ��γ���" + p + "�š��鵽�ĳɼ��ֱ��ǣ�" + cResults + "�����ǵ�ѧ�ֱַ��ǣ�" + cIptcs);

var calResult = function(x) {
		if ((x >= 95) && (x <= 100 )) {
			x = 6 + (x-95)/10;
		}else if (x >= 90) {
			x = 5 + (x-90)/10;
		}else if (x >= 85) {
			x = 4 + (x-85)/10;
		}else if (x >= 80) {
			x = 3 + (x-80)/10;
		}else if (x >= 70) {
			x = 2 + (x-70)/10;
		}else if (x >= 60) {
			x = 1 + (x-60)/10;
		}else{
			x = 0;
		}
		return x;
	};

for ( i = 0; i <= cResults.length - 1; i = i + 1 ){
	cResult = calResult(cResults[i])*cIptcs[i];
	cResults[i] = cResult;
}

	for (i = 0; i<= cResults.length - 1 ; i++ ){
		cResultsSum = cResultsSum + cResults[i];
		cResultsSum = Number(cResultsSum);
		cIptcsSum = cIptcsSum + cIptcs[i];
		cIptcsSum = Number(cIptcsSum);
		}
		
cResult = cResultsSum / cIptcsSum;
alert("���ļ�����" + cResult);
}