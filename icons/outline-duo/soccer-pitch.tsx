import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoccerPitch({
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
          d="M2.75 3.75H15.25C15.8023 3.75 16.25 4.19772 16.25 4.75V13.25C16.25 13.8023 15.8023 14.25 15.25 14.25H2.75C2.19772 14.25 1.75 13.8023 1.75 13.25V4.75C1.75 4.19772 2.19772 3.75 2.75 3.75ZM10.75 9C10.75 9.9665 9.9665 10.75 9 10.75C8.0335 10.75 7.25 9.9665 7.25 9C7.25 8.0335 8.0335 7.25 9 7.25C9.9665 7.25 10.75 8.0335 10.75 9ZM2 6.75H3.25C3.802 6.75 4.25 7.198 4.25 7.75V10.25C4.25 10.802 3.802 11.25 3.25 11.25H2V6.75ZM14.75 6.75H16V11.25H14.75C14.198 11.25 13.75 10.802 13.75 10.25V7.75C13.75 7.198 14.198 6.75 14.75 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.25V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75V14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 6.75H3.25C3.802 6.75 4.25 7.198 4.25 7.75V10.25C4.25 10.802 3.802 11.25 3.25 11.25H2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 6.75H14.75C14.198 6.75 13.75 7.198 13.75 7.75V10.25C13.75 10.802 14.198 11.25 14.75 11.25H16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 3.75H2.75C2.19772 3.75 1.75 4.19772 1.75 4.75V13.25C1.75 13.8023 2.19772 14.25 2.75 14.25H15.25C15.8023 14.25 16.25 13.8023 16.25 13.25V4.75C16.25 4.19772 15.8023 3.75 15.25 3.75Z"
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

export default SoccerPitch;
