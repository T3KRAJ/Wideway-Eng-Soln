import React from 'react'


const ServiceCard = (props) => {
    return (
       
          <div
            className="w-full flex flex-col p-4 sm:w-full lg:w-1/3 "
            style={{ backgroundImage: "url(../assets/images/innovative.jpg)" }}
          >
            <div className=" hover:bg-purple-100 flex-1 px-10 py-12 bg-white rounded-lg shadow-lg text-center items-center hover:mt-48">
              <img
                src={props.src}
                className="h-24 w-full mb-10 mt-0 text-center items-center  -mt-10"
              />
             { props.service}
            </div>
         
        
        </div>
        
    )
}

export default ServiceCard;