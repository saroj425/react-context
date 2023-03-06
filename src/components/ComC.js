import React,{useContext} from 'react'
import { Appdata } from '../App'
import {Namecontext} from '../App'

const ComC = () => {
  const appdata = useContext(Appdata)
  const namedata = useContext(Namecontext)
  //console.log("Name Data from context",namedata)
  return (
    <div>
      <div>{appdata.data} <strong>Name :{namedata.name.name}</strong> <strong>Age: {namedata.name.age}</strong> in Component C</div>
    </div>
  )
}

export default ComC