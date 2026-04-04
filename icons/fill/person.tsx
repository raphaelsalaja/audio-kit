import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Person({
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
          d="M9 4.5C10.2426 4.5 11.25 3.49264 11.25 2.25C11.25 1.00736 10.2426 0 9 0C7.75736 0 6.75 1.00736 6.75 2.25C6.75 3.49264 7.75736 4.5 9 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M11.9873 6.84691C11.7863 6.20891 11.2503 5.74691 10.5873 5.64091C9.43532 5.45891 8.54471 5.46984 7.39771 5.65184C6.73371 5.75584 6.19771 6.21384 5.99771 6.84684L4.68854 11.0389C4.58554 11.3629 4.61754 11.7059 4.77754 12.0029C4.93854 12.3019 5.20754 12.5179 5.53554 12.6119L6.27754 12.8239L6.45354 16.3369C6.49954 17.2699 7.26754 17.9999 8.20154 17.9999H9.79954C10.7335 17.9999 11.5005 17.2699 11.5475 16.3369L11.7235 12.8229L12.4625 12.6119C12.7905 12.5189 13.0595 12.3019 13.2205 12.0019C13.3825 11.7019 13.4145 11.3579 13.3115 11.0329L11.9873 6.84691Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Person;
