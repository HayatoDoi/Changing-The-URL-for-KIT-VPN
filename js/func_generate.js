function func_generate(sURL1) {
    // 入力チェック
    if(sURL1 == '') {
        write_message('元URLを入力してください。');
        return;
    }
    
    // 内容チェック
    if(!isUrl(sURL1)) {
        write_message('http:// もしくは https:// から始まるURLを入力してください。');
        return;
    }
    
    // URL生成
    protocol = sURL1.match('^(https?:\\/\\/)?');
    protocol = protocol[0];
    sURL1 = sURL1.replace(protocol, "");
    host = sURL1.match('((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))');
    host = host[0];
    sURL1 = sURL1.replace(host, "");
    port = sURL1.match('(\\:\\d+)?');
    port = port[0];
    host = host + port;
    sURL1 = sURL1.replace(port, "");
    path = sURL1.match('(\\/[-a-z\\d%_.~+]*)*');
    path = path[0];
    
    buf = path.split('/');
    file = buf[buf.length-1];
    if( !file.match('\\.') ) {
        file = '';
        path = path + file;
    } else {
        path = path.replace(file, "");
    }
    
    return 'https://ras.kanazawa-it.ac.jp' + path + ',DanaInfo=' + host + ',SSO=U+' + file;
}