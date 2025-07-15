import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="w-auto flex items-center justify-center">
      <Image
        src="/logo/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="w-24 h-24 object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
