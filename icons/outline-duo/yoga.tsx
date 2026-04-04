import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Yoga({
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
          d="M9 3.75C9.82843 3.75 10.5 3.07843 10.5 2.25C10.5 1.42157 9.82843 0.75 9 0.75C8.17157 0.75 7.5 1.42157 7.5 2.25C7.5 3.07843 8.17157 3.75 9 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 3.75C9.82843 3.75 10.5 3.07843 10.5 2.25C10.5 1.42157 9.82843 0.75 9 0.75C8.17157 0.75 7.5 1.42157 7.5 2.25C7.5 3.07843 8.17157 3.75 9 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.74999L13.604 8.39599C13.409 8.59099 13.092 8.59099 12.897 8.39599L11.336 6.83499C10.961 6.45999 10.452 6.24899 9.922 6.24899H9H8.078C7.548 6.24899 7.039 6.45999 6.664 6.83499L5.103 8.39599C4.908 8.59099 4.591 8.59099 4.396 8.39599L2.75 6.74999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.589C9.155 12.765 9.25 12.997 9.25 13.25C9.25 13.802 8.802 14.25 8.25 14.25H5.654C4.879 14.25 4.25 13.621 4.25 12.846C4.25 12.202 4.688 11.64 5.313 11.484L7.25 11V6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 6.5V11L12.687 11.484C13.312 11.64 13.75 12.202 13.75 12.846C13.75 13.621 13.121 14.25 12.346 14.25H11.606"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 16.75H15.75"
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

export default Yoga;
