import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextColor({
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
          d="M15.25 12.75H2.75C2.19772 12.75 1.75 13.1977 1.75 13.75V15.25C1.75 15.8023 2.19772 16.25 2.75 16.25H15.25C15.8023 16.25 16.25 15.8023 16.25 15.25V13.75C16.25 13.1977 15.8023 12.75 15.25 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.57 10.25L9.27299 1.75H8.72699L5.42999 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.39999 7.75H11.6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 12.75H2.75C2.19772 12.75 1.75 13.1977 1.75 13.75V15.25C1.75 15.8023 2.19772 16.25 2.75 16.25H15.25C15.8023 16.25 16.25 15.8023 16.25 15.25V13.75C16.25 13.1977 15.8023 12.75 15.25 12.75Z"
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

export default TextColor;
