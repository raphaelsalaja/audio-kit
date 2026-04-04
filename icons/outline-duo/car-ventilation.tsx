import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CarVentilation({
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
          d="M2.25 3.99998C6.75 2.33328 11.25 2.33328 15.75 3.99998V13.3672C15.6559 13.3323 14.9891 13.1333 14.1074 12.872L14.043 12.6094C13.7595 11.7355 13.2378 11.1112 12.8438 10.7119L12.4824 10.3642C12.2988 10.1906 12.2025 10.0919 12.1406 10.0205C12.2337 9.70075 12.4647 9.4326 12.6729 9.17966C13.4058 8.29008 13.3433 7.00102 12.5566 6.18748L12.3877 6.03025L12.2158 5.89841C11.394 5.32963 10.2992 5.37782 9.53125 5.99314C9.32759 6.17306 9.15254 6.37104 8.98535 6.58591C8.81955 6.31203 8.59252 6.09148 8.34082 5.89841C7.51897 5.32963 6.42423 5.37782 5.65625 5.99314C4.34861 7.14836 3.5086 9.05392 3.81152 10.8037C3.84599 11.0027 3.89956 11.1952 3.95605 11.3886C4.04597 11.6662 4.16075 11.9184 4.28711 12.1465C3.25585 12.3186 2.41784 12.4652 2.25 12.5273V3.99998Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.937 7.75C10.055 8.797 9.72204 9.742 9.93904 10.583C10.26 11.831 11.614 12.166 11.936 13.416C12.153 14.258 11.82 15.202 10.938 16.249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8492 12.708C15.1495 12.8044 15.4497 12.8887 15.75 13V3.99999C11.25 2.33329 6.75 2.33329 2.25 3.99999V13C2.7219 12.8252 3.1937 12.6794 3.6655 12.5413"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.06203 7.75C6.18003 8.797 5.84704 9.742 6.06404 10.583C6.38504 11.831 7.73903 12.166 8.06103 13.416C8.27803 14.258 7.94504 15.202 7.06304 16.249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CarVentilation;
