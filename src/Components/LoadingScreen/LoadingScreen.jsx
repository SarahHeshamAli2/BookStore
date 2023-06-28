import React from 'react'
import './LoadingScreen.css'
import $ from 'jquery';

export default function LoadingScreen() {
    function loading(){
        $(document).onready(function(){$('#loading-area').fadeOut(1000,function(){  $('body').css('overflow','auto')})})}
  return<>
      <div id="loading-area" className="preloader-wrapper-1">
            <div className="preloader-inner">
                <div className="preloader-shade"></div>
                <div className="preloader-wrap"></div>
                <div className="preloader-wrap wrap2"></div>
                <div className="preloader-wrap wrap3"></div>
                <div className="preloader-wrap wrap4"></div>
                <div className="preloader-wrap wrap5"></div>
            </div> 
        </div>
  </>
}
