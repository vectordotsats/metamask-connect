// "use client"

// import { SiWagmi } from "react-icons/si";
// import { useState } from "react";
// import { ethers } from "ethers";

// export const Navbar = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [provider, setProvider] = useState();

//   async function connect() {
//     if (typeof window.ethereum !== "undefined") {
//       try {
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         setIsConnected(true);
//         let connectedProviders = new ethers.providers.Web3Provider(
//           window.ethereum
//         );
//         setSigner(connectedProviders.getSigner());
//       } catch (e) {
//         console.log(e);
//       }
//     } else {
//       setIsConnected(false);
//     }
//   }

//   return (
//     <div className="mt-8">
//       <div className="w-9/12 m-auto flex justify-between items-center">
//         <div className="flex justify-center items-center gap-2 cursor-pointer font-bold text-xl uppercase">
//           <SiWagmi size={60} color="#000" />
//           <div className="pt-2">Wagmiverse</div>
//         </div>

//         <button
//           onClick={() => connect()}
//           className="flex justify-center items-center px-4 py-2 cursor-pointer bg-[#682ACB] text-[#fff] rounded-xl text-md font-bold"
//         >
//           Connect wallet
//         </button>
//       </div>

//       <div className="w-7/12 m-auto mt-12 text-sm size-6 animate-bounce">
//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
//           nostrum itaque accusamus placeat aut, impedit, nesciunt omnis iure
//           atque fugit obcaecati! Hic fugit quibusdam aperiam maiores, id
//           corrupti voluptatem repellendus.
//         </p>
//         <br />

//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
//           nostrum itaque accusamus placeat aut, impedit, nesciunt omnis iure
//           atque fugit obcaecati! Hic fugit quibusdam aperiam maiores, id
//           corrupti voluptatem repellendus.
//         </p>
//         <br />

//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
//           nostrum itaque accusamus placeat aut, impedit, nesciunt omnis iure
//           atque fugit obcaecati! Hic fugit quibusdam aperiam maiores, id
//           corrupti voluptatem repellendus.
//         </p>
//         <br />

//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
//           nostrum itaque accusamus placeat aut, impedit, nesciunt omnis iure
//           atque fugit obcaecati! Hic fugit quibusdam aperiam maiores, id
//           corrupti voluptatem repellendus.
//         </p>
//         <br />

//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
//           nostrum itaque accusamus placeat aut, impedit, nesciunt omnis iure
//           atque fugit obcaecati! Hic fugit quibusdam aperiam maiores, id
//           corrupti voluptatem repellendus.
//         </p>
//         <br />
//       </div>
//     </div>
//   );
// };
