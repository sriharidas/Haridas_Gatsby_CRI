import React from "react"
/** @jsx jsx*/
import {Styled ,jsx} from 'theme-ui'
import image_3 from './../images/3.png'
import '../gatsby-plugin-theme-ui/index'
const section_2 = {
    width:['95%','95%','100%'],
    height: 'auto',
    margin: 'auto'
}
const section_2_content = {
    width: ["95%","90%","95%"],
    height:'auto',
    margin: '7px auto'
}
const section_2_img = {
    width: ['auto','auto','90%'],
    height: ['30vh','30vh','100%'],
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
const Section = () => {
    <div>
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
}

export default Section
