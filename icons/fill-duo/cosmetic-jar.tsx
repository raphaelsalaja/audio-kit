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
          d="M5.05444 6.18836C8.53694 5.66057 13 6.59778 13 9V12.6586C15.3304 11.8349 17 9.61244 17 7C17 3.68629 14.3137 1 11 1C7.96157 1 5.45064 3.25853 5.05444 6.18836Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CosmeticJar;
