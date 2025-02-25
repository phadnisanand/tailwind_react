import './App.css'
import building from './assets/building.jpeg'
function App() {
  return (
    <>
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={building}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
          <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            Incredible accommodation for your team
          </a>
          <p className="mt-2  text-(--custom-color) md:text-[18px] text-[16px]">
            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
            places to do just that.
          </p>
          <button className="bg-sky-500 hover:bg-sky-700 p-2 m-4">Click here</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
