import { createContext } from "react";
import $ from "jquery"

export const myPopUp = createContext()

export default function PopUpProvider({children}) {

    function showPopUp() {
            $(".stoto").fadeOut(250,function(){
                setTimeout(() => {
                    $(".modal-backdrop").fadeOut(250)
                    $(".stylish").fadeIn(250).removeClass("fade")

                }, 250) ;
                $(".btn-close").on( "click" , function( ) {
                    $(".stylish").hide().remove("fade")
                } 
                )
            })
 

        }
function hidePopUp() {


    $(".stylish").fadeOut(500,function(){
        setTimeout(() => {
            $(".modal-backdrop").fadeOut(500)
        }, 200);
    })
}

function showSignUpPopUp() {

    $(".stylish").fadeOut(250,function(){
        setTimeout(() => {
            $(".modal-backdrop").fadeOut(250)
            $(".stoto").fadeIn(250).removeClass("fade")

        }, 250);
        $(".btn-close").on( "click" , function( ) {
            $(".stoto").hide().remove("fade")
        } 
        )
    })

}
return <myPopUp.Provider value={{showPopUp,hidePopUp,showSignUpPopUp}} >


{children}
</myPopUp.Provider>

}
