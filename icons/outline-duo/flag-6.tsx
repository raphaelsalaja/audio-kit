import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag6({
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
          d="M3.75 3C5.534 2.768 6.823 3.092 7.771 3.625C9.412 4.547 9.641 5.874 11.271 6.75C12.525 7.424 13.931 7.469 15.25 7.25C13.175 9.804 11.547 10.301 10.417 10.25C8.984 10.186 8.058 9.229 6.292 9.458C5.162 9.605 4.297 10.159 3.75 10.593"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 3C5.534 2.768 6.823 3.092 7.771 3.625C9.412 4.547 9.641 5.874 11.271 6.75C12.525 7.424 13.931 7.469 15.25 7.25C13.175 9.804 11.547 10.301 10.417 10.25C8.984 10.186 8.058 9.229 6.292 9.458C5.162 9.605 4.297 10.159 3.75 10.593"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 1.75V16.25"
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

export default Flag6;
