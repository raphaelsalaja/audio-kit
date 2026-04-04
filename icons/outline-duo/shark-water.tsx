import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SharkWater({
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
          d="m5.2612,11h7.9993c-.3391-4.8721-4.1943-8.21-8.3224-8.2219,0,0,1.6132,4.6301.3231,8.2219Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.2153,10.624c-.3463-4.2192-4.0056-7.8337-8.2773-7.8459,0,0,1.2502,4.333.0654,7.821"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.75,15.25c1.401.007,2.731-.613,3.625-1.692,1.678,2.002,4.661,2.265,6.663.587.212-.178.409-.374.587-.587.894,1.078,2.224,1.699,3.625,1.692"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SharkWater;
