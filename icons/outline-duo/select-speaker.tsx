import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectSpeaker({
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
          d="M9.56903 11.664L12.438 15.012C12.855 15.499 12.509 16.25 11.869 16.25H6.13103C5.49003 16.25 5.14503 15.498 5.56203 15.012L8.43103 11.664C8.73003 11.315 9.27003 11.315 9.56903 11.664Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 9.5C7.25 8.534 8.034 7.75 9 7.75C9.966 7.75 10.75 8.534 10.75 9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.106 11.889C13.515 11.187 13.75 10.371 13.75 9.5C13.75 6.877 11.623 4.75 9 4.75C6.377 4.75 4.25 6.877 4.25 9.5C4.25 10.371 4.484 11.187 4.894 11.889"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3 14.405C1.906 13.069 1.25 11.361 1.25 9.5C1.25 5.22 4.72 1.75 9 1.75C13.28 1.75 16.75 5.22 16.75 9.5C16.75 11.361 16.094 13.069 15 14.405"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.56903 11.664L12.438 15.012C12.855 15.499 12.509 16.25 11.869 16.25H6.13103C5.49003 16.25 5.14503 15.498 5.56203 15.012L8.43103 11.664C8.73003 11.315 9.27003 11.315 9.56903 11.664Z"
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

export default SelectSpeaker;
