import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2({
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
          d="M15 2C14.448 2 14 2.448 14 3V8C14 8.276 13.776 8.5 13.5 8.5C13.224 8.5 13 8.276 13 8V2.25C13 1.698 12.552 1.25 12 1.25C11.448 1.25 11 1.698 11 2.25V8C11 8.276 10.776 8.5 10.5 8.5C10.224 8.5 9.99998 8.276 9.99998 8V1.5C9.99998 0.948 9.55198 0.5 8.99998 0.5C8.44798 0.5 7.99998 0.948 7.99998 1.5V8C7.99998 8.276 7.77598 8.5 7.49998 8.5C7.22398 8.5 6.99998 8.276 6.99998 8V2.25C6.99998 1.698 6.55198 1.25 5.99998 1.25C5.44798 1.25 4.99998 1.698 4.99998 2.25V11.423L3.21798 9.151C2.79198 8.608 2.00298 8.516 1.46298 8.94C0.922982 9.364 0.858982 10.071 1.25198 10.695L3.80298 14.619C4.54098 15.754 6.01198 17.001 8.99998 17.001H12C14.209 17.001 16 15.21 16 13.001V3C16 2.448 15.552 2 15 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Hand2;
