import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewMinusSign({
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
          d="M9.49996 14.25C9.49996 13.0093 10.5093 12 11.75 12H15.5359C15.9833 11.4819 16.3391 10.9578 16.6079 10.4829C17.1343 9.5547 17.1343 8.4458 16.6084 7.5171C15.5469 5.6436 13.1475 3 8.99996 3C4.85246 3 2.45305 5.6436 1.39205 7.5171C0.865653 8.4458 0.865657 9.5542 1.39156 10.4829C2.45306 12.3564 4.85246 15 8.99996 15C9.21576 15 9.42396 14.9888 9.63036 14.9749C9.55176 14.7461 9.49996 14.5049 9.49996 14.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 12C10.6568 12 12 10.657 12 9C12 7.343 10.6568 6 9 6C7.3432 6 6 7.343 6 9C6 10.657 7.3432 12 9 12Z"
          fill={fill}
        />
        <path
          d="M16.75 13.5H11.75C11.336 13.5 11 13.836 11 14.25C11 14.664 11.336 15 11.75 15H16.75C17.164 15 17.5 14.664 17.5 14.25C17.5 13.836 17.164 13.5 16.75 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ViewMinusSign;
