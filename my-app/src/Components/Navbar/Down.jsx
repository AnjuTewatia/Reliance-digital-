

import { Button,Text } from "@chakra-ui/react"

function Down(){
    return (
        <div  style={{width:"100%", height:"60px",backgroundColor:"blue",marginTop:"70px",justifyContent:"spaceBetween"}}>
            <div style={{gap:"50px",margin:"auto"}}>
            <Button border={"none"} margin={"30px 20px 30px 30px"}><Text  fontSize='xs'></Text>MOBLIES & TABLETS</Button>
            <Button border={"none"} margin={"30px 20px 30px 30px"} ><Text fontSize='xs'>TELEVISION</Text></Button>
            <Button border={"none"} margin={"30px 20px 30px 30px"}><Text  fontSize='xs'>AUDIO</Text></Button>
            <Button border={"none"} margin={"30px 20px 30px 30px"}><Text  fontSize='xs'>HOME APPLIANCES</Text></Button>
            <Button border={"none"} margin={"30px 20px 30px 30px"}><Text  fontSize='xs'> COMPUTERS</Text></Button>
            <Button border={"none"} margin={"30px 20px 30px 30px"}><Text  fontSize='xs'>KITCHEN APPLIANCES</Text></Button>
            <Button border={"none"} margin={"30px 50px 30px 30px"}><Text  fontSize='xs'>ACCOCERRIESS</Text></Button>
            <Button border={"none"} margin={"30px 50px 30px 30px"}><Text  fontSize='xs'></Text>SANDISK</Button>

            {/* <Button colorScheme={"blackAlpha"} backgroundImage={"https://www.yoox.com/media/yoox16/gift/2022_gift_menu_desktop.gif"} ><Text color="white" fontSize='xs'>GIFT GUIDE</Text></Button> */}
        </div>
        </div>
    )
}
export default Down