import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonImage({
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
          d="M4.68199 14.0557L9.84153 8.91702C10.6267 8.13502 11.898 8.14052 12.6764 8.92928L14.9528 11.236L15.668 10.003C16.028 9.38199 16.028 8.61699 15.668 7.99599L13.203 3.74599C12.845 3.12899 12.186 2.74899 11.473 2.74899H6.52701C5.81401 2.74899 5.15501 3.12899 4.79701 3.74599L2.33201 7.99699C1.97201 8.61799 1.97201 9.38299 2.33201 10.004L4.68199 14.0557Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.68701 14.064L9.83601 8.914C10.617 8.133 11.883 8.133 12.664 8.914L14.965 11.215"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.52701 15.25H11.473C12.186 15.25 12.845 14.87 13.203 14.253L15.668 10.003C16.028 9.38199 16.028 8.61699 15.668 7.99599L13.203 3.74599C12.845 3.12899 12.186 2.74899 11.473 2.74899H6.52701C5.81401 2.74899 5.15501 3.12899 4.79701 3.74599L2.33201 7.99699C1.97201 8.61799 1.97201 9.38299 2.33201 10.004L4.79701 14.254C5.15501 14.871 5.81401 15.251 6.52701 15.251V15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 8.5C7.44036 8.5 8 7.94036 8 7.25C8 6.55964 7.44036 6 6.75 6C6.05964 6 5.5 6.55964 5.5 7.25C5.5 7.94036 6.05964 8.5 6.75 8.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HexagonImage;
