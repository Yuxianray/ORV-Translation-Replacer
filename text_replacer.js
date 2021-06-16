function replaceText(node) {
    if (node.nodeType == 3) {
        /* 
            Replace additional text by appending the following line below:
            node.data = node.data.replace(/oldtext/gi, "newtext");
        */

        /* System */
        node.data = node.data.replace(/Fable/g, "Story");
        node.data = node.data.replace(/Storys/g, "Stories");
        node.data = node.data.replace(/Storyd/g, "Fabled");
        node.data = node.data.replace(/Historical Figure/g, "Great");
        node.data = node.data.replace(/Story-grade/g, "Narrative-grade");
        node.data = node.data.replace(/Transcender/gi, "Transcendent");
        node.data = node.data.replace(/mantra/gi, "true voice");

        /* Main characters */
        node.data = node.data.replace(/Kim Dok[- ]Ja/gi, "Kim Dokja");
        node.data = node.data.replace(/Dok-J[a]?/gi, "Dokja");
        node.data = node.data.replace(/Y(i|oo|u) J((oo|u)ng|i)-H[y]?(eo|u)k/gi, "Yoo Joonghyuk");
        node.data = node.data.replace(/J(oo|u)ng-Hyeok/gi, "Joonghyuk");
        node.data = node.data.replace(/Yu Ho-Seong/gi, "Yu Hosung");
        node.data = node.data.replace(/Ho-Seong/gi, "Hosung");
        node.data = node.data.replace(/Yu Sang-Ah/gi, "Yoo Sangah");
        node.data = node.data.replace(/Sang-Ah/gi, "Sangah");
        node.data = node.data.replace(/Jeong Hui-Won/gi, "Jung Heewon");
        node.data = node.data.replace(/Hui-Won/gi, "Heewon");
        node.data = node.data.replace(/Yi Hyeon[g]?-Seong/gi, "Lee Hyunsung");
        node.data = node.data.replace(/Hyeon-Seong/gi, "Hyunsung");
        node.data = node.data.replace(/Yi Gil-[h]?Yeo[u]?ng/gi, "Lee Gilyoung");
        node.data = node.data.replace(/Gil-[h]?Yeong/gi, "Gilyoung");
        node.data = node.data.replace(/Shin Yu-Se[ou]ng/gi, "Shin Yoosung");
        node.data = node.data.replace(/Yu-Se[ou]ng/gi, "Yoosung");
        node.data = node.data.replace(/Yi Ji-Hye/gi, "Lee Jihye");
        node.data = node.data.replace(/Ji-Hye/gi, "Jihye");
        node.data = node.data.replace(/Han Su-Yeong/gi, "Han Sooyoung");
        node.data = node.data.replace(/Su-Yeong/gi, "Sooyoung");
        node.data = node.data.replace(/Jang Ha-Yeong/gi, "Jang Hayoung");
        node.data = node.data.replace(/Ha-Yeong/gi, "Hayoung");
        node.data = node.data.replace(/Han Myeong-Oh/gi, "Han Myungoh");
        node.data = node.data.replace(/Myeong-Oh/gi, "Myungoh");
        
        /* Side characters */
        node.data = node.data.replace(/Yi Su-Gyeong/gi, "Lee Sookyung");
        node.data = node.data.replace(/Su-Gyeong/gi, "Sookyung");
        node.data = node.data.replace(/Yi Seol-Hwa/gi, "Lee Seolhwa");
        node.data = node.data.replace(/Seol-Hwa/gi, "Seolhwa");
        node.data = node.data.replace(/Kim Nam-W(oo|u)n/gi, "Kim Namwoon");
        node.data = node.data.replace(/Nam-Woon/gi, "Namwoon");
        node.data = node.data.replace(/Gong Pil-Du/gi, "Gong Pildu");
        node.data = node.data.replace(/Pil-Du/gi, "Pildu");
        node.data = node.data.replace(/Biyu/gi, "Biyoo");
        node.data = node.data.replace(/Han Da-Reum/gi, "Han Dareum");
        node.data = node.data.replace(/Da-Reum/gi, "Dareum");
        node.data = node.data.replace(/Yu Mi-Ah/gi, "Yoo Miah");
        node.data = node.data.replace(/Mi-Ah/gi, "Miah");
        node.data = node.data.replace(/Jo Yeong-Ran/gi, "Cho Youngran");
        node.data = node.data.replace(/Yeong-Ran/gi, "Youngran");
        node.data = node.data.replace(/Yi Bok-Sun/gi, "Lee Boksoon");
        node.data = node.data.replace(/Jeon Woo-Chi/gi, "Jeon Woochi");
        node.data = node.data.replace(/Bok-Sun/gi, "Boksoon");
        node.data = node.data.replace(/Han Dong-Hoon/gi, "Han Donghoon");
        node.data = node.data.replace(/Kim Yu-shin/gi, "Kim Yushin");
        node.data = node.data.replace(/Na Bo-Ri/gi, "Na Bori");
        node.data = node.data.replace(/Bo-Ri/gi, "Bori");
    }
    if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
      for (var i = 0; i < node.childNodes.length; i++) {
        walkText(node.childNodes[i]);
      }
    }
}
replaceText(document.body);
