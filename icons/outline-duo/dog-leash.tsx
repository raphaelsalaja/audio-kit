import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DogLeash({
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
          d="m10.25,15.75v-3.75h-.3494c-1.3987,0-2.7624-.437-3.9006-1.25h0s-.75,2.5-.75,2.5v2.5h-3v-7c0-1.1046.8954-2,2-2h6.5l1.5-5,1.5,2.25,3.5.75-.2391,1.5541c-.1501.9757-.9896,1.6959-1.9767,1.6959h-.7842l-1,5v2.75h-3Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.25,15.75v-3.75h-.3494c-1.3987,0-2.7624-.437-3.9006-1.25h0s-.75,2.5-.75,2.5v2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.25,15.75v-7c0-1.1046.8954-2,2-2h6.5l1.5-5,1.5,2.25,3.5.75-.2391,1.5541c-.1501.9757-.9896,1.6959-1.9767,1.6959h-.7842l-1,5v2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.25,4.75h0c0,1.1046.8954,2,2,2h.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.75,6.75c.3103,1.3474,1.4227,2.2378,3.2,2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.75,4.25c-1.6569,0-3-1.3431-3-3"
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

export default DogLeash;
