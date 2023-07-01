import React, { useEffect, useState } from 'react'
import "./profilePic.css"

export default function ProfilePicture() {
    useEffect(()=>{

readURL()

    },[])

function readURL(input) 
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
       
    
    return (
        <input type='file' id="uploadBannerImage" onchange="readURL(this);" />

 
    );
}
