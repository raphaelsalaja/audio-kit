import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tag2({
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
          d="M10 16.6704C9.2959 16.6704 8.5918 16.4023 8.0557 15.8662L2.3057 10.1162C1.7862 9.5967 1.5 8.90621 1.5 8.17191V3.25C1.5 2.2852 2.2852 1.5 3.25 1.5H8.1719C8.9063 1.5 9.5967 1.78609 10.1162 2.30569L15.8662 8.05569C16.9385 9.12799 16.9385 10.8721 15.8662 11.9444L11.9443 15.8663C11.4082 16.4024 10.7041 16.6704 10 16.6704Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25 8C7.2165 8 8 7.2165 8 6.25C8 5.2835 7.2165 4.5 6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25C4.5 7.2165 5.2835 8 6.25 8Z"
          fill={fill}
        />
        <path
          d="M6.25 16.75C5.8359 16.75 5.5 16.4141 5.5 16V7.75C5.5 7.3359 5.8359 7 6.25 7C6.6641 7 7 7.3359 7 7.75V16C7 16.4141 6.6641 16.75 6.25 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tag2;
