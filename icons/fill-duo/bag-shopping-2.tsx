import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagShopping2({
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
          d="M2.30662 3.94585C2.46195 2.55332 3.63881 1.5 5.04 1.5H12.96C14.3612 1.5 15.538 2.55333 15.6934 3.94585L16.7494 13.446C16.9308 15.0757 15.6546 16.5 14.016 16.5H3.98498C2.34568 16.5 1.0715 15.0753 1.25154 13.4466L2.30662 3.94585Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.25 4.5C6.66421 4.5 7 4.83579 7 5.25C7 6.35479 7.89521 7.25 9 7.25C10.1048 7.25 11 6.35479 11 5.25C11 4.83579 11.3358 4.5 11.75 4.5C12.1642 4.5 12.5 4.83579 12.5 5.25C12.5 7.18321 10.9332 8.75 9 8.75C7.06679 8.75 5.5 7.18321 5.5 5.25C5.5 4.83579 5.83579 4.5 6.25 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BagShopping2;
