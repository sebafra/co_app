window.HTMLUtil = {
    encode: function (value){
        return $('<div/>').text(value).html();
    },
    decode: function(value){
        return $('<div/>').html(value).text();
    },
    formatAnchor: function(msg){
        
        try{
        
            var hrefIdx = msg.toLowerCase().indexOf("href");
            if(hrefIdx >= 0){
                var aux = msg.substring(hrefIdx + 4,msg.length - 1);
                
                var quotIdx = aux.indexOf("'");
                var quotExists = true;
                if(quotIdx < 0){
                    quotIdx = aux.indexOf("\"");
                    quotExists = false;
                }
                if(quotIdx >= 0){
                    aux = aux.substring(quotIdx + 1,aux.length - 1);
                    
                    if(quotExists)
                        quotIdx = aux.indexOf("'");
                    else
                        quotIdx = aux.indexOf("\"");
                    
                    aux = aux.substring(0, quotIdx);
                    
                    var newMsg1 = msg.substring(0, msg.indexOf(aux) - 1);
                    var newMsg2 = msg.substring(newMsg1.length + aux.length + 2, msg.length);
                    var newMsg = newMsg1 + "\"#\" rel=\"external\" onclick=\"window.open('" + aux + "', '_blank');\"" + newMsg2;
                    
                    return newMsg;
                }
            }
            
            
        }catch(e){
            
        }
        return msg;
        
    }
}