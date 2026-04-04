import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notification({
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
          d="M14.5 5.75C15.743 5.75 16.75 4.743 16.75 3.5C16.75 2.257 15.743 1.25 14.5 1.25C13.257 1.25 12.25 2.257 12.25 3.5C12.25 4.743 13.257 5.75 14.5 5.75Z"
          fill={fill}
        />
        <path
          d="M10.8847 2.5H4.25L4.23221 2.50006C2.72119 2.50962 1.5 3.73672 1.5 5.25V13.75C1.5 15.2692 2.73079 16.5 4.25 16.5H12.75C14.2692 16.5 15.5 15.2692 15.5 13.75V7.11525C15.1817 7.20308 14.8463 7.25 14.5 7.25C12.4286 7.25 10.75 5.57143 10.75 3.5C10.75 3.15368 10.7969 2.81835 10.8847 2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Notification;
