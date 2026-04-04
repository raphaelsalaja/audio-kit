import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KnifeSpoon({
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
          d="M12.25 9C13.7 9 14.875 7.489 14.875 5.625C14.875 3.761 13.7 2.25 12.25 2.25C10.8 2.25 9.625 3.761 9.625 5.625C9.625 7.489 10.8 9 12.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.25C5.767 2.968 5.25101 3.871 4.81201 4.958C3.99501 6.987 3.784 8.824 3.75 10.105L6.25 12.25V2.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 9V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9C13.7 9 14.875 7.489 14.875 5.625C14.875 3.761 13.7 2.25 12.25 2.25C10.8 2.25 9.625 3.761 9.625 5.625C9.625 7.489 10.8 9 12.25 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 15.75V2.25C5.767 2.968 5.25101 3.871 4.81201 4.958C3.99501 6.987 3.784 8.824 3.75 10.105L6.25 12.25"
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

export default KnifeSpoon;
