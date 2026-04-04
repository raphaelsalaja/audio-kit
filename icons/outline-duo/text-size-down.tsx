import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextSizeDown({
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
          d="m11.1789,8.3244c.3715-.4093.9005-.5744,1.438-.5744h0c.9013,0,1.6314.7482,1.6314,1.6701v2.8299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.249,10.0978c0,1.188-.9418,2.1522-2.1023,2.1522h-.1234c-.5651,0-1.0233-.469-1.0233-1.0476h0c0-.5037.3501-.936.8336-1.0294l1.7409-.313c.4117-.0795.6803-.4814.6125-.897"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="9.2 12.25 6.469 5.75 6.334 5.75 3.603 12.25"
          stroke={fill}
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
          x1="4.233"
          x2="8.57"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default TextSizeDown;
