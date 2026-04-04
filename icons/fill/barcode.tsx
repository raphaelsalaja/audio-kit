import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Barcode({
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
          d="M4.50266 3.75C4.50266 3.33579 4.83844 3 5.25266 3H5.75266C6.16687 3 6.50266 3.33579 6.50266 3.75V12.25C6.50266 12.6642 6.16687 13 5.75266 13H5.25266C4.83844 13 4.50266 12.6642 4.50266 12.25V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.0027 3.75C11.0027 3.33579 11.3385 3 11.7527 3H12.7527C13.1669 3 13.5027 3.33579 13.5027 3.75V12.25C13.5027 12.6642 13.1669 13 12.7527 13H11.7527C11.3385 13 11.0027 12.6642 11.0027 12.25V3.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M8.75266 3C9.16687 3 9.50266 3.33579 9.50266 3.75V14.25C9.50266 14.6642 9.16687 15 8.75266 15C8.33844 15 8.00266 14.6642 8.00266 14.25V3.75C8.00266 3.33579 8.33844 3 8.75266 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.7527 3C16.1669 3 16.5027 3.33579 16.5027 3.75V14.25C16.5027 14.6642 16.1669 15 15.7527 15C15.3385 15 15.0027 14.6642 15.0027 14.25V3.75C15.0027 3.33579 15.3385 3 15.7527 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25266 3C2.66687 3 3.00266 3.33579 3.00266 3.75V14.25C3.00266 14.6642 2.66687 15 2.25266 15C1.83844 15 1.50266 14.6642 1.50266 14.25V3.75C1.50266 3.33579 1.83844 3 2.25266 3Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Barcode;
