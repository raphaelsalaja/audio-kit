import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VShapedArrowRight({
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
          d="M8.12001 2.32795C7.88801 1.98595 7.42102 1.89495 7.07802 2.12995C6.73502 2.36295 6.64602 2.82894 6.88002 3.17194L10.843 8.99994L6.88002 14.8279C6.64702 15.1709 6.73502 15.6369 7.07802 15.8699C7.20702 15.9579 7.35401 15.9999 7.49901 15.9999C7.73901 15.9999 7.97501 15.8849 8.12001 15.6719L12.37 9.42194C12.543 9.16694 12.543 8.83295 12.37 8.57795L8.12001 2.32795Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VShapedArrowRight;
