import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanFlatten({
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
          d="M10.4267 11.4873L14.4267 15.4873C14.7196 15.7802 15.1945 15.7802 15.4874 15.4873C15.8031 15.1716 16 14.7331 16 14.25V7.75C16 6.78379 15.2162 6 14.25 6H12V10.25C12 10.7331 11.8031 11.1716 11.4874 11.4873C11.1945 11.7802 10.7196 11.7802 10.4267 11.4873Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 6V10.25C12 10.7331 11.8031 11.1716 11.4873 11.4873C11.1944 11.7802 10.7196 11.7802 10.4267 11.4873L6.50973 7.57041C6.3709 7.43004 6.29297 7.24054 6.29297 7.043C6.29297 6.84409 6.37199 6.65332 6.51264 6.51267C6.82839 6.19692 7.26686 6 7.74997 6H12Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M3.74997 2C3.26686 2 2.82839 2.19692 2.51264 2.51267C2.37199 2.65332 2.29297 2.84409 2.29297 3.043C2.29297 3.24191 2.37199 3.43268 2.51264 3.57333L6.50972 7.5704C6.37089 7.43003 6.29297 7.24053 6.29297 7.043C6.29297 6.84409 6.37199 6.65332 6.51264 6.51267C6.82839 6.19692 7.26686 6 7.74997 6H12V3.75C12 2.78379 11.2162 2 10.25 2H3.74997Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.51267 2.51263C2.19692 2.82838 2 3.26685 2 3.74996V10.25C2 11.2162 2.78379 12 3.75 12H6V14.25C6 15.2162 6.78379 16 7.75 16H14.25C14.7331 16 15.1716 15.8031 15.4873 15.4873L2.51267 2.51263Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BooleanFlatten;
