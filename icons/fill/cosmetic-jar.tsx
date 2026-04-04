import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CosmeticJar({
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
          d="M1 9V14C1 15.97 4.019 17 7 17C9.981 17 13 15.97 13 14V9C13 5.061 1 5.061 1 9ZM7 7.5C9.792 7.5 11.5 8.471 11.5 9C11.5 9.529 9.792 10.5 7 10.5C4.208 10.5 2.5 9.529 2.5 9C2.5 8.471 4.208 7.5 7 7.5Z"
          fill={fill}
        />
        <path
          d="M6.3081 3.28548C7.40106 1.90147 9.08842 1 11 1C14.3132 1 17 3.68679 17 7C17 8.31499 16.5742 9.52905 15.8568 10.5161C15.6132 10.8511 15.1442 10.9253 14.8091 10.6818C14.4741 10.4382 14.3999 9.96919 14.6434 9.63414C15.182 8.89314 15.5 7.98561 15.5 7C15.5 4.51521 13.4848 2.5 11 2.5C9.57377 2.5 8.31053 3.17013 7.48529 4.21512C7.22858 4.54019 6.75695 4.59561 6.43188 4.3389C6.10681 4.08218 6.05139 3.61055 6.3081 3.28548Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CosmeticJar;
