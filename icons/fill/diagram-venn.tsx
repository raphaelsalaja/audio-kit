import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiagramVenn({
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
          d="M0.5 8.75C0.5 5.43596 3.18631 2.75 6.5 2.75C7.39221 2.75 8.23894 2.94472 9 3.29399C6.93448 4.24193 5.5 6.32827 5.5 8.75C5.5 11.1717 6.93448 13.2581 9 14.206C8.23894 14.5553 7.39221 14.75 6.5 14.75C3.18631 14.75 0.5 12.064 0.5 8.75Z"
          fill={fill}
        />
        <path
          d="M11.5 2.75C14.8137 2.75 17.5 5.43596 17.5 8.75C17.5 12.064 14.8137 14.75 11.5 14.75C10.6078 14.75 9.76106 14.5553 9 14.206C11.0655 13.2581 12.5 11.1717 12.5 8.75C12.5 6.32827 11.0655 4.24193 9 3.29399C9.76106 2.94472 10.6078 2.75 11.5 2.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default DiagramVenn;
