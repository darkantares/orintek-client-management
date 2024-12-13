import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import Swal from 'sweetalert2'
import { GlobalContext } from "../../context/context";
import { Button, IconButton } from "../Button/ButtonComponent.styled";
import { ListItemWrapper, ListLabel, ListTitle, ListWrapper } from "./List.styled";
import { Clients } from "../../interfaces";

import withReactContent from 'sweetalert2-react-content'
import { AccordionAddress } from "../AccordionAddress";

import './pagination.css';

const MySwal = withReactContent(Swal);

const ClientList = ({currentItems}:{currentItems:Clients[]}) =>{
  const { showClientForm, showClientAddresses, setClientToUpdate } = useContext(GlobalContext);
  
  const handleClientForm = (client:Clients) => {
    showClientForm()
    setClientToUpdate(client)
  }

  const toggleAccordion = (id:string) => {
    showClientAddresses(id)
  }

  const removeClient = (id:string) =>{
  MySwal.fire({
    title: "Seguro que deseas eliminar este registro?",
    showDenyButton: true,
    denyButtonText: `SI`,
    confirmButtonText: "No"
  }).then((result) => {
    if (result.isDenied) {
      Swal.fire("Registro eliminado correctamente!", "", "success");
    }
  })}
  return (
    <>
      {currentItems &&
        currentItems.map((client) => (
          <ListWrapper key={client.id}>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              <ListItemWrapper>
                <ListTitle>Nombre</ListTitle>
                <ListLabel>{client.firstName}</ListLabel>
              </ListItemWrapper>
              <ListItemWrapper>
                <ListTitle>Apellido</ListTitle>
                <ListLabel>{client.lastName}</ListLabel>
              </ListItemWrapper>
              <ListItemWrapper>
                <ListTitle>Email</ListTitle>
                <ListLabel>{client.email}</ListLabel>
              </ListItemWrapper>
              <ListItemWrapper>
                <ListTitle>Telefono</ListTitle>
                <ListLabel>{client.phone_number}</ListLabel>
              </ListItemWrapper>
  
              <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                <Button onClick={()=>handleClientForm(client)} style={{background: '#ffc107'}}>
                  <IconButton src="./imgs/update.svg" style={{width: '25px'}}/>
                </Button>
                <Button onClick={()=>removeClient(client.id)} style={{background: '#dc3545'}}>
                  <IconButton src="./imgs/trash.svg" style={{width: '25px'}}/>
                </Button>
                <Button onClick={() => toggleAccordion(client.id)} style={{background: '#0d6efd'}}>
                  <IconButton src="./imgs/address-book.svg" style={{width: '25px'}}/>
                </Button>
              </div>
            </div>

            <AccordionAddress cliendId={client.id} addresses={client.addresses}/>
            
          </ListWrapper>
        ))}
    </>
  );
}

export const ListComponent = () => {

  const {clientsState, setClients} = useContext(GlobalContext);
  const {clients} = clientsState;
  
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 5;
  const currentItems = clients.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(clients.length / 5);

  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * 5) % clients.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ClientList currentItems={currentItems} />
      <ReactPaginate
        className="react-paginate"
        breakLabel="..."
        nextLabel={<img src="./imgs/next.svg" alt="Next" style={{ width: 20, height: 20 }} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<img src="./imgs/previous.svg" alt="Next" style={{ width: 20, height: 20 }} />}
        renderOnZeroPageCount={null}
        activeClassName="selected"
        disabledClassName="disabled"
        previousClassName="previous"
        nextClassName="next"
      />
    </>
  );
};
