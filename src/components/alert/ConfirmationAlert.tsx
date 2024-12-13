import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

interface Props {
    title:string;
}
export const ConfirmationAlert = ({title}:Props) => {
  return (
    MySwal.fire({
        title,
        showDenyButton: true,
        denyButtonText: `SI`,
        confirmButtonText: "No"
    })
  )
}
