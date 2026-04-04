import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderWidth({
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
          d="M15.75 9.25H2.25C1.97386 9.25 1.75 9.47386 1.75 9.75V11.25C1.75 11.5261 1.97386 11.75 2.25 11.75H15.75C16.0261 11.75 16.25 11.5261 16.25 11.25V9.75C16.25 9.47386 16.0261 9.25 15.75 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 2.75H2.25C1.97386 2.75 1.75 2.97386 1.75 3.25V5.75C1.75 6.02614 1.97386 6.25 2.25 6.25H15.75C16.0261 6.25 16.25 6.02614 16.25 5.75V3.25C16.25 2.97386 16.0261 2.75 15.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 14.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 9.25H2.25C1.97386 9.25 1.75 9.47386 1.75 9.75V11.25C1.75 11.5261 1.97386 11.75 2.25 11.75H15.75C16.0261 11.75 16.25 11.5261 16.25 11.25V9.75C16.25 9.47386 16.0261 9.25 15.75 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 2.75H2.25C1.97386 2.75 1.75 2.97386 1.75 3.25V5.75C1.75 6.02614 1.97386 6.25 2.25 6.25H15.75C16.0261 6.25 16.25 6.02614 16.25 5.75V3.25C16.25 2.97386 16.0261 2.75 15.75 2.75Z"
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

export default BorderWidth;
