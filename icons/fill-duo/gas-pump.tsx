import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GasPump({
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
          d="M3 15.75V4.25C3 2.7334 4.2334 1.5 5.75 1.5H10.75C12.2666 1.5 13.5 2.7334 13.5 4.25V15.75H3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 16.5H2C1.5859 16.5 1.25 16.1641 1.25 15.75C1.25 15.3359 1.5859 15 2 15H14.5C14.9141 15 15.25 15.3359 15.25 15.75C15.25 16.1641 14.9141 16.5 14.5 16.5Z"
          fill={fill}
        />
        <path
          d="M18 7.00491C18 6.71241 17.9258 6.42291 17.7861 6.16751L16.4082 3.64111C16.2109 3.27731 15.7544 3.14311 15.3911 3.34181C15.0273 3.54001 14.8931 3.99561 15.0918 4.35891L16.1354 6.27321C15.778 6.33031 15.5 6.62651 15.5 7.00001V8.75001C15.5 9.16411 15.8359 9.50001 16.25 9.50001H16.5149L16.521 10.521C16.521 11.3481 15.8481 12.021 15.021 12.021C14.1939 12.021 13.521 11.3481 13.521 10.521C13.521 10.4841 13.5051 10.4526 13.5 10.417V13.0923C13.9477 13.3582 14.4636 13.521 15.021 13.521C16.6753 13.521 18.021 12.1753 18.021 10.5166L18 7.00491Z"
          fill={fill}
        />
        <path
          d="M4.5 8.25V4.25C4.5 3.5596 5.0596 3 5.75 3H10.75C11.4404 3 12 3.5596 12 4.25V8.25C12 8.6642 11.6642 9 11.25 9H5.25C4.8358 9 4.5 8.6642 4.5 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GasPump;
