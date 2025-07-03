 



import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Cards from "@/components/cards";
import LoadingIndicator from "@/components/loading";
import { ErrorIndicator } from "@/components/error";
import {  SimpleGrid, Container,Input, Button,HStack,Text} from "@chakra-ui/react";

const initialState = {
  loading: false,
  error: false,
  data: [],
};
type Action = { type: string; payload?: any };
const reducer = (state:any, action :Action) => {
  switch (action.type) {
    case "fetch_loading":
      return { loading: true, error: false, data: [] };
    case "fetch_success":
      return { loading: false, error: false, data: action.payload };
    case "fetch_error":
      return {...state, loading: false, error: true, data: []  };
    default:
      throw new Error("Unknown action type");
  }
};

export default function Product() {
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch,setDebouncedSearch]=useState('')
  const itemsPerPage = 8;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, data } = state;

  const fetchDetails = async (url :any ,debouncedSearch:any) => {
    try {
      dispatch({ type: "fetch_loading" });
      const res = await axios.get(url);
      let result = [...res.data];

      if (debouncedSearch) {
        result = result.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (sortOrder === "lowToHigh") {
        result.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "highToLow") {
        result.sort((a, b) => b.price - a.price);
      } else if (sortOrder === "rating") {
        result.sort((a, b) => b.rating.rate - a.rating.rate);
      }

      dispatch({ type: "fetch_success", payload: result });
    } catch (error) {
      dispatch({ type: "fetch_error" });
      console.error(error);
    }
  };
  useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncedSearch(searchTerm);
  }, 1000); // delay to debounce input

  return () => clearTimeout(timeout); // clear previous timeout cleanup function 
}, [searchTerm]);


  useEffect(() => {
    const url =
      category === ""
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(
            category
          )}`;
    fetchDetails(url ,debouncedSearch);
  }, [category, sortOrder, debouncedSearch]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorIndicator />
      ) : (
        <Container maxW="75%">
          <HStack  mt='35px' mb={4} flexWrap="wrap" justifyContent='space-evenly'>
            <select
              className="filter-select"
              value={category}
              onChange={(e:any ) => setCategory(e.target.value)}
              
            >
              <option value="">Filter by category</option>  
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>

            <select
             className="filter-select"
              value={sortOrder}
              onChange={(e:any) => setSortOrder(e.target.value)}
              
            >
              <option value="">Sorting on Prices and Ratings</option>  
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>

            <Input
              className="filter-input"
              mt='35px'
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}   mt={5}>
            {currentItems.map((item:any ) => (
              <Cards key={item.id} {...item} />
            ))}
          </SimpleGrid>

          <HStack justify="center" mt={8}  >
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              
            >
              Previous
            </Button>
            <Text>Page {currentPage} of {totalPages}</Text>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              
            >
              Next
            </Button>
          </HStack>
        </Container>
      )}
    </>
  );
}
