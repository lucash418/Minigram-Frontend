
import React from 'react'
import {Cards} from '../components/Cards';
import {Sidebar} from '../components/Sidebar.js'
import {Messages} from '../components/Messages.js'
import styles from '../styles/Home.module.css';

export default function index(){
  return (
    <div className={styles.hello}>
      <Sidebar/>
      <Cards/>
      <Messages/>
    </div>
  )
}

