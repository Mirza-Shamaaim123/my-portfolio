import Hero from "@/components/Hero";
// app/layout.jsx ya app/page.jsx me


export default function Page() {
  return (
    <>

      <div className="w-screen h-screen bg-black top-0 left-0  absolute inset-0 -z-10 ">
        {/* <Navbar /> */}
         <Hero />

        {/* <Beams /> */}
       
      </div>


      {/* <Navbar/>
    <div className="w-full h-screen bg-black text-green-700 flex justify-between px-20 py-10 ">
     <div className="w-full h-32  flex justify-between text-center items-center ">
      <h1 className="text-yellow-400 text-6xl">Hello</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>resume</li>
        <li>work</li>
        <li>contact</li>
<Button>hello</Button>
      </ul>
      </div>
     

    </div> */}

    </>

  );
}
