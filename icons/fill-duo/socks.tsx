import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Socks({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M7.49725 16.2526C7.63838 16.1468 7.77374 16.0298 7.90212 15.9015L11.6953 12.1083C12.203 11.6007 12.5373 10.8513 12.5 10.1249V2.75C12.5 1.86761 11.8463 1.13736 10.9969 1.0173C11.0776 1.0059 11.1601 1 11.2439 1H15.2439C16.2101 1 16.9939 1.78379 16.9939 2.75C16.9939 5.22133 16.9949 7.6927 16.9949 10.164C16.9949 10.8931 16.7047 11.5928 16.1892 12.1083L12.396 15.9015C11.0594 17.237 8.96545 17.3542 7.49725 16.2526Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.5 7.743H11.75C9.955 7.743 8.5 9.198 8.5 10.993C8.5 11.89 8.864 12.703 9.452 13.291L9.98333 13.8203L11.6953 12.1083C11.7598 12.0439 11.8207 11.9766 11.8779 11.9067C12.2788 11.4174 12.501 10.802 12.501 10.164C12.501 10.1509 12.5007 10.1379 12.5 10.1249V7.743Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.75001 1C5.78379 1 5.00001 1.78379 5.00001 2.75V3.5H12.5V5H5.00001V8.19634L2.71868 10.4777C1.32631 11.87 1.07149 14.2133 2.46069 15.7559C3.90879 17.3639 6.39009 17.4123 7.90212 15.9015L9.98333 13.8203L9.452 13.291C8.864 12.703 8.5 11.89 8.5 10.993C8.5 9.198 9.955 7.743 11.75 7.743H12.5V2.75C12.5 1.78379 11.7162 1 10.75 1H6.75001Z"
          fill={fill}
        />
        <path
          d="M12.5 3.5H5V5H12.5V3.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Socks;
