import React from "react";
import { Sidebar } from '../components/Sidebar.js'
import styles from '../styles/MessagesPage.module.css';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ChatSection from "../components/ChatSection.jsx";

const messages = () => {

  const [conversations, setConversations] = useState([]);
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const names = [1, 2, 3, 4];
  const [showModal, setShowModal] = useState(false);
  const [createGroup, setCreateGroup] = useState(false);
  const [msgArea, setMsgArea] = useState(true);

  return (
    <div className={styles.msg_body}>

      <div className={styles.msg_sbar}>
        <Sidebar />
      </div>

      <div className={styles.msg_pannel}>

        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          <div className={styles.msgp_add}>
            <div className={styles.heading}>Messages</div>
          </div >
          <div className={styles.msgp_notif}>
            <div className={styles.messages}>
              {number.map(() => (
                <div onClick={() => setMsgArea(true)} className={styles.message}>
                  <div >
                    <Avatar className={styles.Icon} alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
                  <div className={styles.message_name}>
                    <div className={styles.Name}>Harry Kenvic</div>
                    <div className={styles.msg_id}>@Harry</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AddCircleRoundedIcon className={styles.msgp_addBtn} onClick={() => setCreateGroup(true)} />
        </div>

      </div>

      <div className={styles.msg_view}>
        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          <div className={styles.msgv_align}>
            <SendRoundedIcon className={styles.msgv_icn} />
            <h5 className={styles.msgp_Msg}>Your Messages</h5>
            <p className={styles.msgp_para}>Start your chat with just one click!</p>
            <button className={styles.msgv_button} onClick={() => setShowModal(true)}>Send Messages</button>
          </div>
        </div>

      </div>
      {
        msgArea ? (
          <div className={styles.chatArea}>
            <div className={styles.chatClose} onClick={() => setMsgArea(false)}>+</div>
            <div className={styles.chatContents}>
              <div className={styles.chatBoxTop}>
                <ChatSection />
                <ChatSection own={true} />
                <ChatSection />
                <ChatSection />
                <ChatSection />
                <ChatSection />
                <ChatSection />

              </div>
              <div className={styles.chatBoxBottom}>
                <textarea className={styles.chatInput} placeholder="Text" ></textarea>
                <button className={styles.chatSendButton}>Send</button>
              </div>
            </div>
          </div>
        ) : null
      }
      {
        showModal ? (
          <div className={styles.bgmodal}>
            <div className={styles.modalcontents}>
              <div className={styles.close} onClick={() => setShowModal(false)}>+</div>
              <img src="https://richardmiddleton.me/comic-100.png" alt="" />

              <div>
                <input className={styles.nameSearch} type="text" placeholder="What's the name" />
                <p className={styles.size}>No great matches!</p>
                <div className={styles.searchList}>
                  {names.map(() => (
                    <div>
                    </div>
                  ))}
                </div>
              </div>

              <button className={styles.chatBtn}>Let's Chat</button>
            </div>
          </div>
        ) : null
      }
      {
        createGroup ? (
          <div className={styles.bgmodal}>
            <div className={styles.modalcontents}>
              <div className={styles.close} onClick={() => setCreateGroup(false)}>+</div>
              <img src="https://richardmiddleton.me/comic-100.png" alt="" />
              <div>
                <input className={styles.nameSearch} type="text" placeholder="Search names" />
                <p className={styles.size}>No great matches!</p>
                <div className={styles.searchList}>
                  {names.map(() => (
                    <div>
                    </div>
                  ))}
                </div>
              </div>

              <button className={styles.chatBtn}>Create Group</button>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}

export default messages

