import Button from "./Button";

export default function Card( props ) {


    return(
      <div className='main'>
        <div className='card'>
            <div className="card-img">
                <img src={props.dataProduct.imgurl} alt="fotoproducto"/>
            </div>  
          <div className='card-detail'>
            <h2>{props.dataProduct.name}</h2>
            <p>{props.dataProduct.desc}</p>
            <h3>precio: {props.dataProduct.price}</h3>
            <Button type="info" text='Ver'/>
          </div>
        </div>
      </div>
    )
  }