import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StringStartsWith({
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
          d="m4.734,6.484c.486-.523,1.178-.734,1.881-.734h0c1.179,0,2.134.956,2.134,2.134v3.616"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.75,8.75c0,1.518-1.232,2.75-2.75,2.75h-.1614c-.7393,0-1.3386-.5993-1.3386-1.3386h0c0-.6436.458-1.1961,1.0904-1.3154l2.2773-.3999c.5385-.1016.8899-.6151.8012-1.1462"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.25,14.75H3.25c-1.1046,0-2-.8954-2-2v-1.5"
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
          x1="11.75"
          x2="11.75"
          y1="2.75"
          y2="11.5"
        />
        <ellipse
          cx="14"
          cy="8.75"
          fill="none"
          rx="2.25"
          ry="2.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default StringStartsWith;
