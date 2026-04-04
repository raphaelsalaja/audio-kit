import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone2({
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
          d="M14 5.5V6.75C14 7.16421 13.6642 7.5 13.25 7.5H4.75C4.33579 7.5 4 7.16421 4 6.75V5.5C4 2.73858 6.23858 0.5 9 0.5C11.7614 0.5 14 2.73858 14 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 14.5C9.41421 14.5 9.75 14.8358 9.75 15.25V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V15.25C8.25 14.8358 8.58579 14.5 9 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 9C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H4V11C4 13.7614 6.23858 16 9 16C11.7614 16 14 13.7614 14 11V10.5H15.25C15.6642 10.5 16 10.1642 16 9.75C16 9.33579 15.6642 9 15.25 9H13.25H4.75H2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Microphone2;
