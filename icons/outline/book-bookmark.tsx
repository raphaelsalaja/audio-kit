import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookBookmark({
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
          d="M2.75,14V4.25c0-1.105,.895-2,2-2H15.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11,14H7v3.5c0,.202,.122,.385,.309,.462,.187,.079,.401,.035,.545-.108l1.146-1.146,1.146,1.146c.096,.096,.224,.146,.354,.146,.064,0,.13-.012,.191-.038,.187-.077,.309-.26,.309-.462v-3.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.25,15.75h-.75c-.966,0-1.75-.783-1.75-1.75s.784-1.75,1.75-1.75H15.25c-.641,.844-.734,2.547,0,3.5h-2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="5.75"
          cy="9.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="5.75"
          cy="4.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="5.75"
          cy="7.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BookBookmark;
