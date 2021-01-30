import React,{useState} from 'react'; 


const Card = ({data}) => {
    const[showModal, setShowModal]=useState('false')
    const{user,urls,location}=data;
    console.log({data})
    const toggleModal=()=>{
        setShowModal(!showModal)
    }

    return (
        <div className="card"  onClick={toggleModal}>
            <div className="card-image">
            
               <img src={urls.regular} alt={user.name}
              />
              
            </div>
            <div className="card-overlay">
                <h2>{user.name}</h2>
                <p>{user.location}</p>
            </div>
        </div>
    )
}

export default Card