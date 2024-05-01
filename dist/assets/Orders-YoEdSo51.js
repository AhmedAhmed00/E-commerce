import{j as e,L as m,z as f,A as h,T as b,C as p,r as x,l as u,M as j,O as g}from"./index-CNfmmmxb.js";function w({order:t,selectedItemId:l,setSelectedItemId:d,handleShowDetails:n}){const{id:s,totalOrderPrice:a,cartItems:i,createdAt:c}=t;function r(o){d(o),n()}return e.jsxs(m,{onClick:()=>r(s),to:`${s}`,className:`flex px-2 gap-3 justify-between py-2
                          items-center font-oswald
                          text-sm text-primary border-b
                           `+(l===s?"bg-primary-2 ":""),children:[e.jsxs("div",{className:"w-3/12",children:[e.jsxs("p",{children:["#",s]}),e.jsx("p",{className:"my-0.5",children:f(c)}),e.jsxs("p",{children:[i.length," items"]})]}),e.jsx("p",{className:"text-title",children:h(a)}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center   ",children:[e.jsx("i",{className:"text-lg me-1 text-[#0071dc]",children:e.jsx(b,{})}),e.jsx("p",{className:"text-md text-[#0071dc]",children:"In Progress"})]}),e.jsxs("div",{className:`flex\r
                  justify-between py-2 relative \r
                   before:absolute before:top-[50%] before:-translate-y-[50%] before:z-40  before:w-2/3 before:h-[3px] before:bg-[#0071dc]\r
                   after:absolute after:top-[50%] after:-translate-y-[50%] after:z-30 after:w-full after:h-[3px] after:bg-gray-300\r
                `,children:[e.jsx("span",{className:"rounded-full w-2 h-2 relative z-40 bg-[#0071dc] "}),e.jsx("span",{className:"rounded-full w-2 h-2 relative z-40 bg-[#0071dc]"}),e.jsx("span",{className:"rounded-full w-2 h-2 relative z-40 bg-[#0071dc]"}),e.jsx("span",{className:"rounded-full w-2 h-2 relative z-40 bg-gray-300 "})]})]})]})}function N(){const{orders:t,isError:l,isLoading:d}=p(),[n,s]=x.useState(!1);function a(){s(r=>!r)}const[i,c]=x.useState(null);return e.jsx(e.Fragment,{children:d?e.jsx(u,{}):l?e.jsx("div",{children:"errrrrrrrrrrrrrrrrror"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-wrap gap-5 my-6 container justify-between items-stretch",children:[e.jsxs("div",{className:"xs:w-full  md:w-5/12  lg:w-4/12 xl:w-3/12 self-start max-h-screen sticky top-20   overflow-y-scroll   rounded-lg border shadow-sm",children:[e.jsx("h3",{className:"text-head px-3 py-3 border border-b",children:"Order history"}),t.length?t.map(r=>e.jsx(w,{order:r,handleShowDetails:a,selectedItemId:i,setSelectedItemId:c},r.id)):e.jsx("div",{className:"p-3 text-center",children:"there Is no Orders yet"})]}),e.jsxs("div",{className:`
                            xs:fixed
                            xs:inset-0
                            xs:backdrop-blur-sm
                            xs-bg-black
                            xs:z-50
                            xs:justify-center
                            xs:items-center
                            xs:bg-black
                            xs:bg-opacity-50
                            md:static
                            md:z-0
                            md:block
                            md:justify-start 
                            md:items-start
                            md:bg-transparent
                            md:backdrop-blur-0
                            md:flex-1
                             `+(n?"xs:flex":"xs:hidden"),children:[e.jsx(j,{onClick:a,className:"top-5 right-5 text-2xl text-white cursor-pointer absolute md:hidden"}),e.jsx(g,{})]})]})})})}export{N as default};
