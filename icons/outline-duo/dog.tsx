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
          d="m14.25,9.595v-2.595c0-2.899-2.35-5.25-5.25-5.25S3.75,4.101,3.75,7v2.595c-.315.474-.5,1.042-.5,1.655,0,1.657,1.343,3,3,3,1.232,0,2.288-.744,2.75-1.806.462,1.062,1.518,1.806,2.75,1.806,1.657,0,3-1.343,3-3,0-.612-.185-1.18-.5-1.655Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.75,14.25v.75c0,.966-.784,1.75-1.75,1.75s-1.75-.784-1.75-1.75v-.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.588,3.014l-.622-.494c-.69-.548-1.702-.386-2.186.351l-1.754,2.668c-.765,1.164.07,2.711,1.462,2.711h1.193"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.412,3.014l.622-.494c.69-.548,1.702-.386,2.186.351l1.754,2.668c.765,1.164-.07,2.711-1.462,2.711h-1.193"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.25,9.595v-2.595c0-2.899-2.35-5.25-5.25-5.25S3.75,4.101,3.75,7v2.595c-.315.474-.5,1.042-.5,1.655,0,1.657,1.343,3,3,3,1.232,0,2.288-.744,2.75-1.806.462,1.062,1.518,1.806,2.75,1.806,1.657,0,3-1.343,3-3,0-.612-.185-1.18-.5-1.655Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.75,10.75h2.5l-1.25,1.75-1.25-1.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.5,9c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.5,9c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Dog;
