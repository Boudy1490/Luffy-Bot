
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^خخ|خخخ|خخخخ|خخخخخ$/i.test(m.text)) { 
     responses = [ 
 '*خوك ومنجا عند الفكهاني😹🔪*', 
      '*حاسب لتشرق😹🦦*',
    '*خوك ومنجا وسوق العبور كلو😹🦦*',
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*🕊🤍وعليكم السلام*',  
     ]; 
   }else if (/^سفروت|سفرووت$/i.test(m.text)) { 
     responses = [ 
'*معاك🦦*'
       ,'*عايز اي من سفروت😿*',    
                    '*اي يسطا😹🤙🏻*',  
                                   '*ارغي😿*',       
     ]; 
 }else if (/^سفروت مين عمك|سفروت عمك$/i.test(m.text)) { 
     responses = [ 
'*سفروت اككيد😩❤‍🔥*'
     ]; 
   }else if (/^سفروت انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^سفروت بتحبني|بتحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*بعشقك💋😹*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^سفروت تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*منور🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  
      '*انا كمان بحبني😹💜*',
      '*عارف😹🦦*',
     ]; 
   }else if (/^اوكي|اوكك|اوكيي|اوكييi.test(m.text)) { 
     responses = [ 
'اوك🤍🦦'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 😹🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله🤍🕊',  

     ];
     }else if (/^بوت ابن متناكه$/i.test(m.text)) { 
     responses = [ 
       'مفيش متناكه من بعد امك متشتمش البوت يخول🫵🏻',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'نورت🌚✨',  

     ];
     }else if (/^جيت$/i.test(m.text)) { 
     responses = [ 
       'نورت🌚✨',
      'ارجع تاني😹🦦',
     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^كسم البوت|كسم بوت|كسمك يابوت$/i.test(m.text)) { 
     responses = [ 
       'كسمين امك يخول متشتمش البوت يعرص🫵🏻',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي سفروت😿🦦*',
              '*قولي سفروت🔥🧸*',  
      '*مش عارف تقول سفروت🥲🦦*'
     ];
            }else if (/^بعشقك|بعشقكك|بعشقككك$/i.test(m.text)) { 
     responses = [ 
       '*بـمـوت فـيـك😻💕*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
