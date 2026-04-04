import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Diet({
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
          d="M8.25,16.25H3.75c-1.105,0-2-.895-2-2V3.75c0-1.105,.895-2,2-2H12.25c1.105,0,2,.895,2,2v2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.408,11.124c-.912-.724-1.938-.128-2.805-.128s-1.789-.632-2.805,.128-1.114,2.678,.014,4.457c1.083,1.708,2.175,1.038,2.792,1.038s1.709,.671,2.792-1.038c1.127-1.779,.851-3.794,.012-4.457Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.167,7.5h0c.184,0,.333,.149,.333,.333h0c0,.92-.747,1.667-1.667,1.667h0c-.184,0-.333-.149-.333-.333h0c0-.92,.747-1.667,1.667-1.667Z"
          fill={secondaryfill}
          stroke="none"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.75"
          x2="5.25"
          y1="5.25"
          y2="5.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="11.25"
          y1="5.25"
          y2="5.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.75"
          x2="5.25"
          y1="8.25"
          y2="8.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.75"
          x2="5.25"
          y1="11.25"
          y2="11.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="11.25"
          y1="8.25"
          y2="8.25"
        />
      </g>
    </svg>
  );
}

export default Diet;
