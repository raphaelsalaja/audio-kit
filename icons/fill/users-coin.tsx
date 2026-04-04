import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersCoin({
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
          d="m5.25,5.5c1.2426,0,2.25-1.0071,2.25-2.25s-1.0074-2.25-2.25-2.25-2.25,1.0071-2.25,2.25,1.0074,2.25,2.25,2.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,10c-2.068,0-3.75,1.682-3.75,3.75s1.682,3.75,3.75,3.75,3.75-1.682,3.75-3.75-1.682-3.75-3.75-3.75Zm.75,4.5c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.7121,8.529c-.32-.355-.575-.547-.834-.736-.756-.551-1.688-.793-2.628-.793-2.216,0-4.167,1.569-4.641,3.732-.188.864.35,1.748,1.225,2.012.554.167,1.125.295,1.744.385.014.001.098.008.233.016.293-2.512,2.346-4.475,4.901-4.617v.001Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.75,5.5c1.2426,0,2.25-1.0071,2.25-2.25s-1.0074-2.25-2.25-2.25-2.25,1.0071-2.25,2.25,1.0074,2.25,2.25,2.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.2881,8.529c.32-.355.575-.547.834-.736.756-.551,1.688-.793,2.628-.793,2.216,0,4.167,1.569,4.641,3.732.188.864-.35,1.748-1.225,2.012-.554.167-1.125.295-1.744.385-.014.001-.098.008-.233.016-.293-2.512-2.346-4.475-4.901-4.617v.001Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default UsersCoin;
