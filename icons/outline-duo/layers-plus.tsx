import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayersPlus({
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
          d="M2.66503 8.961L8.53503 5.87C8.82703 5.716 9.17503 5.716 9.46703 5.87L15.337 8.961C15.871 9.242 15.871 10.007 15.337 10.288L9.46703 13.379C9.17503 13.533 8.82703 13.533 8.53503 13.379L2.66503 10.288C2.13103 10.007 2.13103 9.242 2.66503 8.961Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.66503 8.961L8.53503 5.87C8.82703 5.716 9.17503 5.716 9.46703 5.87L15.337 8.961C15.871 9.242 15.871 10.007 15.337 10.288L9.46703 13.379C9.17503 13.533 8.82703 13.533 8.53503 13.379L2.66503 10.288C2.13103 10.007 2.13103 9.242 2.66503 8.961Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.736 12.875C15.736 13.136 15.602 13.398 15.335 13.539L9.46502 16.63C9.17302 16.784 8.82502 16.784 8.53302 16.63L2.66302 13.539C2.39602 13.398 2.26202 13.137 2.26202 12.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 0.75V5.75"
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

export default LayersPlus;
