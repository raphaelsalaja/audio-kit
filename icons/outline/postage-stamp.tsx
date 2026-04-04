import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PostageStamp({
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
        <rect
          height="6.5"
          width="6.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="5.75"
          y="5.75"
        />
        <path
          d="M14.75,11.75c0-.652,.419-1.202,1-1.408v-2.684c-.581-.207-1-.756-1-1.408s.419-1.202,1-1.408v-1.592c0-.552-.448-1-1-1h-1.592c-.207,.581-.756,1-1.408,1s-1.202-.419-1.408-1h-2.684c-.207,.581-.756,1-1.408,1s-1.202-.419-1.408-1h-1.592c-.552,0-1,.448-1,1v1.592c.581,.207,1,.756,1,1.408s-.419,1.202-1,1.408v2.684c.581,.207,1,.756,1,1.408s-.419,1.202-1,1.408v1.592c0,.552,.448,1,1,1h1.592c.207-.581,.756-1,1.408-1s1.202,.419,1.408,1h2.684c.207-.581,.756-1,1.408-1s1.202,.419,1.408,1h1.592c.552,0,1-.448,1-1v-1.592c-.581-.207-1-.756-1-1.408Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.749,11.216c1.235-1.361,3.018-2.216,5.001-2.216,.516,0,1.018,.058,1.5,.167"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PostageStamp;
