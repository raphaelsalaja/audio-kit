import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CoffeeMachine({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M21 17V9.5L17 11.5V19L21 17Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17 14.5L19 13.5" stroke={fill} strokeLinecap="round" />
        <path
          d="M9.5 20V18H11L13 17V18L11.5 19.5L9.5 20Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M21 4L9 10V13L21 7V4Z" fill={secondaryfill} fillOpacity=".3" />
        <path d="M9 10L3 7" stroke={fill} />
        <path d="M21 4L9 10V13" stroke={fill} />
        <path
          d="M21 6.38197V4.61803C21 4.23926 20.786 3.893 20.4472 3.72361L15.6708 1.33541C15.2485 1.12426 14.7515 1.12426 14.3292 1.33541L3.55279 6.72361C3.214 6.893 3 7.23926 3 7.61803V9.38197C3 9.76074 3.214 10.107 3.55279 10.2764L8.32918 12.6646C8.75147 12.8757 9.24853 12.8757 9.67082 12.6646L20.4472 7.27639C20.786 7.107 21 6.76074 21 6.38197Z"
          stroke={fill}
        />
        <path
          d="M21 6V16.382C21 16.7607 20.786 17.107 20.4472 17.2764L9.89443 22.5528C9.33137 22.8343 8.66863 22.8343 8.10557 22.5528L3.89443 20.4472C3.5259 20.263 3.5259 19.737 3.89443 19.5528L6.38101 18.3095M11 12V15"
          stroke={fill}
        />
        <path d="M17 19L13 17" stroke={fill} />
        <path d="M17 19V9" stroke={fill} />
        <path
          d="M13 16.5C13 17.3284 11.433 18 9.5 18C7.567 18 6 17.3284 6 16.5C6 15.6716 7.567 15 9.5 15C11.433 15 13 15.6716 13 16.5Z"
          stroke={fill}
        />
        <path
          d="M6 16.5V17C6 18.6569 7.567 20 9.5 20C11.433 20 13 18.6569 13 17V16.5"
          stroke={fill}
        />
        <path d="M11 3L17 6" stroke={fill} />
      </g>
    </svg>
  );
}

export default CoffeeMachine;
