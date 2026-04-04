import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeightMax({
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
          d="M16.5 15.75C16.5 16.164 16.164 16.5 15.75 16.5H10.5C10.086 16.5 9.75 16.164 9.75 15.75C9.75 15.336 10.086 15 10.5 15H15.75C16.164 15 16.5 15.336 16.5 15.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.5 2.25C16.5 2.664 16.164 3 15.75 3H10.5C10.086 3 9.75 2.664 9.75 2.25C9.75 1.836 10.086 1.5 10.5 1.5H15.75C16.164 1.5 16.5 1.836 16.5 2.25Z"
          fill={secondaryfill}
        />
        <path
          d="M8.5 3.25V14.75C8.5 15.715 7.715 16.5 6.75 16.5H3.75C2.785 16.5 2 15.715 2 14.75V13.5H3.25C3.66421 13.5 4 13.1642 4 12.75C4 12.3358 3.66421 12 3.25 12H2V11H4.25C4.66421 11 5 10.6642 5 10.25C5 9.83579 4.66421 9.5 4.25 9.5H2V8.5H3.25C3.66421 8.5 4 8.16421 4 7.75C4 7.33579 3.66421 7 3.25 7H2V6H4.25C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5H2V3.25C2 2.285 2.785 1.5 3.75 1.5H6.75C7.715 1.5 8.5 2.285 8.5 3.25Z"
          fill={fill}
        />
        <path
          d="M13.7803 4.71967C13.4874 4.42678 13.0126 4.42678 12.7197 4.71967L10.7197 6.71967C10.4268 7.01256 10.4268 7.48744 10.7197 7.78033C11.0126 8.07322 11.4874 8.07322 11.7803 7.78033L12.5 7.06066V12.75C12.5 13.1642 12.8358 13.5 13.25 13.5C13.6642 13.5 14 13.1642 14 12.75V7.06066L14.7197 7.78033C15.0126 8.07322 15.4874 8.07322 15.7803 7.78033C16.0732 7.48744 16.0732 7.01256 15.7803 6.71967L13.7803 4.71967Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HeightMax;
