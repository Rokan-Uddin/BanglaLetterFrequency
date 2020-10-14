var len = str.length;

var fre = new Array(70); for (let i=0; i<70; ++i) fre[i] = 0;

for (var i = 0; i < len; i++) {
	if(str[i]=='অ') fre[0]++;
	else if(str[i]=='আ') fre[1]++;
	else if(str[i]=='ই') fre[2]++;
	else if(str[i]=='ঈ') fre[3]++;
	else if(str[i]=='উ') fre[4]++;
	else if(str[i]=='ঊ') fre[5]++;
	else if(str[i]=='এ') fre[6]++;
	else if(str[i]=='ঐ') fre[7]++;
	else if(str[i]=='ও') fre[8]++;
	else if(str[i]=='ঔ') fre[9]++;

	else if(str[i]=='ক') fre[10]++;
	else if(str[i]=='খ') fre[11]++;
	else if(str[i]=='গ') fre[12]++;
	else if(str[i]=='ঘ') fre[13]++;
	else if(str[i]=='ঙ') fre[14]++;

	else if(str[i]=='চ') fre[15]++;
	else if(str[i]=='ছ') fre[16]++;
	else if(str[i]=='জ') fre[17]++;
	else if(str[i]=='ঝ') fre[18]++;
	else if(str[i]=='ঞ') fre[19]++;

	else if(str[i]=='ট') fre[20]++;
	else if(str[i]=='ঠ') fre[21]++;
	else if(str[i]=='ড') fre[22]++;
	else if(str[i]=='ঢ') fre[23]++;
	else if(str[i]=='ণ') fre[24]++;

	else if(str[i]=='ত') fre[25]++;
	else if(str[i]=='থ') fre[26]++;
	else if(str[i]=='দ') fre[27]++;
	else if(str[i]=='ধ') fre[28]++;
	else if(str[i]=='ন') fre[29]++;

	else if(str[i]=='প') fre[30]++;
	else if(str[i]=='ফ') fre[31]++;
	else if(str[i]=='ব') fre[32]++;
	else if(str[i]=='ভ') fre[33]++;
	else if(str[i]=='ম') fre[34]++;

	else if(str[i]=='য') fre[35]++;
	else if(str[i]=='র') fre[36]++;
	else if(str[i]=='ল') fre[37]++;
	else if(str[i]=='শ') fre[38]++;
	else if(str[i]=='ষ') fre[39]++;
	else if(str[i]=='স') fre[40]++;
	else if(str[i]=='হ') fre[41]++;
	else if(str[i]=='ক্ষ') fre[42]++;
	else if(str[i]=='ড়') fre[43]++;
	else if(str[i]=='ঢ়') fre[44]++;
	else if(str[i]=='য়') fre[45]++;

	else if(str[i]=='ি') fre[46]++;
	else if(str[i]=='ী') fre[47]++;
	else if(str[i]=='ু') fre[48]++;
	else if(str[i]=='ূ') fre[49]++;
	else if(str[i]=='া') fre[50]++;
	else if(str[i]=='ো') fre[51]++;
	else if(str[i]=='ৌ') fre[52]++;
	else if(str[i]=='ে') fre[53]++;
	else if(str[i]=='ৈ') fre[54]++;
	else if(str[i]=='ৃ') fre[55]++;
}

for (var k = 0; k < len; k++) {
	fre[k]= ((fre[k]/len)*100)
}