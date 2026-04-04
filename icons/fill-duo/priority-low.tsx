import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PriorityLow({
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
          d="M2.21967 5.96967C2.51256 5.67678 2.98744 5.67678 3.28033 5.96967L9 11.6893L14.7197 5.96967C15.0126 5.67678 15.4874 5.67678 15.7803 5.96967C16.0732 6.26256 16.0732 6.73744 15.7803 7.03033L9.53033 13.2803C9.23744 13.5732 8.76256 13.5732 8.46967 13.2803L2.21967 7.03033C1.92678 6.73744 1.92678 6.26256 2.21967 5.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PriorityLow;
