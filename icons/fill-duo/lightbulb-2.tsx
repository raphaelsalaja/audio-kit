import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lightbulb2({
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
          d="M7.76863 1.12885C11.4751 0.354749 14.75 3.16999 14.75 6.74999C14.75 8.82737 13.6463 10.6414 12 11.6506V13L5.99996 13V11.6505C4.0676 10.4651 2.89153 8.17058 3.35019 5.66114L3.35049 5.65951C3.76531 3.41782 5.59416 1.58298 7.76863 1.12885Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.46967 5.71967C6.76256 5.42678 7.23744 5.42678 7.53033 5.71967L9 7.18934L10.4697 5.71967C10.7626 5.42678 11.2374 5.42678 11.5303 5.71967C11.8232 6.01256 11.8232 6.48744 11.5303 6.78033L9.75 8.56066V12H12V14.25C12 15.7692 10.7692 17 9.25 17H8.75C7.23079 17 6 15.7692 6 14.25V12H8.25V8.56066L6.46967 6.78033C6.17678 6.48744 6.17678 6.01256 6.46967 5.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Lightbulb2;
