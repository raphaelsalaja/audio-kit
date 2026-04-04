import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseLock({
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
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1042 6.13931 15.25 6.43438 15.25 6.74619V8.36374C15.25 8.45388 15.1708 8.61378 15.0829 8.59376C14.815 8.53275 14.5363 8.5001 14.25 8.5001C12.2613 8.5001 10.6336 10.049 10.5078 12.006C9.60138 12.5826 9 13.5962 9 14.7501V16.2501H4.75C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.75V12.25C12.75 11.422 13.422 10.75 14.25 10.75C15.078 10.75 15.75 11.422 15.75 12.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.8757V6.747C15.25 6.435 15.104 6.14009 14.855 5.95089L9.605 1.9609C9.247 1.6889 8.752 1.6889 8.395 1.9609L3.145 5.9499C2.896 6.1389 2.75 6.434 2.75 6.746V14.2499C2.75 15.3539 3.645 16.2499 4.75 16.2499H8.25"
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

export default HouseLock;
