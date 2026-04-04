import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MaskRect({
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
          d="M8.75 1.75H14.75C15.3023 1.75 15.75 2.19772 15.75 2.75V15.25C15.75 15.8023 15.3023 16.25 14.75 16.25H8.75C8.19772 16.25 7.75 15.8023 7.75 15.25V12.25H11.25C11.802 12.25 12.25 11.802 12.25 11.25V6.75C12.25 6.198 11.802 5.75 11.25 5.75H7.75V2.75C7.75 2.19772 8.19772 1.75 8.75 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.75 5.75H11.25C11.802 5.75 12.25 6.198 12.25 6.75V11.25C12.25 11.802 11.802 12.25 11.25 12.25H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 1.75H8.75C8.19772 1.75 7.75 2.19772 7.75 2.75V15.25C7.75 15.8023 8.19772 16.25 8.75 16.25H14.75C15.3023 16.25 15.75 15.8023 15.75 15.25V2.75C15.75 2.19772 15.3023 1.75 14.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 12.25H2.75C2.198 12.25 1.75 11.802 1.75 11.25V6.75C1.75 6.198 2.198 5.75 2.75 5.75H4.75"
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

export default MaskRect;
