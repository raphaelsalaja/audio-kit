import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BedDouble({
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
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H14.25C15.2162 2 16 2.78379 16 3.75V10.75C16 11.1642 15.6642 11.5 15.25 11.5H2.75C2.33579 11.5 2 11.1642 2 10.75V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M17 11.75C17 10.2308 15.7692 9 14.25 9H3.75C2.23079 9 1 10.2308 1 11.75V15.25C1 15.6642 1.33579 16 1.75 16C2.16421 16 2.5 15.6642 2.5 15.25V14H15.5V15.25C15.5 15.6642 15.8358 16 16.25 16C16.6642 16 17 15.6642 17 15.25V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 5.25C8.25 4.83579 7.91421 4.5 7.5 4.5H5.75C5.336 4.5 5 4.836 5 5.25V6.75C5 7.16421 5.33579 7.5 5.75 7.5H7.5C7.91421 7.5 8.25 7.16421 8.25 6.75V5.25Z"
          fill={fill}
        />
        <path
          d="M12.25 4.5H10.5C10.0858 4.5 9.75 4.83579 9.75 5.25V6.75C9.75 7.16421 10.0858 7.5 10.5 7.5H12.25C12.6642 7.5 13 7.16421 13 6.75V5.25C13 4.836 12.664 4.5 12.25 4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BedDouble;
