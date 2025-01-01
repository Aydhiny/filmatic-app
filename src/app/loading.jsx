import Image from "next/image";
import React from "react";
export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-96"
        width={100}
        height={100}
        src="spinner.svg"
        alt="loading..."
      />
    </div>
  );
}
