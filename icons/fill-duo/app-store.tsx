import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AppStore({
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
          d="M14.7505 16C14.4922 16 14.2402 15.8662 14.1011 15.6265L6.85112 3.12653C6.64362 2.76813 6.76572 2.30913 7.12362 2.10113C7.48202 1.89413 7.94102 2.01523 8.14902 2.37363L15.399 14.8736C15.6065 15.232 15.4844 15.691 15.1265 15.899C15.0078 15.9674 14.8785 16 14.7505 16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.1277 10.5H2C1.5859 10.5 1.25 10.8359 1.25 11.25C1.25 11.6641 1.5859 12 2 12H11.9977L11.1277 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M16 10.5H12.8623L13.7322 12H16C16.4141 12 16.75 11.6641 16.75 11.25C16.75 10.8359 16.4141 10.5 16 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M4.26772 12L2.60112 14.8735C2.39362 15.2319 2.51572 15.6909 2.87362 15.8989C2.99232 15.9673 3.12162 16 3.24962 16C3.50792 16 3.75992 15.8662 3.89902 15.6265L6.00232 12H4.26772Z"
          fill={fill}
        />
        <path
          d="M10.8765 2.10113C10.5191 1.89413 10.0591 2.01523 9.8511 2.37363L5.1377 10.5001H6.8723L11.149 3.12663C11.3565 2.76823 11.2344 2.30913 10.8765 2.10113Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AppStore;
