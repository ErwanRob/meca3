import React from "react";
/* import { BsDownload } from "react-icons/bs"; */
import { FaDownload } from "react-icons/fa6";

export interface DownloadButtonProps {
  href: string;
  fileName: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  fileName,
  className = "",
}) => {
  return (
    <div className="flex items-baseline rounded-xl border border-gray-200 text-gray-500 shadow-sm transition-all duration-150 hover:scale-[1.05] hover:bg-gray-100 hover:text-gray-700">
      <a
        href={href}
        download={fileName}
        className={`flex h-full items-center rounded-xl p-2 ${className}`}
      >
        {/*     <BsDownload className="text-gray-500" /> */}
        <FaDownload className="w-8" />
      </a>
    </div>
  );
};

export default DownloadButton;
