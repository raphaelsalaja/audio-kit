import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinMinus({
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
          d="M9 1.5C5.27195 1.5 2.25 4.52392 2.25 8.25C2.25 10.7465 3.47115 12.9149 4.83989 14.4916C5.52887 15.2854 6.27063 15.9477 6.9499 16.4477C7.61652 16.9385 8.2659 17.3047 8.77415 17.4652C8.92114 17.5116 9.07886 17.5116 9.22585 17.4652C9.7341 17.3047 10.3835 16.9385 11.0501 16.4477C11.7294 15.9477 12.4711 15.2854 13.1601 14.4916C14.5289 12.9149 15.75 10.7465 15.75 8.25C15.75 4.52392 12.7281 1.5 9 1.5ZM6.5 7.5C6.08579 7.5 5.75 7.83579 5.75 8.25C5.75 8.66421 6.08579 9 6.5 9H11.5C11.9142 9 12.25 8.66421 12.25 8.25C12.25 7.83579 11.9142 7.5 11.5 7.5H6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinMinus;
