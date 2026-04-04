import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinPlus({
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
          d="M2.25 8.25C2.25 4.52392 5.27195 1.5 9 1.5C12.7281 1.5 15.75 4.52392 15.75 8.25C15.75 10.7465 14.5289 12.9149 13.1601 14.4916C12.4711 15.2854 11.7294 15.9477 11.0501 16.4477C10.3835 16.9385 9.7341 17.3047 9.22585 17.4652C9.07886 17.5116 8.92114 17.5116 8.77415 17.4652C8.2659 17.3047 7.61652 16.9385 6.9499 16.4477C6.27063 15.9477 5.52887 15.2854 4.83989 14.4916C3.47115 12.9149 2.25 10.7465 2.25 8.25ZM9 5C9.41421 5 9.75 5.33579 9.75 5.75V7.5H11.5C11.9142 7.5 12.25 7.83579 12.25 8.25C12.25 8.66421 11.9142 9 11.5 9H9.75V10.75C9.75 11.1642 9.41421 11.5 9 11.5C8.58579 11.5 8.25 11.1642 8.25 10.75V9H6.5C6.08579 9 5.75 8.66421 5.75 8.25C5.75 7.83579 6.08579 7.5 6.5 7.5H8.25V5.75C8.25 5.33579 8.58579 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinPlus;
