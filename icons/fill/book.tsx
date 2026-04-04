import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Book({
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
          d="M12.4589 0.769009C12.5329 1.17656 12.2625 1.56693 11.855 1.64093L5.83339 2.73431C4.48548 2.96475 3.5 4.13259 3.5 5.5C3.5 5.91421 3.16421 6.25 2.75 6.25C2.33579 6.25 2 5.91421 2 5.5C2 3.40276 3.51059 1.61159 5.57663 1.25641L11.587 0.165066C11.9946 0.0910648 12.3849 0.361459 12.4589 0.769009Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2 5.75C2 4.23079 3.23079 3 4.75 3H14.25C15.2162 3 16 3.78379 16 4.75V15.25C16 16.2162 15.2162 17 14.25 17H4.75C3.23079 17 2 15.7692 2 14.25V5.75ZM4.75 4.5C4.05921 4.5 3.5 5.05921 3.5 5.75V14.25C3.5 14.9408 4.05921 15.5 4.75 15.5H5V4.5H4.75ZM8.75 6.5C8.33579 6.5 8 6.83579 8 7.25V9.25C8 9.66421 8.33579 10 8.75 10H12.25C12.6642 10 13 9.66421 13 9.25V7.25C13 6.83579 12.6642 6.5 12.25 6.5H8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Book;
