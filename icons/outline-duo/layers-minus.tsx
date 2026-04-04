import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayersMinus({
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
          d="M2.665 8.961L8.535 5.87C8.827 5.716 9.175 5.716 9.467 5.87L15.337 8.961C15.871 9.242 15.871 10.007 15.337 10.288L9.467 13.379C9.175 13.533 8.827 13.533 8.535 13.379L2.665 10.288C2.131 10.007 2.131 9.242 2.665 8.961Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.665 8.961L8.535 5.87C8.827 5.716 9.175 5.716 9.467 5.87L15.337 8.961C15.871 9.242 15.871 10.007 15.337 10.288L9.467 13.379C9.175 13.533 8.827 13.533 8.535 13.379L2.665 10.288C2.131 10.007 2.131 9.242 2.665 8.961Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.736 12.875C15.736 13.136 15.602 13.398 15.335 13.539L9.46499 16.63C9.17299 16.784 8.82499 16.784 8.53299 16.63L2.66299 13.539C2.39599 13.398 2.26199 13.137 2.26199 12.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.25H12.25"
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

export default LayersMinus;
