import React from "react";
/** @jsx jsx*/
import {Styled ,jsx} from 'theme-ui'
import logo from "../images/logo.png";
import '../gatsby-plugin-theme-ui/index'
import img1 from './../images/1.png'
import img2 from './../images/2.png'
import Head from './../components/header'
import Section from './../components/section'
import image_3 from "../images/3.png"
import Helmet from "react-helmet"
const header = {
    width: "100%",
    height: ["120px","120px","150px"]
}
const headerImg = {
    display: 'block',
    width: "auto",
    height: ["120px","120px","150px"],
    margin: 'auto'
}
const section1 = {
    width:['95%','90%','100%'],
    height:['auto','auto','100vh'],
    display:'flex',
    flexDirection: ['column','column','row'],
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign:'justify',
    margin: 'auto'
}
const col1 = {
    width:['100%','100%','40%'],
    height: '100%'
}
const col2 = {
    width:['100%','100%','45%'],
    height: '100%',
    display:'flex',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    margin: 'auto'
}
const img_1 = {
    height: ['auto','auto','100%'],
    width:['50%','50%','auto'],
    display:'block',
    margin:'auto'
}
const img_2 = {
    width:['95%','90%','85%'],
    height:['50%','50%','50%'],
    display: 'block',
    margin: 'auto'
}
const section_2 = {
    width:['95%','90%','100%'],
    height: 'auto',
    margin: 'auto',
    paddingTop:['20px','20px',null]
}
const section_2_content = {
    width: ["100%","100%","95%"],
    height:'auto',
    margin: '7px auto'
}
const section_2_img = {
    width: ['90%','90%','90%'],
    height: ['auto','auto','100%'],
    display: 'block',
    margin: 'auto'
}
const centered_cont = {
        width: ['90%','90%','fit-content'],
        height:'auto',
        margin: '15px auto',
        textAlign: 'center'
}
const spanStyle = {
        padding: '0px 5px 0px 5px',
        borderRight: '2px solid red',
        fontSize: '15px'

}
/*
const footerStyle= {
    width:'100%',
    height: ['auto','auto','80px'],
    display: 'flex',
    flexDirection: ['column','column','row'],
    justifyContent:'space-evenly',
    alignContent:'center',
    alignItems: ['flex-start','flex-start','center'],
    textAlign: ['left','left','center'],
    backgroundColor: 'footerBG'

}
const smLink = {
        width: ['100%','100%','fit-content'],
        height: '100%',
        padding: '10px 10px 10px 10px',
        display:'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: ['flex-start','flex-start','center'],
        textAlign: ['left','left','center'],
        color: 'footerText'
}

 */
const footerStyle =  {
    width:'100%',
    maxHeight: '200px',
    display:'flex',
    justifyContent:'space-evenly',
    alignContent:'center',
     flexDirection: ['column','column','row'],
    alignItems:'center',
    backgroundColor: '#f00',
    color:'#fff'
}
const smLink = {
    height:['180px','180px','80px'],
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems: 'center'
}
const Header = () => (
    <div sx={{background: "linear-gradient(#fff,lightyellow,rgb(238, 238, 184))"}}>
         <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <script src="https://kit.fontawesome.com/yourcode.js"></script>
        </Helmet>
        <div sx={{ padding:'0px', margin: '0px',textAlign:'justify', lineHeight:['1.35','1.35','1.55'], fontSize: ['14px', '17px', '19px'] }}>
        <div class="header" sx={header}>
            <img src={logo} sx={headerImg}/>
        </div>
        <div sx={section1}>
        <div sx={col1}>
            <img src={img1} sx={img_1} />
        </div>
        <div>
            <div>
                    <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                    <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                                <div>
                <img src={img2} sx={img_2}/>
            </div>
            <div>
                Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </div>

        </div>
    </div>
    </div>
        <div sx={section_2}>
            <div  sx={section_2_content}>
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </div>

            <div sx={section_2_content}>
                <img src={image_3} sx={section_2_img} />
            </div>

            <div sx={centered_cont}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>

         <div sx={{borderTop:'2px solid red', width:'95%', margin:'auto', padding: "10px 0px"}}>
                <h4 sx={{textAlign:'center'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <div sx={{textAlign:'center', width:['100%','100%','95%'], margin: 'auto'}}>
                    <span sx={spanStyle}>CHEMICALS & PROCESS</span>
                    <span sx={spanStyle}>POWER </span>
                    <span sx={spanStyle}> WATER & WASTE WATER</span>
                    <span sx={spanStyle}>OILS & GAS</span>
                    <span sx={spanStyle}> PHARMA </span>
                    <span sx={spanStyle}> SUGARS & DISTILLERIES</span>
                    <span sx={spanStyle}>PAPER & PULP</span>
                    <span sx={spanStyle}>MARINE & DEFENCE</span>
                    <span sx={spanStyle}>METAL & MINING</span>
                    <span sx={spanStyle}> FOOD & BEVERAGE</span>
                    <span sx={spanStyle}>PETROCHEMICAL & REFINERIES</span>
                    <span sx={spanStyle}>SOLAR  </span>
                    <span sx={spanStyle}>BUILDING  </span>
                    <span sx={spanStyle}>HVAC</span>
                    <span sx={spanStyle}>FIRE FIGHTING</span>
                    <span sx={{padding: '0px 5px 0px 5px',
                    fontSize: '15px'
            }}>AGRICULTURE & RESIDENTIAL</span>
                </div>
            </div>
        </div>
        <div  sx={footerStyle}>
                <div sx={smLink}>
                     <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <span  sx={{padding:'5px', display:'block'}}>Toll free 1800 200 1234</span>
                </div>
                <div sx={smLink}>
                    <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                    <span sx={{padding:'5px', display:'block'}}>www.facebook.com/cripumps</span>
                </div>
                <div sx={smLink}>
                    <i class="fa fa-globe fa-2x" aria-hidden="true"></i>
                    <span sx={{padding:'5px', display:'block'}}>www.crigroups.com</span>
                </div>

            </div>
        </div>


    </div>

)

export default Header


