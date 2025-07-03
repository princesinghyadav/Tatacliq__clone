
import { Spinner, Text, VStack } from "@chakra-ui/react"
 
export const LoadingIndicator = () => {
  return (
    <VStack colorPalette="teal" mt={90} >
      <Spinner color="colorPalette.800" mt={90} size='lg' borderWidth={6} />
      <Text color="colorPalette.800"  size='lg' >Loading.... </Text>
    </VStack>
  )
}

export default LoadingIndicator;