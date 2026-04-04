import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Album({
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
          d="M3.44799 4.75H14.552C15.176 4.75 15.647 5.315 15.536 5.929L13.9 14.929C13.814 15.404 13.399 15.75 12.916 15.75H5.08499C4.60199 15.75 4.18799 15.404 4.10099 14.929L2.46399 5.929C2.35199 5.315 2.82399 4.75 3.44799 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 1.75H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.44799 4.75H14.552C15.176 4.75 15.647 5.315 15.536 5.929L13.9 14.929C13.814 15.404 13.399 15.75 12.916 15.75H5.08499C4.60199 15.75 4.18799 15.404 4.10099 14.929L2.46399 5.929C2.35199 5.315 2.82399 4.75 3.44799 4.75Z"
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

export default Album;
