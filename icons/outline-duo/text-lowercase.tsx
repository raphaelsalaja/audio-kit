import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextLowercase({
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
          d="m3.234,7.234c.486-.523,1.178-.734,1.881-.734h0c1.179,0,2.134.956,2.134,2.134v3.616"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.25,9.5c0,1.518-1.232,2.75-2.75,2.75h-.1614c-.7393,0-1.3386-.5993-1.3386-1.3386h0c0-.6436.458-1.1961,1.0904-1.3154l2.2773-.3999c.5385-.1016.8899-.6151.8012-1.1462"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.75,6.75v6.303c0,1.214-.984,2.197-2.197,2.197h0c-.728,0-1.373-.354-1.773-.899"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="5"
          width="4.395"
          fill="none"
          rx="2.095"
          ry="2.095"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.355"
          y="6.75"
        />
      </g>
    </svg>
  );
}

export default TextLowercase;
