نص الملف قائمة الاوامر بالازرار.js:

//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/b63528315a84c3205ed98.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: ``.trim() },
            footer: { text: `*𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩*`.trim() },  
            header: {
                title: `*⎔⋅• ┏╼╃✦⊰⟦♯ЅᗩFᏒOT꙯⟧⊱✦╄╾┓ •⋅⎔*\n\n*◞❐نورت يا حب بوت سفروت🤺🔥*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت سفروت*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص والجروبات*\n\n*◞❐يمنع شتم البوت*\n\n*⎔⋅• ┗╼╃✦⊰⟦♯ЅᗩFᏒOT꙯⟧⊱✦╄╾┛ •⋅⎔*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '⌝قـائـمـه الاوامـر⌞',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: 'ON',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: 'Click Me',
  								    		  id: 'test'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: 'Click Me',
  								    		  id: 'tes'
  						  		    	}
  						  				]
  						        	},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'ما',
  								    		  id: 'سفروت1'
  						  		    	}
  						  				]
                                    },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
 	                           		{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
  						  				]
 		                           	{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم الادمن',
  										      title: '',
  									    	  description: 'مارو1',
  								    		  id: 'سفروت2'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '',
                                      url: 'https://www.atom.bio/m_vro',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu)$/i;
export default handler;
