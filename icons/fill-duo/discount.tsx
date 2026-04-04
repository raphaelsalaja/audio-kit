import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Discount({
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
          d="M16.249 7.763L15.001 6.515V4.75C15.001 3.785 14.216 3 13.251 3H11.486L10.238 1.752C9.555 1.069 8.446 1.069 7.763 1.752L6.515 3H4.75C3.785 3 3 3.785 3 4.75V6.515L1.751 7.763C1.069 8.445 1.069 9.555 1.751 10.237L2.999 11.485V13.25C2.999 14.215 3.784 15 4.749 15H6.514L7.763 16.249C8.104 16.589 8.552 16.76 9 16.76C9.448 16.76 9.896 16.59 10.237 16.249L11.485 15.001H13.25C14.215 15.001 15 14.216 15 13.251V11.486L16.248 10.238C16.93 9.556 16.93 8.446 16.248 7.764L16.249 7.763Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 8C7.5523 8 8 7.552 8 7C8 6.448 7.5523 6 7 6C6.4477 6 6 6.448 6 7C6 7.552 6.4477 8 7 8Z"
          fill={fill}
        />
        <path
          d="M11 12C11.5523 12 12 11.552 12 11C12 10.448 11.5523 10 11 10C10.4477 10 10 10.448 10 11C10 11.552 10.4477 12 11 12Z"
          fill={fill}
        />
        <path
          d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Discount;
