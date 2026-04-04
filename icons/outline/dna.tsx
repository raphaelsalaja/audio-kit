import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dna({
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
          d="M6.411,11.589c-.906-.259-1.813-.518-3.107-.518-.562,0-1.109,.187-1.554,.531"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.603,1.75c-.344,.445-.531,.991-.531,1.554,0,2.589,1.036,3.625,1.036,6.214,0,.715-.29,1.362-.758,1.831h0c-.469,.469-1.116,.758-1.831,.758-.133,0-.262-.003-.387-.008"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.869,5.901c-.125-.005-.254-.008-.387-.008-.715,0-1.362,.29-1.831,.758h0c-.469,.469-.758,1.116-.758,1.831,0,2.589,1.036,3.625,1.036,6.214,0,.562-.187,1.109-.531,1.554"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25,6.397c-.445,.344-.991,.531-1.554,.531-1.295,0-2.201-.259-3.107-.518"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="9.469 9.469 9 9 9 9 8.531 8.531"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="14.388 4.549 13.919 4.081 13.919 4.081 13.451 3.612"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="4.541 14.396 4.072 13.928 4.072 13.928 3.604 13.459"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Dna;
