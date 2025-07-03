import { Button, Card, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router";
const Cards  = (list :any ) => {
    const {category,image,rating, price,description,title,id}=list;
    // const {rate , count}=rating 
    // console.log(rating.rate)
    const Navigate =useNavigate()
    const preview = description.split(" ").slice(0, 10).join(" ") + "……";
  return (
    <Card.Root maxW="sm" overflow="hidden"  m={5}>
      <Image 
        aspectRatio={4/ 3}
        // width="px"
        // height="260px"
        src={image}
        alt={category}
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {preview}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $ {price/80}
        </Text>
         <Text textStyle="1xl" fontWeight="medium" letterSpacing="" mt="2">
           {rating.rate } &#11088;  ({rating.count})
        </Text>
      </Card.Body>
      <Card.Footer gap="5">
        <Button variant="solid" onClick={()=>{
          
         Navigate(`/product/${id}`) 
        console.log("hfn")} 
        }
        >View Details</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default Cards