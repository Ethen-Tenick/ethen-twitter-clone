import React, { useState } from 'react'


function Message_dm_ui() {

    const [chatMessage, setChatMessage] = useState([])
    /////then post to database of chats not mix with others////

    return (
        <div className='msg_dm_ui_main_container'>
            <div className='chat_msg_section'>
                <div className='msg_dm_each'>
                    <div>React Components are Insane 💪🏽🚀🚀</div>
                    <div>13 May,2022,8.48pm</div>
                </div>
            </div>
            <div className='input_msg_section'>
                <div>#</div>
                <div>#</div>
                <div className='input_area_msg'>
                    <input placeholder='start a new message' onChange={(e) => { setChatMessage(e.target.value) }} />
                    <div>*</div>
                </div>
                <div>#</div>
            </div>
        </div>
    )
}

export default Message_dm_ui