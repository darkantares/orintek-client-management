import { ContainerNoClients, Image, Label } from "../NoClients/NoClients.styled";

export const EmptyClients = () => {  return (
    <ContainerNoClients>
        <Image src={'./imgs/no-clients.svg'} />
        <Label>No hay datos que mostrar</Label>
    </ContainerNoClients>
  )
}
