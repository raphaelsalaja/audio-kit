import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dog({
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
          d="M10.75,14.25v.75c0,.966-.784,1.75-1.75,1.75h0c-.966,0-1.75-.784-1.75-1.75v-.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.588,3.014l-.622-.494c-.69-.548-1.702-.386-2.186,.351l-1.754,2.668c-.765,1.164,.07,2.711,1.462,2.711h1.193"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.412,3.014l.622-.494c.69-.548,1.702-.386,2.186,.351l1.754,2.668c.765,1.164-.07,2.711-1.462,2.711h-1.193"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25,9.595v-2.595c0-2.899-2.35-5.25-5.25-5.25S3.75,4.101,3.75,7v2.595c-.315,.474-.5,1.042-.5,1.655,0,1.657,1.343,3,3,3,1.232,0,2.288-.744,2.75-1.806,.462,1.062,1.518,1.806,2.75,1.806,1.657,0,3-1.343,3-3,0-.612-.185-1.18-.5-1.655Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="7.75 10.75 10.25 10.75 9 12.5 7.75 10.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="6.5" cy="8" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="11.5" cy="8" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default Dog;
