import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layers3({
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
          d="M2.665 5.086L8.534 1.995C8.826 1.841 9.174 1.841 9.466 1.995L15.336 5.086C15.87 5.367 15.87 6.132 15.336 6.413L9.466 9.504C9.174 9.658 8.826 9.658 8.534 9.504L2.665 6.414C2.131 6.133 2.131 5.367 2.665 5.086Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.665 5.086L8.534 1.995C8.826 1.841 9.174 1.841 9.466 1.995L15.336 5.086C15.87 5.367 15.87 6.132 15.336 6.413L9.466 9.504C9.174 9.658 8.826 9.658 8.534 9.504L2.665 6.414C2.131 6.133 2.131 5.367 2.665 5.086Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.736 9C15.736 9.261 15.602 9.523 15.335 9.664L9.46499 12.755C9.17299 12.909 8.82499 12.909 8.53299 12.755L2.66299 9.664C2.39599 9.523 2.26199 9.262 2.26199 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.736 12.25C15.736 12.511 15.602 12.773 15.335 12.914L9.46499 16.005C9.17299 16.159 8.82499 16.159 8.53299 16.005L2.66299 12.914C2.39599 12.773 2.26199 12.512 2.26199 12.25"
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

export default Layers3;
