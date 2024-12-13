import { Address } from "../../interfaces"
import { ListItemWrapper, ListTitle, ListLabel, ListWrapper } from "../List/List.styled"

export const AddressTable = ({addresses}:{addresses: Address[]}) => {
  return (
 
    <ListWrapper>
      {
        addresses.map((address: Address) => (
          <div key={address.id} style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <ListItemWrapper>
              <ListTitle>Calle</ListTitle>
              <ListLabel>{address.street_address}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>Ciudad</ListTitle>
              <ListLabel>{address.city}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>Estado</ListTitle>
              <ListLabel>{address.state}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>C.Postal</ListTitle>
              <ListLabel>{address.zip_code}</ListLabel>
            </ListItemWrapper>
          </div>
        ))
      }        
    </ListWrapper>
  )
  
}
