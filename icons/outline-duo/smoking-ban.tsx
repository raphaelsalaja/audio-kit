import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SmokingBan({
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
          d="M7.70887 13.9668C7.89555 14.1484 8.14572 14.25 8.40616 14.25H12.25V10.75L10.9707 10.2129L7.45862 13.7233L7.70887 13.9668Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.24997 10.75H2.75C2.19772 10.75 1.75 11.1977 1.75 11.75V13.25C1.75 13.8023 2.19772 14.25 2.75 14.25H3.74997L7.24997 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.75 14.25H2.75C2.198 14.25 1.75 13.802 1.75 13.25V11.75C1.75 11.198 2.198 10.75 2.75 10.75H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 10.75V14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 2.25V2.5C7.25 4.019 8.481 5.25 10 5.25C10.759 5.25 11.447 5.558 11.945 6.055"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 2.25C11.769 2.25 13.144 2.866 14.139 3.861"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4922 10.75H15.25C15.802 10.75 16.25 11.198 16.25 11.75V13.25C16.25 13.802 15.802 14.25 15.25 14.25H7.99219"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.632 6.61029C15.7094 6.97789 15.75 7.35889 15.75 7.74999V8.24999"
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

export default SmokingBan;
