import React from "react";
import {Text, Image, Box,Stack,Heading, Tag, TagLabel} from '@chakra-ui/react'

const Watch = ({url, title,price,mrp,save}) => {
 
  return (
   
    <div style={{ width:"90%",
    height:"auto",
    border:"1px solid red",
    display:"fles",
    gridTemplatecolumns:"repeat(3,1fr)",
    gap:"3%",imageHeight:"50%"}}>
       
       
        {/* <img src="https://www.reliancedigital.in/medias/Smartwatches-Producst-Carousel-27-10-2022-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA3NTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2gxYS85OTEzNzc2Nzk5Nzc0LmpwZ3w0YzI5OWYwMDI2YzYzMGJiZmRhZGRhZGQyNWIwNTc1OGVmZDRlZmY2NmYzN2E4ZDdkZjMxMzRkM2QxMGYzNmQy" /> */}
    <Stack data-cy="watch">
      <Image data-cy="watch-image" src={url} style={{height:"180px"}} />
      <Text data-cy="watch-title" style={{color:"blue"}}> {title}</Text>
      <Tag>
        <TagLabel data-cy="watch-price"> Deal price: ₹ {price}</TagLabel>
      </Tag>
      <Heading data-cy="watch-mrp"> M.R.P:₹ {mrp}</Heading>
      <Box data-cy="watch-save"> you Save:₹ {save}</Box>
    </Stack>
    </div>
  );
};

export default Watch;
