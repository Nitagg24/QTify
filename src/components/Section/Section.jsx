import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Grid from '@mui/material/Grid';
function Section({type}) {

    const [albumdata, setalbumdata]=useState([])
    async function getalbumdata(){
        const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${type}`)
        setalbumdata(response.data)
       }

    async function getsongs(){
        const response = await axios.get(`https://qtify-backend-labs.crio.do/songs`)
        setalbumdata(response.data)
       }
    
    
    useEffect(()=>{
      
      
       if(type!=='songs'){
       getalbumdata()
       }

       if(type=='songs'){
        getsongs()
       }

      

    },[type])


    return (
     <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <p style={{width:'122px', height:'30px', fontWeight:600, fontSize:20}}>{` ${type} Albums`}</p>
      <p style={{fontWeight:600, color:'#34C94B'}}>Show all</p>
      </div>
      <div>
      <Grid container spacing={2}>
        {
            albumdata.map((item)=>{

                return(
                <Grid item>
                 <Card item={item}/>
                 </Grid>
                )
            })
        }
        </Grid>
      </div>
     </div>
    );
  }
  
  export default Section;