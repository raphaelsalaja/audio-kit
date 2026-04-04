import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CornerRadius({
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
          d="M8.75 3.5C5.85049 3.5 3.5 5.85024 3.5 8.75V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V8.75C2 5.02176 5.02211 2 8.75 2H15.25C15.6642 2 16 2.33579 16 2.75C16 3.16421 15.6642 3.5 15.25 3.5H8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CornerRadius;
