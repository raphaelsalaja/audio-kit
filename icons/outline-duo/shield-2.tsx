import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shield2({
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
          d="M8.695 1.848C8.79412 1.81646 8.897 1.80071 9 1.80075V8.75H2.75V4.48C2.75 4.045 3.031 3.66 3.445 3.528L8.695 1.848ZM9 16.2045V8.75H15.25V11C15.25 14.03 10.566 15.748 9.308 16.155C9.2065 16.188 9.10325 16.2045 9 16.2045Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 1.847V16.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 8.75H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.305 1.848L14.555 3.528C14.969 3.661 15.25 4.046 15.25 4.48V11C15.25 14.03 10.566 15.748 9.308 16.155C9.105 16.221 8.895 16.221 8.692 16.155C7.434 15.748 2.75 14.03 2.75 11V4.48C2.75 4.045 3.031 3.66 3.445 3.528L8.695 1.848C8.893 1.785 9.106 1.785 9.305 1.848Z"
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

export default Shield2;
