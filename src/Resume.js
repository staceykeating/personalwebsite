import React from 'react';

let expanded = false;
let buttonClass = "my-1 m-auto w-11/12 place-items-center flex-col font-classic bg-peachy-900 text-peachy-200 rounded p-3 shadow-md hover:text-peachy-600 hover:bg-peachy-200 focus:outline-none";
export default function Resume () {
  return (
    <div class="flex-col  grid-cols-1 place-items-center">
<h1 class="flex place-content-center font-normal grid-cols-1 font-cursive text-6xl text-peachy-800 hover:text-peachy-400"> Stacey Keating </h1>
<div class="flex-col font-classic text-center place-content-center">
<button type="button" class={buttonClass} >Contact Details </button>
  <div class="hidden h-auto content">
  <li>(778) 874-7144 </li>
  <li> staceyamberkk@gmail.com </li>
  <li> Github </li>
  <li>LinkedIn </li>
  </div>
</div>
<button class={`${buttonClass} ${expanded ? 'flex' : 'hidden'}`}>Summary</button>
<p class="flex-col font-classic text-center place-content-center">
Full stack web developer with a background in management, sales and customer service. 
Meticulous and hard working, I enjoy collaboration, change, and tackling challenges with a smile. 
My penchant for problem solving lured me into the world of code, 
  and I'm excited to apply it to development.
</p>
</div>)
};