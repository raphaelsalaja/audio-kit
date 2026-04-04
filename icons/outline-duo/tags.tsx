import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tags({
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
          d="m2.25,4.25h5.586c.265,0,.52.105.707.293l5.043,5.043c.781.781.781,2.047,0,2.828l-3.172,3.172c-.781.781-2.047.781-2.828,0l-5.043-5.043c-.188-.188-.293-.442-.293-.707v-5.586Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.25,4.25h5.586c.265,0,.52.105.707.293l5.1065,5.1065c.781.781.781,2.047,0,2.828l-3.172,3.172c-.781.781-2.047.781-2.828,0l-5.1065-5.1065c-.188-.188-.293-.442-.293-.707v-5.586Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.75,1.25h5.586c.265,0,.52.105.707.293l5.7705,5.7705"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="5.75" cy="7.75" fill={fill} r="1.25" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Tags;
