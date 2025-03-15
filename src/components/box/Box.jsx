import './Box.css'



export const Box = ({proyectName, description }) => {

  return (
    <div className='boxcontainer'>
        <p className='proyectName'>{proyectName}</p>
          <p className='proyectDesc'>{description}</p>  
    </div>
  )
}

export default Box
