import Swal, { SweetAlertIcon } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

interface Props {
    title:string;
    icon:SweetAlertIcon;
}
export const InfoAlert = ({title, icon}:Props) => {
  return (
    MySwal.fire({
        title,
        position: "center",
        icon,
        showConfirmButton: false,
        timer: 1500
    })
  )
}
