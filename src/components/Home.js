function Home() {
  return (
    <div className="body pb-6 items-center bg-gray-700 h-screen">
      {/* <Title className=""/> */}
{/*       
      <div className="page-green-box rounded-lg shadow-lg bg-green-900 w-full p-0 m-0">
        <h1 className='text-center text-9xl font-black'>Welcome..</h1>
      <p className="text-center text-4xl font-bold">to a place where you can.. </p>
<span className="text-2xl">stay up to date</span>

</div> */}

    <h1 className="top-1/3 left-40 fixed font-Manrope text-5xl text-gray-400 font-semibold">Healthy <br/> at <span className="text-bold">Home</span><br/>
     <p className="drop-shadow top-80 -translate-y-4 left-40 fixed text-gray-500 text-xs leading-normal">A place where you can: stay up to date, <br />stay productive, and stay healthy.</p>
     <img className="top-1/3 w-24 left-96 fixed -translate-y-2 -translate-x-3" src='https://aux2.iconspalace.com/uploads/tomato-icon-256-1909266313.png'/>
    <img className="tomato-big fixed w-1/3 right-28 top-28" src='https://wallpapercave.com/wp/wp5329523.jpg'/>
    <div className="email-box rounded-lg align-middle w-48 h-5 text-center fixed text-xs bottom-40 bg-gray-600 shadow-lg">tomato@healthymail.com</div>
    </h1>
    </div>
  );
}

export const Title = () => {
  return <h1 className="title font-semibold"><img className="inline -translate-y-2" src='https://aux2.iconspalace.com/uploads/tomato-icon-256-1909266313.png' width='50'/>Healthy at Home</h1>;
};

// const Posts = () => {
//   return (
//     <div className="posts grid gap-4">
//       <Post
//         caption="caption"
//         description="This just in, Childe's Farewell of Snezhnaya will get a third rerun before Ganyu's first, a source says."
//         source="GameWith"
//         url="https://gamewith.net/genshin-impact/article/show/29726"
//         image="https://preview.redd.it/3ig98jjhfdh61.jpg?auto=webp&s=556a89aabe830b955862672b32c2b7878dcaacbd"
//       />
//       <Post
//         caption="caption"
//         description="This just in, Childe's Farewell of Snezhnaya will get a third rerun before Ganyu's first, a source says."
//         source="GameWith"
//         url="https://gamewith.net/genshin-impact/article/show/29726"
//         image="https://preview.redd.it/3ig98jjhfdh61.jpg?auto=webp&s=556a89aabe830b955862672b32c2b7878dcaacbd"
//       />
//       <Post
//         caption="caption"
//         description="This just in, Childe's Farewell of Snezhnaya will get a third rerun before Ganyu's first, a source says."
//         source="GameWith"
//         url="https://gamewith.net/genshin-impact/article/show/29726"
//         image="https://preview.redd.it/3ig98jjhfdh61.jpg?auto=webp&s=556a89aabe830b955862672b32c2b7878dcaacbd"
//       />
//       <Post
//         caption="caption"
//         description="This just in, Childe's Farewell of Snezhnaya will get a third rerun before Ganyu's first, a source says."
//         source="GameWith"
//         url="https://gamewith.net/genshin-impact/article/show/29726"
//         image="https://preview.redd.it/3ig98jjhfdh61.jpg?auto=webp&s=556a89aabe830b955862672b32c2b7878dcaacbd"
//       />
//     </div>
//   );
// };

export const Post = ({ caption, description, source, url, image }) => {
  return (
    <div className="group flex bg-gray-600 rounded-lg p-4 space-x-5">
      <div className="group w-2/3">
        <h2 className="group text-lg font-semibold">{caption}</h2>
        <p>{description}</p>
        <span className="group underline source">
          Source:&nbsp;
          <a href={url} target="_blank">
            {source}
          </a>
        </span>
      </div>
      <img
        className="group retain-shape w-1/3 relative align-middle"
        src={image}
      />
    </div>
  );
};

// const Preview = ({link}) => {
//   return(<div className="embed fixed">

//   </div>)
// }

export default Home;
