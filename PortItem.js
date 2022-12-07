export default function PortItem({item, name, image, description, link}) {


    return (
        <ul class ="card"> 
            <h5 class="overlay"><a href={link}>{description}</a> </h5>
                <div class="blur-in">
                    {/* <h3>{name}</h3> 
                    <p>{description}</p> */}
                    <img className="item-image" src={image} alt={"item image"} width="750" height="470"/>
                </div>
        </ul>
    );
}
