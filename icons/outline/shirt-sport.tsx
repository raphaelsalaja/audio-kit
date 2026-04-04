import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShirtSport({
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
          d="M9.25,12.25v-4s-.458,.806-1.431,.992"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.151,7c-.109,1.236-.178,2.574-.182,4-.005,1.918,.108,3.678,.281,5.25h-4.25s-4.25,0-4.25,0c.173-1.572,.286-3.332,.281-5.25-.004-1.426-.073-2.764-.182-4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25,8.75l1.75-.75-1.605-3.813c-.248-.589-.762-1.024-1.384-1.171l-2.263-.533c0,.01,.003,.019,.003,.028,0,1.519-1.231,2.75-2.75,2.75s-2.75-1.231-2.75-2.75c0-.01,.003-.018,.003-.028l-2.263,.533c-.622,.147-1.137,.582-1.384,1.171l-1.605,3.813,1.75,.75"
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

export default ShirtSport;
