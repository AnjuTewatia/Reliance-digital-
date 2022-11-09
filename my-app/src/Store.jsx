import React from 'react'

import { Input ,Stack,Text} from '@chakra-ui/react'
import styles from "./Store.module.css"

const Store = () => {
  return (
    <div className={styles.stores}>

    <div className={styles.stor}>
       <h1>Reliance Digital Store & Service Center near you</h1> 
<Stack spacing={3} style={{marginLeft:"40%"}}>
  <Input placeholder='Enter Pincode/Town' size='xs' style={{width:"250px"}} />
 
</Stack>
  <p>OR USE</p>
<Stack spacing={3} style={{marginLeft:"40%"}}>
  <Input placeholder='Show Stores Near Me' size='xs' style={{width:"250px"}} />
 
 
</Stack>
</div>
         <div className={styles.store}>
          <div>
         <img  src="https://www.reliancedigital.in/build/client/images/ril_digi_logo.jpg" alt=""/><hr/>
              <h1 style={{color:"red"}}>Reliance Digital Store</h1>
       
        <Text noOfLines={[1, 2, 3]}>
               Reliance Digital is 
                present nation-wide 
                with 300+ stores across 100+ cities. Bring
                 home the latest & best in technology
                  from the widest selection at the 
                  lowest assured price with complete
                   peace of mind through lifelong support.
                    Reliance Digital is backed by Reliance 
                    resQ, the service arm that is available 
                    for support all 7 days and fully geared 
                    to provide end-to-end solutions.
      </Text>
      </div>
        <div>       
             <img src="https://www.reliancedigital.in/build/client/images/ril_digi_logo.jpg" alt=""/>
              <h1 style={{color:"red"}}>Reliance Digital Store</h1>
              <Text noOfLines={[1, 2, 3]}>Reliance Digital is 
                present nation-wide 
                with 300+ stores across 100+ cities. Bring
                 home the latest & best in technology
                  from the widest selection at the 
                  lowest assured price with complete
                   peace of mind through lifelong support.
                    Reliance Digital is backed by Reliance 
                    resQ, the service arm that is available 
                    for support all 7 days and fully geared 
                    to provide end-to-end solutions.</Text>
                    </div>
        <div>
        <img src="https://www.reliancedigital.in/build/client/images/ril_digi_logo.jpg" alt=""/>
              <h1 style={{color:"red"}}>Reliance Digital Store</h1>
              <Text noOfLines={[1, 2, 3]}>Reliance Digital is 
                present nation-wide 
                with 300+ stores across 100+ cities. Bring
                 home the latest & best in technology
                  from the widest selection at the 
                  lowest assured price with complete
                   peace of mind through lifelong support.
                    Reliance Digital is backed by Reliance 
                    resQ, the service arm that is available 
                    for support all 7 days and fully geared 
                    to provide end-to-end solutions.</Text>
        </div>
        </div>

      </div>
  )
}

export default Store