import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone2Slash({
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
          d="M13.8231 4.17692C13.243 2.05756 11.3034 0.5 9 0.5C6.23858 0.5 4 2.73858 4 5.5V6.75C4 7.16421 4.33579 7.5 4.75 7.5H10.5L13.8231 4.17692Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.25 15.9441C7.45911 15.8252 6.72888 15.5209 6.10491 15.0771L12.182 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H14V11C14 13.5065 12.1556 15.5823 9.75 15.9441V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V15.9441Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.99999 9H2.75C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H4V11C4 11.8664 4.22038 12.6814 4.60813 13.3919L8.99999 9Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Microphone2Slash;
