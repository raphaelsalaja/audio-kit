import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDown({
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
          d="M13.993 8H12V2.75C12 1.785 11.215 1 10.25 1H7.75002C6.78502 1 6.00002 1.785 6.00002 2.75V8H4.00702C3.52802 8 3.10001 8.266 2.88701 8.695C2.67501 9.123 2.72202 9.626 3.01102 10.006L8.00402 16.587C8.24302 16.901 8.60602 17.081 9.00002 17.081C9.39402 17.081 9.75702 16.901 9.99602 16.586L14.989 10.005C15.278 9.625 15.325 9.122 15.113 8.694C14.9 8.265 14.471 8 13.993 8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDown;
