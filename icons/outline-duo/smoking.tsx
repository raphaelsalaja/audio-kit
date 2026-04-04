import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Smoking({
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
          d="M12.25 10.75H2.75C2.19772 10.75 1.75 11.1977 1.75 11.75V13.25C1.75 13.8023 2.19772 14.25 2.75 14.25H12.25V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.25 10.75H2.75C2.19772 10.75 1.75 11.1977 1.75 11.75V13.25C1.75 13.8023 2.19772 14.25 2.75 14.25H15.25C15.8023 14.25 16.25 13.8023 16.25 13.25V11.75C16.25 11.1977 15.8023 10.75 15.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 10.75V14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 2.25V2.5C7.25 4.019 8.481 5.25 10 5.25C11.519 5.25 12.75 6.481 12.75 8V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 2.25C13.288 2.25 15.75 4.712 15.75 7.75V8.25"
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

export default Smoking;
