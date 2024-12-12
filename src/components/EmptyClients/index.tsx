import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, IconButton } from "../Button/ButtonComponent.styled"
import { ContainerNoClients, Image, Label } from "../NoClients/NoClients.styled";

export const EmptyClients = () => {

  const {showClientForm} = useContext(GlobalContext);
  
  return (
    <ContainerNoClients>
        <Image src={'./imgs/no-clients.svg'} />
        <Label>No hay datos que mostrar</Label>
        <Button onClick={()=>showClientForm()}>            
            <IconButton src="./imgs/pencil.svg" />
            Editar clientes
        </Button>
    </ContainerNoClients>
  )
}
