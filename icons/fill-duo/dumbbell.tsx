import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dumbbell({
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
          d="M6 4.25V13.75C6 14.7165 5.2165 15.5 4.25 15.5C3.2835 15.5 2.5 14.7165 2.5 13.75V4.25C2.5 3.2835 3.2835 2.5 4.25 2.5C5.2165 2.5 6 3.2835 6 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.5 4.25V13.75C15.5 14.7165 14.7165 15.5 13.75 15.5C12.7835 15.5 12 14.7165 12 13.75V4.25C12 3.2835 12.7835 2.5 13.75 2.5C14.7165 2.5 15.5 3.2835 15.5 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.5 8.25H1.5C1.08579 8.25 0.75 8.58579 0.75 9C0.75 9.41421 1.08579 9.75 1.5 9.75H2.5V8.25Z"
          fill={fill}
        />
        <path
          d="M15.5 9.75H16.5C16.9142 9.75 17.25 9.41421 17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25H15.5V9.75Z"
          fill={fill}
        />
        <path d="M12 8.25H6V9.75H12V8.25Z" fill={fill} />
      </g>
    </svg>
  );
}

export default Dumbbell;
