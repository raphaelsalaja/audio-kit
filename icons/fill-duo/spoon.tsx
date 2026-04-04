import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spoon({
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
          d="M9 10C9.41421 10 9.75 10.3358 9.75 10.75V16C9.75 16.4142 9.41421 16.75 9 16.75C8.58579 16.75 8.25 16.4142 8.25 16V10.75C8.25 10.3358 8.58579 10 9 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.09986 2.83414C6.79326 1.90073 7.81045 1.25 9 1.25C10.1895 1.25 11.2067 1.90073 11.9001 2.83414C12.5936 3.76759 13 5.02193 13 6.375C13 7.72807 12.5936 8.98241 11.9001 9.91586C11.2067 10.8493 10.1895 11.5 9 11.5C7.81045 11.5 6.79326 10.8493 6.09986 9.91586C5.40643 8.98241 5 7.72807 5 6.375C5 5.02193 5.40643 3.76759 6.09986 2.83414Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Spoon;
