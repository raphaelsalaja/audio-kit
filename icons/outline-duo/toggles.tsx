import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggles({
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
          d="M10.5911 15.75H5.25C3.869 15.75 2.75 14.631 2.75 13.25C2.75 11.869 3.869 10.75 5.25 10.75H10.5911C9.78275 11.2875 9.25 12.2065 9.25 13.25C9.25 14.2935 9.78275 15.2125 10.5911 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.40802 2.25H12.75C14.131 2.25 15.25 3.369 15.25 4.75C15.25 6.131 14.131 7.25 12.75 7.25H7.40802"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.591 15.75H5.25C3.869 15.75 2.75 14.631 2.75 13.25C2.75 11.869 3.869 10.75 5.25 10.75H10.594"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 7.75C7.40685 7.75 8.75 6.40685 8.75 4.75C8.75 3.09315 7.40685 1.75 5.75 1.75C4.09315 1.75 2.75 3.09315 2.75 4.75C2.75 6.40685 4.09315 7.75 5.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25C13.9069 16.25 15.25 14.9069 15.25 13.25C15.25 11.5931 13.9069 10.25 12.25 10.25C10.5931 10.25 9.25 11.5931 9.25 13.25C9.25 14.9069 10.5931 16.25 12.25 16.25Z"
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

export default Toggles;
