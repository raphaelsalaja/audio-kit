import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SpiderWeb({
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
          d="M3.338,5.743c.327,.841,.614,1.947,.614,3.257,0,.598-.06,1.833-.613,3.256l.009,.019c.892,.137,1.993,.441,3.128,1.096,.518,.299,1.557,.968,2.514,2.159l.021,.002c.564-.704,1.379-1.506,2.514-2.161,.518-.299,1.617-.865,3.127-1.097l.012-.017c-.327-.841-.614-1.947-.614-3.257,0-.598,.06-1.833,.613-3.256l-.009-.019c-.892-.137-1.993-.441-3.128-1.096-.518-.299-1.557-.968-2.514-2.159l-.021-.002c-.564,.704-1.379,1.506-2.514,2.161-.518,.299-1.617,.865-3.127,1.097l-.012,.017Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="1.25"
          y2="16.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.712"
          x2="2.288"
          y1="5.125"
          y2="12.875"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.712"
          x2="2.288"
          y1="12.875"
          y2="5.125"
        />
      </g>
    </svg>
  );
}

export default SpiderWeb;
