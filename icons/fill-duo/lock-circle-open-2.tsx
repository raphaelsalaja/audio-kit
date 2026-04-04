import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockCircleOpen2({
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
          d="M4 11.5C4 8.46235 6.46283 6 9.5 6C12.5372 6 15 8.46235 15 11.5C15 14.5377 12.5372 17 9.5 17C6.46283 17 4 14.5377 4 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.5 10.25C9.91421 10.25 10.25 10.5858 10.25 11V12C10.25 12.4142 9.91421 12.75 9.5 12.75C9.08579 12.75 8.75 12.4142 8.75 12V11C8.75 10.5858 9.08579 10.25 9.5 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 1C2.06679 1 0.5 2.56679 0.5 4.5V6.25C0.5 6.66421 0.835786 7 1.25 7C1.66421 7 2 6.66421 2 6.25V4.5C2 3.39521 2.89521 2.5 4 2.5C5.10479 2.5 6 3.39521 6 4.5V7.25727C6.44632 6.88866 6.95178 6.58911 7.5 6.37499V4.5C7.5 2.56679 5.93321 1 4 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockCircleOpen2;
