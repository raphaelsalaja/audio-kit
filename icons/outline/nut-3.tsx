import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut3({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle
          cx="6"
          cy="6"
          fill="none"
          r="1.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m7.871,1.25h-3.743c-.54,0-1.038.289-1.309.758l-1.865,3.23c-.272.472-.272,1.053,0,1.525l1.865,3.23c.271.469.77.758,1.309.758h3.743c.54,0,1.038-.289,1.309-.758l1.865-3.23c.272-.472.272-1.053,0-1.525l-1.865-3.23c-.271-.469-.77-.758-1.309-.758Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Nut3;
