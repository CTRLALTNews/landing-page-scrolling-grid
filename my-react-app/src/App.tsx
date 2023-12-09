import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type MarqueeDetail = {
  image: string;
  id: number;
}

const marqueeDetails: MarqueeDetail[] = [
  {
    image: "/image (1).webp",
    id: 1,
  },
  {
    image: "/image (2).webp",
    id: 2
  },
  {
    image: "/image (3).webp",
    id: 3
  },
  {
    image: "/image (4).webp",
    id: 4
  },
  {
    image: "/image (5).webp",
    id: 5
  },
  {
    image: "/image (6).webp",
    id: 6
  },
  {
    image: "/image (7).webp",
    id: 7
  },
  {
    image: "/image (8).webp",
    id: 8
  },
]

function splitArray<T>(array: Array<T>, parts: number): Array<Array<T>> {
  const size = Math.ceil(array.length / parts);
  return Array.from({ length: parts }, (v, i) =>
    array.slice(i * size, i * size + size)
  );
}

function Card(props: { marquee: MarqueeDetail }) {
  return (
    <div className="w-[24rem] min-h-[16rem] h-[16rem] rounded-3xl bg-gray-300  mx-8 flex items-center justify-center ">
      <img src={props.marquee.image} className="relative h-full w-full object-cover rounded-3xl select-none	" alt={"image"} />
    </div>
  )
}

function App() {
  const [allMarqueesDetails, setAllMarqueesDetails] = useState<Array<Array<MarqueeDetail>>>()


  useEffect(() => {
    const { innerHeight: screenHeight } = window;
    const heightOfMarquee = 256; //In px
    const gapOfFlexLayout = 32; // In px
    const totalMarqueeHeight = heightOfMarquee + gapOfFlexLayout;
    const totalMarqueesAmount = Math.ceil(screenHeight / totalMarqueeHeight);
    const splitMarqueesDetails = splitArray(marqueeDetails, totalMarqueesAmount)
    setAllMarqueesDetails(splitMarqueesDetails)
  }, [])

  console.log(allMarqueesDetails)

  return (
    <div className="h-screen w-screen flex">
      <section className="w-full sm:w-1/2 lg:w-3/5 h-full flex flex-col">
        <nav className="w-full h-12 border border-b px-2 lg:px-16 flex items-center justify-between">
          <div className="flex font-bold">
            <p>Pixion</p>
          </div>
          <ul className="flex gap-8">
            <li><a className="border-b-2 border-b-transparent hover:border-b-blue-500 transition-colors p-1" href="#">Home</a></li>
            <li><a className="border-b-2 border-b-transparent hover:border-b-blue-500 transition-colors p-1" href="#">Pricing</a></li>
            <li><a className="border-b-2 border-b-transparent hover:border-b-blue-500 transition-colors p-1" href="#">Contact</a></li>
          </ul>
        </nav>

        <main className="w-full flex flex-col lg:flex-row flex-grow py-8 px-16 gap-16 lg:justify-center items-center h-full overflow-y-auto">
          <div className="w-full items-center text-center lg:text-left lg:items-start lg:w-1/2 h-fit flex flex-col gap-4 lg:gap-8">
            <h1 className="text-4xl sm:text-4xl md:text-6xl 2xl:text-8xl font-black">Pixion</h1>
            <h2 className="text-base  xl:text-xl">Pixion makes it easy to upload, categorize, and access all your most precious photos and videos. Relive your favorite moments.</h2>
          </div>
          <hr className="w-full lg:hidden"/>
          <div className="flex flex-col w-full lg:w-1/2 h-fit items-center justify-center gap-8">
            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-center">Sign Up Today</h3>
            <div className="w-full h-fit flex flex-col justify-center gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="emailInput" className="text-sm">Email</label>
                <input type="email" className="w-full border p-2  px-4 rounded" id="emailInput" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="passwordInput" className="text-sm">Password</label>
                <input type="password" className="w-full border p-2  px-4 rounded" id="passwordInput" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPasswordInput" className="text-sm">Confirm Password</label>
                <input type="password" className="w-full border p-2 px-4 rounded" id="confirmPasswordInput" />
              </div>
            <button className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-700 transition-colors">Sign Up</button>
            </div>
            <div className="flex w-full h-fit items-center justify-between flex-col xl:flex-row">
              <p className="text-sm text-blue-700">✓ Lifetime Cloud Storage</p>
              <p className="text-sm text-blue-700">✓ Privacy Controls</p>
              <p className="text-sm text-blue-700">✓ Share Memories</p>
            </div>
          </div>
        </main>

      </section>
      <section className="hidden sm:flex w-1/2 lg:w-2/5 h-full border border-l flex-col justify-center gap-16 overflow-y-hidden flex-nowrap">
        {allMarqueesDetails?.map((marquees, i) => {
          return (
            <Marquee className="min-h-[16rem] w-full " autoFill direction={i % 2 == 0 ? "left" : "right"} speed={10}>
              {marquees.map((marquee) => {
                return (
                  <Card key={marquee.id} marquee={marquee} />
                )
              })}
            </Marquee>
          )
        })}
      </section>
    </div>
  )
}

export default App
