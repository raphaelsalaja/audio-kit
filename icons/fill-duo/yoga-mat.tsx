import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function YogaMat({
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
          d="M2.24999 3.5H14.75C15.7162 3.5 16.5 4.28379 16.5 5.25V13.75C16.5 14.7162 15.7162 15.5 14.75 15.5H4.75001C2.95479 15.5 1.50001 14.0452 1.50001 12.25L1.5 8.25C1.61474 7.38943 2 4.5 2.24999 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 12.2459C8 12.6572 7.66879 12.9918 7.25754 12.9959C6.84629 13 6.50842 12.6722 6.50015 12.261C6.46763 10.6437 5.34987 9.77227 3.97537 9.77227C2.6358 9.77227 1.53906 10.8375 1.5 12.1765V4.73629C1.5 2.94894 2.94894 1.5 4.73629 1.5C6.52365 1.5 8 2.5 8 4.73629V12.2459Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default YogaMat;
