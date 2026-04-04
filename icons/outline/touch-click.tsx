import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TouchClick({
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
          d="m17.25,15.225c0-2.059-.236-3.639-1-4.223-.875-.669-3.152-.838-5.295-.232l-1.33-2.827c-.293-.626-1.037-.896-1.663-.603h0c-.625.292-.896,1.036-.604,1.661l2.561,5.456-2.724-.501c-.587-.108-1.167.224-1.371.785h0c-.232.637.098,1.34.736,1.569l2.616.941"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.2469,11.2351c-.6221-.7392-.9969-1.6934-.9969-2.7351,0-2.3472,1.9028-4.25,4.25-4.25,1.9793,0,3.6426,1.353,4.1154,3.1846"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.1416,13.3837c-1.1751-1.2885-1.8916-3.0024-1.8916-4.8837C1.25,4.4959,4.4959,1.25,8.5,1.25c3.6994,0,6.7517,2.7708,7.1947,6.3503"
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

export default TouchClick;
