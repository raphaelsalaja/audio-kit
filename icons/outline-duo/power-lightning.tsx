import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PowerLightning({
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
          d="m9,16.25c4.004,0,7.25-3.25,7.25-7.25S13.004,1.75,9,1.75,1.75,5,1.75,9s3.246,7.25,7.25,7.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m8.4369,13.5l3.2659-4.75h-2.9525l.8128-4.25-3.266,4.75h2.9527l-.8128,4.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.75,3.25l.54,3C3.373,3.61,5.969,1.75,9,1.75c3.9367,0,7.1407,3.1417,7.2473,7.049"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.25,14.75l-.54-3c-1.083,2.64-3.679,4.5-6.71,4.5-3.9367,0-7.1407-3.1417-7.2473-7.0491"
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

export default PowerLightning;
