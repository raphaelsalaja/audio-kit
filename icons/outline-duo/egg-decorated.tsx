import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EggDecorated({
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
          d="M3.21879 10.2027L6.41687 8.33066L9.00253 10.315L11.6183 8.36073L14.7837 10.26C14.7945 10.4961 14.8 10.7352 14.8 10.977C14.8 14.272 11.847 16.25 9 16.25C6.153 16.25 3.2 14.273 3.2 10.977C3.2 10.7156 3.20634 10.4574 3.21879 10.2027Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.214 10.318L6.422 8.341L9 10.318L11.578 8.341L14.786 10.318"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.2 10.977C3.2 5.705 5.778 1.75 9 1.75C12.195 1.75 14.8 5.705 14.8 10.977C14.8 14.272 11.847 16.25 9 16.25C6.153 16.25 3.2 14.273 3.2 10.977Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EggDecorated;
