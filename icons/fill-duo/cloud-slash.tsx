import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudSlash({
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
          d="M13.4709 4.52914C12.557 3.01545 10.9042 2 9 2C6.10079 2 3.75 4.35079 3.75 7.25C3.75 7.38292 3.75589 7.51318 3.7666 7.64076C2.17545 8.07117 1 9.51787 1 11.25C1 12.8046 1.94576 14.1381 3.29336 14.7066C6.69979 11.3002 10.1192 7.88081 13.4709 4.52914Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.6144 6.56757L6.18195 15H12.5C14.9852 15 17 12.9852 17 10.5C17 8.9614 16.2263 7.61584 15.0532 6.80932C14.9147 6.71411 14.7676 6.63366 14.6144 6.56757Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CloudSlash;
