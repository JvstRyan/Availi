import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"
import { Box } from "@mui/material"
import Image from "next/image"


const Page = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Box component={'section'} className="flex justify-center items-center p-20">
      <Image src={'/helper.svg'} alt="example-steps" width={1100} height={1000} draggable={false} />
    </Box>
    <Box component={'section'} className="flex justify-center items-center p-20 mt-10">
      <Image src={'/examples.svg'} alt="example-images" width={1200} height={1000} draggable={false} />
    </Box>
    <Contact />
    </>
  )
}

export default Page