import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Skateboarding({
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
          d="M12.5 4.25C13.3284 4.25 14 3.57843 14 2.75C14 1.92157 13.3284 1.25 12.5 1.25C11.6716 1.25 11 1.92157 11 2.75C11 3.57843 11.6716 4.25 12.5 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.5 4.25C13.3284 4.25 14 3.57843 14 2.75C14 1.92157 13.3284 1.25 12.5 1.25C11.6716 1.25 11 1.92157 11 2.75C11 3.57843 11.6716 4.25 12.5 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 17.5C9.16421 17.5 9.5 17.1642 9.5 16.75C9.5 16.3358 9.16421 16 8.75 16C8.33579 16 8 16.3358 8 16.75C8 17.1642 8.33579 17.5 8.75 17.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 17.5C13.1642 17.5 13.5 17.1642 13.5 16.75C13.5 16.3358 13.1642 16 12.75 16C12.3358 16 12 16.3358 12 16.75C12 17.1642 12.3358 17.5 12.75 17.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.25 5.25H9.182C10.425 5.25 11.128 6.675 10.373 7.661L8.67 9.884"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.899 11.23L5.511 11.84C5.346 12.099 5.072 12.268 4.767 12.298L2.75 12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.11901 5.25L7.46301 7.414C6.85601 8.207 7.18001 9.361 8.11101 9.723L10.113 10.501C10.497 10.65 10.751 11.021 10.751 11.433V14.249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.235 13.894C7.418 14.112 7.693 14.25 8 14.25H14.25"
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

export default Skateboarding;
