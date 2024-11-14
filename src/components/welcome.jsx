import React from "react";

export default function welcome() {
  return (
    <div>
      <section
        id="welcome"
        class="flex flex-col mt-20 items-center justify-center space-y-6 text-center"
      >
        <h1 class="text-5xl font-bold text-purple-500">Welcome to Filmatic</h1>
        <p class="text-lg ">Find your favorite movies and discover new ones!</p>
      </section>
    </div>
  );
}
