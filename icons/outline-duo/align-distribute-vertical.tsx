import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignDistributeVertical({
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
          d="M14.25 9.75V8.25C14.25 7.69772 13.8023 7.25 13.25 7.25L4.75 7.25C4.19771 7.25 3.75 7.69772 3.75 8.25V9.75C3.75 10.3023 4.19771 10.75 4.75 10.75H13.25C13.8023 10.75 14.25 10.3023 14.25 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 15.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 2.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 9.75V8.25C14.25 7.69772 13.8023 7.25 13.25 7.25L4.75 7.25C4.19771 7.25 3.75 7.69772 3.75 8.25V9.75C3.75 10.3023 4.19771 10.75 4.75 10.75H13.25C13.8023 10.75 14.25 10.3023 14.25 9.75Z"
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

export default AlignDistributeVertical;
