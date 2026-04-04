import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoorOpen({
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
          d="M9.444 0.959996C9.095 0.727996 8.657 0.684996 8.269 0.845996L3.577 2.801C2.923 3.073 2.5 3.708 2.5 4.416V13.583C2.5 14.291 2.923 14.926 3.577 15.198L8.27 17.153C8.425 17.217 8.588 17.249 8.751 17.249C8.994 17.249 9.235 17.178 9.444 17.039C9.792 16.807 10 16.418 10 15.999V2C10 1.581 9.792 1.192 9.444 0.959996Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10 15.5V2.5H13.75C14.7162 2.5 15.5 3.28379 15.5 4.25V13.75C15.5 14.7162 14.7162 15.5 13.75 15.5H10Z"
          fill={fill}
        />
        <path
          d="M6.75 10.25C7.164 10.25 7.5 9.914 7.5 9.5V8.5C7.5 8.086 7.164 7.75 6.75 7.75C6.336 7.75 6 8.086 6 8.5V9.5C6 9.914 6.336 10.25 6.75 10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DoorOpen;
