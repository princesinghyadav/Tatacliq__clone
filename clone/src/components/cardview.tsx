 import { Badge,Heading,Text,Box,Button,Card,HStack,Image, VStack} from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster"
import { useNavigate } from "react-router";
export const Singlepage = (item:any) => {
    const   {
  category,
  image,
  rating,
  price,
  description,
  title,
}= item ;
const handleAddToCart = (item: any) => {
  
  const existingCart = localStorage.getItem("cart");
  const cartItems = existingCart ? JSON.parse(existingCart) : [];

  // Check if item already exists
  const isExist = cartItems.some((product: any) => product.id === item.id);

  if (!isExist) {
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item added to cart ✅");
  } else {
    alert("Item already in cart");
  }
};
const Navigate =useNavigate()
  return (
    <>
      <Card.Root flexDirection="row" overflow="hidden" maxW="1/1" mt={150} p={19}>
        <Image
        //   objectFit="cover"
          maxW="400px"
          height={500}
          src={image}
          alt={category}
        />
        <Box >
          <Card.Body>
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Title mb="2">{category}</Card.Title>
            <Card.Description>{description}</Card.Description>
            <HStack mt="4">
              <Badge>
                <HStack >
                        <Heading fontSize="xl" color="green.600" fontWeight="bold">$ {(price / 80).toFixed(5)} </Heading>
                  
                        <Text fontSize="xl" color="gray.500" textDecoration="line-through">
                           $80
                        </Text>
  
                </HStack>
                
              </Badge>
            </HStack>
            <Text textStyle="1xl" fontWeight="medium" mt="2">
              {rating?.rate} &#11088; ({rating?.count})
            </Text>
          </Card.Body>
          <Card.Footer m='2.5'   >
            <HStack justifyContent='space-evenly' >
                <Button
      variant="outline"
      size="sm"
      onClick={() =>{
        console.log('jisdfhkjsdklj');
        Navigate('/product/:id/success')
      }}
    >
      Buy Now 
                </Button>

                <Button
        variant="outline"
        size='md'
        colorPalette='teal'
         
        onClick={() =>
            
        //   toaster.create({
        //     description: "Item added to cart ",
        //     type: "info",
        //   })
        handleAddToCart(item)
          
        }
      >
        Add to Cart 
                </Button>
   
            </HStack>
     <Toaster />
          </Card.Footer>
        </Box>
      </Card.Root>
    </>
  );
};
